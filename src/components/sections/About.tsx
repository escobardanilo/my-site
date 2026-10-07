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
      "Construo sistemas onde software, IA e produto se encontram.",
    lead:
      "Sou AI Engineer e Software Engineer. Desenvolvo produtos full-stack e sistemas de IA que conectam modelos, dados, interfaces e fluxos de trabalho, com foco em soluções claras, úteis e tecnicamente sólidas.",
    systems:
      "O meu percurso cruza engenharia de software, inteligência artificial, produto e experiência de utilização. Isso dá-me uma visão de ponta a ponta: da interface e da lógica de negócio à arquitetura, validação e comportamento do sistema em uso real.",
    freelance:
      "Também desenvolvi projetos freelance de websites, landing pages e aplicações, com especial atenção a UI, UX, estrutura visual e clareza de navegação. A experiência anterior em operações industriais acrescentou uma visão prática sobre execução, restrições e confiabilidade — sem limitar o meu trabalho a esse contexto.",
    contact: "Contacte-me",
  },
  en: {
    title:
      "I build systems where software, AI and product come together.",
    lead:
      "I am an AI Engineer and Software Engineer. I build full-stack products and AI systems that connect models, data, interfaces and workflows, with a focus on solutions that are clear, useful and technically solid.",
    systems:
      "My background spans software engineering, artificial intelligence, product and user experience. That gives me an end-to-end view: from interface and business logic to architecture, validation and how a system behaves in real use.",
    freelance:
      "I have also delivered freelance websites, landing pages and applications with particular attention to UI, UX, visual structure and navigation clarity. Earlier experience in industrial operations adds a practical perspective on execution, constraints and reliability without defining the scope of my work.",
    contact: "Get in touch",
  },
  es: {
    title:
      "Construyo sistemas donde software, IA y producto se encuentran.",
    lead:
      "Soy AI Engineer y Software Engineer. Desarrollo productos full-stack y sistemas de IA que conectan modelos, datos, interfaces y workflows, con foco en soluciones claras, útiles y técnicamente sólidas.",
    systems:
      "Mi trayectoria cruza ingeniería de software, inteligencia artificial, producto y experiencia de usuario. Eso me da una visión de extremo a extremo: desde la interfaz y la lógica de negocio hasta la arquitectura, validación y comportamiento del sistema en uso real.",
    freelance:
      "También he desarrollado proyectos freelance de sitios web, landing pages y aplicaciones, con especial atención a UI, UX, estructura visual y claridad de navegación. Mi experiencia anterior en operaciones industriales aporta una perspectiva práctica sobre ejecución, restricciones y fiabilidad sin limitar mi trabajo a ese contexto.",
    contact: "Contactar",
  },
  de: {
    title:
      "Ich entwickle Systeme, in denen Software, KI und Produkt zusammenkommen.",
    lead:
      "Ich bin AI Engineer und Software Engineer. Ich entwickle Full-Stack-Produkte und KI-Systeme, die Modelle, Daten, Interfaces und Workflows verbinden, mit Fokus auf klare, nützliche und technisch solide Lösungen.",
    systems:
      "Mein Hintergrund verbindet Software Engineering, künstliche Intelligenz, Produktentwicklung und User Experience. Dadurch betrachte ich Systeme durchgängig: vom Interface und der Geschäftslogik bis zu Architektur, Validierung und Verhalten im realen Einsatz.",
    freelance:
      "Ich habe außerdem Freelance-Projekte für Websites, Landingpages und Anwendungen umgesetzt, mit besonderem Fokus auf UI, UX, visuelle Struktur und klare Navigation. Frühere Erfahrung in industriellen Abläufen ergänzt dies um eine praktische Perspektive auf Ausführung, Einschränkungen und Zuverlässigkeit, ohne meinen heutigen Schwerpunkt zu definieren.",
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
