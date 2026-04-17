import { ReactNode } from "react";
import { AppSidebar } from "./AppSidebar";
import { TopBar } from "./TopBar";
import { NetworkParticles } from "./NetworkParticles";

export const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-background relative selection:bg-primary/20 text-foreground">
      <NetworkParticles />
      <div className="relative z-10 flex w-full">
        <AppSidebar />
        <div className="flex-1 ml-60 transition-all duration-300">
          <TopBar />
          <main className="p-6 animate-fade-in relative z-20">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};
