import { PageHero } from "@/components/ui/PageHero";
import { Solutions } from "@/components/sections/Solutions";
import { CTA } from "@/components/sections/CTA";
import { images } from "@/data/images";

export function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Advertising Solutions"
        title="Campaigns built to drive home a win."
        description="Radio reaches more consumers than any other medium. Pair it with digital, streaming, and local activation for results that compound."
        image={images.radioTower}
      />
      <Solutions />
      <CTA title="Ready to build your campaign?" />
    </>
  );
}
