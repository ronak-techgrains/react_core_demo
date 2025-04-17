import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { DarkModeProvider } from "./context/DarkModeContext";
import "./i18n";
import { SnackbarProvider } from "notistack";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DarkModeProvider>
      <SnackbarProvider>
        <App />
      </SnackbarProvider>
    </DarkModeProvider>
  </StrictMode>
);
