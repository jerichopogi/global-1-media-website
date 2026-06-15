import { partnerLogos, type PartnerLogo } from "@/data/company";

/**
 * "Who we have worked with" — a continuous marquee of real client logos.
 * Edit `partnerLogos` in data/company.ts to add or swap brands.
 */
function LogoChip({ logo }: { logo: PartnerLogo }) {
  return (
    <li className="shrink-0">
      <span className="flex h-16 w-40 items-center justify-center px-5">
        <img
          src={logo.src}
          alt={`${logo.name} logo`}
          loading="lazy"
          className="max-h-10 w-auto max-w-full object-contain opacity-70 transition-opacity duration-300 hover:opacity-100"
        />
      </span>
    </li>
  );
}

export function Partners() {
  const row = [...partnerLogos, ...partnerLogos];

  return (
    <section
      aria-label="Brands we have worked with"
      className="relative border-y border-line bg-surface/30 py-12"
    >
      <p className="shell mb-8 text-center text-xs font-bold uppercase tracking-[0.28em] text-dim">
        Who we have worked with
      </p>

      <div
        className="relative flex overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
        }}
      >
        <ul
          className="flex shrink-0 items-center gap-6 pr-6"
          style={{ animation: "marquee 38s linear infinite" }}
        >
          {row.map((logo, i) => (
            <LogoChip key={`${logo.name}-${i}`} logo={logo} />
          ))}
        </ul>
        <ul
          aria-hidden
          className="flex shrink-0 items-center gap-6 pr-6"
          style={{ animation: "marquee 38s linear infinite" }}
        >
          {row.map((logo, i) => (
            <LogoChip key={`dup-${logo.name}-${i}`} logo={logo} />
          ))}
        </ul>
      </div>
    </section>
  );
}
