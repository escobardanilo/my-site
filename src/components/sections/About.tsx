"use client";

import Image from "next/image";

import { useSitePreferences } from "@/context/SitePreferencesProvider";
import type { Language } from "@/lib/translations";

const aboutCopy: Record<
  Language,
  {
    title: string;
    lead: string;
    systems: string;
    freelance: string;
    contact: string;
  }
> = {
  pt: {
    title:
      "Software pensado para o trabalho real.",
    lead:
      "Sou AI Engineer e Software Engineer. Construo produtos e sistemas onde IA, dados e software fazem parte de uma arquitetura maior, com responsabilidades e limites claros.",
    systems:
      "A experiência em operações industriais ensinou-me a olhar para pessoas, processos, restrições, falhas e decisões — não apenas para código. Essa perspetiva acompanha a forma como desenho workflows, validação e confiabilidade em software.",
    freelance:
      "Também trabalhei de forma independente em projetos freelance de websites, landing pages e aplicações, com foco em UI, UX, estrutura visual, clareza de navegação e experiência de utilização.",
    contact: "Contacte-me",
  },
  en: {
    title:
      "Software designed for real work.",
    lead:
      "I am an AI Engineer and Software Engineer. I build products and systems where AI, data and software are part of a larger architecture with clear responsibilities and boundaries.",
    systems:
      "My background in industrial operations taught me to look at people, processes, constraints, failure modes and decisions — not just code. That perspective shapes how I approach workflows, validation and reliability in software.",
    freelance:
      "I have also worked independently on freelance websites, landing pages and applications, with a focus on UI, UX, visual structure, navigation clarity and user experience.",
    contact: "Get in touch",
  },
  es: {
    title:
      "Software pensado para el trabajo real.",
    lead:
      "Soy AI Engineer y Software Engineer. Construyo productos y sistemas donde IA, datos y software forman parte de una arquitectura mayor, con responsabilidades y límites claros.",
    systems:
      "Mi experiencia en operaciones industriales me enseñó a observar personas, procesos, restricciones, fallos y decisiones, no solo código. Esa perspectiva influye en cómo diseño workflows, validación y fiabilidad en software.",
    freelance:
      "También he trabajado de forma independiente en proyectos freelance de sitios web, landing pages y aplicaciones, con foco en UI, UX, estructura visual, claridad de navegación y experiencia de usuario.",
    contact: "Contactar",
  },
  de: {
    title:
      "Software für reale Arbeit.",
    lead:
      "Ich bin AI Engineer und Software Engineer. Ich entwickle Produkte und Systeme, in denen KI, Daten und Software Teil einer größeren Architektur mit klaren Verantwortlichkeiten und Grenzen sind.",
    systems:
      "Mein Hintergrund in industriellen Abläufen hat mich gelehrt, Menschen, Prozesse, Einschränkungen, Fehlerszenarien und Entscheidungen zu betrachten — nicht nur Code. Diese Perspektive prägt meinen Umgang mit Workflows, Validierung und Zuverlässigkeit.",
    freelance:
      "Ich habe außerdem selbstständig an Freelance-Projekten für Websites, Landingpages und Anwendungen gearbeitet, mit Fokus auf UI, UX, visuelle Struktur, klare Navigation und Nutzererlebnis.",
    contact: "Kontakt aufnehmen",
  },
};

export function About() {
  const { language } =
    useSitePreferences();

  const about =
    aboutCopy[language];

  return (
    <section
      className="about about--professional"
      id="about"
      aria-labelledby="about-title"
    >
      <div className="container">
        <div className="about-professional__layout">
          <div className="about-professional__content">
            <h2
              className="about-professional__title"
              id="about-title"
            >
              {about.title}
            </h2>

            <div className="about-professional__copy">
              <p className="about-professional__lead">
                {about.lead}
              </p>

              <p>
                {about.systems}
              </p>

              <p>
                {about.freelance}
              </p>
            </div>

            <a
              className="about__cta"
              href="mailto:d.escobar-016@hotmail.com"
            >
              <span>
                {about.contact}
              </span>

              <span aria-hidden="true">
                ↗
              </span>
            </a>
          </div>

          <div className="about-professional__portrait">
            <Image
              src="/images/escobar-portrait.png"
              alt="Danilo Escobar"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              className="about-professional__image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
