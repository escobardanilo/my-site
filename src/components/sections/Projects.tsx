"use client";

import { useSitePreferences } from "@/context/SitePreferencesProvider";

export function Projects() {
  const { copy } = useSitePreferences();

  return (
    <section
      className="projects"
      id="projects"
    >
      <div className="container">
        <div className="section-intro">
          <span className="section-intro__index">
            04
          </span>

          <div className="section-intro__content">
            <p className="section-intro__eyebrow">
              {copy.projects.eyebrow}
            </p>

            <h2 className="section-intro__title">
              {copy.projects.title}
            </h2>

            <p className="section-intro__description">
              {copy.projects.description}
            </p>
          </div>
        </div>

        <div className="projects__list">
          {copy.projects.items.map((project) => (
            <article
              className="project-card"
              key={project.number}
            >
              <div className="project-card__visual">
                <div className="project-card__visual-top">
                  <span>{project.number}</span>

                  <span>{project.category}</span>
                </div>

                <div className="project-card__visual-center">
                  <span>
                    {copy.projects.visual}
                  </span>
                </div>
              </div>

              <div className="project-card__content">
                <div className="project-card__heading">
                  <span className="project-card__number">
                    {project.number}
                  </span>

                  <h3>{project.title}</h3>
                </div>

                <div className="project-card__details">
                  <p>{project.description}</p>

                  <div className="project-card__tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="project-card__action">
                    <span>
                      {copy.projects.viewCase}
                    </span>

                    <span aria-hidden="true">
                      ↗
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}