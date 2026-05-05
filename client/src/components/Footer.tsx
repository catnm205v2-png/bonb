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
                <a href="#" className="hover:text-primary transition-colors">
                  Active Listings
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Coming Soon
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Recently Sold
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Open Houses
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-lg mb-6">Connect</h4>
            <ul className="space-y-3 text-background/70">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  About Ben
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Schedule Consultation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Client Reviews
                </a>
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
            <a href="#" className="hover:text-primary">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
