import React, { useContext, useState } from "react";
import { useTranslation } from "react-i18next";

export type SupportedLanguage = "en" | "ptbr" | "jp";

export interface LanguageContextValue {
  state: {
    language: SupportedLanguage;
  };
  actions: {
    updateLanguage: (languageCode: SupportedLanguage) => void;
  };
}

const LanguageContext = React.createContext({} as LanguageContextValue);

export default function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.resolvedLanguage);

  const updateLanguage = (languageCode: SupportedLanguage) => {
    if (languageCode === language) return;
    setLanguage(languageCode);
    i18n.changeLanguage(languageCode);
  };

  const value = {
    state: {
      language,
    },
    actions: {
      updateLanguage,
    },
  } as LanguageContextValue;

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (context === undefined) {
    throw new Error("useLanguage can only be used inside a LanguageProvider.");
  }

  return context;
}
