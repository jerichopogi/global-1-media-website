import { contact } from "@/data/site";

/**
 * Web3Forms delivery helper. All form submissions are delivered to the inbox
 * bound to the access key (set that to info@global1media.com). See .env.example.
 */

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined;
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

/** True once a Web3Forms access key is configured. */
export const hasWeb3FormsKey = Boolean(WEB3FORMS_KEY);

/** Inbox all inquiries are delivered to. */
export const inquiryEmail = contact.email;

export const genericSendError = `Something went wrong. Please try again, or email us directly at ${contact.email}.`;

export type Web3FormsResult = { ok: true } | { ok: false; message: string };

/**
 * POST a set of fields to Web3Forms. Check `hasWeb3FormsKey` first if you want
 * a mailto fallback — this resolves to an error when no key is configured.
 */
export async function sendViaWeb3Forms(
  fields: Record<string, string>,
): Promise<Web3FormsResult> {
  if (!WEB3FORMS_KEY) {
    return { ok: false, message: genericSendError };
  }

  try {
    const res = await fetch(WEB3FORMS_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ access_key: WEB3FORMS_KEY, ...fields }),
    });
    const result: { success?: boolean; message?: string } = await res
      .json()
      .catch(() => ({}));

    if (res.ok && result.success) return { ok: true };
    return { ok: false, message: result.message || genericSendError };
  } catch {
    return { ok: false, message: genericSendError };
  }
}

/** Build a mailto: URL to the inquiry inbox — used as a no-backend fallback. */
export function buildMailto(subject: string, body: string): string {
  return `mailto:${contact.email}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
}
