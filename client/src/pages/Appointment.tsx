import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export default function AppointmentPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 flex flex-col">
      <Nav />
      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16">
            
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl font-serif font-bold mb-4">Schedule an Appointment</h1>
                <p className="text-xl text-muted-foreground">
                  Ready to take the next step? Book a private consultation with Ben to discuss your real estate goals.
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-card p-6 rounded-2xl border border-border/50">
                  <h3 className="font-bold mb-2">Office Location</h3>
                  <p className="text-muted-foreground">100 Luxury Way, Suite 100<br/>Premium District, ST 12345</p>
                </div>
                <div className="bg-card p-6 rounded-2xl border border-border/50">
                  <h3 className="font-bold mb-2">Direct Contact</h3>
                  <p className="text-muted-foreground">Phone: (555) 123-4567<br/>Email: ben@buyornotbuy.com</p>
                </div>
              </div>
            </div>

            <div className="glass-panel p-8 rounded-3xl border border-border/50 shadow-lg">
              <h2 className="text-2xl font-serif font-bold mb-6">Request a Time</h2>
              <form className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1 block">Full Name</label>
                    <Input placeholder="John Doe" className="h-12" />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1 block">Email Address</label>
                    <Input type="email" placeholder="john@example.com" className="h-12" />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1 block">Phone Number</label>
                    <Input type="tel" placeholder="(555) 000-0000" className="h-12" />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1 block">I am interested in...</label>
                    <select className="w-full h-12 px-4 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-muted-foreground">
                      <option>Buying a home</option>
                      <option>Selling a home</option>
                      <option>Renting a property</option>
                      <option>General consultation</option>
                    </select>
                  </div>
                  <div className="pt-2 border-t border-border/50">
                    <p className="text-xs text-muted-foreground mb-3 text-center">
                      Your inquiry will be synced with our CRM and marketing automation platforms.
                    </p>
                    <div className="flex gap-2 justify-center items-center opacity-70">
                      <Badge variant="outline" className="text-[10px]">SuiteCRM Connected</Badge>
                      <Badge variant="outline" className="text-[10px]">Mautic Active</Badge>
                      <Badge variant="outline" className="text-[10px]">n8n Workflow Ready</Badge>
                    </div>
                  </div>
                </div>
                <Button className="w-full h-14 text-lg rounded-full shadow-md bg-primary hover:bg-primary/90">
                  Request Appointment
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  We'll confirm your appointment within 24 hours. Data processed securely.
                </p>
              </form>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}