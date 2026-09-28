"use client";

import { useSitePreferences } from "@/context/SitePreferencesProvider";

export function About() {
  const { copy } = useSitePreferences();

  return (
    <section
      className="about"
      id="about"
    >
      <div className="container">
        <div className="section-intro">
          <span className="section-intro__index">
            05
          </span>

          <div className="section-intro__content">
            <p className="section-intro__eyebrow">
              {copy.about.eyebrow}
            </p>

            <h2 className="section-intro__title">
              {copy.about.title}
            </h2>
          </div>
        </div>

        <div className="about__statement">
          <p>{copy.about.statement}</p>
        </div>

        <div className="about__content">
          <div className="about__label">
            <span>{copy.about.approach}</span>
          </div>

          <div className="about__description">
            {copy.about.paragraphs.map(
              (paragraph) => (
                <p key={paragraph}>
                  {paragraph}
                </p>
              ),
            )}
          </div>
        </div>

        <div className="about__principles">
          {copy.about.principles.map(
            (principle) => (
              <article
                className="about-principle"
                key={principle.number}
              >
                <span className="about-principle__number">
                  {principle.number}
                </span>

                <div className="about-principle__content">
                  <h3>
                    {principle.title}
                  </h3>

                  <p>
                    {principle.description}
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