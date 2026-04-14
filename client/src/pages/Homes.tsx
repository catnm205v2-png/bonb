import { Nav } from "@/components/Nav";
import { PropertyGallery } from "@/components/PropertyGallery";
import { Footer } from "@/components/Footer";

export default function HomesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Nav />
      <main className="pt-20">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-5xl font-serif font-bold mb-4">Discover Homes</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Browse our curated selection of premium properties, perfectly suited for your lifestyle.
          </p>
        </div>
        <PropertyGallery />
      </main>
      <Footer />
    </div>
  );
}