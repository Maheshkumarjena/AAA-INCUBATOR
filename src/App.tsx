import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "@/components/layout/app-layout";
import { Chatbot } from "@/components/ui/chatbot";
import { initializeChatbot } from "@/lib/chatbot";
import { initAnalytics } from "@/lib/analytics";
import "@/api/chat"; // Initialize chat API mock
import Index from "./pages/Index";
import About from "./pages/About";
import Team from "./pages/Team";
import Portfolio from "./pages/Portfolio";
import Programs from "./pages/Programs";
import Apply from "./pages/Apply";
import Resources from "./pages/Resources";
import Blog from "./pages/Blog";
import FAQ from "./pages/FAQ";
import Jobs from "./pages/Jobs";
import GetInvolved from "./pages/GetInvolved";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Initialize analytics and chatbot on app start
initAnalytics(); // Initialize Google Analytics (add your measurement ID here)
initializeChatbot();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppLayout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Chatbot />
        </AppLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
