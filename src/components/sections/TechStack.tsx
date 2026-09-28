"use client";

import { useSitePreferences } from "@/context/SitePreferencesProvider";

export function TechStack() {
  const { copy } = useSitePreferences();

  return (
    <section
      className="tech-stack"
      id="stack"
    >
      <div className="container tech-stack__container">
        <div className="section-intro">
          <span className="section-intro__index">
            01
          </span>

          <div className="section-intro__content">
            <p className="section-intro__eyebrow">
              {copy.stack.eyebrow}
            </p>

            <h2 className="section-intro__title">
              {copy.stack.title}
            </h2>

            <p className="section-intro__description">
              {copy.stack.description}
            </p>
          </div>
        </div>

        <div className="capabilities-grid">
          {copy.stack.capabilities.map(
            (capability) => (
              <article
                className="capability-card"
                key={capability.number}
              >
                <span className="capability-card__number">
                  {capability.number}
                </span>

                <div className="capability-card__content">
                  <h3>{capability.title}</h3>

                  <p>
                    {capability.description}
                  </p>
                </div>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}