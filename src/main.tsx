import React from "react";
import ReactDOM from "react-dom/client";

import { I18nextProvider } from "react-i18next";

import App from "./App.tsx";

import i18n from "../i18n";
import "./styles/index.css";
import LanguageProvider from "./providers/language.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n} defaultNS="translation">
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </I18nextProvider>
  </React.StrictMode>,
);
