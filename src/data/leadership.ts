/** Executive leadership. Add `photo` (path in /public) when headshots arrive. */

export type Executive = {
  name: string;
  role: string;
  location: string;
  photo?: string;
  bio: string[];
};

export const executives: Executive[] = [
  {
    name: "Lisa Schmidt",
    role: "EVP, Programming",
    location: "Clovis / Portales, NM",
    photo: "/images/lisa.png",
    bio: [
      "Born in Manhattan, Kansas, Lisa developed strong community connections growing up near Kansas State University. Her family relocated to Albuquerque during her teenage years, where she attended Sandia High School, and she earned a Business Administration degree from Eastern New Mexico University in Portales.",
      "Her broadcasting career spans on-air hosting, technical work, and equipment repair — notably soldering components after lightning damage. For Lisa, the true essence of being a broadcaster lies in the opportunity to interact with her audience.",
    ],
  },
  {
    name: "Todd Edwards",
    role: "EVP, Programming",
    location: "Elko, NV",
    photo: "/images/todd.png",
    bio: [
      "Todd has been in the broadcast industry for 45 years, beginning in 1979 as a part-time automation operator and sports engineer. He attended Vincennes University's Broadcasting Technology program.",
      "He has held many positions at radio stations over the decades, including ownership roles, and joined Global One Media to contribute his accumulated knowledge.",
    ],
  },
];
