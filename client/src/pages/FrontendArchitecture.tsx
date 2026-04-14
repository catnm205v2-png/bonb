import { Badge } from "@/components/ui/badge";

export default function FrontendArchitecture() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-20 pb-20 font-sans">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="space-y-4 mb-12 border-b border-border pb-8">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20 mb-4">Frontend Engineering</Badge>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground">Next.js Frontend Architecture</h1>
          <p className="text-xl text-muted-foreground">Component-based structure, routing, and state management.</p>
        </div>

        <div className="space-y-16">

          <section className="space-y-6">
            <h2 className="text-3xl font-serif font-bold border-l-4 border-primary pl-4">1. Folder Structure (Next.js App Router)</h2>
            <div className="bg-card p-6 rounded-2xl border border-border shadow-sm font-mono text-sm overflow-x-auto whitespace-pre">
              {`src/
├── app/                      # Next.js App Router (Pages & Routing)
│   ├── (marketing)/          # Route group for public pages
│   │   ├── about/
│   │   ├── services/
│   │   ├── contact/
│   │   └── page.tsx          # Homepage
│   ├── properties/           # Property listings
│   │   ├── [id]/             # Dynamic property detail route
│   │   └── page.tsx          # Main gallery
│   ├── layout.tsx            # Global layout (Nav, Footer)
│   └── globals.css           # Tailwind & Theme CSS
├── components/               # React Components
│   ├── ui/                   # Reusable base UI (Buttons, Inputs - Shadcn)
│   ├── layout/               # Nav, Footer, Container
│   ├── features/             # Complex domain components
│   │   ├── property/         # PropertyCard, PropertyFilters, MapView
│   │   ├── lead/             # ContactForm, ScheduleTourWidget
│   │   └── agent/            # AgentBio, TestimonialCarousel
│   └── shared/               # Cross-feature components (TrustBadges, PageHeader)
├── lib/                      # Utilities & Configuration
│   ├── utils.ts              # cn (clsx/tailwind-merge), formatters
│   ├── api.ts                # API client / fetch wrappers
│   └── store.ts              # Global State (Zustand/Zotai)
├── types/                    # TypeScript interfaces & types
│   └── index.ts              # Property, Lead, Agent types
└── hooks/                    # Custom React Hooks
    ├── useProperties.ts      # Data fetching hook
    └── useMediaQuery.ts      # Responsive UI hook`}
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-serif font-bold border-l-4 border-primary pl-4">2. Component Architecture</h2>
            <p className="text-muted-foreground leading-relaxed">
              We employ an <strong>Atomic Design-inspired</strong> structure tailored for Next.js. <br/><br/>
              1. <strong>UI Components (Atoms):</strong> Pure, stateless, highly reusable (e.g., <code>&lt;Button /&gt;</code>, <code>&lt;Input /&gt;</code>).<br/>
              2. <strong>Shared Components (Molecules):</strong> Simple combinations (e.g., <code>&lt;FormGroup /&gt;</code> - Label + Input + Error).<br/>
              3. <strong>Feature Components (Organisms):</strong> Domain-specific, stateful blocks (e.g., <code>&lt;PropertyCard property=&#123;data&#125; /&gt;</code>, <code>&lt;LeadCaptureForm /&gt;</code>).<br/>
              4. <strong>Views (Templates/Pages):</strong> Next.js Server Components inside the <code>app/</code> directory that fetch data and pass it down to client components.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-serif font-bold border-l-4 border-primary pl-4">3. Routing Structure & Data Fetching</h2>
            <div className="bg-card p-6 rounded-2xl border border-border space-y-4">
              <p className="text-muted-foreground">Leveraging Next.js 14+ App Router features:</p>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li><strong>Server Components by Default:</strong> Pages like <code>/properties/[id]</code> fetch property data securely on the server, generating HTML before sending to the client (excellent for SEO).</li>
                <li><strong>Client Components (<code>'use client'</code>):</strong> Added only at the leaf nodes where interactivity is needed (e.g., <code>&lt;ImageGallery /&gt;</code>, <code>&lt;ContactForm /&gt;</code>, <code>&lt;PropertyFilters /&gt;</code>).</li>
                <li><strong>Route Handlers:</strong> Located at <code>app/api/...</code> to handle form submissions directly without needing a separate backend server initially.</li>
              </ul>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-serif font-bold border-l-4 border-primary pl-4">4. State Management Strategy</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-background border border-border p-6 rounded-xl">
                <h3 className="font-bold mb-2">1. Server State (Data Fetching)</h3>
                <p className="text-sm text-muted-foreground">
                  Managed via Next.js native <code>fetch</code> with caching, or <strong>React Query (TanStack Query)</strong> for complex client-side data synchronization (like infinite scrolling the property gallery).
                </p>
              </div>
              <div className="bg-background border border-border p-6 rounded-xl">
                <h3 className="font-bold mb-2">2. URL State (Search & Filters)</h3>
                <p className="text-sm text-muted-foreground">
                  Property filters (price, beds, status) are stored in the URL query parameters (<code>?status=active&minPrice=500000</code>). This makes filtered views shareable and bookmarkable.
                </p>
              </div>
              <div className="bg-background border border-border p-6 rounded-xl">
                <h3 className="font-bold mb-2">3. Form State</h3>
                <p className="text-sm text-muted-foreground">
                  Managed exclusively using <strong>React Hook Form</strong> paired with <strong>Zod</strong> for schema validation (capturing lead info, scheduling tours).
                </p>
              </div>
              <div className="bg-background border border-border p-6 rounded-xl">
                <h3 className="font-bold mb-2">4. Global UI State</h3>
                <p className="text-sm text-muted-foreground">
                  Keep it minimal. Use React Context or <strong>Zustand</strong> for lightweight global needs (e.g., "Saved/Favorite Properties" array, or mobile menu open/close state).
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-serif font-bold border-l-4 border-primary pl-4">5. Example Page Implementation (Property Detail)</h2>
            <div className="bg-[#282a36] text-[#f8f8f2] p-6 rounded-2xl overflow-x-auto text-sm font-mono leading-relaxed">
              <span className="text-[#6272a4]">// app/properties/[id]/page.tsx</span><br/>
              <span className="text-[#ff79c6]">import</span> {`{ getPropertyById }`} <span className="text-[#ff79c6]">from</span> <span className="text-[#f1fa8c]">'@/lib/api'</span>;<br/>
              <span className="text-[#ff79c6]">import</span> {`{ PropertyGallery }`} <span className="text-[#ff79c6]">from</span> <span className="text-[#f1fa8c]">'@/components/features/property/Gallery'</span>;<br/>
              <span className="text-[#ff79c6]">import</span> {`{ ContactAgentForm }`} <span className="text-[#ff79c6]">from</span> <span className="text-[#f1fa8c]">'@/components/features/lead/ContactForm'</span>;<br/>
              <br/>
              <span className="text-[#6272a4]">// Server Component</span><br/>
              <span className="text-[#ff79c6]">export default async function</span> <span className="text-[#50fa7b]">PropertyPage</span>({`{ params }`}: {`{ params: { id: string } }`}) {`{`}<br/>
              &nbsp;&nbsp;<span className="text-[#8be9fd] italic">const</span> property = <span className="text-[#ff79c6]">await</span> <span className="text-[#50fa7b]">getPropertyById</span>(params.id);<br/>
              <br/>
              &nbsp;&nbsp;<span className="text-[#ff79c6]">if</span> (!property) <span className="text-[#ff79c6]">return</span> &lt;<span className="text-[#8be9fd]">NotFound</span> /&gt;;<br/>
              <br/>
              &nbsp;&nbsp;<span className="text-[#ff79c6]">return</span> (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-[#8be9fd]">div</span> <span className="text-[#50fa7b]">className</span>=<span className="text-[#f1fa8c]">"container mx-auto py-12"</span>&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-[#8be9fd]">PropertyGallery</span> <span className="text-[#50fa7b]">images</span>={property.images} /&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-[#8be9fd]">div</span> <span className="text-[#50fa7b]">className</span>=<span className="text-[#f1fa8c]">"grid lg:grid-cols-3 gap-12 mt-8"</span>&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-[#8be9fd]">div</span> <span className="text-[#50fa7b]">className</span>=<span className="text-[#f1fa8c]">"col-span-2 space-y-6"</span>&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-[#8be9fd]">h1</span> <span className="text-[#50fa7b]">className</span>=<span className="text-[#f1fa8c]">"text-4xl font-serif"</span>&gt;{property.address}&lt;/<span className="text-[#8be9fd]">h1</span>&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-[#8be9fd]">p</span> <span className="text-[#50fa7b]">className</span>=<span className="text-[#f1fa8c]">"text-xl text-primary"</span>&gt;{`{formatCurrency(property.price)}`}&lt;/<span className="text-[#8be9fd]">p</span>&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-[#8be9fd]">div</span> <span className="text-[#50fa7b]">className</span>=<span className="text-[#f1fa8c]">"prose text-muted-foreground"</span> <span className="text-[#50fa7b]">dangerouslySetInnerHTML</span>={property.description} /&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-[#8be9fd]">div</span>&gt;<br/>
              <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-[#8be9fd]">div</span> <span className="text-[#50fa7b]">className</span>=<span className="text-[#f1fa8c]">"col-span-1"</span>&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-[#8be9fd]">div</span> <span className="text-[#50fa7b]">className</span>=<span className="text-[#f1fa8c]">"sticky top-24"</span>&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-[#8be9fd]">ContactAgentForm</span> <span className="text-[#50fa7b]">propertyId</span>={property.id} /&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-[#8be9fd]">div</span>&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-[#8be9fd]">div</span>&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-[#8be9fd]">div</span>&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-[#8be9fd]">div</span>&gt;<br/>
              &nbsp;&nbsp;);<br/>
              {`}`}
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-serif font-bold border-l-4 border-primary pl-4">6. Reusable Components</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-2xl border border-border">
                <h3 className="font-bold text-lg mb-2">Button <code>(ui/button.tsx)</code></h3>
                <p className="text-sm text-muted-foreground mb-4">Uses <code>cva</code> (class-variance-authority) to handle variants (default, outline, ghost) and sizes (sm, lg, icon). Fully typed and accessible.</p>
                <button className="h-10 px-4 bg-primary text-primary-foreground rounded-full text-sm font-medium">Primary Example</button>
              </div>
              <div className="bg-card p-6 rounded-2xl border border-border">
                <h3 className="font-bold text-lg mb-2">PropertyCard <code>(features/property/)</code></h3>
                <p className="text-sm text-muted-foreground mb-4">Accepts a <code>Property</code> typed object. Handles its own internal logic for the "Favorite/Heart" toggle interacting with global state.</p>
                <div className="h-20 border-2 border-dashed border-primary/30 rounded-xl flex items-center justify-center text-primary/50 text-sm">Property Card Placeholder</div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}