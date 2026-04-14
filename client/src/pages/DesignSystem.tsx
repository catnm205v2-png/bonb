import { Badge } from "@/components/ui/badge";

export default function DesignSystem() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-20 pb-20 font-sans">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="space-y-4 mb-12 border-b border-border pb-8">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20 mb-4">Design System</Badge>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground">BuyorNotBuy.com Foundation</h1>
          <p className="text-xl text-muted-foreground">Comprehensive UI/UX guidelines for the luxury real estate platform.</p>
        </div>

        <div className="space-y-24">
          
          {/* 1. Color Palette */}
          <section className="space-y-8">
            <div className="border-l-4 border-primary pl-4">
              <h2 className="text-3xl font-serif font-bold">1. Color Palette</h2>
              <p className="text-muted-foreground mt-2">Warm, inviting, and sophisticated.</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <ColorSwatch name="Background" value="hsl(40, 33%, 98%)" hex="#FCFAF7" desc="Warm Ivory" colorClass="bg-background border border-border" textClass="text-foreground" />
              <ColorSwatch name="Card" value="hsl(40, 20%, 95%)" hex="#F5F3ED" desc="Soft Beige" colorClass="bg-card border border-border" textClass="text-foreground" />
              <ColorSwatch name="Foreground" value="hsl(20, 10%, 15%)" hex="#2A2624" desc="Deep Charcoal" colorClass="bg-foreground" textClass="text-background" />
              <ColorSwatch name="Primary" value="hsl(43, 74%, 49%)" hex="#D99B20" desc="Authentic Gold" colorClass="bg-primary" textClass="text-primary-foreground" />
              <ColorSwatch name="Secondary" value="hsl(30, 15%, 90%)" hex="#E8E5E1" desc="Warm Gray" colorClass="bg-secondary" textClass="text-secondary-foreground" />
              <ColorSwatch name="Muted" value="hsl(30, 15%, 92%)" hex="#EBE8E4" desc="Light Gray" colorClass="bg-muted" textClass="text-muted-foreground" />
              <ColorSwatch name="Muted Text" value="hsl(20, 5%, 45%)" hex="#787472" desc="Medium Gray" colorClass="bg-[hsl(20,5%,45%)]" textClass="text-white" />
              <ColorSwatch name="Border" value="hsl(30, 15%, 85%)" hex="#DCD9D5" desc="Subtle Divider" colorClass="bg-border" textClass="text-foreground" />
            </div>
          </section>

          {/* 2. Typography */}
          <section className="space-y-8">
            <div className="border-l-4 border-primary pl-4">
              <h2 className="text-3xl font-serif font-bold">2. Typography</h2>
              <p className="text-muted-foreground mt-2">Elegant serif headers paired with highly legible sans-serif body text.</p>
            </div>
            
            <div className="space-y-8 bg-card p-8 rounded-2xl border border-border">
              <div className="space-y-4 border-b border-border pb-6">
                <div className="text-sm font-bold text-primary uppercase tracking-wider">Display / Headings (Playfair Display)</div>
                <h1 className="text-6xl font-serif font-bold">Heading 1 (6xl)</h1>
                <h2 className="text-5xl font-serif font-bold">Heading 2 (5xl)</h2>
                <h3 className="text-4xl font-serif font-bold">Heading 3 (4xl)</h3>
                <h4 className="text-3xl font-serif font-bold">Heading 4 (3xl)</h4>
                <h5 className="text-2xl font-serif font-bold">Heading 5 (2xl)</h5>
              </div>
              <div className="space-y-4">
                <div className="text-sm font-bold text-primary uppercase tracking-wider">Body / UI Text (Inter)</div>
                <p className="text-xl"><strong>Body Large (xl):</strong> Used for hero subtitles and prominent introductory paragraphs.</p>
                <p className="text-base"><strong>Body Base (base):</strong> The standard reading size for property descriptions and articles.</p>
                <p className="text-sm text-muted-foreground"><strong>Body Small (sm):</strong> Used for metadata, captions, and secondary UI elements.</p>
                <p className="text-xs uppercase tracking-wider font-semibold"><strong>Overline (xs):</strong> Used for categorical tags and small labels.</p>
              </div>
            </div>
          </section>

          {/* 3. Spacing System */}
          <section className="space-y-8">
            <div className="border-l-4 border-primary pl-4">
              <h2 className="text-3xl font-serif font-bold">3. Spacing System</h2>
              <p className="text-muted-foreground mt-2">Based on an 8px (0.5rem) linear scale.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <SpacingItem rem="0.5rem" px="8px" tailwind="p-2" desc="Tight component gaps" width="w-8" />
              <SpacingItem rem="1rem" px="16px" tailwind="p-4" desc="Standard inner padding" width="w-16" />
              <SpacingItem rem="1.5rem" px="24px" tailwind="p-6" desc="Card padding, section gaps" width="w-24" />
              <SpacingItem rem="2rem" px="32px" tailwind="p-8" desc="Large card padding" width="w-32" />
              <SpacingItem rem="3rem" px="48px" tailwind="p-12" desc="Component spacing" width="w-48" />
              <SpacingItem rem="5rem" px="80px" tailwind="p-20" desc="Section spacing (mobile)" width="w-full max-w-[200px]" />
              <SpacingItem rem="8rem" px="128px" tailwind="p-32" desc="Section spacing (desktop)" width="w-full max-w-[300px]" />
            </div>
          </section>

          {/* 4. Grid & Layout */}
          <section className="space-y-8">
            <div className="border-l-4 border-primary pl-4">
              <h2 className="text-3xl font-serif font-bold">4. Grid & Layout</h2>
              <p className="text-muted-foreground mt-2">12-column responsive grid system.</p>
            </div>
            
            <div className="bg-card p-6 rounded-2xl border border-border space-y-4">
              <div className="grid grid-cols-12 gap-4">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="h-12 bg-primary/20 rounded flex items-center justify-center text-xs text-primary font-mono hidden md:flex">1</div>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="h-12 bg-primary/20 rounded flex items-center justify-center text-xs text-primary font-mono">1/2 (col-span-6)</div>
                <div className="h-12 bg-primary/20 rounded flex items-center justify-center text-xs text-primary font-mono">1/2 (col-span-6)</div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="h-12 bg-primary/20 rounded flex items-center justify-center text-xs text-primary font-mono">1/3 (col-span-4)</div>
                <div className="h-12 bg-primary/20 rounded flex items-center justify-center text-xs text-primary font-mono">1/3 (col-span-4)</div>
                <div className="h-12 bg-primary/20 rounded flex items-center justify-center text-xs text-primary font-mono">1/3 (col-span-4)</div>
              </div>
              <div className="text-sm text-muted-foreground mt-4">
                <strong>Container Max-Width:</strong> 1280px (lg) / 1536px (xl). <br/>
                <strong>Gutter:</strong> 24px (px-6) on mobile, 32px (px-8) on desktop.
              </div>
            </div>
          </section>

          {/* 5, 6, 7. UI Components */}
          <section className="space-y-8">
            <div className="border-l-4 border-primary pl-4">
              <h2 className="text-3xl font-serif font-bold">5-7. UI Components (Buttons & Forms)</h2>
              <p className="text-muted-foreground mt-2">Interactive elements designed for high conversion and elegance.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card p-8 rounded-2xl border border-border space-y-6">
                <h3 className="font-serif font-bold text-xl border-b border-border pb-2">Buttons</h3>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-4 items-center">
                    <button className="h-12 px-6 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium shadow-md transition-all">Primary Action</button>
                    <span className="text-sm text-muted-foreground">High contrast, used for primary CTAs (Schedule Tour).</span>
                  </div>
                  <div className="flex flex-wrap gap-4 items-center">
                    <button className="h-12 px-6 rounded-full border border-primary/30 hover:bg-primary/5 text-foreground font-medium transition-all">Secondary Action</button>
                    <span className="text-sm text-muted-foreground">Used for alternate paths (Learn More).</span>
                  </div>
                  <div className="flex flex-wrap gap-4 items-center">
                    <button className="h-10 px-4 rounded-full hover:bg-secondary text-foreground font-medium transition-all">Ghost Button</button>
                    <span className="text-sm text-muted-foreground">Used for utility actions (Sign In).</span>
                  </div>
                </div>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border space-y-6">
                <h3 className="font-serif font-bold text-xl border-b border-border pb-2">Form Elements</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1 block">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full h-12 px-4 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1 block">Property Type</label>
                    <select className="w-full h-12 px-4 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-muted-foreground">
                      <option>Select an option...</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 8. Iconography */}
          <section className="space-y-8">
            <div className="border-l-4 border-primary pl-4">
              <h2 className="text-3xl font-serif font-bold">8. Iconography</h2>
              <p className="text-muted-foreground mt-2">Using Lucide React. Stroke width: 1.5px to 2px for elegance.</p>
            </div>
            
            <div className="bg-card p-8 rounded-2xl border border-border">
              <div className="flex flex-wrap gap-8">
                <IconDisplay icon="Home" desc="Properties" />
                <IconDisplay icon="MapPin" desc="Location" />
                <IconDisplay icon="BedDouble" desc="Beds" />
                <IconDisplay icon="Bath" desc="Baths" />
                <IconDisplay icon="Square" desc="SqFt" />
                <IconDisplay icon="Phone" desc="Contact" />
                <IconDisplay icon="Calendar" desc="Schedule" />
              </div>
            </div>
          </section>

          {/* 9. Rules & Guidelines */}
          <section className="space-y-8">
            <div className="border-l-4 border-primary pl-4">
              <h2 className="text-3xl font-serif font-bold">9. Guidelines & Rules</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <RuleCard 
                title="Responsive Rules"
                rules={[
                  "Mobile first approach. Stack columns to single column below 768px (md).",
                  "Navigation collapses into a hamburger menu at 768px.",
                  "Typography scales down on mobile (e.g., 6xl becomes 4xl/5xl).",
                  "Padding reduces on mobile (px-6 vs px-12)."
                ]}
              />
              <RuleCard 
                title="Accessibility (a11y)"
                rules={[
                  "All text maintains at least a 4.5:1 contrast ratio against backgrounds.",
                  "All interactive elements (buttons/links) have visible focus states (focus-visible:ring-primary).",
                  "Images must include descriptive alt text.",
                  "Forms must have explicitly associated labels, not just placeholders."
                ]}
              />
              <RuleCard 
                title="Dark Mode Strategy"
                rules={[
                  "The primary brand identity is 'Warm/Bright'.",
                  "If a user system requests dark mode, the palette inverts gracefully:",
                  "Backgrounds become deep espresso/charcoal.",
                  "Gold primary color remains, acting as a glowing accent against the dark background."
                ]}
              />
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}

function ColorSwatch({ name, value, hex, desc, colorClass, textClass }: { name: string, value: string, hex: string, desc: string, colorClass: string, textClass: string }) {
  return (
    <div className="overflow-hidden rounded-xl border border-border shadow-sm">
      <div className={`h-24 ${colorClass} flex items-end p-3`}>
        <span className={`font-mono text-xs font-bold ${textClass}`}>{hex}</span>
      </div>
      <div className="p-3 bg-card">
        <div className="font-bold text-foreground text-sm">{name}</div>
        <div className="text-xs text-muted-foreground mt-1">{desc}</div>
      </div>
    </div>
  );
}

function SpacingItem({ rem, px, tailwind, desc, width }: { rem: string, px: string, tailwind: string, desc: string, width: string }) {
  return (
    <div className="flex items-center gap-4 p-3 border-b border-border">
      <div className="w-16 text-sm font-mono text-primary font-bold">{tailwind}</div>
      <div className={`h-4 bg-primary/20 rounded ${width}`}></div>
      <div className="ml-auto text-xs text-muted-foreground">{px} ({rem}) - {desc}</div>
    </div>
  );
}

function IconDisplay({ icon, desc }: { icon: string, desc: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          {icon === 'Home' && <><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></>}
          {icon === 'MapPin' && <><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></>}
          {icon === 'BedDouble' && <><path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8"/><path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"/><path d="M12 4v6"/><path d="M2 18h20"/></>}
          {icon === 'Bath' && <><path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"/><line x1="10" x2="8" y1="5" y2="7"/><line x1="2" x2="22" y1="12" y2="12"/><line x1="7" x2="7" y1="19" y2="21"/><line x1="17" x2="17" y1="19" y2="21"/></>}
          {icon === 'Square' && <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>}
          {icon === 'Phone' && <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>}
          {icon === 'Calendar' && <><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></>}
        </svg>
      </div>
      <span className="text-xs text-muted-foreground">{desc}</span>
    </div>
  );
}

function RuleCard({ title, rules }: { title: string, rules: string[] }) {
  return (
    <div className="bg-card p-6 rounded-2xl border border-border">
      <h3 className="font-serif font-bold text-lg mb-4">{title}</h3>
      <ul className="space-y-3">
        {rules.map((rule, i) => (
          <li key={i} className="text-sm text-muted-foreground flex gap-2">
            <span className="text-primary mt-0.5">•</span>
            <span className="leading-relaxed">{rule}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}