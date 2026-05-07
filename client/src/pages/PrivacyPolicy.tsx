import { ShieldCheck, FileText, Lock } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Nav />
      <main className="pt-20 pb-24">
        <div className="container mx-auto px-6 max-w-5xl space-y-10">
          <section className="rounded-[2rem] bg-card border border-border p-12 shadow-xl">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              Privacy Policy
            </span>
            <h1 className="mt-8 text-5xl font-serif font-bold text-foreground">
              Your privacy matters to us.
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              We collect only the information needed to deliver better service, protect your data, and keep your experience secure.
            </p>
          </section>

          <section className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Secure Data",
                description: "We protect submitted information using industry-standard safeguards.",
                icon: ShieldCheck,
              },
              {
                title: "Transparent Use",
                description: "We only use your data to respond to inquiries and improve our service.",
                icon: FileText,
              },
              {
                title: "No Sharing",
                description: "We do not sell your personal information to third parties.",
                icon: Lock,
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="rounded-3xl bg-card p-8 border border-border shadow-sm">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="mt-6 text-2xl font-serif font-bold text-foreground">{item.title}</h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{item.description}</p>
                </article>
              );
            })}
          </section>

          <section className="rounded-[2rem] bg-card border border-border p-10 space-y-8">
            <article>
              <h2 className="text-2xl font-serif font-bold text-foreground">Information We Collect</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We collect contact details provided in form submissions such as name, email, phone, and comments so we can respond to your inquiry and provide the best service.
              </p>
            </article>
            <article>
              <h2 className="text-2xl font-serif font-bold text-foreground">How We Use Your Data</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Your information is used to manage requests, send updates, and improve our offerings. We may also use data for analytics to enhance user experience.
              </p>
            </article>
            <article>
              <h2 className="text-2xl font-serif font-bold text-foreground">Cookies & Tracking</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Our site uses cookies for basic functionality and analytics. You can control cookie settings through your browser preferences.
              </p>
            </article>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
