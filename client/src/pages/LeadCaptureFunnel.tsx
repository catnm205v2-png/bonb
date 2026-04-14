import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export default function LeadCaptureFunnel() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-20 pb-20 font-sans">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="space-y-4 mb-12 border-b border-border pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-xs font-medium text-primary mb-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"></span>
            </span>
            Live Systems Diagram
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground">Lead Capture Architecture</h1>
          <p className="text-xl text-muted-foreground">End-to-end data flow from website inquiry to CRM assignment.</p>
        </div>

        <div className="bg-[#2A2624] p-8 md:p-12 rounded-[2rem] shadow-2xl overflow-hidden relative">
          
          {/* Animated Background Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>
          
          <div className="relative z-10 space-y-12">
            
            {/* Step 1: User Input */}
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="m9 16 2 2 4-4"/></svg>
              </div>
              <div className="bg-white/5 border border-white/10 p-5 rounded-xl flex-1 w-full relative">
                <div className="absolute -left-6 top-1/2 w-6 h-px bg-gradient-to-r from-transparent to-primary/50 hidden md:block"></div>
                <h3 className="text-white font-bold mb-1">1. Frontend Capture</h3>
                <p className="text-white/60 text-sm">User submits the Appointment/Inquiry Form. React Hook Form validates data via Zod schema.</p>
              </div>
            </div>

            {/* Step 2: Payload Transit */}
            <div className="flex flex-col items-center pl-8 md:pl-0 md:items-start md:ml-8 -my-6 relative z-0">
               <div className="h-12 w-px bg-gradient-to-b from-white/20 via-primary/50 to-white/20 ml-8 md:ml-0 md:absolute md:left-24 md:top-[-24px] md:h-[calc(100%+48px)]"></div>
               <div className="bg-primary/20 text-primary border border-primary/30 px-3 py-1 rounded-full text-xs font-mono md:absolute md:left-24 md:top-1/2 md:-translate-y-1/2 md:-translate-x-1/2 bg-[#2A2624]">POST JSON Payload</div>
            </div>

            {/* Step 3: Central Bus (n8n) */}
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(249,115,22,0.4)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
              </div>
              <div className="bg-white/5 border border-orange-500/30 p-5 rounded-xl flex-1 w-full">
                <h3 className="text-white font-bold mb-1">2. n8n Workflow Automation</h3>
                <p className="text-white/60 text-sm mb-3">Acts as the central router. Receives webhook, formats data, and orchestrates API calls simultaneously to all connected systems.</p>
                <div className="flex gap-2">
                  <span className="px-2 py-0.5 rounded bg-white/10 text-xs text-white/80 border border-white/10">Webhook Trigger</span>
                  <span className="px-2 py-0.5 rounded bg-white/10 text-xs text-white/80 border border-white/10">Data Parser</span>
                </div>
              </div>
            </div>

            {/* Step 4: Fan out to systems */}
            <div className="grid md:grid-cols-3 gap-6 pt-6 relative">
              {/* Connection Lines (Desktop only for visual simplicity in code, but implied conceptually) */}
              <div className="hidden md:block absolute left-8 top-[-24px] w-px h-8 bg-gradient-to-b from-orange-500/50 to-transparent"></div>

              {/* SuiteCRM */}
              <div className="bg-blue-900/20 border border-blue-500/30 p-6 rounded-xl flex flex-col items-center text-center hover:bg-blue-900/30 transition-colors">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-4 text-blue-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>
                </div>
                <h4 className="text-white font-bold mb-2">SuiteCRM</h4>
                <ul className="text-sm text-blue-200/70 space-y-1">
                  <li>Creates Lead Record</li>
                  <li>Assigns to Agent</li>
                  <li>Logs Inquiry Details</li>
                </ul>
              </div>

              {/* Mautic */}
              <div className="bg-purple-900/20 border border-purple-500/30 p-6 rounded-xl flex flex-col items-center text-center hover:bg-purple-900/30 transition-colors">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4 text-purple-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <h4 className="text-white font-bold mb-2">Mautic</h4>
                <ul className="text-sm text-purple-200/70 space-y-1">
                  <li>Adds to Email List</li>
                  <li>Triggers Welcome Drip</li>
                  <li>Assigns to 'Buyer' Segment</li>
                </ul>
              </div>

              {/* Matomo */}
              <div className="bg-emerald-900/20 border border-emerald-500/30 p-6 rounded-xl flex flex-col items-center text-center hover:bg-emerald-900/30 transition-colors">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center mb-4 text-emerald-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>
                </div>
                <h4 className="text-white font-bold mb-2">Matomo</h4>
                <ul className="text-sm text-emerald-200/70 space-y-1">
                  <li>Logs Conversion Event</li>
                  <li>Tracks Lead Source (UTM)</li>
                  <li>Updates Journey Map</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center text-sm text-muted-foreground">
          This architecture ensures the website frontend remains decoupled, fast, and secure, while n8n handles the heavy lifting of API orchestration.
        </div>
      </div>
    </div>
  );
}