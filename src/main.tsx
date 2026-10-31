import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./tokens.css";
import "./component-tokens.css";
import "./index.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

document.title = window.location.pathname === "/design-system" ? "Caffino Design System" : "Caffino | Premium Coffee";

if (import.meta.env.PROD && "serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").catch((error) => {
      console.error("[Caffino] Service worker registration failed", error);
    });
  });
}
