import { Section, SectionHead } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { solutions } from "@/data/solutions";

/** Home-page compact grid of solutions linking to the full Solutions page. */
export function SolutionsTeaser() {
  return (
    <Section className="bg-bg-deep/40">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHead
          eyebrow="Advertising Solutions"
          title="Reach the right audience, four ways."
        />
        <Reveal className="mb-[clamp(2.5rem,1.5rem+3vw,4.5rem)]">
          <Button to="/solutions" variant="ghost">
            All solutions
          </Button>
        </Reveal>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {solutions.map((sol, i) => (
          <Reveal key={sol.id} as="article" delay={i * 70}>
            <div className="card-surface group flex h-full flex-col rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-bright/60">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-bright">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-xl font-bold tracking-tight">
                {sol.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-dim">
                {sol.tagline}.
              </p>
              <ul className="mt-auto flex flex-wrap gap-1.5 pt-6">
                {sol.points.slice(0, 3).map((p) => (
                  <li
                    key={p}
                    className="rounded-full border border-line bg-bg/50 px-2.5 py-0.5 text-[11px] font-medium text-muted"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
