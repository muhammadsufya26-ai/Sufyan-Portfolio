import Navbar from "@/components/Navbar";
import AntiGravityHero from "@/components/AntiGravityHero";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import DesignGallery from "@/components/DesignGallery";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { getDesignFolders } from "@/lib/designs";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function Home() {
  const folders = getDesignFolders();

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-zinc-100 flex flex-col selection:bg-cyan-400 selection:text-black">
      {/* Navigation */}
      <Navbar />

      {/* Hero with Anti-Gravity Animation */}
      <AntiGravityHero />

      {/* Dual Focus About Section */}
      <AboutSection />

      {/* Featured Projects Grid */}
      <ProjectsSection />

      {/* Editorial Design Gallery Teaser (@sufii.raw) */}
      <DesignGallery initialFolders={folders} />

      {/* Contact & Transmission Terminal */}
      <ContactSection />

      {/* System Footer & Telemetry */}
      <Footer />
    </main>
  );
}
