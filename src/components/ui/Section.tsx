import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
};

/** Page section with consistent vertical rhythm and centered shell. */
export function Section({ id, children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-24 py-[clamp(4.5rem,3rem+7vw,10rem)] ${className ?? ""}`}
    >
      <div className="shell">{children}</div>
    </section>
  );
}

type SectionHeadProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "start" | "center";
};

/** Eyebrow + heading + optional lede, used at the top of each section. */
export function SectionHead({
  eyebrow,
  title,
  description,
  align = "start",
}: SectionHeadProps) {
  return (
    <Reveal
      className={`mb-[clamp(2.5rem,1.5rem+3vw,4.5rem)] max-w-3xl ${
        align === "center" ? "mx-auto text-center" : ""
      }`}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-5 text-[clamp(2rem,1.4rem+2.6vw,3.25rem)] font-extrabold">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-lg leading-relaxed text-dim">{description}</p>
      )}
    </Reveal>
  );
}
