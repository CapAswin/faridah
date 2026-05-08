export function ContactSection() {
  return (
    <section className="bg-surface-container-low py-section-gap px-edge-margin">
      <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-24">
        <div className="space-y-gutter">
          <h2 className="font-title-lg text-title-lg">Connect with the Maison.</h2>
          <p className="font-body-md text-on-surface-variant max-w-sm">
            For inquiries regarding bespoke services or press requests, our atelier is at your
            disposal.
          </p>
          <div className="flex gap-gutter pt-8">
            <a
              className="font-label-sm text-label-sm lowercase tracking-widest text-on-surface-variant hover:text-secondary transition-colors"
              href="#"
            >
              instagram
            </a>
            <a
              className="font-label-sm text-label-sm lowercase tracking-widest text-on-surface-variant hover:text-secondary transition-colors"
              href="#"
            >
              pinterest
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

