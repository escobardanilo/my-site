"use client";

import { useSitePreferences } from "@/context/SitePreferencesProvider";
import type { Language } from "@/lib/translations";

type StackGroup = {
  title: string;
  items: string[];
};

const stackCopy: Record<
  Language,
  {
    eyebrow: string;
    title: string;
    description: string;
    groups: StackGroup[];
  }
> = {
  pt: {
    eyebrow: "TECH STACK",
    title:
      "Tecnologias que uso para construir e integrar sistemas.",
    description:
      "Uma stack orientada a produtos full-stack, backends, dados e sistemas de IA em produção.",
    groups: [
      {
        title: "Languages & Web",
        items: [
          "TypeScript",
          "JavaScript",
          "React",
          "Next.js",
        ],
      },
      {
        title: "Backend & Data",
        items: [
          "Python",
          "FastAPI",
          "Node.js",
          "REST APIs",
          "PostgreSQL",
          "Supabase",
          "Zod",
        ],
      },
      {
        title:
          "AI Systems & Tooling",
        items: [
          "LLM APIs",
          "RAG",
          "Tool / Function Calling",
          "Structured Outputs",
          "Git",
        ],
      },
    ],
  },
  en: {
    eyebrow: "TECH STACK",
    title:
      "Technologies I use to build and integrate systems.",
    description:
      "A stack focused on full-stack products, backends, data and production AI systems.",
    groups: [
      {
        title: "Languages & Web",
        items: [
          "TypeScript",
          "JavaScript",
          "React",
          "Next.js",
        ],
      },
      {
        title: "Backend & Data",
        items: [
          "Python",
          "FastAPI",
          "Node.js",
          "REST APIs",
          "PostgreSQL",
          "Supabase",
          "Zod",
        ],
      },
      {
        title:
          "AI Systems & Tooling",
        items: [
          "LLM APIs",
          "RAG",
          "Tool / Function Calling",
          "Structured Outputs",
          "Git",
        ],
      },
    ],
  },
  es: {
    eyebrow: "TECH STACK",
    title:
      "Tecnologías que utilizo para construir e integrar sistemas.",
    description:
      "Una stack orientada a productos full-stack, backends, datos y sistemas de IA en producción.",
    groups: [
      {
        title: "Languages & Web",
        items: [
          "TypeScript",
          "JavaScript",
          "React",
          "Next.js",
        ],
      },
      {
        title: "Backend & Data",
        items: [
          "Python",
          "FastAPI",
          "Node.js",
          "REST APIs",
          "PostgreSQL",
          "Supabase",
          "Zod",
        ],
      },
      {
        title:
          "AI Systems & Tooling",
        items: [
          "LLM APIs",
          "RAG",
          "Tool / Function Calling",
          "Structured Outputs",
          "Git",
        ],
      },
    ],
  },
  de: {
    eyebrow: "TECH STACK",
    title:
      "Technologien, mit denen ich Systeme entwickle und integriere.",
    description:
      "Ein Stack für Full-Stack-Produkte, Backends, Daten und produktive KI-Systeme.",
    groups: [
      {
        title: "Languages & Web",
        items: [
          "TypeScript",
          "JavaScript",
          "React",
          "Next.js",
        ],
      },
      {
        title: "Backend & Data",
        items: [
          "Python",
          "FastAPI",
          "Node.js",
          "REST APIs",
          "PostgreSQL",
          "Supabase",
          "Zod",
        ],
      },
      {
        title:
          "AI Systems & Tooling",
        items: [
          "LLM APIs",
          "RAG",
          "Tool / Function Calling",
          "Structured Outputs",
          "Git",
        ],
      },
    ],
  },
};

export function TechStack() {
  const { language } =
    useSitePreferences();

  const stack =
    stackCopy[language];

  return (
    <section
      className="tech-stack"
      id="stack"
      aria-labelledby="stack-title"
    >
      <div className="container tech-stack__container">
        <div className="section-intro">
          <span className="section-intro__index">
            01
          </span>

          <div className="section-intro__content">
            <p className="section-intro__eyebrow">
              {stack.eyebrow}
            </p>

            <h2
              className="section-intro__title"
              id="stack-title"
            >
              {stack.title}
            </h2>

            <p className="section-intro__description">
              {stack.description}
            </p>
          </div>
        </div>

        <div className="tech-stack__groups">
          {stack.groups.map(
            (group) => (
              <article
                className="tech-stack__group"
                key={group.title}
              >
                <h3>{group.title}</h3>

                <div className="tech-stack__items">
                  {group.items.map(
                    (item) => (
                      <span
                        className="tech-stack__item"
                        key={item}
                      >
                        {item}
                      </span>
                    ),
                  )}
                </div>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
