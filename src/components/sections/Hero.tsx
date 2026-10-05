"use client";

import { DitherGlobe } from "@/components/hero/DitherGlobe";
import { useSitePreferences } from "@/context/SitePreferencesProvider";
import type { Language } from "@/lib/translations";

const heroCopy: Record<
  Language,
  {
    eyebrow: string;
    description: string;
    projects: string;
  }
> = {
  pt: {
    eyebrow:
      "AI ENGINEER / SOFTWARE ENGINEER",
    description:
      "Construo produtos full-stack e sistemas de IA que conectam modelos, dados, APIs e workflows operacionais. O foco é software fiável para processos reais, com validação, outputs estruturados e controlo humano onde a decisão exige contexto.",
    projects: "Ver projetos",
  },
  en: {
    eyebrow:
      "AI ENGINEER / SOFTWARE ENGINEER",
    description:
      "I build full-stack products and AI systems that connect models, data, APIs and operational workflows. The focus is reliable software for real processes, with validation, structured outputs and human control where decisions require context.",
    projects: "View projects",
  },
  es: {
    eyebrow:
      "AI ENGINEER / SOFTWARE ENGINEER",
    description:
      "Construyo productos full-stack y sistemas de IA que conectan modelos, datos, APIs y workflows operativos. El foco es software fiable para procesos reales, con validación, outputs estructurados y control humano cuando la decisión requiere contexto.",
    projects: "Ver proyectos",
  },
  de: {
    eyebrow:
      "AI ENGINEER / SOFTWARE ENGINEER",
    description:
      "Ich entwickle Full-Stack-Produkte und KI-Systeme, die Modelle, Daten, APIs und operative Workflows verbinden. Der Fokus liegt auf zuverlässiger Software für reale Prozesse, mit Validierung, strukturierten Outputs und menschlicher Kontrolle, wenn Entscheidungen Kontext erfordern.",
    projects: "Projekte ansehen",
  },
};

export function Hero() {
  const { language } =
    useSitePreferences();

  const hero =
    heroCopy[language];

  return (
    <section
      className="hero"
      id="home"
      aria-labelledby="hero-title"
    >
      <div className="container hero__frame">
        <div className="hero__primary">
          <div className="hero__copy">
            <p className="hero__eyebrow">
              {hero.eyebrow}
            </p>

            <h1
              className="hero__title"
              id="hero-title"
            >
              <span>
                AI Engineer.
              </span>

              <em>
                Software Engineer.
              </em>
            </h1>

            <p className="hero__lead">
              {hero.description}
            </p>

            <a
              href="#projects"
              className="hero__cta"
            >
              <span>
                {hero.projects}
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
