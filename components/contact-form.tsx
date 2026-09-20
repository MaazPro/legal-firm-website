"use client";

import { Button, Spinner } from "@chakra-ui/react";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2, CircleAlert } from "lucide-react";

type FormFields = {
  fullName: string;
  email: string;
  phone: string;
  message: string;
  privacy: boolean;
};

type FieldErrors = Partial<Record<keyof FormFields, string>>;

const emptyForm: FormFields = {
  fullName: "",
  email: "",
  phone: "",
  message: "",
  privacy: false,
};

function validateForm(values: FormFields): FieldErrors {
  const errors: FieldErrors = {};
  if (!values.fullName.trim()) errors.fullName = "Please enter your full name.";
  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.phone.trim()) errors.phone = "Please enter your phone number.";
  if (!values.message.trim()) errors.message = "Please enter your message.";
  if (!values.privacy) errors.privacy = "Please confirm the privacy acknowledgement.";
  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<FormFields>(emptyForm);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const setField = <K extends keyof FormFields>(field: K, value: FormFields[K]) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setStatus("idle");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validateForm(values);
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      setStatus("error");
      setStatusMessage("Please check the highlighted fields and try again.");
      return;
    }

    setIsSubmitting(true);
    setStatus("idle");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const result = (await response.json()) as { message?: string };
      if (!response.ok) throw new Error(result.message || "Your enquiry could not be sent.");

      setValues(emptyForm);
      setErrors({});
      setStatus("success");
      setStatusMessage("Thank you. Your enquiry has been sent to West Adelaide Legal.");
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Your enquiry could not be sent. Please contact us by phone or email.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate id="enquiry">
      <div className="form-heading">
        <p>Send an enquiry</p>
        <h2>How can we help?</h2>
      </div>
      <div className="form-grid">
        <div className="field-group">
          <label htmlFor="fullName">Full Name <span aria-hidden="true">*</span></label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            value={values.fullName}
            onChange={(event) => setField("fullName", event.target.value)}
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            required
          />
          {errors.fullName ? <p className="field-error" id="fullName-error">{errors.fullName}</p> : null}
        </div>
        <div className="field-group">
          <label htmlFor="email">Email <span aria-hidden="true">*</span></label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(event) => setField("email", event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            required
          />
          {errors.email ? <p className="field-error" id="email-error">{errors.email}</p> : null}
        </div>
      </div>
      <div className="field-group">
        <label htmlFor="phone">Phone <span aria-hidden="true">*</span></label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          value={values.phone}
          onChange={(event) => setField("phone", event.target.value)}
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? "phone-error" : undefined}
          required
        />
        {errors.phone ? <p className="field-error" id="phone-error">{errors.phone}</p> : null}
      </div>
      <div className="field-group">
        <label htmlFor="message">Message <span aria-hidden="true">*</span></label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={(event) => setField("message", event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          required
        />
        {errors.message ? <p className="field-error" id="message-error">{errors.message}</p> : null}
      </div>
      <div className="privacy-field">
        <input
          id="privacy"
          name="privacy"
          type="checkbox"
          checked={values.privacy}
          onChange={(event) => setField("privacy", event.target.checked)}
          aria-invalid={Boolean(errors.privacy)}
          aria-describedby={errors.privacy ? "privacy-error" : undefined}
          required
        />
        <label htmlFor="privacy">
          I acknowledge that my information will be handled in accordance with the{" "}
          <Link href="/privacy-policy">Privacy Policy</Link>.
        </label>
      </div>
      {errors.privacy ? <p className="field-error" id="privacy-error">{errors.privacy}</p> : null}

      {status !== "idle" ? (
        <div className={`form-status form-status-${status}`} role={status === "error" ? "alert" : "status"}>
          {status === "success" ? (
            <CheckCircle2 aria-hidden="true" size={20} />
          ) : (
            <CircleAlert aria-hidden="true" size={20} />
          )}
          <p>{statusMessage}</p>
        </div>
      ) : null}

      <Button className="submit-button" type="submit" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Spinner size="sm" /> Sending…
          </>
        ) : (
          <>
            Send Enquiry <ArrowRight aria-hidden="true" size={17} />
          </>
        )}
      </Button>
    </form>
  );
}
