"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Lang = "en" | "is";

type LanguageContextValue = {
  lang: Lang;
  toggleLang: () => void;
};

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  toggleLang: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const stored = localStorage.getItem("lang") as Lang | null;
    if (stored === "en" || stored === "is") setLang(stored);
  }, []);

  function toggleLang() {
    setLang((prev) => {
      const next = prev === "en" ? "is" : "en";
      localStorage.setItem("lang", next);
      return next;
    });
  }

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

export function useT() {
  const { lang } = useLanguage();
  return function t(obj: { en: string; is: string }): string {
    return obj[lang];
  };
}
