import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import HomesPage from "@/pages/Homes";
import ServicesPage from "@/pages/Services";
import ContentPage from "@/pages/Content";
import AboutPage from "@/pages/About";
import AppointmentPage from "@/pages/Appointment";
import WireframePage from "@/pages/Wireframe";
import BackendArchitecture from "@/pages/BackendArchitecture";
import UxWireframes from "@/pages/UxWireframes";
import DesignSystem from "@/pages/DesignSystem";
import HiFiDesigns from "@/pages/HiFiDesigns";
import FrontendArchitecture from "@/pages/FrontendArchitecture";
import SeoStrategy from "@/pages/SeoStrategy";
import DevopsPipeline from "@/pages/DevopsPipeline";
import GrowthStrategy from "@/pages/GrowthStrategy";
import IntegrationsDoc from "@/pages/IntegrationsDoc";
import LeadCaptureFunnel from "@/pages/LeadCaptureFunnel";
import TestPageForm from "@/pages/TestPageForm";
import ContactPage from "@/pages/Contact";
import BuyersGuidePage from "@/pages/BuyersGuide";
import SellersGuidePage from "@/pages/SellersGuide";
import ClientReviewsPage from "@/pages/ClientReviews";
import PrivacyPolicyPage from "@/pages/PrivacyPolicy";
import TermsOfServicePage from "@/pages/TermsOfService";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/homes" component={HomesPage} />
      <Route path="/services" component={ServicesPage} />
      <Route path="/content" component={ContentPage} />
      <Route path="/buyers-guide" component={BuyersGuidePage} />
      <Route path="/sellers-guide" component={SellersGuidePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/appointment" component={AppointmentPage} />
      <Route path="/wireframe" component={WireframePage} />
      <Route path="/backend-architecture" component={BackendArchitecture} />
      <Route path="/ux-wireframes" component={UxWireframes} />
      <Route path="/design-system" component={DesignSystem} />
      <Route path="/hifi-designs" component={HiFiDesigns} />
      <Route path="/frontend-architecture" component={FrontendArchitecture} />
      <Route path="/seo-strategy" component={SeoStrategy} />
      <Route path="/devops-pipeline" component={DevopsPipeline} />
      <Route path="/growth-strategy" component={GrowthStrategy} />
      <Route path="/integrations" component={IntegrationsDoc} />
      <Route path="/lead-funnel" component={LeadCaptureFunnel} />
      <Route path="/test-page-form" component={TestPageForm} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/client-reviews" component={ClientReviewsPage} />
      <Route path="/privacy-policy" component={PrivacyPolicyPage} />
      <Route path="/terms-of-service" component={TermsOfServicePage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ScrollToTop />
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
