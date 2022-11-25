import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { CurrentLocationProvider } from "./context/CurrentLocationContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <CurrentLocationProvider>
        <App />
      </CurrentLocationProvider>
    </BrowserRouter>
  </React.StrictMode>
);
