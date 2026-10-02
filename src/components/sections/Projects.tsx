"use client";

import Image from "next/image";
import Link from "next/link";

import { useSitePreferences } from "@/context/SitePreferencesProvider";
import {
  getProjectContent,
  projectSlugs,
} from "@/lib/projects";

import type { Language } from "@/lib/translations";

const sonCardDescriptions: Record<
  Language,
  string
> = {
  pt:
    "Sistema de assistência operacional para ambiente industrial, combinando IA, contexto técnico e supervisão para apoiar diagnóstico, orientação e tomada de decisão no trabalho de campo.",

  en:
    "Operational assistance system for industrial environments, combining AI, technical context and supervision to support diagnostics, guidance and decision-making in field work.",

  es:
    "Sistema de asistencia operativa para entornos industriales, combinando IA, contexto técnico y supervisión para apoyar diagnóstico, orientación y toma de decisiones en el trabajo de campo.",

  de:
    "Operatives Assistenzsystem für industrielle Umgebungen, das KI, technischen Kontext und Aufsicht kombiniert, um Diagnose, Orientierung und Entscheidungsfindung im operativen Einsatz zu unterstützen.",
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
                "project-02"
                  ? sonCardDescriptions[
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