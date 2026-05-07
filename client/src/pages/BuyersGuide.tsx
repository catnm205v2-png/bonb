import { Link } from "wouter";
import { CheckCircle, Home, Wallet, CalendarDays, TrendingUp } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const guideSections = [
  {
    title: "How to prepare",
    description:
      "Understand budgets, mortgage readiness, and the timing that gives you the strongest offer. We walk you through every detail so you arrive confident and ready.",
    icon: Home,
  },
  {
    title: "Market advantage",
    description:
      "Learn how to read supply, demand, and neighborhood trends so you can identify the right opportunity before it moves off market.",
    icon: TrendingUp,
  },
  {
    title: "Offer strategy",
    description:
      "Build offers that win while protecting your long-term investment, using proven negotiation and financing tactics.",
    icon: Wallet,
  },
  {
    title: "Move-in planning",
    description:
      "From inspections to closing day, stay ahead with a simple process that keeps your purchase on track and stress-free.",
    icon: CalendarDays,
  },
];

export default function BuyersGuidePage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Nav />
      <main className="pt-20">
        <div className="container mx-auto px-6 py-12 max-w-6xl space-y-12">
          <section className="rounded-[2rem] bg-card border border-border p-10 shadow-xl">
            <div className="max-w-3xl">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                Buyer’s Guide
              </span>
              <h1 className="mt-6 text-5xl font-serif font-bold tracking-tight text-foreground">
                Find the right home with confidence.
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Step-by-step guidance for modern home buyers: from financing and search strategy to winning offers and a seamless move-in.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground shadow-md transition hover:bg-primary/90"
                >
                  Book a buyer consultation
                </Link>
                <Link
                  to="/homes"
                  className="inline-flex items-center justify-center rounded-full border border-border bg-background px-8 py-3 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary"
                >
                  Browse homes
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

          <section className="rounded-[2rem] bg-gradient-to-r from-primary/10 via-background to-secondary/10 border border-border p-10">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <h2 className="text-3xl font-serif font-bold text-foreground">What to expect next</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  We make buying simple with concierge-level support, competitive offer strategy, and expert guidance through every step of the transaction.
                </p>
                <ul className="mt-8 space-y-4 text-foreground">
                  {[
                    "Pre-approval review and financing checklist",
                    "Targeted property search with neighborhood scoring",
                    "Offer package creation and negotiation support",
                    "Closing coordination and move planning",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="mt-1 h-5 w-5 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl bg-card p-8 border border-border shadow-sm">
                <h3 className="text-xl font-semibold text-foreground">Ready to start?</h3>
                <p className="mt-4 text-muted-foreground">
                  Share your timeline and buyer priorities, and we’ll show you homes that fit your goals.
                </p>
                <Link
                  to="/appointment"
                  className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
                >
                  Schedule an appointment
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
