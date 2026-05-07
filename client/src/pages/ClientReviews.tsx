import { Star, Quote, CheckCircle } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const reviews = [
  {
    name: "Laura J.",
    role: "Homebuyer",
    quote:
      "Ben helped us find the perfect home quickly. His market insight and attention to detail made every step effortless.",
    rating: 5,
  },
  {
    name: "Marcus A.",
    role: "Seller",
    quote:
      "The listing experience was premium. We sold above asking price and stayed informed the entire time.",
    rating: 5,
  },
  {
    name: "Priya S.",
    role: "Investor",
    quote:
      "Professional, responsive, and strategic. Ben delivered precise recommendations and excellent service.",
    rating: 5,
  },
];

export default function ClientReviewsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Nav />
      <main className="pt-20 pb-24">
        <div className="container mx-auto px-6 max-w-6xl space-y-12">
          <section className="rounded-[2rem] bg-card border border-border p-12 shadow-xl">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              Trusted by clients
            </span>
            <h1 className="mt-8 text-5xl font-serif font-bold tracking-tight text-foreground">
              Real reviews from real buyers and sellers.
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              See why clients recommend BuyorNotBuy.com for every stage of the home journey — from search and offer strategy to closing day.
            </p>
          </section>

          <section className="grid gap-6 lg:grid-cols-3">
            {reviews.map((review) => (
              <article key={review.name} className="rounded-3xl bg-card border border-border p-8 shadow-sm hover:shadow-lg transition">
                <div className="flex items-center gap-3 text-primary">
                  <Quote className="h-6 w-6" />
                  <span className="text-sm font-semibold uppercase tracking-[0.3em]">Review</span>
                </div>
                <p className="mt-6 text-foreground leading-relaxed">{review.quote}</p>
                <div className="mt-8 flex items-center justify-between text-sm text-muted-foreground">
                  <div>
                    <div className="font-semibold text-foreground">{review.name}</div>
                    <div>{review.role}</div>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, index) => (
                      <Star key={index} className="h-4 w-4 text-primary" />
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </section>

          <section className="rounded-[2rem] bg-gradient-to-r from-primary/10 via-background to-secondary/10 border border-border p-10">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <h2 className="text-3xl font-serif font-bold text-foreground">Why clients choose us</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Trusted guidance, local market expertise, and a high-touch process designed to keep every transaction calm, fast, and rewarding.
                </p>
                <ul className="mt-8 space-y-4 text-foreground">
                  {[
                    "Clear communication from the first call to closing.",
                    "Tailored strategies for buyers, sellers, and investors.",
                    "Rapid response times and thoughtful support.",
                    "Proven results in competitive markets.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="mt-1 h-5 w-5 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl bg-card p-8 border border-border shadow-sm">
                <h3 className="text-xl font-semibold text-foreground">Want to share your story?</h3>
                <p className="mt-4 text-muted-foreground">
                  Reach out and let us know how we can help your next move feel effortless.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
