import { FileText, ShieldCheck, CheckCircle } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Nav />
      <main className="pt-20 pb-24">
        <div className="container mx-auto px-6 max-w-5xl space-y-10">
          <section className="rounded-[2rem] bg-card border border-border p-12 shadow-xl">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              Terms of Service
            </span>
            <h1 className="mt-8 text-5xl font-serif font-bold text-foreground">
              Simple terms built for your real estate journey.
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              These terms explain how our services work, what you can expect from us, and how we keep your experience reliable.
            </p>
          </section>

          <section className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Service Scope",
                description: "We provide advisory support, property guidance, and inquiry response for home buyers and sellers.",
                icon: FileText,
              },
              {
                title: "User Conduct",
                description: "Use the site responsibly, provide accurate information, and respect our communications.",
                icon: ShieldCheck,
              },
              {
                title: "Limitation of Liability",
                description: "Our role is advisory and supportive; your decisions remain your own.",
                icon: CheckCircle,
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
              <h2 className="text-2xl font-serif font-bold text-foreground">Acceptance of Terms</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                By using this site and our services, you accept these terms. If you do not agree, please do not submit inquiries or use our contact features.
              </p>
            </article>
            <article>
              <h2 className="text-2xl font-serif font-bold text-foreground">Service Description</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We provide guidance, connection, and consultation through our website. We do not act as a legal or financial advisor.
              </p>
            </article>
            <article>
              <h2 className="text-2xl font-serif font-bold text-foreground">Privacy & Communication</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We use your contact details to reply and support your inquiry. See our Privacy Policy for details on how we protect your data.
              </p>
            </article>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
