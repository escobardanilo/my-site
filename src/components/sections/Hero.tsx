"use client";

import { useSitePreferences } from "@/context/SitePreferencesProvider";

export function Hero() {
  const { copy } =
    useSitePreferences();

  return (
    <section
      className="hero"
      id="home"
    >
      <div className="container hero__inner">
        <div className="hero__top">
          <p className="hero__eyebrow">
            {copy.hero.eyebrow}
          </p>
        </div>

        <div className="hero__main">
          <h1 className="hero__title">
            Danilo
            <br />
            Escobar
          </h1>
        </div>

        <div
          className="hero__footer"
          style={{
            borderTop: "none",
          }}
        >
          <p className="hero__description">
            {copy.hero.description}
          </p>

          <a
            href="/#projects"
            className="hero__link"
          >
            {
              copy.hero
                .selectedWork
            }

            <span aria-hidden="true">
              ↘
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}