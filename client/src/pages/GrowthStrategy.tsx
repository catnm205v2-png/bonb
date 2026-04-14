import { Badge } from "@/components/ui/badge";

export default function GrowthStrategy() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-20 pb-20 font-sans">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="space-y-4 mb-12 border-b border-border pb-8">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20 mb-4">Growth Strategy</Badge>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground">Digital Growth Engine</h1>
          <p className="text-xl text-muted-foreground">Comprehensive strategy to scale traffic, capture leads, and increase closed transactions for BuyorNotBuy.com.</p>
        </div>

        <div className="space-y-16">

          <StrategySection title="1. Content Strategy" icon="PenTool">
            <p className="text-muted-foreground mb-4">Establishing authority through hyper-local, high-value information that serves buyers and sellers at every stage of their journey.</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-2xl border border-border">
                <h4 className="font-bold mb-2">Neighborhood Guides</h4>
                <p className="text-sm text-muted-foreground">
                  In-depth profiles of target zip codes. Include data on school ratings, local amenities, market trends, and video walkthroughs of the area. (e.g., "The Ultimate Guide to Moving to [Neighborhood]").
                </p>
              </div>
              <div className="bg-card p-6 rounded-2xl border border-border">
                <h4 className="font-bold mb-2">Market Insight Reports</h4>
                <p className="text-sm text-muted-foreground">
                  Monthly data-driven blog posts analyzing the local real estate market (inventory levels, average days on market, pricing trends) targeted at analytical buyers and hesitant sellers.
                </p>
              </div>
            </div>
          </StrategySection>

          <StrategySection title="2. SEO Roadmap" icon="TrendingUp">
            <div className="bg-[#fdfaf5] p-6 rounded-2xl border border-[#e5d9c5] shadow-inner space-y-4">
              <div className="flex gap-4">
                <div className="text-primary font-bold w-16">Phase 1</div>
                <div>
                  <h4 className="font-bold">Foundation & Local SEO</h4>
                  <p className="text-sm text-muted-foreground">Optimize Google Business Profile. Ensure NAP (Name, Address, Phone) consistency across local directories. Optimize existing property pages with proper schema markup.</p>
                </div>
              </div>
              <div className="flex gap-4 border-t border-[#e5d9c5] pt-4">
                <div className="text-primary font-bold w-16">Phase 2</div>
                <div>
                  <h4 className="font-bold">Long-Tail Content Capture</h4>
                  <p className="text-sm text-muted-foreground">Publish long-form articles targeting specific queries: "Best schools in [City]", "Cost of living in [Neighborhood] vs [Neighborhood]", "How to stage a luxury home".</p>
                </div>
              </div>
              <div className="flex gap-4 border-t border-[#e5d9c5] pt-4">
                <div className="text-primary font-bold w-16">Phase 3</div>
                <div>
                  <h4 className="font-bold">Backlink Acquisition</h4>
                  <p className="text-sm text-muted-foreground">Digital PR campaigns. Reach out to local news outlets with market data insights. Guest post on regional lifestyle blogs.</p>
                </div>
              </div>
            </div>
          </StrategySection>

          <StrategySection title="3. Conversion Rate Optimization (CRO)" icon="Target">
            <ul className="list-disc pl-5 space-y-3 text-muted-foreground">
              <li><strong>Frictionless Scheduling:</strong> Integrate Calendly directly into property pages. Reduce the "Schedule Tour" action from a 5-field form to a 2-click calendar selection.</li>
              <li><strong>Social Proof Injection:</strong> Strategically place micro-testimonials near primary CTAs (e.g., placing "Ben helped us close in 14 days!" right below the Contact Form).</li>
              <li><strong>Sticky CTAs:</strong> On mobile, keep a "Call Agent" or "Request Info" button fixed to the bottom of the screen while scrolling through long property descriptions.</li>
            </ul>
          </StrategySection>

          <StrategySection title="4. Email Capture System" icon="Mail">
            <p className="text-muted-foreground mb-4">Moving beyond generic "Subscribe to our newsletter" to highly targeted lead magnets.</p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-card p-5 rounded-xl border border-border">
                <h4 className="font-bold mb-1 text-sm">For Sellers</h4>
                <p className="text-xs text-muted-foreground mb-3">"Get Your Free Instant Home Valuation Report"</p>
                <div className="h-8 bg-primary/10 rounded flex items-center justify-center text-xs text-primary font-medium">Interactive Valuation Tool</div>
              </div>
              <div className="bg-card p-5 rounded-xl border border-border">
                <h4 className="font-bold mb-1 text-sm">For Buyers</h4>
                <p className="text-xs text-muted-foreground mb-3">"The First-Time Luxury Buyer's Checklist"</p>
                <div className="h-8 bg-primary/10 rounded flex items-center justify-center text-xs text-primary font-medium">PDF Download Gate</div>
              </div>
              <div className="bg-card p-5 rounded-xl border border-border">
                <h4 className="font-bold mb-1 text-sm">For Investors</h4>
                <p className="text-xs text-muted-foreground mb-3">"Exclusive 'Coming Soon' Property Alerts"</p>
                <div className="h-8 bg-primary/10 rounded flex items-center justify-center text-xs text-primary font-medium">Early Access Signup</div>
              </div>
            </div>
          </StrategySection>

          <StrategySection title="5. Analytics & Dashboarding" icon="PieChart">
            <div className="bg-card p-6 rounded-2xl border border-border space-y-4">
              <p className="text-muted-foreground">Implement Google Analytics 4 (GA4) + Google Tag Manager (GTM) to track the full user journey.</p>
              <h4 className="font-bold mt-4">Key Metrics to Track (KPIs):</h4>
              <ul className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><span className="text-primary">•</span> Lead Conversion Rate (%)</li>
                <li className="flex items-center gap-2"><span className="text-primary">•</span> Cost Per Acquisition (CPA)</li>
                <li className="flex items-center gap-2"><span className="text-primary">•</span> Time on Property Pages</li>
                <li className="flex items-center gap-2"><span className="text-primary">•</span> Scroll Depth on Content Pages</li>
                <li className="flex items-center gap-2"><span className="text-primary">•</span> Form Drop-off Rate</li>
                <li className="flex items-center gap-2"><span className="text-primary">•</span> Organic Traffic Growth</li>
              </ul>
            </div>
          </StrategySection>

          <StrategySection title="6. A/B Testing Strategy" icon="SplitSquareHorizontal">
            <p className="text-muted-foreground mb-4">Continuous experimentation using tools like Google Optimize or Vercel Edge Config.</p>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="py-3 px-4 font-bold text-foreground">Test Variable</th>
                  <th className="py-3 px-4 font-bold text-foreground">Hypothesis</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-border">
                  <td className="py-3 px-4 font-medium text-foreground">Hero Headline</td>
                  <td className="py-3 px-4 text-muted-foreground">Testing emotional ("Your Dream Home") vs. pragmatic ("Expert Real Estate Guidance") copy to see which drives more property searches.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4 font-medium text-foreground">Form Length</td>
                  <td className="py-3 px-4 text-muted-foreground">Testing a 3-field form (Name, Email, Phone) vs. a 5-field form (adding Budget, Timeline) to find the optimal balance of lead volume vs. lead quality.</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-foreground">Property Images</td>
                  <td className="py-3 px-4 text-muted-foreground">Testing exterior front-shots vs. luxury interior shots as the primary listing thumbnail.</td>
                </tr>
              </tbody>
            </table>
          </StrategySection>

          <StrategySection title="7. The Marketing Funnel" icon="Filter">
            <div className="bg-[#2a2624] text-white p-8 rounded-2xl space-y-6">
              <div className="bg-white/10 p-4 rounded-xl border border-white/20 text-center">
                <div className="text-primary font-bold text-sm uppercase tracking-wider mb-1">Top of Funnel (Awareness)</div>
                <p className="text-sm text-white/80">Local SEO, Neighborhood Guides, Social Media Property Tours (Instagram/TikTok Reels).</p>
              </div>
              <div className="flex justify-center"><div className="w-1 h-6 bg-primary/50"></div></div>
              <div className="bg-white/10 p-4 rounded-xl border border-white/20 text-center w-[90%] mx-auto">
                <div className="text-primary font-bold text-sm uppercase tracking-wider mb-1">Middle of Funnel (Consideration)</div>
                <p className="text-sm text-white/80">Interactive Property Gallery, Market Insight Reports, Retargeting Ads for users who viewed specific listings.</p>
              </div>
              <div className="flex justify-center"><div className="w-1 h-6 bg-primary/50"></div></div>
              <div className="bg-white/10 p-4 rounded-xl border border-primary/50 text-center w-[80%] mx-auto relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 blur-xl"></div>
                <div className="relative z-10">
                  <div className="text-primary font-bold text-sm uppercase tracking-wider mb-1">Bottom of Funnel (Action)</div>
                  <p className="text-sm text-white/80">Schedule Tour Buttons, Home Valuation Requests, Direct Agent Contact.</p>
                </div>
              </div>
            </div>
          </StrategySection>

        </div>
      </div>
    </div>
  );
}

function StrategySection({ title, icon, children }: { title: string, icon: string, children: React.ReactNode }) {
  return (
    <section className="space-y-6">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-3xl font-serif font-bold text-foreground">{title}</h2>
      </div>
      <div>
        {children}
      </div>
    </section>
  );
}