"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import {
  translations,
  type Language,
} from "@/lib/translations";

export type Theme =
  | "light"
  | "dark";

type SitePreferencesContextValue = {
  language: Language;
  theme: Theme;
  copy: (typeof translations)[Language];
  setLanguage: (
    language: Language,
  ) => void;
  setTheme: (
    theme: Theme,
  ) => void;
  toggleTheme: () => void;
};

const SitePreferencesContext =
  createContext<
    SitePreferencesContextValue | undefined
  >(undefined);

const LANGUAGE_STORAGE_KEY =
  "portfolio-language-v2";

const THEME_STORAGE_KEY =
  "portfolio-theme-v2";

const VALID_LANGUAGES: Language[] = [
  "pt",
  "es",
  "en",
  "de",
];

const VALID_THEMES: Theme[] = [
  "light",
  "dark",
];

type SitePreferencesProviderProps = {
  children: ReactNode;
};

export function SitePreferencesProvider({
  children,
}: SitePreferencesProviderProps) {
  const [
    language,
    setLanguageState,
  ] = useState<Language>("en");

  const [
    theme,
    setThemeState,
  ] = useState<Theme>("dark");

  useEffect(() => {
    const storedLanguage =
      window.localStorage.getItem(
        LANGUAGE_STORAGE_KEY,
      );

    const storedTheme =
      window.localStorage.getItem(
        THEME_STORAGE_KEY,
      );

    queueMicrotask(() => {
      if (
        storedLanguage &&
        VALID_LANGUAGES.includes(
          storedLanguage as Language,
        )
      ) {
        setLanguageState(
          storedLanguage as Language,
        );
      }

      if (
        storedTheme &&
        VALID_THEMES.includes(
          storedTheme as Theme,
        )
      ) {
        setThemeState(
          storedTheme as Theme,
        );
      }
    });
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme =
      theme;

    document.documentElement.style.colorScheme =
      theme;
  }, [theme]);

  function setLanguage(
    nextLanguage: Language,
  ) {
    setLanguageState(nextLanguage);

    window.localStorage.setItem(
      LANGUAGE_STORAGE_KEY,
      nextLanguage,
    );
  }

  function setTheme(
    nextTheme: Theme,
  ) {
    setThemeState(nextTheme);

    window.localStorage.setItem(
      THEME_STORAGE_KEY,
      nextTheme,
    );
  }

  function toggleTheme() {
    const nextTheme =
      theme === "light"
        ? "dark"
        : "light";

    setTheme(nextTheme);
  }

  const value: SitePreferencesContextValue = {
    language,
    theme,
    copy:
      translations[language],
    setLanguage,
    setTheme,
    toggleTheme,
  };

  return (
    <SitePreferencesContext.Provider
      value={value}
    >
      {children}
    </SitePreferencesContext.Provider>
  );
}

export function useSitePreferences() {
  const context =
    useContext(
      SitePreferencesContext,
    );

  if (!context) {
    throw new Error(
      "useSitePreferences must be used inside SitePreferencesProvider.",
    );
  }

  return context;
}
