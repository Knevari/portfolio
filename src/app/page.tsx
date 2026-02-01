import Hero from "@/components/hero/Hero";
import Galaxy from "@/components/canvas/Galaxy";
import Starfall from "@/components/canvas/Starfall";
import CRTOverlay from "@/components/hud/CRTOverlay";
import MissionArchives from "@/components/sections/MissionArchives";

export default function Home() {
  return (
    <main className="relative bg-[#101010]">
      <Starfall />
      <Galaxy />
      <Hero />
      <MissionArchives />
      <CRTOverlay />
    </main>
  );
}
