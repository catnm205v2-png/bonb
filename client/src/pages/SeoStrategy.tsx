import { Badge } from "@/components/ui/badge";

export default function SeoStrategy() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-20 pb-20 font-sans">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="space-y-4 mb-12 border-b border-border pb-8">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20 mb-4">Technical SEO</Badge>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground">SEO & Performance Strategy</h1>
          <p className="text-xl text-muted-foreground">Comprehensive optimization guidelines for BuyorNotBuy.com.</p>
        </div>

        <div className="space-y-16">

          <SeoSection title="1. On-Page SEO Structure" icon="Layout">
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li><strong>H1 Tags:</strong> Strictly one H1 per page. For property pages, this should be the full address (e.g., <code>&lt;h1&gt;123 Luxury Lane, Beverly Hills, CA&lt;/h1&gt;</code>).</li>
              <li><strong>Heading Hierarchy:</strong> Maintain logical structure (H2 for main sections like "Features", H3 for sub-sections). Never skip levels (e.g., jumping from H2 to H4).</li>
              <li><strong>Keyword Placement:</strong> Target primary keywords (e.g., "Luxury real estate agent [City]", "Homes for sale in [Neighborhood]") in the Title, H1, first 100 words of content, and URL.</li>
              <li><strong>Content Depth:</strong> Ensure individual property pages have unique descriptions, not just raw MLS data, to avoid duplicate content penalties.</li>
            </ul>
          </SeoSection>

          <SeoSection title="2. Metadata Strategy" icon="Tag">
            <div className="bg-card p-6 rounded-2xl border border-border space-y-4">
              <div>
                <h4 className="font-bold mb-1 text-foreground">Title Tags (Max 60 chars)</h4>
                <code className="text-sm text-primary block bg-background p-2 rounded">Property Address | City Real Estate | Ben Chandran</code>
              </div>
              <div>
                <h4 className="font-bold mb-1 text-foreground">Meta Descriptions (Max 155 chars)</h4>
                <code className="text-sm text-primary block bg-background p-2 rounded">Stunning 4-bed, 3-bath luxury home in [Neighborhood]. Features an open concept, chef's kitchen, and pool. Schedule a tour with Ben Chandran today.</code>
              </div>
              <div>
                <h4 className="font-bold mb-1 text-foreground">Open Graph / Twitter Cards</h4>
                <p className="text-sm text-muted-foreground">Dynamically generate <code>og:image</code> for every property page using the primary listing photo. Ensure <code>og:title</code> and <code>og:description</code> match the meta tags to optimize social sharing.</p>
              </div>
            </div>
          </SeoSection>

          <SeoSection title="3. Schema Markup (JSON-LD)" icon="Code">
            <p className="text-muted-foreground mb-4">Inject structured data into the <code>&lt;head&gt;</code> of specific pages to secure Rich Snippets in Google search results.</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-card p-4 rounded-xl border border-border">
                <h4 className="font-bold mb-2">RealEstateAgent Schema</h4>
                <p className="text-sm text-muted-foreground">Applied to Homepage & About Page. Includes Ben's name, photo, price range, service area, phone number, and aggregate rating.</p>
              </div>
              <div className="bg-card p-4 rounded-xl border border-border">
                <h4 className="font-bold mb-2">SingleFamilyResidence Schema</h4>
                <p className="text-sm text-muted-foreground">Applied to Property pages. Includes address, price, number of rooms, floor size, and primary photo URL.</p>
              </div>
            </div>
          </SeoSection>

          <SeoSection title="4. URL Best Practices" icon="Link">
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li><strong>Descriptive & Clean:</strong> Use <code>/property/123-luxury-lane-beverly-hills</code> instead of <code>/property?id=8923749</code>.</li>
              <li><strong>Hyphens:</strong> Always use hyphens (-) to separate words, never underscores (_).</li>
              <li><strong>Lowercase:</strong> Force all URLs to lowercase to prevent duplicate content issues resulting from case sensitivity.</li>
              <li><strong>Trailing Slashes:</strong> Enforce a strict policy (either always use them or never use them) and 301 redirect the opposite to prevent duplicate indexing.</li>
            </ul>
          </SeoSection>

          <SeoSection title="5. Internal Linking Strategy" icon="Network">
            <p className="text-muted-foreground mb-4">Create a semantic web to distribute page authority (link juice) and keep users engaged.</p>
            <div className="bg-card p-6 rounded-2xl border border-border">
              <ul className="space-y-3">
                <li className="flex gap-3 items-start">
                  <span className="text-primary font-bold">↳</span>
                  <div>
                    <strong className="text-foreground">Breadcrumbs:</strong> Implement JSON-LD breadcrumbs and visual breadcrumbs on property pages (e.g., <em>Home &gt; Properties &gt; Beverly Hills &gt; 123 Luxury Lane</em>).
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-primary font-bold">↳</span>
                  <div>
                    <strong className="text-foreground">Related Properties:</strong> Show "Similar Homes in [Neighborhood]" at the bottom of property details.
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-primary font-bold">↳</span>
                  <div>
                    <strong className="text-foreground">Contextual Links:</strong> Link from Blog/Content articles directly to relevant property search filters (e.g., an article about "Best Condos" links to <code>/properties?type=condo</code>).
                  </div>
                </li>
              </ul>
            </div>
          </SeoSection>

          <SeoSection title="6 & 7. Image Optimization & Page Speed" icon="Zap">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-serif font-bold text-xl mb-3 text-foreground">Image Strategy</h4>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li><strong>Next-Gen Formats:</strong> Serve all property photos in <code>WebP</code> or <code>AVIF</code> format.</li>
                  <li><strong>Responsive Sizing:</strong> Use <code>srcset</code> to serve smaller images to mobile devices.</li>
                  <li><strong>Alt Text:</strong> Enforce descriptive alt text for accessibility and image search (e.g., "Modern kitchen with marble island at 123 Luxury Lane").</li>
                  <li><strong>Lazy Loading:</strong> Implement <code>loading="lazy"</code> on all images below the fold (especially in the property gallery).</li>
                </ul>
              </div>
              <div>
                <h4 className="font-serif font-bold text-xl mb-3 text-foreground">Speed Optimization</h4>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li><strong>Edge Caching:</strong> Cache HTML and static assets via CDN (Vercel/Cloudflare).</li>
                  <li><strong>Code Splitting:</strong> Ensure JavaScript is chunked so users only download code required for the current page.</li>
                  <li><strong>Preload Critical Assets:</strong> Preconnect to font domains and preload the LCP (Largest Contentful Paint) image (usually the Hero background).</li>
                </ul>
              </div>
            </div>
          </SeoSection>

          <SeoSection title="8. Core Web Vitals Improvements" icon="Activity">
            <p className="text-muted-foreground mb-6">Optimizing for Google's specific user experience metrics.</p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-background border border-border p-6 rounded-xl">
                <div className="text-sm font-bold text-primary mb-1">LCP</div>
                <h4 className="font-bold mb-2">Largest Contentful Paint</h4>
                <p className="text-sm text-muted-foreground">Target: &lt; 2.5s.</p>
                <p className="text-xs text-muted-foreground mt-2 border-t border-border pt-2">Fix: Do not lazy-load the hero image. Preload it. Serve a properly sized, highly compressed WebP image for the hero section.</p>
              </div>
              <div className="bg-background border border-border p-6 rounded-xl">
                <div className="text-sm font-bold text-primary mb-1">FID / INP</div>
                <h4 className="font-bold mb-2">Interaction to Next Paint</h4>
                <p className="text-sm text-muted-foreground">Target: &lt; 200ms.</p>
                <p className="text-xs text-muted-foreground mt-2 border-t border-border pt-2">Fix: Defer non-critical third-party scripts (like analytics or chat widgets) until after the page becomes interactive. Minimize main-thread work.</p>
              </div>
              <div className="bg-background border border-border p-6 rounded-xl">
                <div className="text-sm font-bold text-primary mb-1">CLS</div>
                <h4 className="font-bold mb-2">Cumulative Layout Shift</h4>
                <p className="text-sm text-muted-foreground">Target: &lt; 0.1.</p>
                <p className="text-xs text-muted-foreground mt-2 border-t border-border pt-2">Fix: Always define explicit <code>width</code> and <code>height</code> attributes on property images to reserve space before they load, preventing text from jumping.</p>
              </div>
            </div>
          </SeoSection>

        </div>
      </div>
    </div>
  );
}

function SeoSection({ title, icon, children }: { title: string, icon: string, children: React.ReactNode }) {
  return (
    <section className="space-y-6">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-3xl font-serif font-bold text-foreground flex items-center gap-3">
          {title}
        </h2>
      </div>
      <div>
        {children}
      </div>
    </section>
  );
}