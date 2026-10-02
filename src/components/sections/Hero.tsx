"use client";

import { useSitePreferences } from "@/context/SitePreferencesProvider";
import type { Language } from "@/lib/translations";

const heroPositioning: Record<
  Language,
  {
    secondary: string;
    headline: string;
    body: string;
    workCta: string;
  }
> = {
  pt: {
    secondary: "MARTECH / AUTOMATION / SOFTWARE SYSTEMS",
    headline:
      "IA que participa do trabalho — não apenas da interface.",
    body:
      "Desenvolvo sistemas que conectam modelos de IA, APIs, dados, CRM, analytics e workflows para analisar comportamento, automatizar processos e apoiar decisões em Marketing, negócio e operação.",
    workCta: "Vamos trabalhar",
  },

  es: {
    secondary: "MARTECH / AUTOMATION / SOFTWARE SYSTEMS",
    headline:
      "IA que participa en el trabajo — no solo en la interfaz.",
    body:
      "Desarrollo sistemas que conectan modelos de IA, APIs, datos, CRM, analytics y workflows para analizar comportamiento, automatizar procesos y apoyar decisiones en Marketing, negocio y operación.",
    workCta: "Trabajemos juntos",
  },

  en: {
    secondary: "MARTECH / AUTOMATION / SOFTWARE SYSTEMS",
    headline:
      "AI built into the work — not just the interface.",
    body:
      "I build systems that connect AI models, APIs, data, CRM, analytics and workflows to analyze behavior, automate processes and support decisions across Marketing, business and operations.",
    workCta: "Let's work",
  },

  de: {
    secondary: "MARTECH / AUTOMATION / SOFTWARE SYSTEMS",
    headline:
      "KI, die Teil der Arbeit wird — nicht nur der Oberfläche.",
    body:
      "Ich entwickle Systeme, die KI-Modelle, APIs, Daten, CRM, Analytics und Workflows verbinden, um Verhalten zu analysieren, Prozesse zu automatisieren und Entscheidungen in Marketing, Business und Operations zu unterstützen.",
    workCta: "Zusammenarbeiten",
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
            className="hero__button hero__button--primary"
          >
            {
              copy.hero
                .selectedWork
            }
          </a>

          <a
            href="/#contact"
            className="hero__button hero__button--secondary"
          >
            {positioning.workCta}
          </a>
        </div>
      </div>
    </section>
  );
}
