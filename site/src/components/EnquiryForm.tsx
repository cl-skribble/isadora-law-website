"use client";

import { useActionState, useEffect, useRef } from "react";
import { submitEnquiry, type EnquiryState } from "@/lib/actions";
import { useContent } from "@/lib/LanguageContext";

const initialState: EnquiryState = { status: "idle" };

const fieldClass =
  "w-full border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition-colors focus:border-gold";

export function EnquiryForm() {
  const { services, form } = useContent();
  const [state, formAction, pending] = useActionState(submitEnquiry, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state]);

  const statusMessage = state.reason ? form.messages[state.reason] : null;

  return (
    <div className="border border-white/10 bg-white/[0.03] p-6 sm:p-8">
      <h3 className="font-display text-lg font-bold text-white">{form.title}</h3>
      <p className="mt-1.5 text-xs text-white/50">{form.subtitle}</p>

      <form ref={formRef} action={formAction} className="mt-6 space-y-4" noValidate>
        {/* Honeypot — hidden from real visitors, often filled in by bots */}
        <div className="absolute left-[-9999px]" aria-hidden="true">
          <label htmlFor="company">Company</label>
          <input type="text" id="company" name="company" tabIndex={-1} autoComplete="off" />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-white/70">
              {form.nameLabel}<span className="text-gold">*</span>
            </label>
            <input id="name" name="name" type="text" required maxLength={200} className={fieldClass} placeholder={form.namePlaceholder} />
          </div>
          <div>
            <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-white/70">
              {form.emailLabel}<span className="text-gold">*</span>
            </label>
            <input id="email" name="email" type="email" required maxLength={200} className={fieldClass} placeholder={form.emailPlaceholder} />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="phone" className="mb-1.5 block text-xs font-medium text-white/70">
              {form.phoneLabel}
            </label>
            <input id="phone" name="phone" type="tel" maxLength={50} className={fieldClass} placeholder={form.phonePlaceholder} />
          </div>
          <div>
            <label htmlFor="practiceArea" className="mb-1.5 block text-xs font-medium text-white/70">
              {form.practiceAreaLabel}
            </label>
            <select id="practiceArea" name="practiceArea" defaultValue="" className={`${fieldClass} appearance-none`}>
              <option value="" className="bg-ink">{form.selectAreaPlaceholder}</option>
              {services.map((s) => (
                <option key={s.slug} value={s.slug} className="bg-ink">
                  {s.name}
                </option>
              ))}
              <option value="other" className="bg-ink">{form.otherOption}</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-white/70">
            {form.messageLabel}<span className="text-gold">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            maxLength={5000}
            rows={4}
            className={`${fieldClass} resize-none`}
            placeholder={form.messagePlaceholder}
          />
        </div>

        <button
          type="submit"
          disabled={pending}
          className="inline-flex items-center gap-2 bg-gold px-7 py-3.5 text-xs font-semibold uppercase tracking-widest text-black transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
        >
          {pending ? form.submitPending : form.submitIdle}
        </button>

        {statusMessage && (
          <p
            role="status"
            className={`text-sm ${state.status === "success" ? "text-gold" : "text-red-400"}`}
          >
            {statusMessage}
          </p>
        )}
      </form>
    </div>
  );
}
