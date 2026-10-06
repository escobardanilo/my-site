"use client";

import { usePathname } from "next/navigation";

import { useSitePreferences } from "@/context/SitePreferencesProvider";
import type { SectionId } from "@/lib/navigation";
import type { Language } from "@/lib/translations";

type HeaderProps = {
  activeSection?: SectionId;
  onNavigate?: (
    section: SectionId,
  ) => void;
};

const navigationCopy: Record<
  Language,
  {
    stack: string;
    expertise: string;
    experience: string;
    projects: string;
    about: string;
    contact: string;
  }
> = {
  pt: {
    stack: "Stack",
    expertise: "Especialização",
    experience: "Experiência",
    projects: "Projetos",
    about: "Sobre",
    contact: "Contacto",
  },
  en: {
    stack: "Stack",
    expertise: "Expertise",
    experience: "Experience",
    projects: "Projects",
    about: "About",
    contact: "Contact",
  },
  es: {
    stack: "Stack",
    expertise: "Especialización",
    experience: "Experiencia",
    projects: "Proyectos",
    about: "Sobre",
    contact: "Contacto",
  },
  de: {
    stack: "Stack",
    expertise: "Expertise",
    experience: "Erfahrung",
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
  id: Exclude<
    SectionId,
    "home" | "contact"
  >;
  key:
    | "stack"
    | "expertise"
    | "experience"
    | "projects"
    | "about";
}> = [
  {
    id: "stack",
    key: "stack",
  },
  {
    id: "expertise",
    key: "expertise",
  },
  {
    id: "experience",
    key: "experience",
  },
  {
    id: "projects",
    key: "projects",
  },
  {
    id: "about",
    key: "about",
  },
];

export function Header({
  activeSection = "home",
  onNavigate,
}: HeaderProps = {}) {
  const pathname = usePathname();

  const {
    language,
    theme,
    setLanguage,
    toggleTheme,
  } = useSitePreferences();

  const navigation =
    navigationCopy[language];

  const isHome =
    pathname === "/";

  function hrefFor(
    section: SectionId,
  ) {
    if (section === "home") {
      return isHome
        ? "/"
        : "/";
    }

    return isHome
      ? `/#${section}`
      : `/#${section}`;
  }

  function handleNavigation(
    event:
      React.MouseEvent<HTMLAnchorElement>,
    section: SectionId,
  ) {
    if (!onNavigate || !isHome) {
      return;
    }

    event.preventDefault();
    onNavigate(section);
  }

  return (
    <header className="header">
      <div className="container header__inner">
        <a
          href={hrefFor("home")}
          className="header__brand"
          aria-label="Danilo Escobar — Home"
          onClick={(event) =>
            handleNavigation(
              event,
              "home",
            )
          }
        >
          Danilo Escobar
        </a>

        <nav
          className="header__nav"
          aria-label="Main navigation"
        >
          {navItems.map(
            ({ id, key }) => (
              <a
                key={id}
                href={hrefFor(id)}
                className={
                  activeSection === id
                    ? "header__nav-link header__nav-link--active"
                    : "header__nav-link"
                }
                aria-current={
                  activeSection === id
                    ? "page"
                    : undefined
                }
                onClick={(event) =>
                  handleNavigation(
                    event,
                    id,
                  )
                }
              >
                {navigation[key]}
              </a>
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

          <a
            className={
              activeSection ===
              "contact"
                ? "header__contact header__contact--active"
                : "header__contact"
            }
            href={hrefFor("contact")}
            onClick={(event) =>
              handleNavigation(
                event,
                "contact",
              )
            }
          >
            {navigation.contact}
          </a>
        </div>
      </div>
    </header>
  );
}
