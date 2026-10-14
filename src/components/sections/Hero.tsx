"use client";

import { DitherGlobe } from "@/components/hero/DitherGlobe";
import { useSitePreferences } from "@/context/SitePreferencesProvider";
import type { Language } from "@/lib/translations";

const heroCopy: Record<
  Language,
  {
    eyebrow: string;
    titleLineOne: string;
    titleLineTwo: string;
    description: string;
    projects: string;
  }
> = {
  pt: {
    eyebrow: "IA / SOFTWARE / AUTOMAÇÃO",
    titleLineOne: "Criando produtos.",
    titleLineTwo: "Que viabilizam o negócio.",
    description:
      "Passei por indústria, logística, manufatura, coordenação, produção, operações, marketing e design gráfico. Hoje, levo essa experiência prática para a criação de produtos digitais com IA e automação.",
    projects: "Ver projetos",
  },
  en: {
    eyebrow: "AI / SOFTWARE / AUTOMATION",
    titleLineOne: "Building products.",
    titleLineTwo: "That move business forward.",
    description:
      "My background spans industry, logistics, manufacturing, coordination, production, operations, marketing and graphic design. I bring that practical experience into digital products built with AI and automation.",
    projects: "View projects",
  },
  es: {
    eyebrow: "IA / SOFTWARE / AUTOMATIZACIÓN",
    titleLineOne: "Creando productos.",
    titleLineTwo: "Que impulsan el negocio.",
    description:
      "Mi trayectoria abarca industria, logística, manufactura, coordinación, producción, operaciones, marketing y diseño gráfico. Hoy llevo esa experiencia práctica a la creación de productos digitales con IA y automatización.",
    projects: "Ver proyectos",
  },
  de: {
    eyebrow: "KI / SOFTWARE / AUTOMATISIERUNG",
    titleLineOne: "Produkte entwickeln.",
    titleLineTwo: "Die Unternehmen voranbringen.",
    description:
      "Mein Weg führte durch Industrie, Logistik, Fertigung, Koordination, Produktion, operative Abläufe, Marketing und Grafikdesign. Diese praktische Erfahrung bringe ich heute in digitale Produkte mit KI und Automatisierung ein.",
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
                {hero.titleLineOne}
              </span>

              <em>
                {hero.titleLineTwo}
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
