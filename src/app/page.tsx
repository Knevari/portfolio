import Hero from "@/components/hero/Hero";
import Galaxy from "@/components/canvas/Galaxy";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Galaxy />
      <Hero />
      {/* Additional sections like Projects can be added here later */}
    </main>
  );
}
