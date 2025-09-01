import { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    console.log("Request received:", req.method, req.body);

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY missing!");
      return res.status(500).json({ error: "RESEND_API_KEY missing" });
    }

    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method Not Allowed" });
    }

    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    console.log("Parsed body:", body);

    const { name, email, message } = body;

    if (!email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Test Resend API call
    const result = await resend.emails.send({
      from: "Dumb Potato <onboarding@resend.dev>",
      to: "info@dumbpotato.com",
      subject: `Test message from ${name || "Anonymous"}`,
      html: `<p>${message}</p>`,
    });

    console.log("Resend result:", result);
    return res.status(200).json({ success: true, result });
  } catch (err: any) {
    console.error("Server function error:", err);
    return res.status(500).json({ error: err.message || "Internal server error" });
  }
}
