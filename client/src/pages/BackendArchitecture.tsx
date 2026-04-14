import { Badge } from "@/components/ui/badge";

export default function ArchitectureDoc() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-20 pb-20 font-sans">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="space-y-4 mb-12 border-b border-border pb-8">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20 mb-4">Architecture Documentation</Badge>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground">Backend Architecture Design</h1>
          <p className="text-xl text-muted-foreground">BuyorNotBuy.com - Premium Real Estate Platform</p>
        </div>

        <div className="space-y-16">
          
          <section className="space-y-6">
            <h2 className="text-3xl font-serif font-bold border-l-4 border-primary pl-4">1. System Architecture Diagram</h2>
            <div className="bg-card p-8 rounded-2xl border border-border shadow-sm font-mono text-sm overflow-x-auto whitespace-pre">
              {`
[ Client Tier ]
      │
      ▼
[ CDN / Edge Network (Vercel/Cloudflare) ]
      │
      ▼
[ API Gateway / Load Balancer ]
      │
      ├─► [ Static Assets (S3/GCS) ]
      │
      ▼
[ Application Tier (Node.js/Express Server) ] ◄──► [ Auth Service (Clerk/Auth0/Passport) ]
      │
      ├─► [ Core API Services ]
      │     ├─ Property Management
      │     ├─ Lead/Contact Management
      │     └─ Content/Blog Management
      │
      ├─► [ Third-Party Integrations ]
      │     ├─ MLS/IDX Feed Integration
      │     ├─ Email Service (SendGrid/Resend)
      │     └─ CRM Integration
      │
      ▼
[ Data Tier ]
      ├─► [ Primary DB (PostgreSQL) ]
      ├─► [ Cache Layer (Redis) ]
      └─► [ Search Engine (Elasticsearch/Meilisearch) ]
              `}
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-serif font-bold border-l-4 border-primary pl-4">2. Database Schema (Relational - PostgreSQL)</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <SchemaTable 
                name="Properties"
                fields={[
                  { name: "id", type: "UUID (PK)" },
                  { name: "mls_id", type: "VARCHAR (Unique)" },
                  { name: "status", type: "ENUM (active, coming_soon, sold)" },
                  { name: "price", type: "DECIMAL" },
                  { name: "address", type: "JSONB" },
                  { name: "specs", type: "JSONB (beds, baths, sqft)" },
                  { name: "description", type: "TEXT" },
                  { name: "agent_id", type: "UUID (FK)" }
                ]}
              />
              <SchemaTable 
                name="Leads / Contacts"
                fields={[
                  { name: "id", type: "UUID (PK)" },
                  { name: "first_name", type: "VARCHAR" },
                  { name: "last_name", type: "VARCHAR" },
                  { name: "email", type: "VARCHAR" },
                  { name: "phone", type: "VARCHAR" },
                  { name: "preferences", type: "JSONB (budget, type)" },
                  { name: "status", type: "ENUM (new, contacted, qualified)" },
                  { name: "created_at", type: "TIMESTAMP" }
                ]}
              />
              <SchemaTable 
                name="PropertyImages"
                fields={[
                  { name: "id", type: "UUID (PK)" },
                  { name: "property_id", type: "UUID (FK)" },
                  { name: "url", type: "VARCHAR" },
                  { name: "is_primary", type: "BOOLEAN" },
                  { name: "display_order", type: "INTEGER" }
                ]}
              />
              <SchemaTable 
                name="Inquiries / TourRequests"
                fields={[
                  { name: "id", type: "UUID (PK)" },
                  { name: "property_id", type: "UUID (FK)" },
                  { name: "lead_id", type: "UUID (FK)" },
                  { name: "requested_date", type: "TIMESTAMP" },
                  { name: "message", type: "TEXT" },
                  { name: "status", type: "VARCHAR" }
                ]}
              />
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-serif font-bold border-l-4 border-primary pl-4">3. API Structure (RESTful / tRPC)</h2>
            <div className="bg-card p-6 rounded-2xl border border-border">
              <ul className="space-y-4 font-mono text-sm">
                <li className="flex gap-4"><span className="text-blue-500 font-bold w-16">GET</span> <span>/api/v1/properties</span> <span className="text-muted-foreground ml-auto hidden md:block">List properties (w/ filtering, pagination)</span></li>
                <li className="flex gap-4"><span className="text-blue-500 font-bold w-16">GET</span> <span>/api/v1/properties/:id</span> <span className="text-muted-foreground ml-auto hidden md:block">Get single property details</span></li>
                <li className="flex gap-4"><span className="text-green-500 font-bold w-16">POST</span> <span>/api/v1/leads</span> <span className="text-muted-foreground ml-auto hidden md:block">Create new lead (Contact form)</span></li>
                <li className="flex gap-4"><span className="text-green-500 font-bold w-16">POST</span> <span>/api/v1/tours/request</span> <span className="text-muted-foreground ml-auto hidden md:block">Schedule property tour</span></li>
                <li className="flex gap-4"><span className="text-blue-500 font-bold w-16">GET</span> <span>/api/v1/agent/profile</span> <span className="text-muted-foreground ml-auto hidden md:block">Get agent metadata & stats</span></li>
                <li className="mt-4 pt-4 border-t border-border text-muted-foreground font-sans">
                  *Admin Endpoints (Requires Auth)*
                </li>
                <li className="flex gap-4"><span className="text-yellow-500 font-bold w-16">PUT</span> <span>/api/v1/admin/properties/:id</span> <span className="text-muted-foreground ml-auto hidden md:block">Update property status/price</span></li>
                <li className="flex gap-4"><span className="text-green-500 font-bold w-16">POST</span> <span>/api/v1/admin/images/upload</span> <span className="text-muted-foreground ml-auto hidden md:block">Upload property images to S3</span></li>
              </ul>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-serif font-bold border-l-4 border-primary pl-4">4. Tech Stack Recommendations</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <TechCard 
                category="Backend Framework"
                name="Node.js + Express (or Hono/tRPC)"
                desc="Fast, excellent TypeScript support, shares types easily with the React frontend."
              />
              <TechCard 
                category="Database & ORM"
                name="PostgreSQL + Drizzle ORM"
                desc="Relational integrity is crucial for real estate data. Drizzle provides excellent type safety."
              />
              <TechCard 
                category="Authentication"
                name="Clerk or Auth0"
                desc="Offloads security overhead. Easily handles Admin login (Ben) and potential future Client portal logins."
              />
              <TechCard 
                category="Hosting"
                name="Vercel (Front) + Render/Railway (Back)"
                desc="Serverless architecture handles traffic spikes well. Managed Postgres (Neon or Supabase)."
              />
              <TechCard 
                category="Storage"
                name="AWS S3 or Cloudinary"
                desc="High-resolution property images need dedicated object storage with built-in CDN delivery and image optimization."
              />
              <TechCard 
                category="Search"
                name="Meilisearch / Algolia"
                desc="For fast, typo-tolerant property searching if the inventory grows large."
              />
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-serif font-bold border-l-4 border-primary pl-4">5. Scalability & Performance Strategy</h2>
            <div className="bg-card p-8 rounded-2xl border border-border space-y-6">
              
              <div>
                <h3 className="font-bold text-lg mb-2">Caching Strategy</h3>
                <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                  <li><strong>CDN Level:</strong> Cache all static assets (images, CSS, JS) at the edge.</li>
                  <li><strong>Application Level (Redis):</strong> Cache the results of complex queries, especially the "Active Properties" list, as it's read-heavy but updated infrequently. Invalidate cache upon property update.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2">Image Optimization</h3>
                <p className="text-muted-foreground">
                  Real estate websites are image-heavy. Use a service like Cloudinary or Next/Vite image optimization to automatically serve WebP/AVIF formats and responsive sizes based on the user's device, significantly reducing load times.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2">Content Management (CMS)</h3>
                <p className="text-muted-foreground">
                  Rather than building a custom CMS from scratch, integrate a Headless CMS (like Sanity.io or Contentful) for managing the "About Ben" content, Testimonials, and Blog posts. Property data should remain in the primary Postgres DB or sync via MLS/IDX feeds.
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}

function SchemaTable({ name, fields }: { name: string, fields: {name: string, type: string}[] }) {
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden">
      <div className="bg-primary/5 border-b border-border px-4 py-3 font-bold">
        {name}
      </div>
      <div className="p-4 space-y-2 font-mono text-sm">
        {fields.map((f, i) => (
          <div key={i} className="flex justify-between">
            <span className="text-foreground">{f.name}</span>
            <span className="text-muted-foreground text-xs">{f.type}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function TechCard({ category, name, desc }: { category: string, name: string, desc: string }) {
  return (
    <div className="bg-card p-6 rounded-xl border border-border hover:border-primary transition-colors">
      <div className="text-xs font-bold text-primary uppercase tracking-wider mb-2">{category}</div>
      <div className="font-serif font-bold text-lg mb-2">{name}</div>
      <div className="text-sm text-muted-foreground">{desc}</div>
    </div>
  );
}