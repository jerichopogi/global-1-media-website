import { Reveal } from "@/components/ui/Reveal";
import { companyStats } from "@/data/company";

/** Compact stat band used on the home page. */
export function StatsStrip() {
  return (
    <section className="border-y border-line bg-surface/30">
      <div className="shell grid grid-cols-2 gap-px overflow-hidden md:grid-cols-4">
        {companyStats.map((stat, i) => (
          <Reveal
            key={stat.label}
            delay={i * 60}
            className="px-4 py-10 text-center md:py-12"
          >
            <div className="text-[clamp(2.4rem,1.8rem+2.2vw,3.5rem)] font-black leading-none text-ink">
              {stat.value}
            </div>
            <div className="mt-2 text-xs uppercase tracking-[0.18em] text-dim">
              {stat.label}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
