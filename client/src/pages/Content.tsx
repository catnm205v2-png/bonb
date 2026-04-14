import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export default function ContentPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 flex flex-col">
      <Nav />
      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-5xl font-serif font-bold mb-6">Real Estate Content</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Insights, market trends, and expert advice to help you make informed real estate decisions.
          </p>

          <div className="grid gap-8">
            {[1, 2, 3].map((i) => (
              <article key={i} className="glass-panel p-8 rounded-2xl flex flex-col md:flex-row gap-8 items-center border border-border/50">
                <div className="w-full md:w-1/3 aspect-video bg-muted rounded-xl flex items-center justify-center">
                  <span className="text-muted-foreground">Image Placeholder</span>
                </div>
                <div className="w-full md:w-2/3 space-y-4">
                  <div className="text-sm font-bold text-primary uppercase tracking-wider">Market Trends</div>
                  <h2 className="text-2xl font-serif font-bold text-foreground">Understanding the Current Housing Market</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    A deep dive into current inventory levels, interest rates, and what it means for buyers and sellers in the upcoming quarter.
                  </p>
                  <button className="text-primary font-medium hover:underline">Read full article &rarr;</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}