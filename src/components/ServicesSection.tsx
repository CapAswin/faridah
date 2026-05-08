type ServicePanel = {
  title: string;
  desc: string;
  img: string;
};

import { IMAGES } from "@/lib/images";

const PANELS: ServicePanel[] = [
  {
    title: "Custom Fragrance",
    desc: "Personal olfactory signatures for the discerning individual.",
    img: IMAGES.serviceBg1,
  },
  {
    title: "Scent Branding",
    desc: "Developing atmosphere for high-end boutique environments.",
    img: IMAGES.serviceBg2,
  },
  {
    title: "Private Collection",
    desc: "Archived formulas and rare vintages, by invitation only.",
    img: IMAGES.serviceBg3,
  },
];

export function ServicesSection() {
  return (
    <section className="py-section-gap">
      <div className="px-edge-margin mb-12 flex justify-between items-end">
        <div>
          <span className="font-label-sm text-label-sm uppercase tracking-[0.4em] text-on-surface-variant">
            <img
              alt="bullet icon"
              className="inline-block w-4 h-4 mr-3 opacity-60 mb-1"
              src={IMAGES.bulletIcon}
            />
            Offerings
          </span>
          <h2 className="font-title-lg text-title-lg mt-4">Bespoke Curation</h2>
        </div>
      </div>

      <div className="border-t border-outline-variant/30">
        {PANELS.map((panel) => (
          <div
            key={panel.title}
            className="group relative flex flex-col md:flex-row items-center px-edge-margin border-b border-outline-variant/30 hover:bg-surface-container transition-all duration-1000 cursor-pointer overflow-hidden py-10"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-1000">
              <img alt="Service background" className="w-full h-full object-cover" src={panel.img} />
            </div>

            <div className="mr-12 opacity-40 group-hover:opacity-100 transition-opacity duration-700">
              <img alt="bullet icon" className="w-6 h-6 opacity-80" src={IMAGES.bulletIcon} />
            </div>

            <h3 className="font-title-md text-title-md group-hover:translate-x-4 transition-transform duration-700">
              {panel.title}
            </h3>

            <p className="md:ml-auto font-body-md text-on-surface-variant group-hover:text-primary transition-colors duration-500">
              {panel.desc}
            </p>

            <div className="absolute bottom-0 left-0 h-0.5 bg-secondary w-0 group-hover:w-full transition-all duration-1000" />
          </div>
        ))}
      </div>
    </section>
  );
}

