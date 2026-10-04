"use client";

import { DitherGlobe } from "@/components/hero/DitherGlobe";
import { useSitePreferences } from "@/context/SitePreferencesProvider";

export function Hero() {
  const { copy } =
    useSitePreferences();

  return (
    <section
      className="hero"
      id="home"
    >
      <div className="container hero__frame">
        <div className="hero__primary">
          <div className="hero__copy">
            <p className="hero__eyebrow">
              {copy.hero.eyebrow}
            </p>

            <h1 className="hero__title">
              <span>
                AI Engineer.
              </span>

              <em>
                Creative Technologist.
              </em>
            </h1>

            <p className="hero__lead">
              {copy.hero.description}
            </p>

            <a
              href="/#projects"
              className="hero__cta"
            >
              <span>
                {copy.hero.selectedWork}
              </span>

              <span aria-hidden="true">
                ↗
              </span>
            </a>
          </div>

          <div className="hero__visual">
            <DitherGlobe />
          </div>
        </div>
      </div>
    </section>
  );
}
