import { Nav } from "@/components/Nav";
import { AgentProfile } from "@/components/AgentProfile";
import { Footer } from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Nav />
      <main className="pt-20">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-5xl font-serif font-bold mb-4">About Ben Chandran</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Learn more about your dedicated real estate advisor and the philosophy behind our premium service.
          </p>
        </div>
        <AgentProfile />
      </main>
      <Footer />
    </div>
  );
}