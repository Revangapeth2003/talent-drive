import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { AnimatedBackground } from "@/components/animated-background";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";

// Pages
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import Recruiters from "./pages/Recruiters";
import Interviews from "./pages/Interviews";
import Analytics from "./pages/Analytics";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <SidebarProvider>
            <div className="min-h-screen flex w-full">
              <AnimatedBackground />
              
              {/* Sidebar */}
              <AppSidebar />
              
              {/* Main Content */}
              <div className="flex-1 flex flex-col">
                {/* Top Navigation */}
                <header className="h-16 border-b border-border bg-card/50 backdrop-blur-sm flex items-center justify-between px-6">
                  <div className="flex items-center gap-4">
                    <SidebarTrigger className="animate-glow-pulse" />
                    <div className="h-8 w-px bg-border" />
                    <h2 className="font-semibold text-lg bg-gradient-primary bg-clip-text text-transparent">
                      Placement CRM
                    </h2>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <ThemeToggle />
                  </div>
                </header>
                
                {/* Page Content */}
                <main className="flex-1 overflow-auto">
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/students" element={<Students />} />
                    <Route path="/recruiters" element={<Recruiters />} />
                    <Route path="/interviews" element={<Interviews />} />
                    <Route path="/analytics" element={<Analytics />} />
                    <Route path="/placements" element={<Dashboard />} />
                    <Route path="/settings" element={<Dashboard />} />
                    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </main>
              </div>
            </div>
          </SidebarProvider>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
