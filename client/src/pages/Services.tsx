import { Nav } from "@/components/Nav";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Nav />
      <main className="pt-20">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-5xl font-serif font-bold mb-4">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Comprehensive real estate solutions designed to guide you from search to closing with confidence.
          </p>
        </div>
        <Features />
      </main>
      <Footer />
    </div>
  );
}