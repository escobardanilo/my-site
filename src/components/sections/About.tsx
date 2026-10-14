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
      "Conheço o negócio por dentro. Construo o que o faz avançar.",
    lead:
      "Quando comecei a estudar engenharia de IA, já tinha passado por várias áreas da indústria, logística e manufatura, além de marketing e design gráfico.",
    systems:
      "Passei pelo armazém, pela coordenação, pela produção e pela operação. Ter conhecido esses contextos por dentro foi um privilégio — e é parte do que me diferencia: junto conhecimento técnico a experiência prática para perceber necessidades, identificar oportunidades e transformar problemas concretos em produtos digitais úteis.",
    freelance:
      "Sendo cauteloso, acredito que, daqui a cinco anos, as empresas que não tiverem integrado automação com IA nos seus processos vão ficar para trás. Quero contribuir para essa mudança, criando produtos que viabilizem o negócio e liguem a tecnologia às necessidades reais das empresas.",
    contact: "Contacte-me",
  },
  en: {
    title:
      "I understand business from the inside. I build what moves it forward.",
    lead:
      "When I started learning about AI engineering, I had already worked across industry, logistics and manufacturing, as well as marketing and graphic design.",
    systems:
      "I worked in warehousing, coordination, production and operations. Experiencing these environments firsthand was a privilege — and part of what sets me apart: I combine technical knowledge with practical experience to identify real needs and turn concrete problems into useful digital products.",
    freelance:
      "Taking a cautious view, I believe that within five years, companies that have not integrated AI automation into their processes will risk falling behind. I want to contribute to that shift by building products that enable business and connect technology to real company needs.",
    contact: "Get in touch",
  },
  es: {
    title:
      "Conozco el negocio desde dentro. Construyo lo que lo hace avanzar.",
    lead:
      "Cuando empecé a aprender ingeniería de IA, ya había pasado por distintas áreas de la industria, la logística y la manufactura, además del marketing y el diseño gráfico.",
    systems:
      "Trabajé en almacén, coordinación, producción y operaciones. Haber conocido estos entornos desde dentro fue un privilegio y es parte de lo que me diferencia: combino conocimientos técnicos con experiencia práctica para identificar necesidades reales y convertir problemas concretos en productos digitales útiles.",
    freelance:
      "Con una visión prudente, creo que dentro de cinco años las empresas que no hayan integrado automatización con IA en sus procesos correrán el riesgo de quedarse atrás. Quiero contribuir a ese cambio creando productos que hagan avanzar el negocio y conecten la tecnología con necesidades reales.",
    contact: "Contactar",
  },
  de: {
    title:
      "Ich kenne Unternehmen von innen. Ich entwickle, was sie voranbringt.",
    lead:
      "Als ich begann, mich mit KI-Engineering zu beschäftigen, hatte ich bereits in Industrie, Logistik und Fertigung sowie in Marketing und Grafikdesign gearbeitet.",
    systems:
      "Ich habe in Lagerhaltung, Koordination, Produktion und operativen Abläufen gearbeitet. Diese Bereiche aus eigener Erfahrung kennenzulernen, war ein Privileg und ist Teil dessen, was mich unterscheidet: Ich verbinde technisches Wissen mit praktischer Erfahrung, um konkrete Bedürfnisse zu erkennen und in nützliche digitale Produkte zu übersetzen.",
    freelance:
      "Vorsichtig betrachtet glaube ich, dass Unternehmen in fünf Jahren zurückfallen werden, wenn sie bis dahin keine KI-Automatisierung in ihre Prozesse integriert haben. Ich möchte zu diesem Wandel beitragen und Produkte entwickeln, die Unternehmen voranbringen und Technologie mit realen Anforderungen verbinden.",
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
