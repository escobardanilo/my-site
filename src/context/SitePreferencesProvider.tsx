"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import {
  translations,
  type Language,
  type SiteCopy,
} from "@/lib/translations";

export type Theme = "light" | "dark";

type SitePreferencesContextValue = {
  language: Language;
  theme: Theme;
  copy: SiteCopy;
  setLanguage: (language: Language) => void;
  toggleTheme: () => void;
};

const SitePreferencesContext =
  createContext<SitePreferencesContextValue | null>(null);

const languageStorageKey = "portfolio-language";
const themeStorageKey = "portfolio-theme";

function isLanguage(value: string | null): value is Language {
  return (
    value === "pt" ||
    value === "es" ||
    value === "en" ||
    value === "de"
  );
}

function isTheme(value: string | null): value is Theme {
  return value === "light" || value === "dark";
}

export function SitePreferencesProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [language, setLanguageState] = useState<Language>("pt");
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem(languageStorageKey);
    const savedTheme = window.localStorage.getItem(themeStorageKey);

    const resolvedLanguage: Language = isLanguage(savedLanguage)
      ? savedLanguage
      : "pt";

    const resolvedTheme: Theme = isTheme(savedTheme)
      ? savedTheme
      : "light";

    setLanguageState(resolvedLanguage);
    setTheme(resolvedTheme);

    document.documentElement.lang = resolvedLanguage;
    document.documentElement.dataset.theme = resolvedTheme;
  }, []);

  function setLanguage(nextLanguage: Language) {
    setLanguageState(nextLanguage);

    window.localStorage.setItem(
      languageStorageKey,
      nextLanguage,
    );

    document.documentElement.lang = nextLanguage;
  }

  function toggleTheme() {
    setTheme((currentTheme) => {
      const nextTheme: Theme =
        currentTheme === "light" ? "dark" : "light";

      window.localStorage.setItem(
        themeStorageKey,
        nextTheme,
      );

      document.documentElement.dataset.theme = nextTheme;

      return nextTheme;
    });
  }

  const value = useMemo(
    () => ({
      language,
      theme,
      copy: translations[language],
      setLanguage,
      toggleTheme,
    }),
    [language, theme],
  );

  return (
    <SitePreferencesContext.Provider value={value}>
      {children}
    </SitePreferencesContext.Provider>
  );
}

export function useSitePreferences() {
  const context = useContext(SitePreferencesContext);

  if (!context) {
    throw new Error(
      "useSitePreferences must be used inside SitePreferencesProvider",
    );
  }

  return context;
}