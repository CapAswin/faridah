import { IMAGES } from "@/lib/images";

export function PhilosophySection() {
  return (
    <section className="bg-surface-container-low py-section-gap">
      <div className="max-w-4xl mx-auto px-edge-margin text-center space-y-gutter">
        <span className="font-label-sm text-label-sm uppercase tracking-[0.4em] text-on-surface-variant">
          Manifesto
        </span>
        <blockquote className="font-title-lg text-[56px] leading-tight text-primary">
          <div className="flex justify-center mb-6">
            <img alt="bullet icon" className="w-6 h-6 opacity-40" src={IMAGES.bulletIcon} />
          </div>
          Luxury is not decoration. It is restraint, proportion, and atmosphere.
        </blockquote>
        <div className="flex justify-center pt-8">
          <div className="w-24 h-[1px] bg-secondary-fixed-dim" />
        </div>
      </div>
    </section>
  );
}

