import { IMAGES } from "@/lib/images";

export function ScentNoteSection() {
  return (
    <section className="px-edge-margin py-section-gap flex flex-col items-center">
      <div className="flex items-center gap-gutter max-w-2xl group">
        <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0 border border-outline-variant/20">
          <img
            alt="Ingredient Detail"
            className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
            src={IMAGES.ingredient}
          />
        </div>
        <div>
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">
            The Base Note
          </span>
          <p className="font-accent-italic text-accent-italic mt-2">
            A foundational layer of wild-harvested Oud, ethically sourced from the deepest forests of
            Southeast Asia.
          </p>
        </div>
      </div>
    </section>
  );
}

