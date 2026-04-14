import { Button } from "@/components/ui/button";
import { Phone, Mail, Instagram, Linkedin } from "lucide-react";
import agentImg from "@/assets/images/agent-profile.jpg";

export function AgentProfile() {
  return (
    <section id="about" className="py-24 relative bg-background">
      <div className="container mx-auto px-6">
        <div className="glass-panel rounded-[2rem] p-8 md:p-12 shadow-xl border-border/50">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-primary/10 rounded-[2rem] transform -rotate-3 scale-105" />
              <img 
                src={agentImg} 
                alt="Ben Chandran - Real Estate Agent" 
                className="w-full h-[500px] object-cover rounded-[2rem] relative z-10 shadow-lg"
              />
              <div className="absolute bottom-6 right-6 z-20 bg-background p-4 rounded-2xl shadow-lg border border-border/50 text-center min-w-[120px]">
                <div className="font-serif text-3xl font-bold text-primary">#1</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Agent in Region</div>
              </div>
            </div>
            
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-2">
                  Ben Chandran
                </h2>
                <p className="text-xl text-primary font-medium tracking-wide">
                  Senior Real Estate Advisor
                </p>
              </div>
              
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  With over 15 years of experience in the premium real estate market, I've built a reputation for providing exceptional service, deep market knowledge, and outstanding results for my clients.
                </p>
                <p>
                  Whether you're looking for your primary residence, a secondary vacation home, or an investment property, my approach is warm, highly communicative, and fiercely dedicated to your goals.
                </p>
                <p>
                  Real estate isn't just about transactions; it's about life transitions. I'm here to ensure yours is seamless and successful.
                </p>
              </div>
              
              <div className="pt-6 grid sm:grid-cols-2 gap-4">
                <Button className="h-14 rounded-full text-lg shadow-md bg-primary hover:bg-primary/90">
                  <Phone className="mr-2 h-5 w-5" /> Let's Talk
                </Button>
                <Button variant="outline" className="h-14 rounded-full text-lg border-primary/20 hover:bg-primary/5">
                  <Mail className="mr-2 h-5 w-5" /> Email Me
                </Button>
              </div>
              
              <div className="pt-6 flex items-center gap-4 border-t border-border/50">
                <span className="text-sm font-semibold text-foreground uppercase tracking-wider">Connect:</span>
                <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}