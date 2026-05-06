import { useState } from "react";
import { Link } from "wouter";
export function Nav() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

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
          {/* ABOUT DROPDOWN */}
          <div
            className="relative group py-2"
            onMouseEnter={() => setOpenDropdown("properties")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <a className="transition-colors">About</a>

            {/* Dropdown Menu - Structural style from Screenshot 2026-05-06 at 4.57.34 PM.png */}
            <div className="absolute left-0 top-full min-w-[240px] opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out z-50">
              <div className="bg-white shadow-xl border border-border mt-2">
                <Link
                  to="/about"
                  className="block px-5 py-4 text-black hover:bg-yellow-400 hover:text-white transition-colors"
                >
                  Meet Ben
                </Link>
              </div>
            </div>
          </div>

          {/* BUY/SELLS DROPDOWN */}
          <div
            className="relative group py-2"
            onMouseEnter={() => setOpenDropdown("buysells")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <a className="transition-colors">Buy/Sells</a>
            <div className="absolute left-0 top-full min-w-[240px] opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out z-50">
              <div className="bg-white shadow-xl border border-border mt-2 text-black font-normal">
                <a
                  href="/exclusive-listings"
                  className="block px-5 py-4 border-b border-gray-100 hover:text-white hover:bg-yellow-400 transition-colors"
                >
                  Exclusive Listings
                </a>
                <a
                  href="/sold"
                  className="block px-5 py-4 border-b border-gray-100 hover:text-white hover:bg-yellow-400 transition-colors"
                >
                  Sold
                </a>
                <a
                  href="/coming-soon"
                  className="block px-5 py-4 hover:text-white hover:bg-yellow-400 transition-colors"
                >
                  Coming Soon
                </a>
              </div>
            </div>
          </div>

          {/* RESOURCES DROPDOWN */}
          <div
            className="relative group py-2"
            onMouseEnter={() => setOpenDropdown("resources")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <a className="transition-colors">Resources</a>
            <div className="absolute left-0 top-full min-w-[240px] opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out z-50">
              <div className="bg-white shadow-xl border border-border mt-2 text-black font-normal">
                <Link
                  to="/buyers-guide"
                  className="block px-5 py-4 border-b border-gray-100 hover:text-white hover:bg-yellow-400 transition-colors"
                >
                  Buyers Guide
                </Link>
                <Link
                  to="/sellers-guide"
                  className="block px-5 py-4 hover:text-white hover:bg-yellow-400 transition-colors"
                >
                  Sellers Guide
                </Link>
              </div>
            </div>
          </div>

          {/* REMAINING LINKS */}
          <Link
                  to="/contact"
            className="transition-colors hover:text-yellow-600"
          >
            Let's Connect
          </Link>
          {/* <Link to="/homes" className="transition-colors hover:text-yellow-600">
            Homes
          </Link>
          <Link
            to="/services"
            className="transition-colors hover:text-yellow-600"
          >
            Services
          </Link>
          <Link
            to="/content"
            className="transition-colors hover:text-yellow-600"
          >
            Content
          </Link>
          <Link
            to="/appointment"
            className="transition-colors hover:text-yellow-600"
          >
            Appointment
          </Link> */}
        </div>
        <div className="flex items-center gap-4">
          {/* <a
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
          </button> */}
        </div>
      </div>
    </nav>
  );
}
