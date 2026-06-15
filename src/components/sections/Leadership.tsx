import { Section, SectionHead } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { executives, type Executive } from "@/data/leadership";

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
}

function ExecCard({ exec, index }: { exec: Executive; index: number }) {
  return (
    <Reveal as="article" delay={index * 90}>
      <article className="card-surface flex h-full flex-col rounded-3xl p-8 sm:p-10">
        <div className="flex items-center gap-5">
          {/* Photo when available, else initials avatar */}
          {exec.photo ? (
            <img
              src={exec.photo}
              alt={exec.name}
              width={72}
              height={72}
              className="h-18 w-18 rounded-2xl object-cover"
            />
          ) : (
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-surface-2 text-xl font-extrabold text-ink ring-1 ring-brand-bright/40">
              {initials(exec.name)}
            </span>
          )}
          <div>
            <h3 className="text-xl font-bold tracking-tight">{exec.name}</h3>
            <p className="text-sm font-semibold text-brand-bright">
              {exec.role}
            </p>
            <p className="text-xs uppercase tracking-wide text-dim">
              {exec.location}
            </p>
          </div>
        </div>

        <div className="mt-7 space-y-4 border-t border-line pt-7 text-sm leading-relaxed text-dim">
          {exec.bio.map((para) => (
            <p key={para}>{para}</p>
          ))}
        </div>
      </article>
    </Reveal>
  );
}

export function Leadership() {
  return (
    <Section id="leadership" className="bg-bg-deep/40">
      <SectionHead
        eyebrow="Executive Leadership"
        title="Decades of broadcast experience, on both sides of the mic."
      />
      <div className="grid gap-6 lg:grid-cols-2">
        {executives.map((exec, i) => (
          <ExecCard key={exec.name} exec={exec} index={i} />
        ))}
      </div>
    </Section>
  );
}
