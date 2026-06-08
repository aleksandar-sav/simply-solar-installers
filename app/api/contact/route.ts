import { NextResponse } from "next/server";

type ContactPayload = {
  company?: string;
  name?: string;
  email?: string;
  phone?: string;
  volume?: string;
  regions?: string;
  message?: string;
  _gotcha?: string;
};

export async function POST(request: Request) {
  const formId = process.env.FORMSPREE_FORM_ID ?? "xaqzoalk";

  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (body._gotcha) {
    return NextResponse.json({ ok: true });
  }

  const company = body.company?.trim() || "";
  const name = body.name?.trim() || "";
  const email = body.email?.trim() || "";
  const phone = body.phone?.trim() || "";
  const volume = body.volume?.trim() || "";
  const regions = body.regions?.trim() || "";
  const message = body.message?.trim() || "";

  if (!company || !name || !email) {
    return NextResponse.json(
      { error: "Company, name and email are required." },
      { status: 400 }
    );
  }

  const subject = `Partner enquiry — ${company || name}`;
  const fullMessage = [
    `Company: ${company}`,
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    volume ? `Monthly install volume: ${volume}` : null,
    regions ? `Regions: ${regions}` : null,
    "",
    "Message:",
    message || "(No message provided)",
  ]
    .filter(Boolean)
    .join("\n");

  const res = await fetch(`https://formspree.io/f/${formId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      email,
      subject,
      message: fullMessage,
      company,
      name,
      phone,
      volume,
      regions,
      _replyto: email,
    }),
  });

  if (!res.ok) {
    return NextResponse.json(
      { error: "Could not send your enquiry. Please try again or email Jack directly." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
