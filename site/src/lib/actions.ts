"use server";

import { Resend } from "resend";
import { en } from "@/lib/content/en";

const ENQUIRY_RECIPIENT = "general@isadoralaw.com";

export type EnquiryReason =
  | "missingFields"
  | "invalidEmail"
  | "tooLong"
  | "notConfigured"
  | "sendFailed"
  | "success";

export type EnquiryState = {
  status: "idle" | "success" | "error";
  reason?: EnquiryReason;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitEnquiry(
  _prevState: EnquiryState,
  formData: FormData
): Promise<EnquiryState> {
  // Honeypot: real visitors never fill this hidden field. Bots that fill
  // every field on a form usually do.
  if (formData.get("company")) {
    return { status: "success", reason: "success" };
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const practiceArea = String(formData.get("practiceArea") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return { status: "error", reason: "missingFields" };
  }
  if (!EMAIL_RE.test(email)) {
    return { status: "error", reason: "invalidEmail" };
  }
  if (name.length > 200 || email.length > 200 || phone.length > 50 || message.length > 5000) {
    return { status: "error", reason: "tooLong" };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("submitEnquiry: RESEND_API_KEY is not set");
    return { status: "error", reason: "notConfigured" };
  }

  // Practice area labels are looked up in English regardless of the
  // enquirer's chosen site language, so the firm's inbox always reads a
  // consistent list — the visible form label is translated, this isn't.
  const practiceAreaLabel =
    practiceArea === "other"
      ? "Other"
      : en.services.find((s) => s.slug === practiceArea)?.name || (practiceArea ? practiceArea : "Not specified");

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: "Isadora & Associates Website <enquiries@isadoralaw.com>",
      to: ENQUIRY_RECIPIENT,
      replyTo: email,
      subject: `New enquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "Not provided"}`,
        `Practice area: ${practiceAreaLabel}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("submitEnquiry: Resend error", error);
      return { status: "error", reason: "sendFailed" };
    }
  } catch (err) {
    console.error("submitEnquiry: unexpected error", err);
    return { status: "error", reason: "sendFailed" };
  }

  return { status: "success", reason: "success" };
}
