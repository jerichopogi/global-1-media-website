import { PageHero } from "@/components/ui/PageHero";
import { About } from "@/components/sections/About";
import { Leadership } from "@/components/sections/Leadership";
import { Partners } from "@/components/sections/Partners";
import { CTA } from "@/components/sections/CTA";
import { images } from "@/data/images";
import { site } from "@/data/site";

export function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Global One Media"
        title="Your premiere source for content that connects."
        description={site.mission}
        image={images.broadcastMic}
      />
      <About />
      <Leadership />
      <Partners />
      <CTA title="Want to work with us?" />
    </>
  );
}
