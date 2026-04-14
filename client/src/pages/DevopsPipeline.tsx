import { Badge } from "@/components/ui/badge";

export default function DevopsPipeline() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-20 pb-20 font-sans">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="space-y-4 mb-12 border-b border-border pb-8">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20 mb-4">DevOps Architecture (Local Stage)</Badge>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground">Local Server Deployment</h1>
          <p className="text-xl text-muted-foreground">Infrastructure tuned for macOS Sequoia testing phase (Apache/Nginx, MySQL, PHP/Node).</p>
        </div>

        <div className="space-y-16">

          <DevopsSection title="1. Local Hosting Architecture (macOS Sequoia)" icon="HardDrive">
            <p className="text-muted-foreground mb-4">A self-hosted, monolithic approach for local testing and development before migrating to cloud infrastructure.</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-2xl border border-border">
                <h4 className="font-bold mb-2">Web Server (Nginx + Apache)</h4>
                <p className="text-sm text-muted-foreground">
                  <strong>Nginx</strong> acts as the reverse proxy (port 80/443), handling static assets and routing dynamic requests. 
                  <strong>Apache</strong> (running on port 8080) handles heavy lifting if PHP processing is required, or Nginx proxies directly to a local Node.js process (port 5000).
                </p>
              </div>
              <div className="bg-card p-6 rounded-2xl border border-border">
                <h4 className="font-bold mb-2">Database (MySQL)</h4>
                <p className="text-sm text-muted-foreground">
                  Running locally via Homebrew or a tool like DBngin. Contains the entire schema for properties and leads. 
                  Accessible locally via tools like TablePlus or Sequel Ace.
                </p>
              </div>
              <div className="bg-card p-6 rounded-2xl border border-border">
                <h4 className="font-bold mb-2">Backend (PHP / Node.js)</h4>
                <p className="text-sm text-muted-foreground">
                  Depending on the chosen stack, either PHP-FPM serves the API requests via Apache/Nginx, or a local Node.js daemon runs via PM2/forever to serve the API endpoints.
                </p>
              </div>
              <div className="bg-card p-6 rounded-2xl border border-border">
                <h4 className="font-bold mb-2">Storage (Local File System)</h4>
                <p className="text-sm text-muted-foreground">
                  During this phase, property images are stored directly in the local macOS file system (e.g., <code>/var/www/buyornotbuy/public/uploads</code>) and served statically by Nginx.
                </p>
              </div>
            </div>
          </DevopsSection>

          <DevopsSection title="2. Local Server Configuration Strategy" icon="Settings">
            <div className="bg-[#282a36] text-[#f8f8f2] p-6 rounded-2xl overflow-x-auto text-sm font-mono leading-relaxed">
              <div className="text-[#50fa7b] font-bold mb-2"># Example Local Nginx Config (/usr/local/etc/nginx/nginx.conf)</div>
              <pre className="text-[#8be9fd]">
{`server {
    listen 80;
    server_name local.buyornotbuy.com;
    root /Users/yourname/Sites/buyornotbuy/public;

    # Serve static files directly
    location /assets/ {
        expires max;
        access_log off;
    }

    # Proxy API requests to Node.js backend
    location /api/ {
        proxy_pass http://127.0.0.1:5000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }

    # SPA Routing (React/Next.js)
    location / {
        try_files $uri $uri/ /index.html;
    }
}`}
              </pre>
            </div>
          </DevopsSection>

          <DevopsSection title="3. Local Environment Management" icon="Terminal">
            <ul className="list-disc pl-5 space-y-3 text-muted-foreground bg-card p-6 rounded-2xl border border-border">
              <li><strong>Local Domain Resolution:</strong> Map <code>127.0.0.1 local.buyornotbuy.com</code> in the macOS <code>/etc/hosts</code> file to test routing identically to production.</li>
              <li><strong>Local SSL (mkcert):</strong> Use <code>mkcert</code> to generate locally-trusted SSL certificates, allowing Nginx to serve the site over HTTPS locally. This ensures secure cookies and modern browser features work during testing.</li>
              <li><strong>Environment Variables:</strong> Store database credentials (MySQL root/user passwords) in a local <code>.env.local</code> file that is explicitly ignored by Git.</li>
            </ul>
          </DevopsSection>

          <DevopsSection title="4. Testing & Pre-Deployment Workflow" icon="CheckCircle">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-background border border-border p-6 rounded-xl">
                <h4 className="font-bold mb-2">Database Migration Testing</h4>
                <p className="text-sm text-muted-foreground">
                  Run SQL dumps or ORM migrations against the local MySQL instance to verify schema changes don't break existing data before pushing to a staging/production server.
                </p>
              </div>
              <div className="bg-background border border-border p-6 rounded-xl">
                <h4 className="font-bold mb-2">Local Network Access (ngrok)</h4>
                <p className="text-sm text-muted-foreground">
                  Use <code>ngrok http 80</code> to temporarily expose the local macOS server to the public internet. This allows testing the UI on physical mobile devices (iPhones/iPads) over cellular networks.
                </p>
              </div>
            </div>
          </DevopsSection>

          <DevopsSection title="5. Transitioning to Cloud (The Future)" icon="ArrowUpRight">
            <p className="text-muted-foreground mb-4">Once local testing is complete, the migration strategy looks like this:</p>
            <div className="bg-card p-6 rounded-2xl border border-border">
              <ol className="list-decimal pl-5 space-y-3 text-sm text-foreground">
                <li><strong>Database Migration:</strong> Export the local MySQL database (<code>mysqldump</code>) and import it into a managed cloud database (e.g., AWS RDS or DigitalOcean).</li>
                <li><strong>Asset Migration:</strong> Move locally uploaded images from the macOS file system to an AWS S3 bucket. Update database image URLs to point to the S3/CloudFront domain.</li>
                <li><strong>Code Deployment:</strong> Push the finalized codebase to GitHub, triggering the CI/CD pipeline to deploy the Node/PHP backend and React frontend to cloud providers (Vercel/Render).</li>
              </ol>
            </div>
          </DevopsSection>

        </div>
      </div>
    </div>
  );
}

function DevopsSection({ title, icon, children }: { title: string, icon: string, children: React.ReactNode }) {
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