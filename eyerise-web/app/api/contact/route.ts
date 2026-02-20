import { NextResponse } from "next/server";
import { Resend } from "resend";

const RECIPIENT_EMAIL = "eyerise.app@gmail.com";
const FROM_EMAIL = "EyeRise Contact <onboarding@resend.dev>";
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not set. Add it to .env.local to receive contact emails.");
      return NextResponse.json(
        { error: "Email service is not configured. Please try again later." },
        { status: 503 }
      );
    }

    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Name, email, subject, and message are required." },
        { status: 400 }
      );
    }

    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const resend = new Resend(apiKey);
    const emailSubject = subject.trim();
    const textBody = `From: ${name.trim()} <${email.trim()}>\n\nSubject: ${emailSubject}\n\nMessage:\n${message.trim()}`;
    const htmlBody = `<p><strong>From:</strong> ${name.trim()} &lt;${email.trim()}&gt;</p><p><strong>Subject:</strong> ${emailSubject}</p><hr><p>${message.trim().replace(/\n/g, "<br>")}</p>`;

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: RECIPIENT_EMAIL,
      subject: emailSubject,
      text: textBody,
      html: htmlBody,
      replyTo: email.trim(),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Something went wrong. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
