import { IMAGES } from "@/lib/images";

export function TopAppBar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-sm border-b border-outline-variant/20">
      <nav className="flex justify-between items-center w-full px-edge-margin py-4">
        <div className="flex items-center">
          <img
            alt="FARIDAH Logo"
            className="h-8 w-auto object-contain"
            src={IMAGES.logoTriangle}
          />
        </div>

        <div className="hidden md:flex gap-gutter items-center">
          <a
            className="font-nav-link text-nav-link uppercase tracking-[0.2em] text-on-surface-variant hover:text-secondary transition-colors duration-500"
            href="#"
          >
            Collections
          </a>
          <a
            className="font-nav-link text-nav-link uppercase tracking-[0.2em] text-on-surface-variant hover:text-secondary transition-colors duration-500"
            href="#"
          >
            Services
          </a>
          <a
            className="font-nav-link text-nav-link uppercase tracking-[0.2em] text-on-surface-variant hover:text-secondary transition-colors duration-500"
            href="#"
          >
            Philosophy
          </a>
          <a
            className="font-nav-link text-nav-link uppercase tracking-[0.2em] text-on-surface-variant hover:text-secondary transition-colors duration-500"
            href="#"
          >
            Contact
          </a>
        </div>

        <div className="flex items-center gap-gutter text-primary opacity-70">
          <button className="transition-opacity duration-300 hover:opacity-100">
            <span className="material-symbols-outlined">search</span>
          </button>
          <button className="transition-opacity duration-300 hover:opacity-100">
            <span className="material-symbols-outlined">shopping_bag</span>
          </button>
        </div>
      </nav>
    </header>
  );
}

