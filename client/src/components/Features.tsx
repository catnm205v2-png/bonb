import { TrendingUp, Shield, Zap } from "lucide-react";
import featureImg from "@/assets/images/property_1.jpg";

export function Features() {
  return (
    <section id="services" className="py-24 relative bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Premier Real Estate Services</h2>
          <p className="text-lg text-muted-foreground">
            From property search to closing, we provide comprehensive support with market expertise, 
            transparent pricing, and personalized attention.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-[2rem] overflow-hidden shadow-xl p-2 bg-background border border-border/50">
            <img 
              src={featureImg} 
              alt="Properties Portfolio" 
              className="w-full h-[600px] object-cover rounded-[1.5rem]"
            />
          </div>

          <div className="space-y-8">
            <div className="bg-background p-8 rounded-3xl border-l-4 border-l-primary shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-3">Buying Services</h3>
              <p className="text-muted-foreground leading-relaxed">
                Expert guidance through the entire buying process. We handle showings, negotiations, inspections, 
                and closing logistics. Our team connects you with trusted lenders and service providers.
              </p>
            </div>

            <div className="bg-background p-8 rounded-3xl border-l-4 border-l-[hsl(30,80%,55%)] shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-3">Selling Solutions</h3>
              <p className="text-muted-foreground leading-relaxed">
                Maximize your property's value with strategic marketing. Professional photography, virtual tours, 
                targeted promotion, and skilled negotiation to secure the best offer.
              </p>
            </div>
            
            <div className="bg-background p-8 rounded-3xl border-l-4 border-l-[hsl(43,74%,49%)] shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-3">Rental Services</h3>
              <p className="text-muted-foreground leading-relaxed">
                Streamlined property rental and leasing. Tenant screening, lease preparation, and ongoing property 
                services to ensure smooth operations and optimal returns.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              icon: TrendingUp, 
              title: "Market Intelligence", 
              desc: "Real-time market data and trends to inform your decisions" 
            },
            { 
              icon: Shield, 
              title: "Full Legal Support", 
              desc: "We coordinate with attorneys and ensure all documentation is complete" 
            },
            { 
              icon: Zap, 
              title: "Fast Closing", 
              desc: "Streamlined processes get you to closing 20% faster on average" 
            }
          ].map((service, i) => (
            <div key={i} className="bg-background p-8 rounded-[2rem] text-center shadow-sm border border-border/50">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6">
                <service.icon className="h-8 w-8" />
              </div>
              <h4 className="text-xl font-serif font-bold text-foreground mb-3">{service.title}</h4>
              <p className="text-muted-foreground">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}