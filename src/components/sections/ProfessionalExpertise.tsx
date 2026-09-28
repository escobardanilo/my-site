"use client";

import { useSitePreferences } from "@/context/SitePreferencesProvider";

export function ProfessionalExpertise() {
  const { copy } = useSitePreferences();

  return (
    <section
      className="expertise"
      id="expertise"
    >
      <div className="container">
        <div className="section-intro">
          <span className="section-intro__index">
            02
          </span>

          <div className="section-intro__content">
            <p className="section-intro__eyebrow">
              {copy.expertise.eyebrow}
            </p>

            <h2 className="section-intro__title">
              {copy.expertise.title}
            </h2>

            <p className="section-intro__description">
              {copy.expertise.description}
            </p>
          </div>
        </div>

        <div className="expertise-list">
          {copy.expertise.items.map((item) => (
            <article
              className="expertise-item"
              key={item.number}
            >
              <div className="expertise-item__number">
                <span>{item.number}</span>
              </div>

              <div className="expertise-item__main">
                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </div>

              <div className="expertise-item__capabilities">
                {item.capabilities.map(
                  (capability) => (
                    <span key={capability}>
                      {capability}
                    </span>
                  ),
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}