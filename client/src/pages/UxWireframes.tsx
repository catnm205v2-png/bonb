import { Badge } from "@/components/ui/badge";

export default function UxWireframes() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-20 pb-20 font-sans">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="space-y-4 mb-12 border-b border-border pb-8">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20 mb-4">UX Design</Badge>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground">Low-Fidelity Wireframes</h1>
          <p className="text-xl text-muted-foreground">BuyorNotBuy.com - Page Layouts & User Flow</p>
        </div>

        <div className="space-y-16">
          
          <WireframeSection title="1. Homepage" description="The main entry point designed to establish trust, showcase premium properties, and capture leads.">
            {`[Header]
  [Logo: BuyorNotBuy.com]  [Nav: Properties | Services | About]  [CTA: Sign In] [CTA: Schedule Tour]

[Hero Section]
  [Background: High-Quality Luxury Home Exterior]
  [Headline: Discover your perfect space.]
  [Subheadline: Expert guidance for buying, selling, or renting premium homes.]
  [Primary CTA: Explore Properties] [Secondary CTA: Meet Your Agent]
  [Trust Badges: 15+ Yrs Exp | $120M Vol | 5.0 Rating]

[Property Gallery Section]
  [Headline: Curated Properties]
  [Filter Tabs: All | Active | Coming Soon | Sold]
  [Grid: 2x2 or 3x2]
    [Property Card]
      [Image] [Tag: Status/Type] [Heart Icon]
      [Price] [Address]
      [Specs: Beds | Baths | SqFt]
      [Btn: View Details] [Btn: Schedule Tour]

[Agent Profile Section]
  [Grid: Split Layout]
    [Left: Professional Headshot of Ben Chandran]
    [Right: Bio snippet, Philosophy]
    [CTAs: Let's Talk | Email Me] [Social Links]

[Services Snapshot]
  [Headline: Premier Real Estate Services]
  [3 Columns]
    [Buying] [Selling] [Rental Services]
    [Brief Description for each]

[Footer]
  [Brand Column] [Properties Links] [Connect Links] [Legal & Copyright]`}
          </WireframeSection>

          <WireframeSection title="2. Product/Service Page (Property Detail)" description="Focused on conversion. Designed to provide all necessary details about a specific property and prompt the user to schedule a tour.">
            {`[Header]
  (Global Navigation)

[Property Media Header]
  [Main Feature Image / Video Tour]
  [Thumbnails Carousel: Image 1, Image 2, Image 3, Image 4...]

[Content Layout - Two Columns]
  [Left Column - 70%]
    [Headline: Address] [Price]
    [Tags: Active | Single Family]
    [Specs Overview: Beds | Baths | SqFt | Lot Size | Year Built]
    [Section: Description]
      [Paragraphs of property details]
    [Section: Features & Amenities]
      [Bulleted list grid]
    [Section: Map View]
      [Interactive Map Embed]

  [Right Column - 30% (Sticky)]
    [Card: Request Information]
      [Headline: Interested in this home?]
      [Agent Mini-Profile: Photo & Name]
      [Form: Name, Email, Phone, Message]
      [Button: Schedule a Tour]
      [Button: Ask a Question]

[Related Properties Section]
  [Headline: Similar Homes You Might Like]
  [Grid: 3 Property Cards]

[Footer]
  (Global Footer)`}
          </WireframeSection>

          <WireframeSection title="3. About Page (Agent Profile)" description="Builds personal connection and establishes authority in the luxury market.">
            {`[Header]
  (Global Navigation)

[Hero Section - Personal]
  [Background: Elegant Office or Cityscape]
  [Headline: Meet Ben Chandran]
  [Subheadline: Your trusted advisor in premium real estate.]

[Biography Section]
  [Two Columns]
    [Image: Ben in action/lifestyle shot]
    [Content: Detailed background, local expertise, real estate philosophy]

[Stats & Accolades]
  [Row of 4 distinct callouts]
    [Awards] [Certifications] [Total Sales] [Communities Served]

[Testimonials Carousel]
  [Headline: What Clients Are Saying]
  [Slider]
    [Quote: "Ben made selling our home effortless..."]
    [Name/Role of Client] [Star Rating]

[CTA Section]
  [Headline: Ready to make a move?]
  [Button: Schedule a Consultation]

[Footer]
  (Global Footer)`}
          </WireframeSection>

          <WireframeSection title="4. Contact Page" description="A frictionless interface for users to reach out, book a meeting, or submit an inquiry.">
            {`[Header]
  (Global Navigation)

[Contact Hero]
  [Headline: Let's Connect]
  [Subheadline: We're here to answer your questions and guide you home.]

[Two Column Layout]
  [Left Column - Contact Form]
    [Form]
      [Input: First & Last Name]
      [Input: Email Address]
      [Dropdown: I am interested in (Buying/Selling/Renting)]
      [Textarea: Message]
      [Submit Button]

  [Right Column - Direct Contact & Booking]
    [Card]
      [Icon: Phone] [Text: (555) 123-4567]
      [Icon: Email] [Text: ben@buyornotbuy.com]
      [Icon: Office] [Text: 100 Luxury Way, Suite 100, City, ST]
    
    [Widget: Calendar / Booking Embed]
      [Headline: Pick a time to chat]
      [Calendly/Scheduling UI]

[Footer]
  (Global Footer)`}
          </WireframeSection>

          <WireframeSection title="5. Dashboard (Agent Admin)" description="Secure portal for Ben to manage listings, track leads, and view performance metrics.">
            {`[Admin Header]
  [Logo] [Search Bar] [Notification Bell] [Profile Dropdown: Logout]

[Sidebar Navigation]
  [Links: Overview, Properties, Leads, Messages, Settings]

[Main Content Area: Overview]
  [Top Row - KPI Cards]
    [Card: Active Listings (12)] 
    [Card: New Leads (5)] 
    [Card: Pending Tours (3)]

  [Middle Row]
    [Left: Recent Inquiries List]
      [Table: Name | Property | Date | Status]
      [Action: Reply / Mark as Read]
    [Right: Upcoming Tours/Calendar]
      [List: Time | Client | Property]

  [Bottom Row]
    [Quick Actions Card]
      [Button: + Add New Property]
      [Button: + Add Manual Lead]
      [Button: View Live Site]`}
          </WireframeSection>

        </div>
      </div>
    </div>
  );
}

function WireframeSection({ title, description, children }: { title: string, description: string, children: string }) {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-2xl font-serif font-bold text-foreground">{title}</h2>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <div className="bg-[#fdfaf5] p-6 rounded-2xl border border-[#e5d9c5] shadow-inner">
        <pre className="font-mono text-sm leading-relaxed text-[#5a4d3c] whitespace-pre-wrap">
          {children}
        </pre>
      </div>
    </section>
  );
}