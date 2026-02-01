import Hero from "@/components/hero/Hero";
import Galaxy from "@/components/canvas/Galaxy";
import Starfall from "@/components/canvas/Starfall";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Starfall />
      <Galaxy />
      <Hero />
      {/* Additional sections like Projects can be added here later */}
    </main>
  );
}
