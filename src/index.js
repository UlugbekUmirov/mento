import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./i18n";
import i18n from "i18next";
import { I18nextProvider } from "react-i18next";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </Router>
);
