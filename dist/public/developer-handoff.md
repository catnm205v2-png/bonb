# BuyorNotBuy.com - Developer Handoff Documentation

This document contains the complete system architecture, UX/UI guidelines, SEO strategy, DevOps pipeline, and integration requirements for building the BuyorNotBuy.com real estate platform.

---

## 1. Information Architecture & Sitemap

### Visual Sitemap
```text
BuyorNotBuy.com (Home)
├── Properties (/properties)
│   ├── Active Listings (/properties?filter=active)
│   ├── Coming Soon (/properties?filter=coming-soon)
│   ├── Recently Sold (/properties?filter=sold)
│   └── Property Detail (/property/[id])
├── Services (/services)
│   ├── Buying Services (/services/buying)
│   ├── Selling Solutions (/services/selling)
│   └── Rental Management (/services/rental)
├── About Ben (/about)
│   ├── Profile & Experience
│   └── Client Reviews (/about#reviews)
├── Contact (/contact)
│   └── Schedule Consultation (/contact/schedule)
└── Legal
    ├── Privacy Policy (/privacy)
    └── Terms of Service (/terms)
```

---

## 2. Design System & UI Specifications

### Color Palette
- **Background (Warm Ivory):** `hsl(40, 33%, 98%)` / `#FCFAF7`
- **Card (Soft Beige):** `hsl(40, 20%, 95%)` / `#F5F3ED`
- **Foreground (Deep Charcoal):** `hsl(20, 10%, 15%)` / `#2A2624`
- **Primary (Authentic Gold):** `hsl(43, 74%, 49%)` / `#D99B20`
- **Secondary (Warm Gray):** `hsl(30, 15%, 90%)` / `#E8E5E1`
- **Border/Input:** `hsl(30, 15%, 85%)` / `#DCD9D5`

### Typography
- **Headings (Display):** Playfair Display (Serif)
- **Body & UI (Sans):** Inter (Sans-serif)

### Component Styles (Tailwind)
```css
/* Glassmorphism Panel */
.glass-panel {
  @apply bg-white/70 backdrop-blur-md border border-white/40 shadow-sm;
}
/* Text Gradient */
.text-gradient {
  @apply bg-clip-text text-transparent bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(30,80%,55%)];
}
```

---

## 3. Frontend Architecture (React / Next.js)

### Recommended Folder Structure
```text
src/
├── app/                      # Next.js App Router
│   ├── (marketing)/          # Public pages (about, services)
│   ├── properties/           # Dynamic property routing
│   └── layout.tsx            # Global layout (Nav, Footer)
├── components/
│   ├── ui/                   # Shadcn UI base components
│   ├── features/             # Complex domains (PropertyCard, LeadForm)
│   └── layout/               # Nav, Footer
└── lib/                      # API clients, utils, global state
```

### State Management
- **Server State:** Next.js native fetch / React Query.
- **Form State:** React Hook Form + Zod (Strict validation for lead capture).
- **URL State:** Property filters managed via URL query parameters.

---

## 4. Backend Architecture & Database Schema

### Tech Stack
- **Backend:** Node.js + Express (or tRPC / Hono)
- **Database:** PostgreSQL + Drizzle ORM
- **Authentication:** Clerk or Auth0
- **Storage:** AWS S3 for high-res property images

### Core Database Schema (PostgreSQL)
```sql
-- Properties Table
CREATE TABLE Properties (
  id UUID PRIMARY KEY,
  mls_id VARCHAR UNIQUE,
  status ENUM('active', 'coming_soon', 'sold'),
  price DECIMAL,
  address JSONB,
  specs JSONB, -- beds, baths, sqft
  agent_id UUID
);

-- Leads Table
CREATE TABLE Leads (
  id UUID PRIMARY KEY,
  first_name VARCHAR,
  email VARCHAR,
  phone VARCHAR,
  preferences JSONB, -- budget, type
  status ENUM('new', 'contacted')
);
```

---

## 5. Integrations & Lead Flow (n8n, SuiteCRM, Mautic, Matomo)

The frontend does not connect to the CRM directly. It posts a JSON payload to an **n8n Webhook**, which orchestrates the API calls.

### Workflow:
1. **Frontend Capture:** User submits the Appointment form (Name, Email, Phone, Interest).
2. **Transit:** Next.js API route POSTs the JSON payload to the n8n Webhook.
3. **n8n Router:**
   - Formats data.
   - Pushes to **SuiteCRM** (Creates Lead Record, assigns task to Ben).
   - Pushes to **Mautic** (Adds to email segment, triggers welcome drip campaign).
4. **Analytics:** **Matomo** tracks the conversion event client-side for privacy-first analytics.

---

## 6. DevOps & Local Server Setup (macOS Sequoia)

### Local Testing Environment
- **Web Server:** Nginx (Port 80/443 acting as reverse proxy) + Apache (Port 8080 if needed).
- **Database:** Local MySQL (via DBngin or Homebrew).
- **Backend:** Local Node.js daemon (Port 5000).
- **Network:** Map `local.buyornotbuy.com` in `/etc/hosts`. Use `mkcert` for local SSL. Use `ngrok` for testing on mobile devices.

### Production CI/CD (GitHub Actions)
1. **On PR:** Run `npm ci`, ESLint, Prettier, TypeScript checks, and Vitest. Spin up a preview database branch and Vercel Preview URL.
2. **On Merge:** Trigger Vercel deploy (Frontend), Render deploy (API), and run `drizzle-kit push` for database migrations.

---

## 7. SEO & Growth Strategy

### Technical SEO
- **Schema:** Inject `RealEstateAgent` JSON-LD on Home/About, and `SingleFamilyResidence` JSON-LD on property pages.
- **URLs:** Clean, lowercase, hyphenated (e.g., `/property/123-luxury-lane`).
- **Core Web Vitals:** Preload LCP hero image. Serve property images in `WebP` or `AVIF`. Explicitly define image dimensions to prevent CLS (Layout Shifts).

### Marketing Funnel
- **Top:** Local SEO, Neighborhood Guides, Social Media property tours.
- **Middle:** Interactive Property Gallery, Market Insight Reports.
- **Bottom:** Lead Magnets (e.g., "Free Home Valuation"), Calendly Integration for frictionless tour scheduling.
