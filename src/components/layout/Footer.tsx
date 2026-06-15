import { Link } from "react-router-dom";
import { Logo } from "@/components/brand/Logo";
import { SocialIcon } from "@/components/icons/SocialIcon";
import { StoreBadge } from "@/components/icons/StoreBadge";
import { navItems } from "@/data/nav";
import {
  apps,
  contact,
  copyright,
  site,
  socials,
} from "@/data/site";

export function Footer() {
  return (
    <footer className="relative border-t border-line bg-bg-deep/80">
      <div className="shell grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-8 lg:py-20">
        {/* Brand + description */}
        <div className="max-w-sm">
          <Logo size="1.6rem" />
          <p className="mt-6 text-sm leading-relaxed text-dim">
            {site.description}
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-bright hover:text-brand-bright"
              >
                <SocialIcon icon={s.icon} />
              </a>
            ))}
          </div>
        </div>

        {/* Explore */}
        <nav aria-label="Footer">
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-dim">
            Explore
          </h3>
          <ul className="mt-5 space-y-3">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-sm text-muted transition-colors hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact + apps */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-dim">
            Get in touch
          </h3>
          <address className="mt-5 space-y-2 text-sm not-italic text-muted">
            <p>{contact.address.line1}</p>
            <p>{contact.address.line2}</p>
            <p>
              <a
                href={contact.phoneHref}
                className="transition-colors hover:text-ink"
              >
                {contact.phone}
              </a>
            </p>
            <p>
              <a
                href={`mailto:${contact.email}`}
                className="text-brand-bright transition-colors hover:text-ink"
              >
                {contact.email}
              </a>
            </p>
          </address>

          <div className="mt-6 flex flex-wrap gap-3">
            {apps.map((app) => (
              <StoreBadge key={app.store} app={app} />
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="shell flex flex-col items-center justify-between gap-3 py-6 text-xs text-dim sm:flex-row">
          <p>{copyright}</p>
          <p>{site.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
