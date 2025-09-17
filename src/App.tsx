import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import OtpVerification from "./pages/OtpVerification";
import Onboarding from "./pages/Onboarding";
import Personalization from "./pages/Personalization";
import Dashboard from "./pages/Dashboard";
import MoodNudge from "./pages/MoodNudge";
import Rewards from "./pages/Rewards";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/otp-verification" element={<OtpVerification />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/personalization" element={<Personalization />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/mood-nudge" element={<MoodNudge />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
