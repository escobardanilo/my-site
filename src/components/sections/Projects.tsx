"use client";

import Image from "next/image";
import Link from "next/link";

import { useSitePreferences } from "@/context/SitePreferencesProvider";
import {
  getProjectContent,
  projectSlugs,
} from "@/lib/projects";

import type { Language } from "@/lib/translations";

const liioCardDescriptions: Record<
  Language,
  string
> = {
  pt:
    "Tutor de aprendizagem com IA para crianças e adolescentes, com EXPLAIN, GUIDE e CHECK, avaliação independente e fallback seguro antes da resposta chegar ao aluno.",

  en:
    "AI learning tutor for children and teenagers with EXPLAIN, GUIDE and CHECK, independent evaluation and safe fallback before a response reaches the learner.",

  es:
    "Tutor de aprendizaje con IA para niños y adolescentes, con EXPLAIN, GUIDE y CHECK, evaluación independiente y fallback seguro antes de entregar la respuesta.",

  de:
    "KI-Lerntutor für Kinder und Jugendliche mit EXPLAIN, GUIDE und CHECK, unabhängiger Bewertung und sicherem Fallback vor der Ausgabe an den Lernenden.",
};

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
                slug ===
                "liio"
                  ? liioCardDescriptions[
                      language
                    ]
                  : content.card
                      .description;

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

                    <div className="project-card__visual-center">
                      {preview?.image ? (
                        <Image
                          src={
                            preview.image
                          }
                          alt={
                            preview.alt
                          }
                          width={1600}
                          height={1000}
                          style={{
                            width:
                              "100%",
                            height:
                              "100%",
                            objectFit:
                              "contain",
                            display:
                              "block",
                          }}
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