import { RequestHandler } from "express";
import { z } from "zod";

// Validation schema for contact form
const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name is too long"),
  email: z.string().email("Please enter a valid email address"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters long")
    .max(1000, "Message is too long"),
});

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
}

export const handleContact: RequestHandler = async (req, res) => {
  try {
    // Validate the request body
    const validationResult = contactFormSchema.safeParse(req.body);

    if (!validationResult.success) {
      return res.status(400).json({
        success: false,
        message: "Invalid form data",
        errors: validationResult.error.errors,
      });
    }

    const { name, email, message } = validationResult.data;

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Add to CRM system
    // 4. Log the contact attempt

    // For now, we'll just log the contact attempt and simulate success
    console.log("Contact form submission:", {
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
      ip: req.ip,
    });

    // In a real implementation, you might want to:

    // Send email notification (using nodemailer, sendgrid, etc.)
    // await sendEmailNotification({
    //   to: 'info@dumbpotato.com',
    //   subject: `New contact form submission from ${name}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${message}</p>
    //     <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
    //   `
    // });

    // Save to database
    // await db.contactSubmissions.create({
    //   name,
    //   email,
    //   message,
    //   createdAt: new Date()
    // });

    const response: ContactResponse = {
      success: true,
      message:
        "Thank you for your message! We'll get back to you within 24 hours.",
    };

    res.status(200).json(response);
  } catch (error) {
    console.error("Error handling contact form submission:", error);

    const response: ContactResponse = {
      success: false,
      message:
        "Sorry, something went wrong. Please try again later or contact us directly.",
    };

    res.status(500).json(response);
  }
};

// Optional: Rate limiting helper
export const createContactRateLimit = () => {
  const submissions = new Map<string, number[]>();
  const MAX_SUBMISSIONS_PER_HOUR = 5;
  const HOUR_IN_MS = 60 * 60 * 1000;

  return (req: any, res: any, next: any) => {
    const ip = req.ip || req.connection.remoteAddress;
    const now = Date.now();

    if (!submissions.has(ip)) {
      submissions.set(ip, []);
    }

    const userSubmissions = submissions.get(ip)!;

    // Remove submissions older than 1 hour
    const recentSubmissions = userSubmissions.filter(
      (time) => now - time < HOUR_IN_MS,
    );
    submissions.set(ip, recentSubmissions);

    if (recentSubmissions.length >= MAX_SUBMISSIONS_PER_HOUR) {
      return res.status(429).json({
        success: false,
        message: "Too many submissions. Please try again later.",
      });
    }

    // Add current submission
    recentSubmissions.push(now);
    submissions.set(ip, recentSubmissions);

    next();
  };
};
