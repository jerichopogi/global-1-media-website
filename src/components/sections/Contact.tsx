import { useState, type FormEvent, type ReactNode } from "react";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SocialIcon } from "@/components/icons/SocialIcon";
import { contact, site, socials } from "@/data/site";
import {
  buildMailto,
  genericSendError,
  hasWeb3FormsKey,
  sendViaWeb3Forms,
} from "@/lib/web3forms";

type Status = "idle" | "submitting" | "success" | "error";

const fieldCls =
  "w-full rounded-xl border border-line bg-bg/60 px-4 py-3 text-sm text-ink placeholder:text-dim transition-colors focus:border-brand-bright focus:outline-none disabled:opacity-60";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState(genericSendError);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: real users never fill this hidden field — bots do.
    if (String(data.get("botcheck") ?? "")) {
      setStatus("success");
      form.reset();
      return;
    }

    const email = String(data.get("email") ?? "").trim();
    const confirm = String(data.get("confirmEmail") ?? "").trim();
    if (email !== confirm) {
      setErrorMsg("The email addresses don't match. Please check and try again.");
      setStatus("error");
      return;
    }

    const firstName = String(data.get("firstName") ?? "").trim();
    const lastName = String(data.get("lastName") ?? "").trim();
    const fullName = `${firstName} ${lastName}`.trim();
    const message = String(data.get("message") ?? "");

    // No key configured yet → fall back to the visitor's mail client so the
    // form is never a dead end. Configure VITE_WEB3FORMS_KEY for true sending.
    if (!hasWeb3FormsKey) {
      window.location.href = buildMailto(
        `Website inquiry from ${fullName}`,
        `${message}\n\n— ${fullName}\n${email}`,
      );
      setStatus("success");
      form.reset();
      return;
    }

    setStatus("submitting");
    const result = await sendViaWeb3Forms({
      subject: `New website inquiry from ${fullName}`,
      from_name: `${site.name} Website`,
      name: fullName,
      email,
      message,
      newsletter: data.get("newsletter") ? "Yes" : "No",
      replyto: email,
    });

    if (result.ok) {
      setStatus("success");
      form.reset();
    } else {
      setErrorMsg(result.message);
      setStatus("error");
    }
  }

  const submitting = status === "submitting";

  return (
    <Section id="contact">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        {/* Info */}
        <div>
          <h2 className="text-[clamp(1.6rem,1.2rem+1.5vw,2.25rem)] font-extrabold">
            Reach the team
          </h2>
          <p className="mt-4 max-w-md text-dim">
            Prefer to talk it through? Call or email us directly — we read every
            message.
          </p>

          <dl className="mt-10 space-y-6">
            <ContactRow label="Call" icon="phone">
              <a
                href={contact.phoneHref}
                className="text-lg font-semibold text-ink hover:text-brand-bright"
              >
                {contact.phone}
              </a>
            </ContactRow>
            <ContactRow label="Email" icon="mail">
              <a
                href={`mailto:${contact.email}`}
                className="text-lg font-semibold text-ink hover:text-brand-bright"
              >
                {contact.email}
              </a>
            </ContactRow>
            <ContactRow label="Visit" icon="pin">
              <p className="text-lg font-semibold text-ink">
                {contact.address.line1}
                <br />
                <span className="text-base font-normal text-dim">
                  {contact.address.line2}
                </span>
              </p>
            </ContactRow>
          </dl>

          <div className="mt-10 flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-bright hover:text-brand-bright"
              >
                <SocialIcon icon={s.icon} />
              </a>
            ))}
          </div>
        </div>

        {/* Form */}
        <Reveal>
          <form
            onSubmit={handleSubmit}
            noValidate
            className="card-surface rounded-3xl p-7 sm:p-10"
          >
            {/* Honeypot — hidden from humans, catches bots. */}
            <input
              type="text"
              name="botcheck"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden
              className="hidden"
            />

            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="First name" name="firstName" autoComplete="given-name" />
              <Field label="Last name" name="lastName" autoComplete="family-name" />
              <Field
                label="Email"
                name="email"
                type="email"
                autoComplete="email"
                className="sm:col-span-2"
              />
              <Field
                label="Confirm email"
                name="confirmEmail"
                type="email"
                className="sm:col-span-2"
              />
            </div>

            <label className="mt-4 block">
              <span className="mb-1.5 block text-sm font-medium text-muted">
                Message
              </span>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="How can we help?"
                className={`${fieldCls} resize-y`}
              />
            </label>

            <label className="mt-5 flex items-start gap-3 text-sm text-dim">
              <input
                type="checkbox"
                name="newsletter"
                className="mt-0.5 h-4 w-4 accent-[var(--color-brand)]"
              />
              Stay up-to-date with our latest shows.
            </label>

            <button
              type="submit"
              disabled={submitting}
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-ink transition-all duration-200 hover:bg-brand-bright hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 sm:w-auto"
            >
              {submitting ? (
                <>
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 animate-spin"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  >
                    <path d="M12 3a9 9 0 1 0 9 9" />
                  </svg>
                  Sending…
                </>
              ) : (
                "Send message"
              )}
            </button>

            {status === "success" && (
              <p
                role="status"
                className="mt-5 rounded-xl bg-accent/15 px-5 py-3 text-sm font-medium text-accent"
              >
                Thank you for your message — we'll be in touch shortly.
              </p>
            )}
            {status === "error" && (
              <p
                role="alert"
                className="mt-5 rounded-xl bg-warm/15 px-5 py-3 text-sm font-medium text-warm"
              >
                {errorMsg}
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </Section>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  className,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  className?: string;
}) {
  return (
    <label className={`block ${className ?? ""}`}>
      <span className="mb-1.5 block text-sm font-medium text-muted">{label}</span>
      <input
        type={type}
        name={name}
        required
        autoComplete={autoComplete}
        className={fieldCls}
      />
    </label>
  );
}

const icons = {
  phone: "M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24 11.4 11.4 0 0 0 3.6.58 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .58 3.6 1 1 0 0 1-.24 1l-2.24 2.2Z",
  mail: "M4 4h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm0 3.2V19h16V7.2l-8 5-8-5Zm.8-1.2 7.2 4.5L19.2 6H4.8Z",
  pin: "M12 2a8 8 0 0 0-8 8c0 6 8 12 8 12s8-6 8-12a8 8 0 0 0-8-8Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z",
};

function ContactRow({
  label,
  icon,
  children,
}: {
  label: string;
  icon: keyof typeof icons;
  children: ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line bg-surface/60 text-brand-bright">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
          <path d={icons[icon]} />
        </svg>
      </span>
      <div>
        <dt className="text-xs uppercase tracking-[0.2em] text-dim">{label}</dt>
        <dd className="mt-1">{children}</dd>
      </div>
    </div>
  );
}
