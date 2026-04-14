import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { PropertyGallery } from "@/components/PropertyGallery";
import { AgentProfile } from "@/components/AgentProfile";
import { Footer } from "@/components/Footer";
// Removing DataCaptureForm for now to replace with the Property Gallery approach
// Features can remain as 'services' but let's restyle it if needed later.
import { Features } from "@/components/Features";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Nav />
      <main>
        <Hero />
        <PropertyGallery />
        <AgentProfile />
        <Features />
      </main>
      <Footer />
    </div>
  );
}