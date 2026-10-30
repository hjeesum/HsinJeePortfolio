import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import "./index.css";
import App from "./App.jsx";
import ScrollRestore from "./components/ScrollRestore.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Analytics />
      <ScrollRestore />
      <App />
    </BrowserRouter>
  </StrictMode>,
);
