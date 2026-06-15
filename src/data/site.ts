/**
 * Site-wide constants: identity, contact details, social, mobile apps, footer.
 * Edit here to update the header, footer, and contact section everywhere.
 */

export const site = {
  name: "Global One Media",
  shortName: "Global One",
  founded: 2021,
  tagline: "Bringing the World to You",
  description:
    "Global One Media is a flourishing broadcast company offering exciting new ideas and solutions for media, entertainment, and digital marketing. We specialize in on-air campaigns, online strategies, and event marketing sponsorship.",
  mission:
    "Your premiere content source for entertainment, news, sports, social media marketing and podcasts.",
} as const;

export const contact = {
  phone: "(775) 777-1196",
  phoneHref: "tel:+17757771196",
  email: "info@global1media.com",
  recruitingEmail: "recruiting@global1media.com",
  address: {
    line1: "6605 Grand Montecito Pkwy Suite 100",
    line2: "Las Vegas, NV 89149",
  },
} as const;

export type SocialLink = {
  label: string;
  href: string;
  icon: "facebook" | "x" | "instagram";
};

export const socials: SocialLink[] = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/GlobalOneMediaInc",
    icon: "facebook",
  },
  {
    label: "X (Twitter)",
    href: "https://twitter.com/Global1MediaInc",
    icon: "x",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/global1mediainc/",
    icon: "instagram",
  },
];

export type AppLink = {
  store: "apple" | "google";
  label: string;
  sublabel: string;
  href: string;
};

export const apps: AppLink[] = [
  {
    store: "apple",
    label: "App Store",
    sublabel: "Download on the",
    href: "https://apps.apple.com/us/app/global-one-media/id6446038326?uo=2",
  },
  {
    store: "google",
    label: "Google Play",
    sublabel: "Get it on",
    href: "https://play.google.com/store/apps/details?id=com.globalonemedia1.app&pli=1",
  },
];

export const copyright = `© 2021–${new Date().getFullYear()} All Rights Reserved · Global One Media`;
