import { PageHero } from "@/components/ui/PageHero";
import { Careers } from "@/components/sections/Careers";
import { CTA } from "@/components/sections/CTA";
import { images } from "@/data/images";
import { careersIntro } from "@/data/careers";

export function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Work Here"
        title="Build your career in broadcast & media."
        description={careersIntro.tagline}
        image={images.teamMeeting}
      />
      <Careers />
      <CTA
        title="Don't see your role?"
        body="We're always interested in talented people across programming, sales, marketing, and production. Send your résumé and tell us what you do best."
      />
    </>
  );
}
