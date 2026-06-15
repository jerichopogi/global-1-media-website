import { useState } from "react";
import { Section, SectionHead } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { stationGroups, type Station } from "@/data/stations";
import { images } from "@/data/images";

const groupImage: Record<string, string> = {
  elko: images.elko,
  clovis: images.clovis,
  streaming: images.streaming,
};

function StationCard({ station }: { station: Station }) {
  return (
    <a
      href={station.href}
      target="_blank"
      rel="noopener noreferrer"
      className="card-surface group relative flex flex-col overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-bright/60"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-brand-bright/0 blur-2xl transition-colors duration-500 group-hover:bg-brand-bright/20"
      />

      <div className="flex items-start justify-between gap-3">
        {station.frequency ? (
          <span className="inline-flex items-baseline gap-1 rounded-lg bg-bg/60 px-3 py-1.5 font-extrabold tabular-nums text-brand-bright ring-1 ring-line">
            <span className="text-xl">{station.frequency}</span>
            <span className="text-[10px] font-bold tracking-wide text-dim">FM</span>
          </span>
        ) : (
          <span className="inline-flex items-center gap-2 rounded-lg bg-bg/60 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-accent ring-1 ring-line">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Online
          </span>
        )}

        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5 shrink-0 text-dim transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-bright"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 17 17 7M8 7h9v9" />
        </svg>
      </div>

      {/* Brand logo */}
      <div className="mt-6 flex h-24 items-center justify-center rounded-xl bg-bg/50 ring-1 ring-line/70">
        <img
          src={station.logo}
          alt={`${station.name} logo`}
          loading="lazy"
          className="max-h-20 w-auto max-w-[78%] object-contain transition-transform duration-300 group-hover:scale-[1.04]"
        />
      </div>

      <h3 className="mt-5 text-xl font-bold tracking-tight">{station.name}</h3>
      <p className="mt-1.5 text-sm text-dim">{station.format}</p>
    </a>
  );
}

export function Stations() {
  const [active, setActive] = useState(stationGroups[0].id);
  const group = stationGroups.find((g) => g.id === active) ?? stationGroups[0];

  return (
    <Section id="stations">
      <SectionHead
        eyebrow="Our Channels"
        title="13 brands. Two markets. One signal that reaches them all."
        description="Tune in across Northeast Nevada, Clovis & Portales, New Mexico, and our always-on streaming channels."
      />

      {/* Tabs */}
      <div
        role="tablist"
        aria-label="Markets"
        className="mb-8 inline-flex flex-wrap gap-1 rounded-full border border-line bg-surface/60 p-1.5 backdrop-blur"
      >
        {stationGroups.map((g) => {
          const selected = g.id === active;
          return (
            <button
              key={g.id}
              role="tab"
              aria-selected={selected}
              type="button"
              onClick={() => setActive(g.id)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                selected
                  ? "bg-brand text-ink shadow-[0_10px_30px_-12px_rgba(29,120,162,0.9)]"
                  : "text-muted hover:text-ink"
              }`}
            >
              {g.market}
              <span className="ml-2 text-xs text-dim">{g.region}</span>
            </button>
          );
        })}
      </div>

      <Reveal key={group.id}>
        {/* Market banner */}
        <div className="relative mb-8 overflow-hidden rounded-3xl border border-line">
          <img
            src={groupImage[group.id]}
            alt={`${group.market}, ${group.region}`}
            loading="lazy"
            className="h-44 w-full object-cover sm:h-56"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/70 to-bg/20" />
          <div className="absolute inset-0 flex flex-col justify-center p-7 sm:p-10">
            <h3 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              {group.market}
              <span className="ml-2 text-lg font-medium text-muted">
                {group.region}
              </span>
            </h3>
            <p className="mt-2 max-w-md text-sm text-muted">{group.blurb}</p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {group.stations.map((station) => (
            <StationCard key={station.name} station={station} />
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
