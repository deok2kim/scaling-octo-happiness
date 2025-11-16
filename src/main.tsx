import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PlatformProvider } from "./contexts/PlatformContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import "./index.css";
import App from "./App.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <PlatformProvider>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </PlatformProvider>
    </QueryClientProvider>
  </StrictMode>
);
