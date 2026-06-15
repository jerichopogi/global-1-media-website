import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { companyOverview } from "@/data/company";
import { images } from "@/data/images";

/** Home-page "about" teaser — image + lede + link to the full About page. */
export function AboutTeaser() {
  return (
    <Section>
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="relative">
          <div className="relative overflow-hidden rounded-[2rem] border border-line">
            <img
              src={images.mixer}
              alt="Broadcast mixing desk"
              loading="lazy"
              className="aspect-[5/4] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-bg/60 to-transparent" />
          </div>
          {/* floating accent card */}
          <div className="absolute -bottom-6 -right-4 hidden rounded-2xl border border-line bg-surface/90 px-6 py-5 backdrop-blur sm:block">
            <div className="text-3xl font-black text-brand-bright">2021</div>
            <div className="text-xs uppercase tracking-wide text-dim">
              Founded
            </div>
          </div>
        </Reveal>

        <Reveal>
          <span className="eyebrow">Who we are</span>
          <h2 className="mt-5 text-[clamp(1.9rem,1.4rem+2vw,3rem)] font-extrabold tracking-tight">
            A flourishing broadcast company with a point of view.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-dim">
            {companyOverview.lead}
          </p>
          <p className="mt-4 leading-relaxed text-dim">{companyOverview.body[0]}</p>
          <div className="mt-8">
            <Button to="/about" variant="ghost">
              More about us
            </Button>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
