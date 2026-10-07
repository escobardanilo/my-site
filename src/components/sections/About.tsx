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
      "Construo produtos que fazem a IA sair do modelo e entrar no produto.",
    lead:
      "Sou AI Engineer e Software Engineer. Trabalho na ligação entre modelos, software, dados e interfaces para transformar capacidades de IA em produtos que as pessoas conseguem realmente usar.",
    systems:
      "Interessa-me especialmente o ponto em que a tecnologia deixa de ser apenas uma feature e passa a participar de decisões, investigação, execução e compreensão de processos. É aí que desenho arquitetura, validação, contexto, fluxos e limites para que o sistema seja útil e previsível.",
    freelance:
      "Também desenvolvo aplicações, websites e experiências digitais de ponta a ponta, cruzando engenharia com produto, UI e UX. O objetivo é sempre o mesmo: construir algo tecnicamente sólido, claro para quem usa e preparado para evoluir.",
    contact: "Contacte-me",
  },
  en: {
    title:
      "I build products that move AI out of the model and into the product.",
    lead:
      "I am an AI Engineer and Software Engineer. I work at the intersection of models, software, data and interfaces, turning AI capabilities into products people can actually use.",
    systems:
      "I am especially interested in the point where technology stops being just a feature and starts taking part in decisions, investigation, execution and understanding. That is where I design architecture, validation, context, workflows and boundaries so the system remains useful and predictable.",
    freelance:
      "I also build applications, websites and digital experiences end to end, combining engineering with product, UI and UX. The goal is always the same: create something technically solid, clear to use and ready to evolve.",
    contact: "Get in touch",
  },
  es: {
    title:
      "Construyo productos que sacan la IA del modelo y la llevan al producto.",
    lead:
      "Soy AI Engineer y Software Engineer. Trabajo en la conexión entre modelos, software, datos e interfaces para convertir capacidades de IA en productos que las personas realmente puedan utilizar.",
    systems:
      "Me interesa especialmente el punto en el que la tecnología deja de ser solo una feature y pasa a participar en decisiones, investigación, ejecución y comprensión. Ahí diseño arquitectura, validación, contexto, workflows y límites para que el sistema sea útil y predecible.",
    freelance:
      "También desarrollo aplicaciones, sitios web y experiencias digitales de extremo a extremo, combinando ingeniería con producto, UI y UX. El objetivo es siempre el mismo: construir algo técnicamente sólido, claro para quien lo usa y preparado para evolucionar.",
    contact: "Contactar",
  },
  de: {
    title:
      "Ich entwickle Produkte, die KI aus dem Modell in das eigentliche Produkt bringen.",
    lead:
      "Ich bin AI Engineer und Software Engineer. Ich verbinde Modelle, Software, Daten und Interfaces und übersetze KI-Fähigkeiten in Produkte, die Menschen tatsächlich nutzen können.",
    systems:
      "Besonders interessiert mich der Punkt, an dem Technologie nicht mehr nur eine Funktion ist, sondern Entscheidungen, Recherche, Ausführung und Verständnis unterstützt. Dort gestalte ich Architektur, Validierung, Kontext, Workflows und Grenzen, damit das System nützlich und vorhersehbar bleibt.",
    freelance:
      "Ich entwickle außerdem Anwendungen, Websites und digitale Erlebnisse durchgängig und verbinde Engineering mit Produkt, UI und UX. Das Ziel bleibt gleich: technisch solide, klar nutzbar und für Weiterentwicklung vorbereitet.",
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
