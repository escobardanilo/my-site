"use client";

import { useSitePreferences } from "@/context/SitePreferencesProvider";

export function WorkHistory() {
  const { copy } = useSitePreferences();

  return (
    <section
      className="work-history"
      id="experience"
    >
      <div className="container">
        <div className="section-intro">
          <span className="section-intro__index">
            03
          </span>

          <div className="section-intro__content">
            <p className="section-intro__eyebrow">
              {copy.work.eyebrow}
            </p>

            <h2 className="section-intro__title">
              {copy.work.title}
            </h2>

            <p className="section-intro__description">
              {copy.work.description}
            </p>
          </div>
        </div>

        <div className="work-history__list">
          {copy.work.items.map((experience) => (
            <article
              className="work-history__item"
              key={experience.number}
            >
              <div className="work-history__meta">
                <span className="work-history__number">
                  {experience.number}
                </span>
              </div>

              <div className="work-history__content">
                <p className="work-history__context">
                  {experience.context}
                </p>

                <h3>{experience.role}</h3>

                <p className="work-history__description">
                  {experience.description}
                </p>
              </div>

              <div className="work-history__focus">
                {experience.focus.map((item) => (
                  <span key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}