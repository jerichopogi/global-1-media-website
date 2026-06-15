/** About / company overview copy + headline stats. */

export const companyStats = [
  { value: "2021", label: "Founded" },
  { value: "13", label: "Radio brands" },
  { value: "2", label: "Markets" },
  { value: "1", label: "Streaming channel" },
];

export const companyOverview = {
  lead: "Global One Media is a flourishing broadcast company offering exciting new ideas and solutions for media, entertainment, and digital marketing.",
  body: [
    "We specialize in on-air campaigns, online strategies, and event marketing sponsorship. Our innovative team is focused on what it takes to drive home a win every time.",
    "We synergize marketing media-resources to better serve local markets and super-serve our advertisers — providing strong local impact through broadcast, digital, popular influencers and social media, on both live and on-demand bases.",
  ],
  services: [
    "Television",
    "Radio",
    "Streaming media",
    "Digital media",
    "On-air campaigns",
    "Online strategies",
    "Event marketing sponsorship",
  ],
};

/**
 * Brands we've worked with — logo wall for the "Who we've worked with" ticker.
 * Drop a PNG/SVG in /public/images and add an entry to show another logo.
 */
export type PartnerLogo = {
  name: string;
  src: string;
};

export const partnerLogos: PartnerLogo[] = [
  { name: "McDonald's", src: "/images/MCDONAL-logo.png" },
  { name: "Nissan", src: "/images/NISSAN-logo.png" },
  { name: "Staples", src: "/images/STAPLES-logo.png" },
  { name: "Starbucks", src: "/images/STARBUCK-logo.png" },
  { name: "CBS", src: "/images/CBS-logo.png" },
  { name: "American Eagle", src: "/images/AE-logo.png" },
  { name: "Elko Motor Company", src: "/images/elko-motor-company.png" },
];
