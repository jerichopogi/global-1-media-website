import { Section, SectionHead } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { stationGroups } from "@/data/stations";

/** Home-page stations preview — a few featured brands + link to full directory. */
export function StationsTeaser() {
  // Take the first three brands from the first two markets as a sampler.
  const featured = stationGroups
    .slice(0, 2)
    .flatMap((g) => g.stations.filter((s) => s.frequency).slice(0, 3));

  return (
    <Section>
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHead
          eyebrow="Our Channels"
          title="13 brands across two markets."
          description="Hit music, country, rock, talk, and news — plus always-on streaming."
        />
        <Reveal className="mb-[clamp(2.5rem,1.5rem+3vw,4.5rem)]">
          <Button to="/stations" variant="primary">
            Browse all stations
          </Button>
        </Reveal>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((s, i) => (
          <Reveal key={s.name} delay={i * 60}>
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="card-surface group flex items-center gap-4 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-bright/60"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-bg/60 p-1.5 ring-1 ring-line">
                <img
                  src={s.logo}
                  alt={`${s.name} logo`}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain"
                />
              </span>
              <div className="min-w-0">
                <h3 className="truncate font-bold">{s.name}</h3>
                <p className="truncate text-sm text-dim">{s.format}</p>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
