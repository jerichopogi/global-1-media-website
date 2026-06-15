import type { AppLink } from "@/data/site";

/** App-store badge built from type + glyph so it stays crisp on dark surfaces. */
export function StoreBadge({ app }: { app: AppLink }) {
  return (
    <a
      href={app.href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 rounded-xl border border-line bg-surface/70 px-4 py-2.5 transition-colors duration-200 hover:border-brand-bright hover:bg-surface-2"
      aria-label={`${app.sublabel} ${app.label}`}
    >
      <span className="text-ink">
        {app.store === "apple" ? (
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
            <path d="M16.36 12.78c-.02-2.18 1.78-3.23 1.86-3.28-1.01-1.48-2.59-1.69-3.15-1.71-1.34-.14-2.62.79-3.3.79-.68 0-1.73-.77-2.85-.75-1.46.02-2.82.85-3.57 2.16-1.53 2.65-.39 6.57 1.1 8.72.73 1.05 1.6 2.23 2.74 2.19 1.1-.04 1.51-.71 2.84-.71 1.33 0 1.7.71 2.86.69 1.18-.02 1.93-1.07 2.65-2.13.84-1.22 1.18-2.4 1.2-2.46-.03-.01-2.3-.88-2.33-3.5ZM14.2 6.18c.6-.73 1.01-1.74.9-2.75-.87.04-1.92.58-2.55 1.3-.56.64-1.05 1.67-.92 2.66.97.07 1.96-.49 2.57-1.21Z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="h-6 w-6">
            <path
              fill="#3fb0e0"
              d="M3.6 2.2c-.2.2-.32.52-.32.94v17.7c0 .42.12.74.33.94l.06.05 9.9-9.9v-.23L3.66 2.16l-.06.04Z"
            />
            <path
              fill="#65bc7b"
              d="m17 15.43-3.4-3.4v-.24l3.4-3.4.08.04 4.03 2.29c1.15.65 1.15 1.72 0 2.38l-4.03 2.29-.08.04Z"
            />
            <path
              fill="#1d78a2"
              d="M17.08 15.39 13.6 11.9l-9.99 9.99c.38.4 1 .45 1.71.05l11.76-6.55"
            />
            <path
              fill="#cee6ec"
              d="M17.08 8.43 5.32 1.88c-.71-.4-1.33-.35-1.71.05l9.99 9.98 3.48-3.48Z"
            />
          </svg>
        )}
      </span>
      <span className="leading-tight">
        <span className="block text-[10px] uppercase tracking-wide text-dim">
          {app.sublabel}
        </span>
        <span className="block text-sm font-semibold text-ink">{app.label}</span>
      </span>
    </a>
  );
}
