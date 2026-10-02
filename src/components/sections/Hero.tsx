"use client";

import { useSitePreferences } from "@/context/SitePreferencesProvider";
import type { Language } from "@/lib/translations";

const heroPositioning: Record<
  Language,
  {
    secondary: string;
    headline: string;
    body: string;
  }
> = {
  pt: {
    secondary: "MARTECH / AUTOMATION / SOFTWARE SYSTEMS",
    headline:
      "IA integrada a software, dados e processos — não isolada deles.",
    body:
      "Desenvolvo sistemas que conectam modelos de IA, APIs, dados, CRM, analytics e workflows para analisar comportamento, automatizar processos e apoiar decisões em Marketing, negócio e operação.",
  },

  es: {
    secondary: "MARTECH / AUTOMATION / SOFTWARE SYSTEMS",
    headline:
      "IA integrada con software, datos y procesos — no aislada de ellos.",
    body:
      "Desarrollo sistemas que conectan modelos de IA, APIs, datos, CRM, analytics y workflows para analizar comportamiento, automatizar procesos y apoyar decisiones en Marketing, negocio y operación.",
  },

  en: {
    secondary: "MARTECH / AUTOMATION / SOFTWARE SYSTEMS",
    headline:
      "AI integrated with software, data and processes — not isolated from them.",
    body:
      "I build systems that connect AI models, APIs, data, CRM, analytics and workflows to analyze behavior, automate processes and support decisions across Marketing, business and operations.",
  },

  de: {
    secondary: "MARTECH / AUTOMATION / SOFTWARE SYSTEMS",
    headline:
      "KI integriert in Software, Daten und Prozesse — nicht davon isoliert.",
    body:
      "Ich entwickle Systeme, die KI-Modelle, APIs, Daten, CRM, Analytics und Workflows verbinden, um Verhalten zu analysieren, Prozesse zu automatisieren und Entscheidungen in Marketing, Business und Operations zu unterstützen.",
  },
};

export function Hero() {
  const {
    copy,
    language,
  } = useSitePreferences();

  const positioning =
    heroPositioning[language];

  return (
    <section
      className="hero"
      id="home"
    >
      <div className="container hero__inner">
        <div className="hero__top">
          <p className="hero__eyebrow">
            {copy.hero.eyebrow}
          </p>

          <p className="hero__secondary">
            {positioning.secondary}
          </p>
        </div>

        <div className="hero__main">
          <h1 className="hero__title">
            Danilo Escobar
          </h1>
        </div>

        <div className="hero__positioning">
          <h2 className="hero__positioning-title">
            {positioning.headline}
          </h2>

          <p className="hero__positioning-copy">
            {positioning.body}
          </p>
        </div>

        <div className="hero__footer">
          <a
            href="/#projects"
            className="hero__link"
          >
            {
              copy.hero
                .selectedWork
            }

            <span aria-hidden="true">
              ↘
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
