import { Section, SectionHead } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { careersIntro, locations, positions } from "@/data/careers";
import { contact } from "@/data/site";
import { images } from "@/data/images";

const locationImage: Record<string, string> = {
  Elko: images.elko,
  Clovis: images.clovis,
};

export function Careers() {
  return (
    <Section id="careers">
      <SectionHead
        eyebrow="Work Here"
        title={careersIntro.tagline}
        description={careersIntro.body}
      />

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Open positions */}
        <div className="space-y-6">
          {positions.map((pos, i) => (
            <Reveal key={pos.title} as="article" delay={i * 80}>
              <article className="card-surface rounded-3xl p-8 sm:p-10">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-bold uppercase tracking-wide text-accent">
                    Now hiring
                  </span>
                  <span className="text-xs uppercase tracking-wide text-dim">
                    {pos.type} · {pos.location}
                  </span>
                </div>

                <h3 className="mt-5 text-3xl font-extrabold tracking-tight">
                  {pos.title}
                </h3>
                <p className="mt-4 leading-relaxed text-dim">{pos.summary}</p>

                <div className="mt-7 grid gap-7 sm:grid-cols-2">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-bright">
                      The role
                    </h4>
                    <ul className="mt-3 space-y-2 text-sm text-muted">
                      {pos.responsibilities.map((r) => (
                        <li key={r} className="flex gap-2.5">
                          <Dot />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-bright">
                      You bring
                    </h4>
                    <ul className="mt-3 space-y-2 text-sm text-muted">
                      {pos.qualifications.map((q) => (
                        <li key={q} className="flex gap-2.5">
                          <Dot />
                          {q}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8">
                  <Button
                    href={`mailto:${contact.recruitingEmail}?subject=Application — ${pos.title}`}
                    variant="primary"
                  >
                    Apply — {contact.recruitingEmail}
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}

          <Reveal>
            <p className="rounded-2xl border border-line bg-surface/40 px-6 py-5 text-sm text-dim">
              We recruit across programming, sales, marketing, and production.
              Our values:{" "}
              <span className="text-muted">
                {careersIntro.values.join(" · ")}
              </span>
              . Send your résumé to{" "}
              <a
                href={`mailto:${contact.recruitingEmail}`}
                className="text-brand-bright hover:text-ink"
              >
                {contact.recruitingEmail}
              </a>
              .
            </p>
          </Reveal>
        </div>

        {/* Locations */}
        <div className="space-y-6">
          {locations.map((loc, i) => (
            <Reveal key={loc.city} delay={i * 90}>
              <div className="card-surface group flex flex-col overflow-hidden rounded-3xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={locationImage[loc.city]}
                    alt={`${loc.city}, ${loc.state}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-6 w-6 text-brand-bright"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <h3 className="text-2xl font-extrabold tracking-tight">
                      {loc.city}
                      <span className="ml-2 text-base font-medium text-dim">
                        {loc.state}
                      </span>
                    </h3>
                  </div>
                  <p className="mt-4 leading-relaxed text-dim">{loc.blurb}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Dot() {
  return (
    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-bright" />
  );
}
