import { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

// Environment variables
const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = parseInt(process.env.SMTP_PORT || "587");
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const TO_EMAIL_PROD = process.env.TO_EMAIL || "info@dumbpotato.com";
const TO_EMAIL_TEST = process.env.TO_EMAIL_TEST || "raj@dumbpotato.com"; // for development/testing

// Create Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: SMTP_PORT === 465, // true for port 465, false otherwise
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
});
 
export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method Not Allowed' });
    }

    // Parse JSON body safely
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const { name, email, message } = body;

    // Validate required fields
    const errors: string[] = [];
    if (!email?.trim()) errors.push("Email is required");
    if (!message?.trim()) errors.push("Message is required");
    if (message && message.trim().length < 10) errors.push("Message must be at least 10 characters");
    if (errors.length > 0) return res.status(400).json({ error: errors.join(", ") });

    // Determine recipient: test vs production
    const toEmail = process.env.NODE_ENV === "development" ? TO_EMAIL_TEST : TO_EMAIL_PROD;

    // Prepare email
    const mailOptions = {
      from: `"${name || "Anonymous"}" <${SMTP_USER}>`,
      to: toEmail,
      subject: `New Contact Form Submission from ${name || "Anonymous"}`,
      html: `
        <h2>New Message from Dumb Potato Website</h2>
        <p><strong>Name:</strong> ${name || 'N/A'}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Success response
    return res.status(200).json({ success: true, message: "Email sent successfully" });

  } catch (err: any) {
    console.error("Contact form error:", err);
    return res.status(500).json({ error: err.message || "Internal server error" });
  }
}
