"use client";

import { useSitePreferences } from "@/context/SitePreferencesProvider";
import type { Language } from "@/lib/translations";

type ExperienceItem = {
  number: string;
  label: string;
  company: string;
  role: string;
  description: string;
  focus: string[];
};

const experienceCopy: Record<
  Language,
  {
    eyebrow: string;
    title: string;
    description: string;
    items: ExperienceItem[];
  }
> = {
  pt: {
    eyebrow: "EXPERIÊNCIA",
    title:
      "Engenharia ligada a operações reais.",
    description:
      "Experiência recente em desenvolvimento de software e uma base operacional que influencia como desenho sistemas, workflows e responsabilidades.",
    items: [
      {
        number: "01",
        label:
          "ATUAL / FREELANCE / BRASIL",
        company: "Nucleo — Brasil",
        role:
          "Freelance Software Engineer",
        description:
          "Desenvolvimento backend e frontend para uma operação ligada a um centro de treinamento competitivo de HYROX e CrossFit, incluindo a camada de software necessária para suportar dados, fluxos e aplicação no funcionamento da operação.",
        focus: [
          "Backend",
          "Frontend",
          "Data & application layer",
          "Operational software",
        ],
      },
      {
        number: "02",
        label:
          "OPERAÇÕES INDUSTRIAIS",
        company:
          "Experiência operacional",
        role:
          "Industrial Operations",
        description:
          "Experiência em ambiente industrial com processos, execução e restrições operacionais. Essa base influencia a forma como penso confiabilidade, rastreabilidade, clareza de workflow e comportamento do software fora do ambiente de desenvolvimento.",
        focus: [
          "Processes",
          "Execution",
          "Constraints",
          "Reliability",
        ],
      },
    ],
  },
  en: {
    eyebrow: "EXPERIENCE",
    title:
      "Engineering connected to real operations.",
    description:
      "Recent software development work and an operational background that shapes how I think about systems, workflows and responsibility.",
    items: [
      {
        number: "01",
        label:
          "CURRENT / FREELANCE / BRAZIL",
        company: "Nucleo — Brazil",
        role:
          "Freelance Software Engineer",
        description:
          "Backend and frontend development for an operation connected to a competitive HYROX and CrossFit training center, including the software layer needed to support data, workflows and the application within day-to-day operations.",
        focus: [
          "Backend",
          "Frontend",
          "Data & application layer",
          "Operational software",
        ],
      },
      {
        number: "02",
        label:
          "INDUSTRIAL OPERATIONS",
        company:
          "Operational background",
        role:
          "Industrial Operations",
        description:
          "Experience in an industrial environment with processes, execution and operational constraints. That background shapes how I think about reliability, traceability, workflow clarity and software behavior outside the development environment.",
        focus: [
          "Processes",
          "Execution",
          "Constraints",
          "Reliability",
        ],
      },
    ],
  },
  es: {
    eyebrow: "EXPERIENCIA",
    title:
      "Ingeniería conectada a operaciones reales.",
    description:
      "Experiencia reciente en desarrollo de software y una base operativa que influye en cómo diseño sistemas, workflows y responsabilidades.",
    items: [
      {
        number: "01",
        label:
          "ACTUAL / FREELANCE / BRASIL",
        company: "Nucleo — Brasil",
        role:
          "Freelance Software Engineer",
        description:
          "Desarrollo backend y frontend para una operación vinculada a un centro de entrenamiento competitivo de HYROX y CrossFit, incluida la capa de software necesaria para soportar datos, workflows y la aplicación dentro de la operación.",
        focus: [
          "Backend",
          "Frontend",
          "Data & application layer",
          "Operational software",
        ],
      },
      {
        number: "02",
        label:
          "OPERACIONES INDUSTRIALES",
        company:
          "Experiencia operativa",
        role:
          "Industrial Operations",
        description:
          "Experiencia en entorno industrial con procesos, ejecución y restricciones operativas. Esa base influye en cómo pienso fiabilidad, trazabilidad, claridad de workflow y comportamiento del software fuera del entorno de desarrollo.",
        focus: [
          "Processes",
          "Execution",
          "Constraints",
          "Reliability",
        ],
      },
    ],
  },
  de: {
    eyebrow: "ERFAHRUNG",
    title:
      "Engineering mit Bezug zu realen Abläufen.",
    description:
      "Aktuelle Softwareentwicklung und ein operativer Hintergrund, der prägt, wie ich Systeme, Workflows und Verantwortlichkeiten gestalte.",
    items: [
      {
        number: "01",
        label:
          "AKTUELL / FREELANCE / BRASILIEN",
        company:
          "Nucleo — Brasilien",
        role:
          "Freelance Software Engineer",
        description:
          "Backend- und Frontend-Entwicklung für einen Betrieb rund um ein wettbewerbsorientiertes HYROX- und CrossFit-Trainingszentrum, einschließlich der Softwareschicht zur Unterstützung von Daten, Workflows und Anwendung im operativen Alltag.",
        focus: [
          "Backend",
          "Frontend",
          "Data & application layer",
          "Operational software",
        ],
      },
      {
        number: "02",
        label:
          "INDUSTRIELLE OPERATIONS",
        company:
          "Operativer Hintergrund",
        role:
          "Industrial Operations",
        description:
          "Erfahrung in einem industriellen Umfeld mit Prozessen, Ausführung und operativen Einschränkungen. Dieser Hintergrund prägt meinen Blick auf Zuverlässigkeit, Nachvollziehbarkeit, klare Workflows und das Verhalten von Software außerhalb der Entwicklungsumgebung.",
        focus: [
          "Processes",
          "Execution",
          "Constraints",
          "Reliability",
        ],
      },
    ],
  },
};

export function WorkHistory() {
  const { language } =
    useSitePreferences();

  const experience =
    experienceCopy[language];

  return (
    <section
      className="work-history"
      id="experience"
      aria-labelledby="experience-title"
    >
      <div className="container">
        <div className="section-intro">
          <span className="section-intro__index">
            03
          </span>

          <div className="section-intro__content">
            <p className="section-intro__eyebrow">
              {experience.eyebrow}
            </p>

            <h2
              className="section-intro__title"
              id="experience-title"
            >
              {experience.title}
            </h2>

            <p className="section-intro__description">
              {experience.description}
            </p>
          </div>
        </div>

        <div className="work-history__list work-history__list--professional">
          {experience.items.map(
            (item) => (
              <article
                className="experience-card"
                key={item.number}
              >
                <div className="experience-card__meta">
                  <span>
                    {item.number}
                  </span>

                  <span>
                    {item.label}
                  </span>
                </div>

                <p className="experience-card__company">
                  {item.company}
                </p>

                <h3>{item.role}</h3>

                <p className="experience-card__description">
                  {item.description}
                </p>

                <div className="experience-card__focus">
                  {item.focus.map(
                    (focus) => (
                      <span key={focus}>
                        {focus}
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
