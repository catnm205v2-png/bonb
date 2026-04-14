import { Badge } from "@/components/ui/badge";

export default function HiFiDesigns() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-20 pb-20 font-sans">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="space-y-4 mb-12 border-b border-border pb-8">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20 mb-4">UI/UX Design</Badge>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground">High-Fidelity Page Designs</h1>
          <p className="text-xl text-muted-foreground">Detailed layout, visual hierarchy, and component specifications.</p>
        </div>

        <div className="space-y-16">

          <DesignSection title="1. Homepage" purpose="Primary entry point to establish luxury brand, showcase top properties, and direct users to key services.">
            <DesignBlock label="Section Breakdown">
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li><strong>Header:</strong> Sticky glassmorphic nav with logo, primary links, and prominent "Schedule Tour" CTA.</li>
                <li><strong>Hero:</strong> Full-bleed luxury home image, large serif headline, primary/secondary CTAs, and trust badges (stats).</li>
                <li><strong>Property Gallery:</strong> Curated 2x2 grid of featured properties with interactive filter tabs.</li>
                <li><strong>Agent Intro:</strong> Split layout with Ben's portrait and a brief bio/philosophy.</li>
                <li><strong>Services Snapshot:</strong> 3-column grid highlighting Buying, Selling, and Rental services.</li>
                <li><strong>Footer:</strong> Comprehensive site map, contact info, and legal links.</li>
              </ul>
            </DesignBlock>
            <DesignBlock label="Visual Hierarchy & Components">
              <p className="text-muted-foreground">
                1. <strong>Hero Headline (H1):</strong> Largest element (Playfair Display 6xl/7xl), draws immediate attention. <br/>
                2. <strong>Primary CTA:</strong> Gold solid button, contrasting heavily with the background. <br/>
                3. <strong>Property Cards:</strong> Image-heavy, beige card background, serif price tag, sans-serif details.
              </p>
            </DesignBlock>
            <DesignBlock label="Responsive & Interaction">
              <p className="text-muted-foreground">
                <strong>Hover:</strong> Buttons lift slightly with shadow increase; Property cards scale images slightly inside container. <br/>
                <strong>Mobile:</strong> Hero image scales proportionally, stats row wraps to 2x2 grid. Property grid becomes single column.
              </p>
            </DesignBlock>
          </DesignSection>

          <DesignSection title="2. Landing Page (Lead Gen focused)" purpose="A specialized page for specific marketing campaigns (e.g., 'Selling your home in [City]?').">
            <DesignBlock label="Section Breakdown">
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li><strong>Simplified Header:</strong> Logo only (removes escape routes to keep focus on conversion).</li>
                <li><strong>Value Prop Hero:</strong> Direct headline addressing the user's specific need, paired with a dynamic lead capture form.</li>
                <li><strong>Social Proof:</strong> Logos of featured publications or high-profile sales.</li>
                <li><strong>Testimonials:</strong> Grid of 3 high-impact client quotes.</li>
                <li><strong>Footer:</strong> Minimal footer with just copyright and privacy policy.</li>
              </ul>
            </DesignBlock>
            <DesignBlock label="Visual Hierarchy & Components">
              <p className="text-muted-foreground">
                1. <strong>Lead Form:</strong> Encased in a soft beige card with a subtle gold border glow, making it the most visually prominent element. <br/>
                2. <strong>Testimonials:</strong> Secondary focus, using italic serif quotes to build trust.
              </p>
            </DesignBlock>
            <DesignBlock label="Responsive & Interaction">
              <p className="text-muted-foreground">
                <strong>Focus States:</strong> Form inputs glow gold when active. <br/>
                <strong>Mobile:</strong> Form stacks below the hero headline, occupying 100% width for easy thumb tapping.
              </p>
            </DesignBlock>
          </DesignSection>

          <DesignSection title="3. Pricing / Services Page" purpose="Clearly articulate the value provided to sellers and landlords (commission structures or tiered services).">
            <DesignBlock label="Section Breakdown">
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li><strong>Header:</strong> Standard global nav.</li>
                <li><strong>Hero:</strong> "Transparent Value" headline with a brief explainer text.</li>
                <li><strong>Tiered Service Cards:</strong> 2 or 3 cards (e.g., Standard Listing vs. Premium Marketing Package).</li>
                <li><strong>Feature Comparison Table:</strong> Detailed checklist of what is included.</li>
                <li><strong>FAQ Accordion:</strong> Common questions regarding fees and contracts.</li>
                <li><strong>Bottom CTA:</strong> Large "Get a Free Home Valuation" banner.</li>
              </ul>
            </DesignBlock>
            <DesignBlock label="Visual Hierarchy & Components">
              <p className="text-muted-foreground">
                1. <strong>Premium Tier Card:</strong> Highlighted with a gold border, slight scale up (105%), and a "Most Popular" badge. <br/>
                2. <strong>Comparison Table:</strong> Uses subtle gray alternating row colors. Checkmarks are gold.
              </p>
            </DesignBlock>
            <DesignBlock label="Responsive & Interaction">
              <p className="text-muted-foreground">
                <strong>Accordion:</strong> Smooth slide-down animation on FAQ toggle. <br/>
                <strong>Mobile:</strong> Comparison table transforms into stacked lists per tier, rather than a side-by-side table.
              </p>
            </DesignBlock>
          </DesignSection>

          <DesignSection title="4. Blog / Content Hub" purpose="Central hub for market updates, neighborhood guides, and real estate advice.">
            <DesignBlock label="Section Breakdown">
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li><strong>Header:</strong> Standard global nav.</li>
                <li><strong>Featured Article:</strong> Large 2-column layout (Image Left, Content Right) for the latest/most important post.</li>
                <li><strong>Category Filters:</strong> Pill tags (Market Trends, Tips for Buyers, Neighborhoods).</li>
                <li><strong>Article Grid:</strong> 3-column grid of article cards.</li>
                <li><strong>Pagination/Load More:</strong> Button at the bottom.</li>
              </ul>
            </DesignBlock>
            <DesignBlock label="Visual Hierarchy & Components">
              <p className="text-muted-foreground">
                1. <strong>Featured Post:</strong> Commands 50% of the viewport height on desktop. <br/>
                2. <strong>Article Cards:</strong> Image top, overline category tag, serif title, sans-serif excerpt, "Read More" text link.
              </p>
            </DesignBlock>
            <DesignBlock label="Responsive & Interaction">
              <p className="text-muted-foreground">
                <strong>Hover:</strong> Article images zoom slightly; "Read More" arrow translates right. <br/>
                <strong>Mobile:</strong> Featured article stacks vertically; Grid becomes single column.
              </p>
            </DesignBlock>
          </DesignSection>

          <DesignSection title="5. Article Page" purpose="The reading experience for an individual blog post or guide.">
            <DesignBlock label="Section Breakdown">
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li><strong>Header:</strong> Standard global nav.</li>
                <li><strong>Article Header:</strong> Category Tag, H1 Title, Author Byline & Date, Social Share icons.</li>
                <li><strong>Hero Image:</strong> Full-width relevant image.</li>
                <li><strong>Content Body:</strong> Narrow, center-aligned text column for optimal readability.</li>
                <li><strong>Sidebar (Desktop only):</strong> Sticky "Subscribe to Newsletter" or "Schedule Consultation" widget.</li>
                <li><strong>More Articles:</strong> 3 related posts at the bottom.</li>
              </ul>
            </DesignBlock>
            <DesignBlock label="Visual Hierarchy & Components">
              <p className="text-muted-foreground">
                1. <strong>Content Body:</strong> Max-width of ~65ch (characters) using 'Inter' for high legibility. Serif fonts used for H2/H3 subheadings inside the text. <br/>
                2. <strong>Pull Quotes:</strong> Styled with a thick gold left border and larger, italic serif typography.
              </p>
            </DesignBlock>
            <DesignBlock label="Responsive & Interaction">
              <p className="text-muted-foreground">
                <strong>Mobile:</strong> Sidebar drops to the bottom of the article body. Share icons stick to the bottom edge of the screen while reading.
              </p>
            </DesignBlock>
          </DesignSection>

          <DesignSection title="6. Agent Dashboard (Admin)" purpose="Secure interface for Ben to manage leads and listings.">
            <DesignBlock label="Section Breakdown">
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li><strong>Sidebar Layout:</strong> Vertical left nav (Dashboard, Listings, Leads, Settings). Dark theme for focus.</li>
                <li><strong>Top Bar:</strong> Breadcrumbs, Global Search, Notification Bell, User Avatar.</li>
                <li><strong>Overview View:</strong> KPI summary cards (Total Leads, Active Listings) and recent activity feed.</li>
                <li><strong>Data Tables:</strong> For listing/lead management (Sortable columns, bulk action checkboxes).</li>
              </ul>
            </DesignBlock>
            <DesignBlock label="Visual Hierarchy & Components">
              <p className="text-muted-foreground">
                1. <strong>Data Tables:</strong> Utilitarian design. Strict grid lines, monospaced numbers, clear status badges (Green=Active, Yellow=Pending). <br/>
                2. <strong>Action Buttons:</strong> Primary actions (Add Listing) placed consistently in the top right of the content area.
              </p>
            </DesignBlock>
            <DesignBlock label="Responsive & Interaction">
              <p className="text-muted-foreground">
                <strong>Interaction:</strong> Inline editing for table rows (e.g., quickly changing a listing status without opening a new page). <br/>
                <strong>Mobile:</strong> Sidebar collapses behind a hamburger menu. Tables switch to card-based list views for thumb-friendly scrolling.
              </p>
            </DesignBlock>
          </DesignSection>

        </div>
      </div>
    </div>
  );
}

function DesignSection({ title, purpose, children }: { title: string, purpose: string, children: React.ReactNode }) {
  return (
    <section className="space-y-6">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-3xl font-serif font-bold text-foreground">{title}</h2>
        <p className="text-muted-foreground mt-2">{purpose}</p>
      </div>
      <div className="grid md:grid-cols-1 gap-6">
        {children}
      </div>
    </section>
  );
}

function DesignBlock({ label, children }: { label: string, children: React.ReactNode }) {
  return (
    <div className="bg-card p-6 rounded-2xl border border-border">
      <h3 className="font-bold text-lg mb-3">{label}</h3>
      {children}
    </div>
  );
}