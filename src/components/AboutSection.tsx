import { IMAGES } from "@/lib/images";

export function AboutSection() {
  return (
    <section className="px-edge-margin py-section-gap grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
      <div className="md:col-span-5 relative space-y-gutter">
        <div className="aspect-[3/4] w-4/5 ml-auto">
          <img
            alt="Botanical Ingredients"
            className="w-full h-full object-cover grayscale"
            src={IMAGES.botanical}
          />
        </div>
        <div className="aspect-square w-1/2 -mt-24 relative z-10 border-[12px] border-background">
          <img
            alt="Scent Profiling"
            className="w-full h-full object-cover"
            src={IMAGES.profiling}
          />
        </div>
      </div>

      <div className="md:col-start-7 md:col-span-5 space-y-gutter">
        <span className="font-label-sm text-label-sm uppercase text-secondary tracking-[0.4em]">
          <img
            alt="bullet icon"
            className="inline-block w-4 h-4 mr-3 opacity-60 mb-1"
            src={IMAGES.bulletIcon}
          />
          The Narrative
        </span>
        <h2 className="font-title-lg text-title-lg leading-tight">
          An enduring legacy of architectural olfactory design.
        </h2>
        <div className="space-y-6">
          <p className="font-body-md text-body-md text-on-surface-variant">
            Faridah was founded on the principle that scent should be felt, not just smelled. We strip
            away the unnecessary, focusing on the raw tension between natural ingredients and modern
            structure.
          </p>
          <p className="font-accent-italic text-accent-italic text-secondary border-l border-outline-variant/30 pl-gutter py-2">
            &quot;True luxury is found in the pauses, the whispers, and the spaces between the notes.&quot;
          </p>
        </div>
      </div>
    </section>
  );
}

