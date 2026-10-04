"use client";

import { useSitePreferences } from "@/context/SitePreferencesProvider";
import type { SectionId } from "@/lib/navigation";
import type { Language } from "@/lib/translations";

type HeaderProps = {
  activeSection?: SectionId;
  onNavigate?: (section: SectionId) => void;
};

const navigationCopy: Record<
  Language,
  {
    stack: string;
    expertise: string;
    projects: string;
    about: string;
    contact: string;
  }
> = {
  pt: {
    stack: "Stack",
    expertise: "Especialização",
    projects: "Projetos",
    about: "Sobre",
    contact: "Contacto",
  },
  en: {
    stack: "Stack",
    expertise: "Expertise",
    projects: "Projects",
    about: "About",
    contact: "Contact",
  },
  es: {
    stack: "Stack",
    expertise: "Especialización",
    projects: "Proyectos",
    about: "Sobre",
    contact: "Contacto",
  },
  de: {
    stack: "Stack",
    expertise: "Spezialisierung",
    projects: "Projekte",
    about: "Über mich",
    contact: "Kontakt",
  },
};

const languages: Language[] = [
  "pt",
  "es",
  "en",
  "de",
];

const navItems: Array<{
  id: Exclude<SectionId, "home" | "contact">;
  key:
    | "stack"
    | "expertise"
    | "projects"
    | "about";
}> = [
  { id: "stack", key: "stack" },
  {
    id: "expertise",
    key: "expertise",
  },
  {
    id: "projects",
    key: "projects",
  },
  { id: "about", key: "about" },
];

export function Header({
  activeSection = "home",
  onNavigate,
}: HeaderProps = {}) {
  const {
    language,
    theme,
    setLanguage,
    toggleTheme,
  } = useSitePreferences();

  const navigation =
    navigationCopy[language];

  function handleNavigate(
    section: SectionId,
  ) {
    if (onNavigate) {
      onNavigate(section);
      return;
    }

    window.location.href =
      section === "home"
        ? "/"
        : `/#${section}`;
  }

  return (
    <header className="header">
      <div className="container header__inner">
        <button
          type="button"
          className="header__brand"
          aria-label="Danilo Escobar"
          onClick={() =>
            handleNavigate("home")
          }
        >
          Danilo Escobar
        </button>

        <nav
          className="header__nav"
          aria-label="Main navigation"
        >
          {navItems.map(
            ({ id, key }) => (
              <button
                key={id}
                type="button"
                className={
                  activeSection === id
                    ? "header__nav-link header__nav-link--active"
                    : "header__nav-link"
                }
                onClick={() =>
                  handleNavigate(id)
                }
              >
                {navigation[key]}
              </button>
            ),
          )}
        </nav>

        <div className="header__actions">
          <div
            className="language-switcher"
            aria-label="Language"
          >
            {languages.map(
              (item) => (
                <button
                  key={item}
                  type="button"
                  className={`language-switcher__button ${language === item ? "language-switcher__button--active" : ""}`}
                  onClick={() =>
                    setLanguage(item)
                  }
                  aria-pressed={
                    language === item
                  }
                >
                  {item.toUpperCase()}
                </button>
              ),
            )}
          </div>

          <select
            className="language-select"
            value={language}
            onChange={(event) =>
              setLanguage(
                event.target
                  .value as Language,
              )
            }
            aria-label="Language"
          >
            <option value="pt">
              PT
            </option>
            <option value="es">
              ES
            </option>
            <option value="en">
              EN
            </option>
            <option value="de">
              DE
            </option>
          </select>

          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={
              theme === "light"
                ? "Activate dark mode"
                : "Activate light mode"
            }
          >
            {theme === "light" ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M20.5 14.6A7.7 7.7 0 0 1 9.4 3.5 8.5 8.5 0 1 0 20.5 14.6Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M12 2V4M12 20V22M4.93 4.93L6.34 6.34M17.66 17.66L19.07 19.07M2 12H4M20 12H22M4.93 19.07L6.34 17.66M17.66 6.34L19.07 4.93"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>

          <button
            type="button"
            className={
              activeSection ===
              "contact"
                ? "header__contact header__contact--active"
                : "header__contact"
            }
            onClick={() =>
              handleNavigate("contact")
            }
          >
            {navigation.contact}
          </button>
        </div>
      </div>
    </header>
  );
}
