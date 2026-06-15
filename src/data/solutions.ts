/** Advertising solutions — broadcast, digital, streaming, local. */

export type Solution = {
  id: string;
  title: string;
  tagline: string;
  body: string;
  points: string[];
  featured?: boolean;
};

export const solutions: Solution[] = [
  {
    id: "broadcast",
    title: "Broadcast",
    tagline: "The largest medium overall",
    body: "Radio reaches more consumers than any other media available — including television, Facebook, and smartphones. It may also be the most effective way to drive traffic and leads directly to your website. Nothing will be more effective for your campaign than the power of our radio brands.",
    points: ["13 radio brands", "Two markets", "On-air campaigns"],
    featured: true,
  },
  {
    id: "digital",
    title: "Digital Solutions",
    tagline: "Custom audiences, captured",
    body: "Custom audience building and lead capture across mobile and social platforms — a full-stack digital toolkit that pairs with the reach of broadcast.",
    points: ["Web Design", "SEO / SEM", "Mobile", "Social", "Video", "OTT / CTV"],
  },
  {
    id: "streaming",
    title: "Streaming Audio",
    tagline: "Pinpoint precision",
    body: "Our Streaming Audio Platform lets you use the power of sound and advanced targeting methods to reach your ideal customer with pinpoint precision.",
    points: ["Geography", "Demographics", "Online behavior"],
  },
  {
    id: "local",
    title: "Local Solutions",
    tagline: "Strong local impact",
    body: "We synergize broadcast and digital to deliver strong local-market impact — personal connections with the audiences advertisers want to reach, on both live and on-demand bases.",
    points: ["Broadcast + digital", "Event sponsorship", "Influencer reach"],
  },
];
