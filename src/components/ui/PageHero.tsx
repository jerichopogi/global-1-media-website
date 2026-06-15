import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  image: string;
  children?: ReactNode;
};

/** Inner-page header band with a full-bleed image and dark gradient wash. */
export function PageHero({
  eyebrow,
  title,
  description,
  image,
  children,
}: PageHeroProps) {
  return (
    <header className="relative overflow-hidden pt-[76px]">
      {/* Background image + overlays */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover opacity-40"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg/70 via-bg/85 to-bg" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_75%_0%,rgba(29,120,162,0.3),transparent_60%)]" />
      </div>

      <div className="shell py-[clamp(3.5rem,2.5rem+5vw,7rem)]">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="mt-5 max-w-4xl text-[clamp(2.4rem,1.6rem+3.6vw,4.5rem)] font-black leading-[1.02] tracking-[-0.03em]">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            {description}
          </p>
        )}
        {children && <div className="mt-9">{children}</div>}
      </div>
    </header>
  );
}
