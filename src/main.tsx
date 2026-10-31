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
