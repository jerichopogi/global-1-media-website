import { PageHero } from "@/components/ui/PageHero";
import { Contact } from "@/components/sections/Contact";
import { Newsletter } from "@/components/sections/Newsletter";
import { images } from "@/data/images";

export function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Connect"
        title="Get in touch."
        description="For advertising inquiries, partnerships, or anything else — we'd love to hear from you."
        image={images.citySkyline}
      />
      <Contact />
      <div className="pb-[clamp(4rem,3rem+5vw,8rem)]">
        <Newsletter />
      </div>
    </>
  );
}
