import { Link } from "wouter";
import { CheckCircle, Tag, Layers, Sparkles, TrendingUp } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const guideSections = [
  {
    title: "Prepare your home",
    description:
      "Detailed guidance on staging, repairs, and pricing so your home makes the best first impression on buyers and agents.",
    icon: Tag,
  },
  {
    title: "Price with confidence",
    description:
      "We help you position your home correctly in the market, balancing speed and value with data-backed pricing.",
    icon: TrendingUp,
  },
  {
    title: "Marketing that converts",
    description:
      "From professional photography to targeted listing distribution, get the exposure your home deserves.",
    icon: Sparkles,
  },
  {
    title: "Close with clarity",
    description:
      "Simplify the selling process with transparent offers, clear negotiation steps, and a seamless transaction flow.",
    icon: Layers,
  },
];

export default function SellersGuidePage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Nav />
      <main className="pt-20">
        <div className="container mx-auto px-6 py-12 max-w-6xl space-y-12">
          <section className="rounded-[2rem] bg-card border border-border p-10 shadow-xl">
            <div className="max-w-3xl">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                Seller’s Guide
              </span>
              <h1 className="mt-6 text-5xl font-serif font-bold tracking-tight text-foreground">
                Sell faster and for a stronger price.
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                A premium seller experience built around smart pricing, attractive presentation, and a disciplined closing process.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground shadow-md transition hover:bg-primary/90"
                >
                  Get a home value estimate
                </Link>
                <Link
                  to="/appointment"
                  className="inline-flex items-center justify-center rounded-full border border-border bg-background px-8 py-3 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary"
                >
                  Book a seller review
                </Link>
              </div>
            </div>
          </section>

          <section className="grid gap-6 md:grid-cols-2">
            {guideSections.map((section) => {
              const Icon = section.icon;
              return (
                <article key={section.title} className="rounded-3xl bg-card p-8 border border-border shadow-sm hover:shadow-lg transition">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="mt-6 text-2xl font-serif font-bold text-foreground">{section.title}</h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{section.description}</p>
                </article>
              );
            })}
          </section>

          <section className="rounded-[2rem] bg-gradient-to-r from-secondary/10 via-background to-primary/10 border border-border p-10">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <h2 className="text-3xl font-serif font-bold text-foreground">Sell with clarity and speed</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  We support every stage of your listing journey, from staging recommendations to closing day coordination.
                </p>
                <ul className="mt-8 space-y-4 text-foreground">
                  {[
                    "Competitive pricing review with comparable sales analysis",
                    "Luxury-ready marketing and online listing optimization",
                    "Offer review and negotiation support",
                    "Transparent closing guidance and buyer readiness",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="mt-1 h-5 w-5 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl bg-card p-8 border border-border shadow-sm">
                <h3 className="text-xl font-semibold text-foreground">Need a seller action plan?</h3>
                <p className="mt-4 text-muted-foreground">
                  We’ll help you prepare the home, launch the listing, and negotiate the best offer.
                </p>
                <Link
                  to="/contact"
                  className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
                >
                  Contact our seller team
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
