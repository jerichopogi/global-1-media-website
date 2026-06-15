import { useState, type FormEvent } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/data/site";
import {
  buildMailto,
  genericSendError,
  hasWeb3FormsKey,
  sendViaWeb3Forms,
} from "@/lib/web3forms";

type Status = "idle" | "submitting" | "success" | "error";

/**
 * Newsletter band: "Stay up-to-date with our latest shows."
 * Signups are delivered through Web3Forms to info@global1media.com.
 */
export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState(genericSendError);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email.trim()) return;

    // No key configured → fall back to the visitor's mail client.
    if (!hasWeb3FormsKey) {
      window.location.href = buildMailto(
        "Newsletter signup",
        `Please add ${email.trim()} to the Global One Media newsletter.`,
      );
      setStatus("success");
      return;
    }

    setStatus("submitting");
    const result = await sendViaWeb3Forms({
      subject: "New newsletter signup",
      from_name: `${site.name} Website`,
      email: email.trim(),
      message: `Newsletter signup request: ${email.trim()}`,
      replyto: email.trim(),
    });

    if (result.ok) {
      setStatus("success");
      setEmail("");
    } else {
      setErrorMsg(result.message);
      setStatus("error");
    }
  }

  const submitting = status === "submitting";

  return (
    <section className="relative">
      <div className="shell">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-line bg-gradient-to-br from-surface-2 via-surface to-bg px-7 py-12 sm:px-12 sm:py-16">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand/25 blur-3xl"
            />
            <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div className="max-w-xl">
                <h2 className="text-[clamp(1.75rem,1.2rem+2vw,2.75rem)] font-extrabold tracking-tight">
                  Stay up-to-date with our latest shows.
                </h2>
                <p className="mt-3 text-dim">
                  New music, local news, and on-air highlights — straight to your
                  inbox.
                </p>
              </div>

              <div className="lg:w-auto">
                <form
                  className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto"
                  onSubmit={handleSubmit}
                >
                  {status === "success" ? (
                    <p
                      role="status"
                      className="rounded-full bg-accent/15 px-6 py-3.5 text-sm font-semibold text-accent"
                    >
                      You're subscribed — welcome aboard!
                    </p>
                  ) : (
                    <>
                      <label htmlFor="nl-email" className="sr-only">
                        Email address
                      </label>
                      <input
                        id="nl-email"
                        type="email"
                        required
                        disabled={submitting}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@email.com"
                        className="w-full rounded-full border border-line bg-bg/70 px-5 py-3.5 text-sm text-ink placeholder:text-dim focus:border-brand-bright focus:outline-none disabled:opacity-60 sm:w-72"
                      />
                      <button
                        type="submit"
                        disabled={submitting}
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-ink transition-all duration-200 hover:bg-brand-bright hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
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
                            Subscribing…
                          </>
                        ) : (
                          "Subscribe"
                        )}
                      </button>
                    </>
                  )}
                </form>

                {status === "error" && (
                  <p
                    role="alert"
                    className="mt-3 text-sm font-medium text-warm"
                  >
                    {errorMsg}
                  </p>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
