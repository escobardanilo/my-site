"use client";

import { useSitePreferences } from "@/context/SitePreferencesProvider";
import type { Language } from "@/lib/translations";

type ExpertiseItem = {
  number: string;
  title: string;
  description: string;
  capabilities: string[];
};

const expertiseCopy: Record<
  Language,
  {
    eyebrow: string;
    title: string;
    description: string;
    items: ExpertiseItem[];
  }
> = {
  pt: {
    eyebrow:
      "ESPECIALIZAÇÃO PROFISSIONAL",
    title:
      "Capacidade técnica aplicada a produtos e sistemas reais.",
    description:
      "As áreas em que concentro engenharia, integração e desenho de sistemas — sem repetir a lista de tecnologias da stack.",
    items: [
      {
        number: "01",
        title: "AI Engineering",
        description:
          "Integração de modelos em software com contexto, outputs estruturados, retrieval, tools, validação e limites explícitos entre IA e lógica determinística.",
        capabilities: [
          "Model integration",
          "RAG & retrieval",
          "Tool calling",
          "Validation & human control",
        ],
      },
      {
        number: "02",
        title:
          "Software Engineering",
        description:
          "Desenvolvimento de produtos full-stack com arquitetura clara, contratos tipados, backends, interfaces e código orientado a manutenção e evolução.",
        capabilities: [
          "Full-stack product development",
          "Backend & APIs",
          "Typed contracts",
          "Maintainable architecture",
        ],
      },
      {
        number: "03",
        title:
          "Operational Systems / Automation",
        description:
          "Transformação de processos operacionais em workflows de software com regras, estados, rastreabilidade e automação controlada.",
        capabilities: [
          "Workflow design",
          "Business rules",
          "Traceability",
          "Human-in-the-loop",
        ],
      },
    ],
  },
  en: {
    eyebrow:
      "PROFESSIONAL EXPERTISE",
    title:
      "Technical capability applied to real products and systems.",
    description:
      "The areas where I focus engineering, integration and system design — without repeating the technologies listed in the stack.",
    items: [
      {
        number: "01",
        title: "AI Engineering",
        description:
          "Integrating models into software with context, structured outputs, retrieval, tools, validation and explicit boundaries between AI and deterministic logic.",
        capabilities: [
          "Model integration",
          "RAG & retrieval",
          "Tool calling",
          "Validation & human control",
        ],
      },
      {
        number: "02",
        title:
          "Software Engineering",
        description:
          "Building full-stack products with clear architecture, typed contracts, backends, interfaces and code designed for maintenance and evolution.",
        capabilities: [
          "Full-stack product development",
          "Backend & APIs",
          "Typed contracts",
          "Maintainable architecture",
        ],
      },
      {
        number: "03",
        title:
          "Operational Systems / Automation",
        description:
          "Turning operational processes into software workflows with explicit rules, states, traceability and controlled automation.",
        capabilities: [
          "Workflow design",
          "Business rules",
          "Traceability",
          "Human-in-the-loop",
        ],
      },
    ],
  },
  es: {
    eyebrow:
      "ESPECIALIZACIÓN PROFESIONAL",
    title:
      "Capacidad técnica aplicada a productos y sistemas reales.",
    description:
      "Las áreas donde concentro ingeniería, integración y diseño de sistemas, sin repetir las tecnologías de la stack.",
    items: [
      {
        number: "01",
        title: "AI Engineering",
        description:
          "Integración de modelos en software con contexto, outputs estructurados, retrieval, tools, validación y límites explícitos entre IA y lógica determinista.",
        capabilities: [
          "Model integration",
          "RAG & retrieval",
          "Tool calling",
          "Validation & human control",
        ],
      },
      {
        number: "02",
        title:
          "Software Engineering",
        description:
          "Desarrollo de productos full-stack con arquitectura clara, contratos tipados, backends, interfaces y código pensado para mantenimiento y evolución.",
        capabilities: [
          "Full-stack product development",
          "Backend & APIs",
          "Typed contracts",
          "Maintainable architecture",
        ],
      },
      {
        number: "03",
        title:
          "Operational Systems / Automation",
        description:
          "Transformación de procesos operativos en workflows de software con reglas, estados, trazabilidad y automatización controlada.",
        capabilities: [
          "Workflow design",
          "Business rules",
          "Traceability",
          "Human-in-the-loop",
        ],
      },
    ],
  },
  de: {
    eyebrow:
      "PROFESSIONELLE EXPERTISE",
    title:
      "Technische Kompetenz für reale Produkte und Systeme.",
    description:
      "Die Bereiche, in denen ich Engineering, Integration und Systemdesign bündele — ohne die Technologien des Stacks zu wiederholen.",
    items: [
      {
        number: "01",
        title: "AI Engineering",
        description:
          "Integration von Modellen in Software mit Kontext, strukturierten Outputs, Retrieval, Tools, Validierung und klaren Grenzen zwischen KI und deterministischer Logik.",
        capabilities: [
          "Model integration",
          "RAG & retrieval",
          "Tool calling",
          "Validation & human control",
        ],
      },
      {
        number: "02",
        title:
          "Software Engineering",
        description:
          "Entwicklung von Full-Stack-Produkten mit klarer Architektur, typisierten Verträgen, Backends, Interfaces und wartbarem Code.",
        capabilities: [
          "Full-stack product development",
          "Backend & APIs",
          "Typed contracts",
          "Maintainable architecture",
        ],
      },
      {
        number: "03",
        title:
          "Operational Systems / Automation",
        description:
          "Überführung operativer Prozesse in Software-Workflows mit expliziten Regeln, Zuständen, Nachvollziehbarkeit und kontrollierter Automatisierung.",
        capabilities: [
          "Workflow design",
          "Business rules",
          "Traceability",
          "Human-in-the-loop",
        ],
      },
    ],
  },
};

export function ProfessionalExpertise() {
  const { language } =
    useSitePreferences();

  const expertise =
    expertiseCopy[language];

  return (
    <section
      className="expertise"
      id="expertise"
      aria-labelledby="expertise-title"
    >
      <div className="container">
        <div className="section-intro">
          <span className="section-intro__index">
            02
          </span>

          <div className="section-intro__content">
            <p className="section-intro__eyebrow">
              {expertise.eyebrow}
            </p>

            <h2
              className="section-intro__title"
              id="expertise-title"
            >
              {expertise.title}
            </h2>

            <p className="section-intro__description">
              {expertise.description}
            </p>
          </div>
        </div>

        <div className="expertise-list">
          {expertise.items.map(
            (item) => (
              <article
                className="expertise-item"
                key={item.number}
              >
                <div className="expertise-item__number">
                  <span>
                    {item.number}
                  </span>
                </div>

                <div className="expertise-item__main">
                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.description}
                  </p>
                </div>

                <div className="expertise-item__capabilities">
                  {item.capabilities.map(
                    (capability) => (
                      <span
                        key={
                          capability
                        }
                      >
                        {capability}
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
