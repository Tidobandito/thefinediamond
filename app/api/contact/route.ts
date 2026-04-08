import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    ciphers: "SSLv3",
    rejectUnauthorized: true,
  },
});

export async function POST(req: NextRequest) {
  try {
    const { name, phone, email, stoneInterest, budgetRange, message } =
      await req.json();

    // Server-side validation
    if (!name || !phone || !email || !stoneInterest) {
      return NextResponse.json(
        { error: "Required fields missing." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    // 1. Notify Matt
    await transporter.sendMail({
      from: `"The Fine Diamond Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `New Inquiry — ${stoneInterest} — ${name}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto;
                    border: 1px solid #c9a84c; padding: 32px; color: #1a1a2e;">
          <h2 style="color: #c9a84c; margin-top: 0; letter-spacing: 2px;">
            NEW INQUIRY
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; font-weight: bold; width: 140px;">Name</td>
                <td style="padding: 8px 0;">${name}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Phone</td>
                <td style="padding: 8px 0;">${phone}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Email</td>
                <td style="padding: 8px 0;">
                  <a href="mailto:${email}" style="color: #c9a84c;">${email}</a>
                </td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Stone Interest</td>
                <td style="padding: 8px 0;">${stoneInterest}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Budget Range</td>
                <td style="padding: 8px 0;">${budgetRange || "Not specified"}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold; vertical-align: top;">
                  Message</td>
                <td style="padding: 8px 0;">${message || "(none)"}</td></tr>
          </table>
          <hr style="border-color: #c9a84c; margin: 24px 0;" />
          <p style="font-size: 12px; color: #999;">
            Sent from thefinediamond.com contact form
          </p>
        </div>
      `,
    });

    // 2. Confirm to visitor
    await transporter.sendMail({
      from: `"The Fine Diamond" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "We received your inquiry — The Fine Diamond",
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto;
                    background: #ffffff; padding: 40px; color: #1a1a2e;">
          <h1 style="font-size: 22px; letter-spacing: 3px; color: #1a1a2e;
                     border-bottom: 1px solid #c9a84c; padding-bottom: 16px;">
            THE FINE DIAMOND
          </h1>
          <p style="font-size: 16px; line-height: 1.7;">Dear ${name},</p>
          <p style="font-size: 16px; line-height: 1.7;">
            Thank you for your inquiry. We have received your message regarding
            <strong>${stoneInterest}</strong> and Matt will be in touch
            within 24 hours.
          </p>
          <p style="font-size: 16px; line-height: 1.7;">
            If you need to reach us immediately:
          </p>
          <p style="font-size: 16px; line-height: 1.7;">
            <strong>Phone:</strong> 786-230-1333<br/>
            <strong>Email:</strong> matt@thefinediamond.com<br/>
            <strong>Address:</strong> 3726 S. Las Vegas Blvd., Las Vegas, NV 89158
          </p>
          <p style="font-size: 16px; line-height: 1.7; margin-top: 32px;">
            Warm regards,<br/>
            <strong>The Fine Diamond</strong>
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json(
      { error: "Failed to send email." },
      { status: 500 }
    );
  }
}
