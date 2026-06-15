import { Section, SectionHead } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { solutions } from "@/data/solutions";
import { images } from "@/data/images";

const solutionImage: Record<string, string> = {
  broadcast: images.radioTower,
  digital: images.officeCollab,
  streaming: images.headphones,
  local: images.citySkyline,
};

export function Solutions() {
  return (
    <Section id="solutions" className="bg-bg-deep/40">
      <SectionHead
        eyebrow="Advertising Solutions"
        title="Four ways we put your brand in front of the right audience."
        description="Radio is the largest medium overall — reaching more consumers than television, social, or smartphones. Pair it with our digital stack for results that compound."
      />

      <div className="grid auto-rows-fr gap-5 md:grid-cols-2 lg:grid-cols-12">
        {solutions.map((sol, i) => (
          <Reveal
            key={sol.id}
            as="article"
            delay={i * 70}
            className={sol.featured ? "lg:col-span-7 lg:row-span-2" : "lg:col-span-5"}
          >
            <div
              className={`card-surface group flex h-full flex-col overflow-hidden rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:border-brand-bright/60`}
            >
              {/* Image */}
              <div
                className={`relative overflow-hidden ${
                  sol.featured ? "h-56 lg:h-72" : "h-40"
                }`}
              >
                <img
                  src={solutionImage[sol.id]}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
                <span className="absolute left-5 top-5 rounded-full bg-bg/70 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-brand-bright backdrop-blur">
                  {String(i + 1).padStart(2, "0")} · {sol.tagline}
                </span>
              </div>

              {/* Body */}
              <div className={`flex flex-1 flex-col p-7 sm:p-9 ${sol.featured ? "lg:p-10" : ""}`}>
                <h3
                  className={`font-extrabold tracking-tight ${
                    sol.featured ? "text-3xl lg:text-4xl" : "text-2xl"
                  }`}
                >
                  {sol.title}
                </h3>
                <p
                  className={`mt-4 leading-relaxed text-dim ${
                    sol.featured ? "max-w-xl text-lg" : "text-base"
                  }`}
                >
                  {sol.body}
                </p>
                <ul className="mt-auto flex flex-wrap gap-2 pt-7">
                  {sol.points.map((p) => (
                    <li
                      key={p}
                      className="rounded-full border border-line bg-bg/50 px-3 py-1 text-xs font-medium text-muted transition-colors group-hover:border-brand/50"
                    >
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
