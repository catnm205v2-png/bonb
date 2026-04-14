import wireframeImg from "@/assets/images/wireframe.png";

export default function WireframePage() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-20 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold">Website Architecture</h1>
            <p className="text-xl text-muted-foreground">Complete wireframe and site structure for Luxe Homes</p>
          </div>

          {/* Wireframe Image */}
          <div className="rounded-2xl glass-panel border-white/10 overflow-hidden">
            <img src={wireframeImg} alt="Website Wireframe" className="w-full" />
          </div>

          {/* Detailed Architecture Breakdown */}
          <div className="space-y-12">
            <div className="grid md:grid-cols-2 gap-8">
              <ArchitectureCard title="Navigation & Header" details={[
                "Logo + Brand (Luxe Homes)",
                "Menu: Listings | Services | About",
                "CTA: Contact Agent | Schedule Tour",
                "Fixed/Sticky positioning",
                "Dark glass aesthetic"
              ]} />
              
              <ArchitectureCard title="Hero Section" details={[
                "Hero image background",
                "Main headline + subheading",
                "Primary CTA: Browse Properties",
                "Secondary CTA: Schedule Consultation",
                "Trust badges (50+ Listings, 5-Star Service)"
              ]} />

              <ArchitectureCard title="Property Search Form" details={[
                "Lead capture form",
                "Inputs: Name, Email, Budget, Type",
                "Responsive design",
                "Glass-panel styling",
                "Form validation & submission"
              ]} />

              <ArchitectureCard title="Featured Properties Grid" details={[
                "6-12 property cards in grid",
                "Card contains: Image, Price, Location",
                "Beds/Baths/Sqft details",
                "Quick view / Contact agent buttons",
                "For Sale & For Rent filters"
              ]} />

              <ArchitectureCard title="Services Section" details={[
                "3 main service pillars",
                "Buying Services",
                "Selling Solutions",
                "Rental Management",
                "Supporting services grid below"
              ]} />

              <ArchitectureCard title="Testimonials/Social Proof" details={[
                "Client success stories",
                "Ratings & reviews carousel",
                "Before/After property outcomes",
                "Number of homes sold/rented",
                "Client testimonial quotes"
              ]} />

              <ArchitectureCard title="Agent Bio & Trust" details={[
                "Agent profile section",
                "Professional photo",
                "Experience & credentials",
                "Market expertise",
                "Direct contact information"
              ]} />

              <ArchitectureCard title="Footer" details={[
                "Logo & tagline",
                "Quick links by category",
                "Properties | Services | Company",
                "Contact & legal links",
                "Copyright & social icons"
              ]} />
            </div>

            {/* Data Flow */}
            <div className="glass-panel rounded-2xl p-8 border-white/10 space-y-6">
              <h2 className="text-3xl font-bold">Data Flow & User Journeys</h2>
              
              <div className="space-y-4">
                <JourneyFlow 
                  title="Lead Capture Journey"
                  steps={[
                    "Visitor lands on home page",
                    "Fills out property search form",
                    "Form validates & stores data",
                    "Toast confirmation shown",
                    "Agent receives lead notification",
                    "Personalized recommendations sent via email"
                  ]}
                />
                
                <JourneyFlow 
                  title="Property Browse Journey"
                  steps={[
                    "User navigates to Featured Properties",
                    "Filters by location/price/type",
                    "Clicks 'Quick View' on property",
                    "Sees detailed photos & information",
                    "Option to schedule tour",
                    "Contact agent with specific questions"
                  ]}
                />

                <JourneyFlow 
                  title="Service Learning Journey"
                  steps={[
                    "User learns about buying/selling/rental services",
                    "Understands process & timeline",
                    "Reviews agent credentials & testimonials",
                    "Calls/emails to discuss specific needs",
                    "Schedules consultation appointment",
                    "Begins working with agent"
                  ]}
                />
              </div>
            </div>

            {/* Technical Stack */}
            <div className="glass-panel rounded-2xl p-8 border-white/10">
              <h2 className="text-3xl font-bold mb-6">Technical Architecture</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-lg mb-3 text-primary">Frontend</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• React 19 + TypeScript</li>
                    <li>• Tailwind CSS v4</li>
                    <li>• Wouter routing</li>
                    <li>• React Hook Form + Zod validation</li>
                    <li>• Shadcn/UI components</li>
                    <li>• Framer Motion animations</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-3 text-primary">Features</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Responsive design (mobile-first)</li>
                    <li>• Dark mode + glass morphism</li>
                    <li>• Form validation & error handling</li>
                    <li>• Toast notifications</li>
                    <li>• Smooth scrolling & animations</li>
                    <li>• SEO optimized meta tags</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ArchitectureCard({ title, details }: { title: string; details: string[] }) {
  return (
    <div className="glass-panel rounded-2xl p-6 border-white/10 space-y-4">
      <h3 className="text-xl font-bold text-primary">{title}</h3>
      <ul className="space-y-2">
        {details.map((detail, i) => (
          <li key={i} className="text-sm text-muted-foreground flex gap-2">
            <span className="text-primary">▸</span>
            <span>{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function JourneyFlow({ title, steps }: { title: string; steps: string[] }) {
  return (
    <div className="space-y-3">
      <h4 className="font-semibold text-foreground">{title}</h4>
      <div className="flex flex-col gap-2">
        {steps.map((step, i) => (
          <div key={i} className="flex items-center gap-3 text-sm">
            <div className="min-w-fit">
              <span className="bg-primary/20 border border-primary/50 text-primary text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                {i + 1}
              </span>
            </div>
            <span className="text-muted-foreground">{step}</span>
          </div>
        ))}
      </div>
    </div>
  );
}