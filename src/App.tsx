import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WaveBackground from "./components/WaveBackground";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import AIAssistant from "./pages/AIAssistant";
import Settings from "./pages/Settings";
import AdminPanel from "./pages/AdminPanel";
import NotFound from "./pages/NotFound";
import Install from "./pages/Install";
import NFCTerminal from "./pages/NFCTerminal";
import QuickInvoice from "./pages/QuickInvoice";
import PhotoInvoice from "./pages/PhotoInvoice";
import VoiceInvoice from "./pages/VoiceInvoice";
import TaxAssistant from "./pages/TaxAssistant";
import ExecutiveDashboard from "./pages/ExecutiveDashboard";
import CashFlow from "./pages/CashFlow";
import CustomerManagement from "./pages/CustomerManagement";
import TeamCollaboration from "./pages/TeamCollaboration";
import APIGateway from "./pages/APIGateway";
import AIFinancialAdvisor from "./pages/AIFinancialAdvisor";
import WarehouseManagement from "./pages/WarehouseManagement";
import PayrollSystem from "./pages/PayrollSystem";
import ComplianceAudit from "./pages/ComplianceAudit";
import BankIntegration from "./pages/BankIntegration";
import RecurringBilling from "./pages/RecurringBilling";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <WaveBackground />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/install" element={<Install />} />
          <Route path="/demo" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/ai-assistant" element={<AIAssistant />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/nfc-terminal" element={<NFCTerminal />} />
          <Route path="/quick-invoice" element={<QuickInvoice />} />
          <Route path="/photo-invoice" element={<PhotoInvoice />} />
          <Route path="/voice-invoice" element={<VoiceInvoice />} />
          <Route path="/tax-assistant" element={<TaxAssistant />} />
          <Route path="/executive" element={<ExecutiveDashboard />} />
          <Route path="/cash-flow" element={<CashFlow />} />
          <Route path="/customers" element={<CustomerManagement />} />
          <Route path="/team" element={<TeamCollaboration />} />
          <Route path="/api" element={<APIGateway />} />
          <Route path="/ai-advisor" element={<AIFinancialAdvisor />} />
          <Route path="/warehouse" element={<WarehouseManagement />} />
          <Route path="/payroll" element={<PayrollSystem />} />
          <Route path="/compliance" element={<ComplianceAudit />} />
          <Route path="/bank" element={<BankIntegration />} />
          <Route path="/recurring" element={<RecurringBilling />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
