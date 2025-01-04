import React from "react";
import { Provider } from "@/components/ui/provider.tsx";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./next-i18next.config.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);
