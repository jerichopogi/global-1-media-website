/** Primary navigation — routes for the multi-page site. */

export type NavItem = {
  label: string;
  to: string;
};

export const navItems: NavItem[] = [
  { label: "About", to: "/about" },
  { label: "Solutions", to: "/solutions" },
  { label: "Stations", to: "/stations" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
];
