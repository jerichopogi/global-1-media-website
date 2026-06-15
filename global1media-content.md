# Global One Media — Site Content Archive

> **Source:** https://global1media.com/
> **Scraped:** 2026-06-15
> **Purpose:** Reference document for redesign — preserves all current site copy, structure, contact details, station inventory, and brand colors.

---

## Handover Note (Next Session)

**Project goal:** Redesign global1media.com with a modern aesthetic while preserving the existing brand color palette.

**What's already done:**
- Full content scrape of every public page (homepage, Company Overview, Executive Leadership, Career Opportunities, Contact, About) is stored in this file.
- All 13 station URLs (Elko + Clovis + streaming) captured for the channel directory section.
- Brand color palette extracted from the live CSS — see the "Brand Colors" section below. Preserve these exact hex values in the new design.
- Current visual aesthetic documented (dark theme, hero-first layout, station grid, client carousel, newsletter block).

**What's pending from the user in the next session:**
1. **New logo** (replaces current "Global 1 Media" wordmark).
2. **Asset pack** — likely station logos, executive headshots, photography, possibly typography/font files.
3. Confirmation on whether to keep dark theme as primary or open to a light/dual-mode variant.

**Open questions to ask the user when they return:**
- Do they want the current dark theme preserved, or are they open to a fresh direction (e.g., editorial / bento / scrollytelling) that still uses the brand palette?
- Tech stack preference for the rebuild (Next.js + Tailwind? Astro? plain static?).
- Should each station get its own dedicated landing within the main site, or remain external links?
- Any new content (updated bios, new job listings, additional executives) that isn't reflected here?

**Style direction recommendation** (per `~/.claude/rules/web/design-quality.md`):
Avoid template defaults. A radio/broadcast company is a strong fit for **editorial-magazine** or **bento-with-motion** styling — hierarchy through scale contrast, station tiles with real personality, audio waveform / signal motifs, and intentional dark-luxury treatment using the existing navy/teal palette.

---

## Brand Colors (extracted from live CSS)

Preserve these in the redesign. Frequency = number of CSS references on homepage.

| Hex | Role | Frequency | Notes |
|-----|------|-----------|-------|
| `#ffffff` | Primary text / surface contrast | 110 | Dominant text color on dark bg |
| `#1d78a2` | **Primary brand blue** | 13 | Teal-leaning blue — main accent / CTA |
| `#cee6ec` | Light brand blue | 12 | Soft accent / hover / muted surface |
| `#65bc7b` | Brand green | 6 | Secondary accent (success / live-on-air?) |
| `#010612` | Deep navy/black | 5 | Primary background |
| `#051533` | Dark navy | 4 | Secondary background / cards |
| `#32373c` | Dark gray | 3 | UI chrome / borders |
| `#333333` | Mid-dark gray | 2 | Body chrome |
| `rgb(255,105,0)` | Orange accent | 2 | Secondary CTA / highlight |
| `#000000` | Pure black | 2 | Hero / heavy contrast surfaces |

**Suggested token mapping for the rebuild:**
```css
:root {
  --color-bg:            #010612;  /* page background */
  --color-surface:       #051533;  /* cards, raised surfaces */
  --color-text:          #ffffff;
  --color-text-muted:    #cee6ec;
  --color-brand:         #1d78a2;  /* primary CTA, links */
  --color-brand-soft:    #cee6ec;  /* hover, subtle fills */
  --color-accent:        #65bc7b;  /* on-air / success */
  --color-accent-warm:   #ff6900;  /* alerts, secondary CTA */
  --color-border:        #32373c;
}
```

---

## Current Visual Design Reference

- **Theme:** Dark, near-black background with white text and a teal-blue primary accent.
- **Hero:** Full-bleed, tagline "BRINGING THE WORLD TO YOU" with a "Start Listening" CTA.
- **Layout:** Fixed top nav → hero → tabbed station directory (Elko / Clovis / Streaming) → "Who We Have Worked With" client logo carousel → newsletter signup → footer.
- **Typography:** Bold sans-serif headings, lighter-weight sans-serif body.
- **Cards:** Station tiles in a grid; client logos in a horizontal carousel.
- **Motion:** Light hover states on station cards; logo carousel scroll.
- **Footer:** Contact block, social icons (FB / X / IG), app-store badges (iOS + Android).

---

## Site Map / Page Inventory

| Page | URL | Status |
|------|-----|--------|
| Home | https://global1media.com/ | Captured below |
| Company Overview | https://global1media.com/index.php/company-overview/ | Captured below |
| Executive Leadership | https://global1media.com/index.php/executive-leadership/ | Captured below |
| Local Solutions | /index.php/company-overview/#local_solutions | Anchor on Company Overview |
| Broadcast | /index.php/company-overview/#broadcast | Anchor on Company Overview |
| Digital Solutions | /index.php/company-overview/#digital_solutions | Anchor on Company Overview |
| Career Opportunities | https://global1media.com/index.php/career-opportunities/ | Captured below |
| Contact | https://global1media.com/index.php/contact/ | Captured below |
| About Global One Media | https://global1media.com/index.php/about/about-global-one-media/ | Captured below |

---

## Page: Home

### Hero
- **Tagline:** BRINGING THE WORLD TO YOU
- **CTA:** Start Listening

### Navigation
- About → Company Overview, Executive Leadership
- Advertising Solutions → Local, Broadcast, Digital
- Work Here → Career Opportunities
- Connect → Contact
- Stations/Streams → Our Channels

### Station Directory (Our Channels)

**Elko, Nevada**
| Station | Frequency | Slogan / Format | URL |
|---------|-----------|-----------------|-----|
| Mix 96.7 FM | 96.7 | Northeast Nevada's #1 Hit Music Station | https://www.mix967fm.com |
| Big Country 103.9 FM | 103.9 | Today's Best Country | https://www.big1039fm.com |
| 94.5 Kool FM | 94.5 | The Most Music and Variety | https://www.kool945fm.com |
| Talk Radio 107.7 FM | 107.7 | News. Opinion. Information | https://www.talk1077fm.com |
| Overdrive 100.5 FM | 100.5 | The High Desert's Rock Station | https://overdrivefm.com/ |
| Coyote Rock 101.1 FM | 101.1 | Rock'n Northeast Nevada | https://www.rock1011fm.com |
| Ruby Want Ads | — | Classified Listings Nevada | https://rubywantads.com/ |

**Clovis, New Mexico**
| Station | Frequency | Slogan / Format | URL |
|---------|-----------|-----------------|-----|
| Mix 107.5 FM | 107.5 | Hit Music and More | https://www.heymix.com |
| KSEL Country 105.9 FM | 105.9 | Country | http://kselcountry.com |
| Overdrive 101.5 FM | 101.5 | Rock | https://overdrive1015.com/ |
| Cow Country | — | Classic Country | https://www.cowcountryradio.com/ |
| Your News New Mexico | — | News | https://yournewsnm.com/ |

**Streaming Channels**
| Channel | Format | URL |
|---------|--------|-----|
| Radio Santa | Holiday Favorites | https://radio-santa.com/ |

### Sections (homepage)
- "WHO WE HAVE WORKED WITH" — client/partner logo carousel.
- Newsletter block: "Stay up-to-date with our latest shows."

### Footer (global, present on every page)
- **Description:** Global One Media is a flourishing broadcast company offering exciting new ideas and solutions for media, entertainment, and digital marketing. We specialize on-air campaigns, online strategies, and event marketing sponsorship.
- **Address:** 6605 Grand Montecito Pkwy Suite 100, Las Vegas, NV 89149
- **Phone:** (775) 777-1196
- **Email:** info@global1media.com
- **Social:** [Facebook](https://www.facebook.com/GlobalOneMediaInc), [Twitter/X](https://twitter.com/Global1MediaInc), [Instagram](https://www.instagram.com/global1mediainc/)
- **Mobile apps:** [Google Play](https://play.google.com/store/apps/details?id=com.globalonemedia1.app&pli=1), [Apple App Store](https://apps.apple.com/us/app/global-one-media/id6446038326?uo=2)
- **Copyright:** © 2021–2026 All Rights Reserved | Global One Media

---

## Page: Company Overview

**Heading:** Company Overview

**Lead paragraph:**
> Global One Media is a flourishing broadcast company offering exciting new ideas and solutions for media, entertainment, and digital marketing. We specialize on-air campaigns, online strategies, and event marketing sponsorship.

The innovative team focuses on "what it takes to drive home a win every time."

### Section: Broadcast (#broadcast)
> Radio is the largest medium overall, reaching more consumers than any other media available including television, Facebook, and smartphones.

> Radio may also be the most effective way to drive traffic and leads directly to your website.

> Nothing will be more effective for your campaign than the power of our radio brands.

### Section: Digital Solutions (#digital_solutions)
Custom audience building and lead capture across mobile and social platforms. Services include:
- Web Design
- SEO / SEM
- Mobile
- Social
- Video
- OTT / CTV

### Section: Streaming
> Global One Media's Streaming Audio Platform allows you to use the power of sound and advanced targeting methods to reach your ideal customer with pinpoint precision.

Targeting capabilities: **geography, demographics, online behavior**.

### Section: Local Solutions (#local_solutions)
Referenced via anchor in main nav; content shares the broader Company Overview narrative — emphasis on local-market impact via the broadcast + digital combination.

---

## Page: Executive Leadership

### Lisa Schmidt — EVP Programming, Clovis / Portales NM
Born in Manhattan, Kansas, Lisa developed strong community connections growing up near Kansas State University. Her family relocated to Albuquerque during her teenage years, where she attended Sandia High School. She earned a Business Administration degree from Eastern New Mexico University in Portales.

Lisa is a mother to Ryan and Amanda, and shares her home with a cat named Gizmo. She maintains "an extensive network of friends and supportive family."

Her broadcasting career spans multiple roles: on-air hosting, technical work, and equipment repair (notably soldering components after lightning damage). She emphasizes that "the true essence of being a broadcaster lies in the opportunity to interact with her audience."

### Todd Edwards — EVP Programming, Elko
Todd has been in the broadcast industry for 45 years, beginning in 1979 as a part-time automation operator and sports engineer. He attended Vincennes University's Broadcasting Technology program and has held many positions at the radio stations, including ownership roles. He joined Global One Media to contribute his accumulated knowledge.

---

## Page: Career Opportunities

**Tagline:** Exploring paths to success and fulfillment in the professional world.

### Intro
> Welcome to the career opportunities page of Global One Media, Inc! As a leading radio and media company, we are committed to providing high-quality content to our audience and creating opportunities for individuals who share our passion for excellence.

The company actively recruits across programming, sales, marketing, and production roles, emphasizing a **collaborative, innovative, and dynamic** work environment.

**Company values:** diversity, creativity, hard work.

**Submission email:** recruiting@global1media.com

### Open Position — NATIONAL Sales

> Global One Media, the leading multi-platform audio and media provider in northern Nevada is seeking an experienced, high-energy, high-achieving National Salesperson…

**Key details:**
- Revenue growth across 6 radio stations
- Commission-only, remote position available
- Requires broadcast radio national-sales experience
- Agency media-buying understanding mandatory

**Preferred qualifications:**
- 5+ years broadcast sales experience
- Managerial experience preferred
- Self-motivated, goal-driven, multitasking ability

**Apply:** RECRUITING@GLOBAL1MEDIA.COM

### Locations

**Elko, Nevada** — Western culture, outdoor recreation, and modern amenities with a lower-than-average cost of living.

**Clovis, New Mexico** — Small-town charm with diverse career opportunities in healthcare, education, agriculture, and manufacturing.

---

## Page: Contact

**Heading:** Get in touch

> For advertisement inquiries please use our press inquiries page.

- **Phone:** (775) 777-1196
- **Address:** 6605 Grand Montecito Pkwy Suite 100, Las Vegas, NV 89149
- **Email:** info@global1media.com

### Contact form fields
- Name (required) — First / Last
- Email (required) — Enter Email / Confirm Email
- Message (required)
- CAPTCHA
- Newsletter opt-in checkbox: "Stay up-to-date with our latest shows"

### Form status messages
- Success: "Thank you for your message. It has been sent."
- Error: "There was an error trying to send your message. Please try again later."

---

## Page: About Global One Media

**Founded:** 2021

**Mission statement:**
> Your premiere content source for entertainment, news, sports, social media marketing and podcasts.

> Synergize marketing media-resources, to better serve local-markets and super-serve our advertisers.

**Core purpose:**
> Provide advertisers with strong local impact through broadcast, digital, popular influencers and social media with personal connections — operating on both live and on-demand bases.

**Service offerings:**
- Television
- Radio
- Streaming media
- Digital media
- On-air campaigns
- Online strategies
- Event marketing sponsorship

**Self-description:**
> A flourishing broadcast company offering exciting new ideas and solutions for media, entertainment, and digital marketing — staffed by an innovative team of cutting-edge professionals focused on delivering results.

---

## Asset Checklist for Redesign

When the user returns with assets, expect / request the following:

- [ ] New primary logo (SVG preferred, plus PNG fallback at 2x and 3x)
- [ ] New logo lockups (horizontal, stacked, icon-only, monochrome)
- [ ] Station logos for all 13 properties (Elko 7, Clovis 5, streaming 1)
- [ ] Executive headshots (Lisa Schmidt, Todd Edwards — and any new execs)
- [ ] Photography (studio shots, market shots of Elko / Clovis / Las Vegas HQ)
- [ ] Client / partner logos for the "Who We Have Worked With" carousel
- [ ] App icons (iOS + Android) and store badge SVGs
- [ ] Brand guidelines doc, if one exists (typography, voice, do/don't)
- [ ] Updated bios / new open positions / any copy revisions
- [ ] Favicon / social share images (OG, Twitter card)

---

## Notes & Caveats

- The current site runs on what appears to be a WordPress install (URLs include `/index.php/...`). The rebuild can drop that URL structure.
- Several listed nav sub-items (Local Solutions, Broadcast, Digital Solutions) are anchor links on a single Company Overview page rather than standalone pages.
- The "About → About Global One Media" page exists under `/index.php/about/about-global-one-media/` but is not surfaced in main nav — content largely overlaps with Company Overview.
- The 2026 copyright in the footer suggests the site is actively maintained but content (job listings, exec roster) may still need a freshness check with the user before launch.
- "For advertisement inquiries please use our press inquiries page" — a press inquiries page is referenced on the Contact page but was not found in the nav; confirm with the user whether one exists or should be built.
