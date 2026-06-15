import { Button } from "@/components/ui/Button";

export function NotFoundPage() {
  return (
    <section className="flex min-h-[70vh] items-center pt-[76px]">
      <div className="shell text-center">
        <p className="eyebrow justify-center">Off the air</p>
        <h1 className="mt-5 text-[clamp(3rem,2rem+6vw,7rem)] font-black tracking-tight">
          404
        </h1>
        <p className="mx-auto mt-4 max-w-md text-lg text-dim">
          We couldn't tune in to that page. Let's get you back to a strong
          signal.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button to="/" variant="primary">
            Back home
          </Button>
          <Button to="/stations" variant="ghost">
            Browse stations
          </Button>
        </div>
      </div>
    </section>
  );
}
