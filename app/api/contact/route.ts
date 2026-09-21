import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = {
  fullName?: unknown;
  email?: unknown;
  phone?: unknown;
  message?: unknown;
  privacy?: unknown;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidString(value: unknown, maxLength: number) {
  return typeof value === "string" && value.trim().length > 0 && value.length <= maxLength;
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ message: "Invalid form submission." }, { status: 400 });
  }

  const isValid =
    isValidString(payload.fullName, 120) &&
    isValidString(payload.email, 254) &&
    emailPattern.test(payload.email as string) &&
    isValidString(payload.phone, 50) &&
    isValidString(payload.message, 5000) &&
    payload.privacy === true;

  if (!isValid) {
    return NextResponse.json(
      { message: "Please complete all required fields with valid information." },
      { status: 400 },
    );
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT || "465");
  const smtpUser = process.env.SMTP_USER;
  const smtpPassword = process.env.SMTP_PASSWORD;
  const fromEmail = process.env.SMTP_FROM_EMAIL || smtpUser;
  const toEmail = process.env.CONTACT_TO_EMAIL || "akrishnan@westadelaidelegal.com.au";

  if (!smtpHost || !smtpUser || !smtpPassword || !fromEmail || !Number.isInteger(smtpPort)) {
    return NextResponse.json(
      {
        message:
          "Online enquiry delivery is not yet configured. Please call 0410 106 136 or email akrishnan@westadelaidelegal.com.au.",
      },
      { status: 503 },
    );
  }

  const fullName = (payload.fullName as string).trim();
  const email = (payload.email as string).trim();
  const phone = (payload.phone as string).trim();
  const message = (payload.message as string).trim();

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
      connectionTimeout: 10_000,
      greetingTimeout: 10_000,
      socketTimeout: 15_000,
    });

    await transporter.sendMail({
      from: { name: "West Adelaide Legal Website", address: fromEmail },
      to: toEmail,
      replyTo: { name: fullName, address: email },
      subject: "New website enquiry – West Adelaide Legal",
      text: [
        "A new enquiry was submitted through westadelaidelegal.com.au.",
        "",
        `Name: ${fullName}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        "",
        "Message:",
        message,
        "",
        "Privacy acknowledgement: Confirmed",
      ].join("\n"),
    });

    return NextResponse.json({ message: "Enquiry sent successfully." });
  } catch (error) {
    console.error("Contact form email delivery failed", error);
    return NextResponse.json(
      {
        message:
          "Your enquiry could not be sent. Please call 0410 106 136 or email akrishnan@westadelaidelegal.com.au.",
      },
      { status: 502 },
    );
  }
}
