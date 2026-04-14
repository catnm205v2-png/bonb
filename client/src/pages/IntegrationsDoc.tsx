import { Badge } from "@/components/ui/badge";

export default function IntegrationsDoc() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-20 pb-20 font-sans">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="space-y-4 mb-12 border-b border-border pb-8">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20 mb-4">Systems Architecture</Badge>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground">Marketing & CRM Integrations</h1>
          <p className="text-xl text-muted-foreground">How BuyorNotBuy.com connects to SuiteCRM, Mautic, Matomo, and n8n.</p>
        </div>

        <div className="space-y-16">

          <IntegrationSection title="1. n8n (The Central Nervous System)" icon="Workflow">
            <p className="text-muted-foreground mb-4">We use n8n as the central automation bus to route data between the website and our backend systems without tightly coupling the frontend code to specific CRM APIs.</p>
            <div className="bg-card p-6 rounded-2xl border border-border">
              <h4 className="font-bold mb-3">Workflow Execution:</h4>
              <ol className="list-decimal pl-5 space-y-2 text-sm text-muted-foreground">
                <li>A user submits the <strong>Appointment Request</strong> or <strong>Property Inquiry</strong> form on the frontend.</li>
                <li>The Next.js/Node.js backend securely POSTs a JSON payload to a specific <strong>n8n Webhook URL</strong>.</li>
                <li>n8n receives the payload and begins processing:
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-xs">
                    <li>Data formatting and validation check.</li>
                    <li>Routing to SuiteCRM API to check for existing records.</li>
                    <li>Routing to Mautic API to trigger email sequences.</li>
                  </ul>
                </li>
                <li>n8n returns a success response to the website.</li>
              </ol>
            </div>
          </IntegrationSection>

          <IntegrationSection title="2. SuiteCRM (Lead Management)" icon="Database">
            <p className="text-muted-foreground mb-4">The system of record for all real estate clients and prospects.</p>
            <div className="bg-card p-6 rounded-2xl border border-border">
              <h4 className="font-bold mb-2">Integration Points:</h4>
              <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                <li><strong>Lead Creation:</strong> When n8n pushes data, SuiteCRM creates a new <code>Lead</code> record containing Name, Email, Phone, and their "Interested In" selection.</li>
                <li><strong>Activity Logging:</strong> Subsequent form submissions update the existing contact record with new notes or requested property details.</li>
                <li><strong>Task Assignment:</strong> n8n automatically assigns a follow-up Task in SuiteCRM to Ben Chandran for new high-value inquiries.</li>
              </ul>
            </div>
          </IntegrationSection>

          <IntegrationSection title="3. Mautic (Marketing Automation)" icon="Mail">
            <p className="text-muted-foreground mb-4">Handles all automated email nurturing and engagement tracking.</p>
            <div className="bg-card p-6 rounded-2xl border border-border">
              <h4 className="font-bold mb-2">Integration Points:</h4>
              <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                <li><strong>Contact Creation:</strong> Parallel to SuiteCRM, n8n adds the user to Mautic.</li>
                <li><strong>Segment Assignment:</strong> Based on the form selection (e.g., "Buying a home" vs "Selling a home"), Mautic places the user in a specific Segment.</li>
                <li><strong>Campaign Triggers:</strong> Joining a segment triggers the relevant drip campaign (e.g., sending the "First-Time Buyer Guide" PDF).</li>
                <li><strong>Website Tracking:</strong> Mautic's tracking pixel is embedded on the website to monitor which properties a known lead views after clicking an email link.</li>
              </ul>
            </div>
          </IntegrationSection>

          <IntegrationSection title="4. Matomo (Privacy-First Analytics)" icon="PieChart">
            <p className="text-muted-foreground mb-4">Replaces Google Analytics for detailed, GDPR-compliant traffic analysis.</p>
            <div className="bg-card p-6 rounded-2xl border border-border">
              <h4 className="font-bold mb-2">Implementation:</h4>
              <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                <li><strong>Script Embed:</strong> The Matomo tracking script is embedded in the Next.js <code>layout.tsx</code> to track page views across the SPA.</li>
                <li><strong>Event Tracking:</strong> Custom events are fired when users interact with the Property Gallery filters or click "Schedule Tour" buttons.</li>
                <li><strong>Form Tracking:</strong> Matomo tracks form initiation vs. completion to identify drop-off points.</li>
                <li><strong>Self-Hosted:</strong> Hosted alongside the local/production infrastructure to maintain complete data ownership.</li>
              </ul>
            </div>
          </IntegrationSection>

        </div>
      </div>
    </div>
  );
}

function IntegrationSection({ title, icon, children }: { title: string, icon: string, children: React.ReactNode }) {
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