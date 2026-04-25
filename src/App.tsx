import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import OneSignal from "react-onesignal";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { NotificationProvider } from "@/contexts/NotificationContext";
import { AppLayout } from "@/components/layout/AppLayout";
import Index from "./pages/Index";
import Production from "./pages/Production";
import Tasks from "./pages/Tasks";
import Networks from "./pages/Networks";
import PixKeys from "./pages/PixKeys";
import Quality from "./pages/Quality";
import Reports from "./pages/Reports";
import Operators from "./pages/Operators";
import OperatorExtract from "./pages/OperatorExtract";
import Tutorial from "./pages/Tutorial";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    OneSignal.init({
      appId: "25bd74d4-9b56-4021-bbb4-3260a00197f4",
      allowLocalhostAsSecureOrigin: true,
      notifyButton: {
        enable: false, // Usaremos nosso botão customizado no TopBar
      },
    }).catch(e => console.error("OneSignal init error:", e));
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <NotificationProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <AppLayout>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/production" element={<Production />} />
                  <Route path="/tasks" element={<Tasks />} />
                  <Route path="/networks" element={<Networks />} />
                  <Route path="/pix" element={<PixKeys />} />
                  <Route path="/quality" element={<Quality />} />
                  <Route path="/reports" element={<Reports />} />
                  <Route path="/operators" element={<Operators />} />
                  <Route path="/me" element={<OperatorExtract />} />
                  <Route path="/tutorial" element={<Tutorial />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </AppLayout>
            </BrowserRouter>
          </TooltipProvider>
        </NotificationProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
