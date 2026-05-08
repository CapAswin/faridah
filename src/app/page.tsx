import { AboutSection } from "@/components/AboutSection";
import { CollectionsSection } from "@/components/CollectionsSection";
import { ContactSection } from "@/components/ContactSection";
import { GrainOverlay } from "@/components/GrainOverlay";
import { HeroSection } from "@/components/HeroSection";
import { PhilosophySection } from "@/components/PhilosophySection";
import { ScentNoteSection } from "@/components/ScentNoteSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TopAppBar } from "@/components/TopAppBar";

export default function Home() {
  return (
    <>
      <GrainOverlay />
      <TopAppBar />

      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <CollectionsSection />
        <PhilosophySection />
        <ScentNoteSection />
        <ContactSection />
      </main>
    </>
  );
}
