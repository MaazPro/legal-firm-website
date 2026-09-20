import { NextResponse } from "next/server";

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

  const endpoint = process.env.CONTACT_FORM_ENDPOINT;
  if (!endpoint) {
    return NextResponse.json(
      {
        message:
          "Online enquiry delivery is not yet configured. Please call 0410 106 136 or email akrishnan@westadelaidelegal.com.au.",
      },
      { status: 503 },
    );
  }

  try {
    const headers: Record<string, string> = { "Content-Type": "application/json" };
    if (process.env.CONTACT_FORM_TOKEN) {
      headers.Authorization = `Bearer ${process.env.CONTACT_FORM_TOKEN}`;
    }

    const providerResponse = await fetch(endpoint, {
      method: "POST",
      headers,
      body: JSON.stringify({
        fullName: (payload.fullName as string).trim(),
        email: (payload.email as string).trim(),
        phone: (payload.phone as string).trim(),
        message: (payload.message as string).trim(),
        privacyAcknowledged: true,
        source: "westadelaidelegal.com.au",
      }),
      cache: "no-store",
    });

    if (!providerResponse.ok) {
      throw new Error("Provider rejected the request");
    }

    return NextResponse.json({ message: "Enquiry sent successfully." });
  } catch {
    return NextResponse.json(
      { message: "Your enquiry could not be sent. Please contact us by phone or email." },
      { status: 502 },
    );
  }
}
