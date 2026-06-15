import { Button } from "@/components/ui/Button";
import { site } from "@/data/site";
import { images } from "@/data/images";

const HERO_VIDEO = "/video/Gloabl-1-Media.mp4";

/** Bar config: [height%, animationDuration s, delay s] — irregular on purpose. */
const eqBars: Array<[number, number, number]> = [
  [60, 0.9, 0],
  [100, 1.3, 0.15],
  [42, 0.7, 0.05],
  [78, 1.1, 0.3],
  [54, 0.95, 0.2],
];

function Equalizer() {
  return (
    <span aria-hidden className="flex h-5 items-end gap-[3px]">
      {eqBars.map(([h, dur, delay], i) => (
        <span
          key={i}
          className="w-[3px] rounded-full bg-accent"
          style={{
            height: `${h}%`,
            transformOrigin: "bottom",
            animation: `eq-bounce ${dur}s ease-in-out ${delay}s infinite`,
          }}
        />
      ))}
    </span>
  );
}

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden pt-[76px]">
      {/* ---- Cinematic video background ---- */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <video
          className="h-full w-full object-cover opacity-45"
          style={{ animation: "hero-zoom 24s ease-in-out infinite alternate" }}
          src={HERO_VIDEO}
          poster={images.heroStudio}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        {/* brand duotone + readability wash from the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/85 to-bg/30" />
        {/* top + bottom fades to seat the video in the page */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg/70" />
        {/* cool brand tint to unify any source footage */}
        <div className="absolute inset-0 bg-brand/10 mix-blend-overlay" />
        {/* vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 90% at 70% 40%, transparent 40%, rgba(1,6,18,0.65) 100%)",
          }}
        />
      </div>

      {/* faint orbit line bleeding off the right edge */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[22%] top-1/2 h-[150vh] w-[150vh] -translate-y-1/2 rounded-full border border-line/40"
      />

      <div className="shell relative z-10 w-full py-16 lg:py-0">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent backdrop-blur">
            <span
              className="h-2 w-2 rounded-full bg-accent"
              style={{ animation: "pulse-ring 2.4s ease-out infinite" }}
            />
            On Air · Since {site.founded}
          </span>

          <h1 className="mt-7 text-[clamp(2.75rem,1rem+8vw,7rem)] font-black leading-[0.98] tracking-[-0.03em]">
            Bringing the
            <br />
            <span className="bg-gradient-to-r from-brand-bright via-muted to-accent bg-clip-text text-transparent">
              World
            </span>{" "}
            to You
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-dim">
            {site.mission} Broadcast, digital, and streaming campaigns that reach
            real audiences across Nevada and New Mexico — with strong local
            impact every time.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button to="/stations" variant="primary">
              Start Listening
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Button>
            <Button to="/solutions" variant="ghost">
              Advertise With Us
            </Button>
          </div>

          <dl className="mt-12 flex flex-wrap gap-x-10 gap-y-4">
            {[
              ["13", "Radio brands"],
              ["2", "Markets"],
              ["100%", "Local impact"],
            ].map(([v, l]) => (
              <div key={l}>
                <dt className="text-2xl font-extrabold text-ink">{v}</dt>
                <dd className="text-xs uppercase tracking-wide text-dim">{l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* ---- Floating "live" glass card over the video ---- */}
      <div
        className="card-surface absolute bottom-12 right-[clamp(1.25rem,3vw,4rem)] z-10 hidden items-center gap-4 rounded-2xl px-5 py-4 lg:flex"
        style={{ animation: "float-y 7s ease-in-out infinite" }}
      >
        <Equalizer />
        <div className="leading-tight">
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-accent">
            <span
              className="h-1.5 w-1.5 rounded-full bg-accent"
              style={{ animation: "pulse-ring 2.4s ease-out infinite" }}
            />
            Live Now
          </div>
          <div className="text-sm font-semibold text-ink">
            Streaming across 13 brands
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-dim lg:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="h-9 w-[1px] bg-gradient-to-b from-brand-bright to-transparent" />
      </div>
    </section>
  );
}
