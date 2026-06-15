import { Section, SectionHead } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { companyOverview, companyStats } from "@/data/company";
import { images } from "@/data/images";

export function About() {
  return (
    <Section id="about">
      <div className="grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
        <div>
          <SectionHead
            eyebrow="Company Overview"
            title={
              <>
                A broadcast company built to{" "}
                <span className="text-brand-bright">drive home a win</span> every
                time.
              </>
            }
          />
          <Reveal>
            <p className="text-xl leading-relaxed text-muted">
              {companyOverview.lead}
            </p>
            {companyOverview.body.map((para) => (
              <p key={para} className="mt-5 leading-relaxed text-dim">
                {para}
              </p>
            ))}
          </Reveal>

          <Reveal className="mt-9">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-dim">
              What we do
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {companyOverview.services.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-line bg-surface/60 px-4 py-1.5 text-sm text-muted"
                >
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal className="self-start">
          {/* Image */}
          <div className="relative overflow-hidden rounded-3xl border border-line">
            <img
              src={images.studioDesk}
              alt="On-air broadcast studio"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/70 to-transparent" />
          </div>

          {/* Stat grid */}
          <div className="mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line">
            {companyStats.map((stat) => (
              <div
                key={stat.label}
                className="bg-surface px-7 py-8 transition-colors duration-300 hover:bg-surface-2"
              >
                <div className="text-[clamp(2.2rem,1.8rem+2vw,3.25rem)] font-black leading-none text-ink">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm uppercase tracking-wide text-dim">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-5 rounded-2xl border border-brand/30 bg-brand/10 px-6 py-5 text-sm leading-relaxed text-muted">
            “Synergize marketing media-resources, to better serve local-markets
            and super-serve our advertisers.”
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
