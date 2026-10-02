"use client";

import Image from "next/image";
import Link from "next/link";

import { useSitePreferences } from "@/context/SitePreferencesProvider";
import {
  getProjectContent,
  projectSlugs,
} from "@/lib/projects";

export function Projects() {
  const {
    copy,
    language,
  } = useSitePreferences();

  const projects =
    projectSlugs.map((slug) => ({
      slug,
      content:
        getProjectContent(
          slug,
          language,
        ),
    }));

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
          {projects.map(
            ({
              slug,
              content,
            }) => {
              const preview =
                content.product
                  .visuals[0];

              const description =
                content.card.description;

              const previewImage =
                preview?.image;

              return (
                <article
                  className="project-card"
                  key={slug}
                >
                  <Link
                    href={`/projects/${slug}`}
                    className="project-card__visual"
                  >
                    <div className="project-card__visual-top">
                      <span>
                        {
                          content.number
                        }
                      </span>
                    </div>

                    <div
                      className={`project-card__visual-center${slug === "project-02" ? " project-card__visual-center--diaction" : ""}`}
                    >
                      {previewImage ? (
                        <Image
                          src={
                            previewImage
                          }
                          alt={
                            preview?.alt ??
                            content.title
                          }
                          width={1600}
                          height={1000}
                          className="project-card__image"
                        />
                      ) : (
                        <span>
                          {
                            copy
                              .projects
                              .visual
                          }
                        </span>
                      )}
                    </div>
                  </Link>

                  <div className="project-card__content">
                    <div className="project-card__heading">
                      <span className="project-card__number">
                        {
                          content.number
                        }
                      </span>

                      <h3>
                        {
                          content.title
                        }
                      </h3>
                    </div>

                    <div className="project-card__details">
                      <p>
                        {description}
                      </p>

                      <div className="project-card__tags">
                        {content.card.tags.map(
                          (
                            tag,
                          ) => (
                            <span
                              key={
                                tag
                              }
                            >
                              {
                                tag
                              }
                            </span>
                          ),
                        )}
                      </div>

                      <Link
                        href={`/projects/${slug}`}
                        className="project-card__action"
                      >
                        <span>
                          {
                            copy
                              .projects
                              .viewCase
                          }
                        </span>

                        <span
                          aria-hidden="true"
                        >
                          ↗
                        </span>
                      </Link>
                    </div>
                  </div>
                </article>
              );
            },
          )}
        </div>
      </div>
    </section>
  );
}