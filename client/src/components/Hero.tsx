import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Home, Star } from "lucide-react";
import heroImg from "@/assets/images/hero-home.jpg";

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-warm-mesh">
      
      <div className="container relative z-10 mx-auto px-6 pt-12 pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-sm font-medium text-primary mb-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Premium Real Estate Services
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-[1.1] text-foreground">
              Discover your <br/>
              <span className="text-primary italic">perfect space.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
              Expert guidance for buying, selling, or renting premium homes. Experience real estate with a personal, sophisticated touch.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start gap-4 pt-4">
              <Button size="lg" className="h-14 px-8 text-lg bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg transition-transform hover:-translate-y-1">
                Explore Properties <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-primary/20 hover:bg-primary/5 text-foreground transition-all">
                Meet Your Agent
              </Button>
            </div>
            
            <div className="pt-8 flex gap-8">
              <div>
                <div className="text-3xl font-serif font-bold text-foreground">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div>
                <div className="text-3xl font-serif font-bold text-foreground">$120M</div>
                <div className="text-sm text-muted-foreground">Volume Sold</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div>
                <div className="text-3xl font-serif font-bold text-foreground">5.0</div>
                <div className="text-sm text-muted-foreground flex items-center gap-1">
                  Client Rating <Star className="h-3 w-3 fill-primary text-primary" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
            <div className="absolute -inset-4 bg-primary/20 rounded-[2.5rem] blur-2xl -z-10 transform rotate-3"></div>
            <img 
              src={heroImg} 
              alt="Beautiful luxury home" 
              className="rounded-3xl shadow-2xl object-cover h-[600px] w-full border-4 border-white"
            />
            
            {/* Floating badge */}
            <div className="absolute -left-8 top-1/4 glass-panel p-4 rounded-xl shadow-xl flex items-center gap-4 animate-in fade-in zoom-in duration-700 delay-500">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                <Home className="h-6 w-6" />
              </div>
              <div>
                <div className="text-sm font-bold text-foreground">New Listing</div>
                <div className="text-xs text-muted-foreground">Just added today</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}