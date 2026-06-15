import { PageHero } from "@/components/ui/PageHero";
import { Stations } from "@/components/sections/Stations";
import { CTA } from "@/components/sections/CTA";
import { images } from "@/data/images";

export function StationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Channels"
        title="Tune in to the Global One Media family."
        description="13 radio brands across Elko, NV and Clovis, NM — plus always-on streaming. Pick a station and start listening."
        image={images.concertCrowd}
      />
      <Stations />
      <CTA title="Advertise across our network." />
    </>
  );
}
