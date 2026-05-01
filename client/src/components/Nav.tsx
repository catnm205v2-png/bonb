import { Download } from "lucide-react";

export function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 flex items-center justify-center bg-primary text-primary-foreground rounded-sm font-serif font-bold text-xl">
            B
          </div>
          <span className="font-serif font-bold text-2xl tracking-wide text-foreground">
            BuyorNotBuy.com
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground/80">
          <a href="/homes" className="hover:text-primary transition-colors">
            Homes
          </a>
          <a href="/services" className="hover:text-primary transition-colors">
            Services
          </a>
          <a href="/content" className="hover:text-primary transition-colors">
            Content
          </a>
          <a href="/about" className="hover:text-primary transition-colors">
            About
          </a>
          <a
            href="/appointment"
            className="hover:text-primary transition-colors"
          >
            Appointment
          </a>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="/source-code.tar.gz"
            download
            className="hidden lg:inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            <Download className="h-4 w-4" />
            Source Code
          </a>
          <a
            href="/developer-handoff.md"
            download
            className="hidden lg:inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            <Download className="h-4 w-4" />
            Dev Handoff
          </a>
          <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6 py-2 rounded-full shadow-md transition-all">
            Schedule Tour
          </button>
        </div>
      </div>
    </nav>
  );
}
