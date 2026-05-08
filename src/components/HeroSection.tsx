import { IMAGES } from "@/lib/images";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center pt-24 md:pt-0 overflow-hidden">
      <div className="w-full md:w-1/2 flex flex-col justify-center px-edge-margin space-y-gutter relative z-10 order-2 md:order-1">
        <h1 className="font-hero-display text-hero-display text-primary max-w-xl">
          The Art of Scent
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">
          Crafting invisible landscapes through heritage, restraint, and the
          rarest botanical distillations.
        </p>
        <div className="pt-8">
          <a
            className="inline-block border border-primary px-10 py-4 font-nav-link text-nav-link uppercase tracking-widest hover:bg-primary hover:text-white transition-all duration-700"
            href="#"
          >
            Explore Collection
          </a>
        </div>
      </div>

      <div className="w-full md:w-1/2 h-[512px] md:h-screen relative order-1 md:order-2">
        <img
          alt="Luxury Perfume Bottle"
          className="absolute inset-0 w-full h-full object-cover grayscale-[0.2] contrast-[1.1]"
          src={IMAGES.hero}
        />
      </div>
    </section>
  );
}

