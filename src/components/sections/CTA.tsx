import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { images } from "@/data/images";

type CTAProps = {
  title?: string;
  body?: string;
};

/** Full-bleed call-to-action band with an image backdrop. */
export function CTA({
  title = "Let's put your brand on air.",
  body = "From a single spot to a multi-platform campaign, our team builds the strategy that drives a win — every time.",
}: CTAProps) {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-10">
        <img
          src={images.liveMic}
          alt=""
          className="h-full w-full object-cover opacity-30"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/90 to-bg/60" />
        <div className="absolute inset-0 bg-[radial-gradient(700px_400px_at_20%_120%,rgba(101,188,123,0.18),transparent_60%)]" />
      </div>

      <div className="shell py-[clamp(4rem,3rem+5vw,8rem)]">
        <Reveal className="max-w-2xl">
          <h2 className="text-[clamp(2rem,1.4rem+2.6vw,3.5rem)] font-black tracking-[-0.02em]">
            {title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-dim">{body}</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button to="/contact" variant="primary">
              Get in touch
            </Button>
            <Button to="/solutions" variant="ghost">
              Explore solutions
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
