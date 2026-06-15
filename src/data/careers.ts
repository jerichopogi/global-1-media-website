/** Careers content — intro, values, open positions, and market locations. */

export const careersIntro = {
  tagline: "Exploring paths to success and fulfillment in the professional world.",
  body: "Welcome to Global One Media, Inc! As a leading radio and media company, we are committed to providing high-quality content to our audience and creating opportunities for individuals who share our passion for excellence. We actively recruit across programming, sales, marketing, and production in a collaborative, innovative, and dynamic environment.",
  values: ["Diversity", "Creativity", "Hard work"],
};

export type Position = {
  title: string;
  type: string;
  location: string;
  summary: string;
  responsibilities: string[];
  qualifications: string[];
};

export const positions: Position[] = [
  {
    title: "National Salesperson",
    type: "Commission · Remote available",
    location: "Northern Nevada",
    summary:
      "Global One Media, the leading multi-platform audio and media provider in northern Nevada, is seeking an experienced, high-energy, high-achieving National Salesperson.",
    responsibilities: [
      "Drive revenue growth across 6 radio stations",
      "Commission-only role with remote option",
      "Requires broadcast radio national-sales experience",
      "Agency media-buying understanding is mandatory",
    ],
    qualifications: [
      "5+ years broadcast sales experience",
      "Managerial experience preferred",
      "Self-motivated, goal-driven, strong multitasking ability",
    ],
  },
];

export type MarketLocation = {
  city: string;
  state: string;
  blurb: string;
};

export const locations: MarketLocation[] = [
  {
    city: "Elko",
    state: "Nevada",
    blurb:
      "Western culture, outdoor recreation, and modern amenities with a lower-than-average cost of living.",
  },
  {
    city: "Clovis",
    state: "New Mexico",
    blurb:
      "Small-town charm with diverse career opportunities in healthcare, education, agriculture, and manufacturing.",
  },
];
