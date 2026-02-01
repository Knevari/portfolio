import Hero from "@/components/hero/Hero";
import Galaxy from "@/components/canvas/Galaxy";
import Starfall from "@/components/canvas/Starfall";
import CRTOverlay from "@/components/hud/CRTOverlay";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Starfall />
      <Galaxy />
      <Hero />
      <CRTOverlay />
      {/* Additional sections like Projects can be added here later */}
    </main>
  );
}
