"use client";

import {
  useSitePreferences,
} from "@/context/SitePreferencesProvider";

import type { Language } from "@/lib/translations";

const languages: Language[] = [
  "pt",
  "es",
  "en",
  "de",
];

export function Header() {
  const {
    language,
    theme,
    copy,
    setLanguage,
    toggleTheme,
  } = useSitePreferences();

  return (
    <header className="header">
      <div className="container header__inner">
        <a
          href="#home"
          className="header__brand"
          aria-label="Danilo Escobar"
        >
          DE
        </a>

        <nav
          className="header__nav"
          aria-label="Main navigation"
        >
          <a href="#stack">{copy.header.stack}</a>
          <a href="#expertise">{copy.header.expertise}</a>
          <a href="#experience">{copy.header.experience}</a>
          <a href="#projects">{copy.header.projects}</a>
          <a href="#about">{copy.header.about}</a>
        </nav>

        <div className="header__actions">
          <div
            className="language-switcher"
            aria-label={copy.controls.language}
          >
            {languages.map((item) => (
              <button
                key={item}
                type="button"
                className={
                  language === item
                    ? "language-switcher__button language-switcher__button--active"
                    : "language-switcher__button"
                }
                onClick={() => setLanguage(item)}
                aria-pressed={language === item}
              >
                {item.toUpperCase()}
              </button>
            ))}
          </div>

          <select
            className="language-select"
            value={language}
            onChange={(event) =>
              setLanguage(
                event.target.value as Language,
              )
            }
            aria-label={copy.controls.language}
          >
            <option value="pt">PT</option>
            <option value="es">ES</option>
            <option value="en">EN</option>
            <option value="de">DE</option>
          </select>

          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={
              theme === "light"
                ? copy.controls.enableDark
                : copy.controls.enableLight
            }
            title={
              theme === "light"
                ? copy.controls.enableDark
                : copy.controls.enableLight
            }
          >
            {theme === "light" ? (
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M20.5 14.1A8.5 8.5 0 0 1 9.9 3.5 8.5 8.5 0 1 0 20.5 14.1Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />

                <path
                  d="M12 2V4M12 20V22M4.93 4.93L6.34 6.34M17.66 17.66L19.07 19.07M2 12H4M20 12H22M4.93 19.07L6.34 17.66M17.66 6.34L19.07 4.93"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>

          <a
            href="#contact"
            className="header__contact"
          >
            {copy.header.contact}
          </a>
        </div>
      </div>
    </header>
  );
}