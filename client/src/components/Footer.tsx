import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-foreground text-background mt-20">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 flex items-center justify-center bg-primary text-primary-foreground rounded-sm font-serif font-bold text-xl">
                B
              </div>
              <span className="font-serif font-bold text-2xl tracking-wide">
                BuyorNotBuy.com
              </span>
            </div>
            <p className="text-background/70 text-lg max-w-sm mb-8">
              Elevating the real estate experience. Dedicated to finding your
              perfect space.
            </p>
            <div className="flex gap-4">{/* Social icons could go here */}</div>
          </div>

          <div>
            <h4 className="font-serif font-bold text-lg mb-6">Properties</h4>
            <ul className="space-y-3 text-background/70">
              <li>
                <Link href="/?filter=active" className="hover:text-primary transition-colors">
                  Active Listings
                </Link>
              </li>
              <li>
                <Link href="/?filter=coming_soon" className="hover:text-primary transition-colors">
                  Coming Soon
                </Link>
              </li>
              <li>
                <Link href="/?filter=sold" className="hover:text-primary transition-colors">
                  Recently Sold
                </Link>
              </li>
              <li>
                <Link href="/?filter=all" className="hover:text-primary transition-colors">
                  Open Houses
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-lg mb-6">Connect</h4>
            <ul className="space-y-3 text-background/70">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About Ben
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/appointment" className="hover:text-primary transition-colors">
                  Schedule Consultation
                </Link>
              </li>
              <li>
                <Link href="/client-reviews" className="hover:text-primary transition-colors">
                  Client Reviews
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-background/20 text-center text-sm text-background/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            &copy; {new Date().getFullYear()} BuyorNotBuy.com Real Estate. All
            rights reserved.
          </div>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
