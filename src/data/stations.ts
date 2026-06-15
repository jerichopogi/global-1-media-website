/**
 * Station directory. To add/edit a station, change one entry below — the
 * Stations section renders straight from these groups.
 */

export type Station = {
  name: string;
  frequency: string | null;
  format: string;
  href: string;
  /** Brand logo in /public/images (square or near-square PNG). */
  logo: string;
};

export type StationGroup = {
  id: string;
  market: string;
  region: string;
  blurb: string;
  stations: Station[];
};

export const stationGroups: StationGroup[] = [
  {
    id: "elko",
    market: "Elko",
    region: "Nevada",
    blurb:
      "Seven brands serving Northeast Nevada — hit music, country, rock, talk, and classifieds.",
    stations: [
      {
        name: "Mix 96.7 FM",
        frequency: "96.7",
        format: "Northeast Nevada's #1 Hit Music Station",
        href: "https://www.mix967fm.com",
        logo: "/images/mix-96-7.png",
      },
      {
        name: "Big Country 103.9 FM",
        frequency: "103.9",
        format: "Today's Best Country",
        href: "https://www.big1039fm.com",
        logo: "/images/big-country.png",
      },
      {
        name: "94.5 Kool FM",
        frequency: "94.5",
        format: "The Most Music and Variety",
        href: "https://www.kool945fm.com",
        logo: "/images/kool-94-5.png",
      },
      {
        name: "Talk Radio 107.7 FM",
        frequency: "107.7",
        format: "News. Opinion. Information.",
        href: "https://www.talk1077fm.com",
        logo: "/images/talk-radio.png",
      },
      {
        name: "Overdrive 100.5 FM",
        frequency: "100.5",
        format: "The High Desert's Rock Station",
        href: "https://overdrivefm.com/",
        logo: "/images/overdrive-100-5.png",
      },
      {
        name: "Coyote Rock 101.1 FM",
        frequency: "101.1",
        format: "Rock'n Northeast Nevada",
        href: "https://www.rock1011fm.com",
        logo: "/images/coyote-rock.png",
      },
      {
        name: "Ruby Want Ads",
        frequency: null,
        format: "Classified Listings · Nevada",
        href: "https://rubywantads.com/",
        logo: "/images/ruby-want-ads.png",
      },
    ],
  },
  {
    id: "clovis",
    market: "Clovis",
    region: "New Mexico",
    blurb:
      "Five brands serving Clovis & Portales — hit music, country, rock, and local news.",
    stations: [
      {
        name: "Mix 107.5 FM",
        frequency: "107.5",
        format: "Hit Music and More",
        href: "https://www.heymix.com",
        logo: "/images/mix-107-5.png",
      },
      {
        name: "KSEL Country 105.9 FM",
        frequency: "105.9",
        format: "Country",
        href: "http://kselcountry.com",
        logo: "/images/ksel-country.png",
      },
      {
        name: "Overdrive 101.5 FM",
        frequency: "101.5",
        format: "Rock",
        href: "https://overdrive1015.com/",
        logo: "/images/overdrive-101-5.png",
      },
      {
        name: "Cow Country",
        frequency: null,
        format: "Classic Country",
        href: "https://www.cowcountryradio.com/",
        logo: "/images/cow-country.png",
      },
      {
        name: "Your News New Mexico",
        frequency: null,
        format: "News",
        href: "https://yournewsnm.com/",
        logo: "/images/nnrh.png",
      },
    ],
  },
  {
    id: "streaming",
    market: "Streaming",
    region: "Online",
    blurb: "Always-on digital channels you can take anywhere.",
    stations: [
      {
        name: "Radio Santa",
        frequency: null,
        format: "Holiday Favorites",
        href: "https://radio-santa.com/",
        logo: "/images/radio-santa.png",
      },
    ],
  },
];
