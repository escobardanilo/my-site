"use client";

import { useSitePreferences } from "@/context/SitePreferencesProvider";
import type { Language } from "@/lib/translations";

type ExperienceItem = {
  number: string;
  label: string;
  company: string;
  role: string;
  description: string;
  highlights?: string[];
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
    title: "Experiência que atravessa tecnologia, marketing e operações.",
    description:
      "Desenvolvimento de produto, estratégia digital e experiência prática em contextos industriais, logísticos e de serviços.",
    items: [
      {
        number: "01",
        label: "ATUAL / FREELANCE / BRASIL",
        company: "Projeto Nucleo — Brasil",
        role: "Agentic engineering (Freelance) | Projeto Nucleo",
        description:
          "Desenvolvimento de software para uma operação ligada a um centro de treino competitivo de HYROX e CrossFit, integrando componentes de IA, dados e aplicação.",
        focus: [
          "IA e agentes",
          "Backend",
          "Frontend",
          "Dados e integrações",
        ],
      },
      {
        number: "02",
        label: "MAR 2022 — JAN 2024 / REMOTO",
        company: "Feirense FC — Salvador, BA, Brasil",
        role: "Digital Strategy and Web Experience",
        description:
          "Estratégia digital, experiência web e comunicação visual em regime de teletrabalho, a partir de Portugal.",
        highlights: [
          "Gestão da experiência web em WordPress para um site com mais de 8.000 visitantes mensais, articulando necessidades entre áreas e priorizando melhorias de UX, conteúdo e desempenho com o suporte de desenvolvimento web.",
          "Liderança da arquitetura do site e do lançamento do rebranding, com melhoria superior a 50% na velocidade da versão mobile e crescimento mensal do tráfego orgânico.",
          "Implementação do HubSpot para centralizar dados de marketing, vendas e atendimento; otimização de páginas para SEO e agendamento de publicações 3 a 4 vezes por semana.",
          "Acompanhamento do ROI de campanhas no Google e Facebook e contribuição para direção de conteúdo, criativos, landing pages e consistência visual da marca.",
        ],
        focus: [
          "Estratégia digital",
          "WordPress e SEO",
          "HubSpot",
          "UX e desempenho",
          "Conteúdo e campanhas",
        ],
      },
      {
        number: "03",
        label: "MAR 2018 — JAN 2020 / BRASIL",
        company: "Prime Academia — Salvador, BA, Brasil",
        role: "Gestor de Comunicação Digital",
        description:
          "Atuação integrada entre comunicação, marketing digital e melhoria de processos da academia.",
        highlights: [
          "Idealização de um protótipo de sistema para a receção, orientado a reduzir erros de faturação e melhorar o fluxo de caixa.",
          "Planeamento e execução de marketing digital, automações, análise de comportamento, gestão de canais e campanhas. Em oito meses de automação, a operação alcançou mais de 12 mil seguidores e mais de 1 milhão de impressões.",
          "Participação na prototipagem da landing page institucional e na definição funcional de uma aplicação móvel para o ginásio.",
        ],
        focus: [
          "Comunicação digital",
          "Automação de marketing",
          "Análise de comportamento",
          "Prototipagem de produto",
        ],
      },
      {
        number: "04",
        label: "SET 2016 — SET 2017 / BRASIL",
        company: "Santo Pesce — Salvador, BA, Brasil",
        role: "Coordenador de Logística",
        description:
          "Coordenação de armazém e apoio direto à gerência em decisões operacionais no setor da restauração.",
        highlights: [
          "Promoção para coordenar o armazém após quatro meses, com apoio direto à gerência na tomada de decisões operacionais.",
          "Idealização do plano de sistematização de uma plataforma WMS à medida para controlo de stock, receção e expedição, além da gestão de fornecedores e processos regulatórios.",
        ],
        focus: [
          "Coordenação de armazém",
          "Gestão de stock",
          "WMS",
          "Fornecedores",
        ],
      },
      {
        number: "05",
        label: "EXPERIÊNCIA MULTISETORIAL",
        company: "Repsol · Prysmian · BA Glass",
        role: "Industrial Operations",
        description:
          "Experiência transversal em operações industriais, logística e produção, incluindo monitorização de equipamentos, apoio à manutenção técnica e colaboração com operadores, eletricistas e engenheiros para assegurar a continuidade e a segurança dos processos. Atuei também na organização e otimização da logística interna, no planeamento de receção e expedição, na utilização de sistemas WMS e na execução de tarefas de acordo com as especificações, os requisitos de qualidade e os prazos definidos.",
        focus: [
          "Logística e armazém",
          "Fluxo de materiais",
          "Produção industrial",
          "Processos de fabrico",
        ],
      },
    ],
  },
  en: {
    eyebrow: "EXPERIENCE",
    title: "Experience across technology, marketing and operations.",
    description:
      "Product development, digital strategy and hands-on work across industrial, logistics and service environments.",
    items: [
      {
        number: "01",
        label: "CURRENT / FREELANCE / BRAZIL",
        company: "Projeto Nucleo — Brazil",
        role: "Agentic engineering (Freelance) | Projeto Nucleo",
        description:
          "Software development for an operation connected to a competitive HYROX and CrossFit training center, integrating AI, data and application components.",
        focus: [
          "AI and agents",
          "Backend",
          "Frontend",
          "Data and integrations",
        ],
      },
      {
        number: "02",
        label: "MAR 2022 — JAN 2024 / REMOTE",
        company: "Feirense FC — Salvador, Bahia, Brazil",
        role: "Digital Strategy and Web Experience",
        description:
          "Digital strategy, web experience and visual communication, working remotely from Portugal.",
        highlights: [
          "Managed the WordPress web experience for a site with more than 8,000 monthly visitors, coordinating cross-functional needs and prioritizing UX, content and performance improvements with web development support.",
          "Led site architecture and the rebranding launch, improving mobile speed by more than 50% and increasing organic traffic month over month.",
          "Implemented HubSpot to centralize marketing, sales and customer-support data; optimized pages for SEO and scheduled content three to four times per week.",
          "Monitored ROI for Google and Facebook campaigns and contributed to content direction, creative assets, landing pages and brand consistency.",
        ],
        focus: [
          "Digital strategy",
          "WordPress and SEO",
          "HubSpot",
          "UX and performance",
          "Content and campaigns",
        ],
      },
      {
        number: "03",
        label: "MAR 2018 — JAN 2020 / BRAZIL",
        company: "Prime Academia — Salvador, Bahia, Brazil",
        role: "Digital Communications Manager",
        description:
          "Work spanning communications, digital marketing and process improvement for the gym.",
        highlights: [
          "Conceived a prototype reception system aimed at reducing billing errors and improving cash flow.",
          "Planned and executed digital marketing, automation, behavioral analysis, digital channels and campaigns. During eight months of automation, the operation reached more than 12,000 followers and over one million impressions.",
          "Contributed to the institutional landing-page prototype and the functional definition of a mobile app for the gym.",
        ],
        focus: [
          "Digital communications",
          "Marketing automation",
          "Behavioral analysis",
          "Product prototyping",
        ],
      },
      {
        number: "04",
        label: "SEP 2016 — SEP 2017 / BRAZIL",
        company: "Santo Pesce — Salvador, Bahia, Brazil",
        role: "Logistics Coordinator",
        description:
          "Warehouse coordination and direct support to management on operational decisions in the restaurant sector.",
        highlights: [
          "Promoted to coordinate the warehouse after four months, supporting management directly with operational decisions.",
          "Proposed a plan for a custom WMS platform to manage inventory, receiving and dispatch, alongside supplier management and regulatory processes.",
        ],
        focus: [
          "Warehouse coordination",
          "Inventory management",
          "WMS",
          "Suppliers",
        ],
      },
      {
        number: "05",
        label: "CROSS-INDUSTRY EXPERIENCE",
        company: "Repsol · Prysmian · BA Glass",
        role: "Industrial Operations",
        description:
          "Cross-functional experience across industrial operations, logistics and production, including equipment monitoring, technical maintenance support and collaboration with operators, electricians and engineers to maintain process continuity and safety. Also experienced in organizing and improving internal logistics, planning receiving and dispatch, working with WMS systems, and completing operational tasks to defined specifications, quality requirements and deadlines.",
        focus: [
          "Logistics and warehousing",
          "Material flow",
          "Industrial production",
          "Manufacturing processes",
        ],
      },
    ],
  },
  es: {
    eyebrow: "EXPERIENCIA",
    title: "Experiencia entre tecnología, marketing y operaciones.",
    description:
      "Desarrollo de producto, estrategia digital y experiencia práctica en entornos industriales, logísticos y de servicios.",
    items: [
      {
        number: "01",
        label: "ACTUAL / FREELANCE / BRASIL",
        company: "Projeto Nucleo — Brasil",
        role: "Agentic engineering (Freelance) | Projeto Nucleo",
        description:
          "Desarrollo de software para una operación vinculada a un centro de entrenamiento competitivo de HYROX y CrossFit, integrando IA, datos y aplicación.",
        focus: [
          "IA y agentes",
          "Backend",
          "Frontend",
          "Datos e integraciones",
        ],
      },
      {
        number: "02",
        label: "MAR 2022 — ENE 2024 / REMOTO",
        company: "Feirense FC — Salvador, BA, Brasil",
        role: "Digital Strategy and Web Experience",
        description:
          "Estrategia digital, experiencia web y comunicación visual en remoto desde Portugal.",
        highlights: [
          "Gestión de la experiencia web en WordPress para un sitio con más de 8.000 visitantes mensuales, coordinando necesidades entre áreas y priorizando mejoras de UX, contenido y rendimiento con soporte de desarrollo web.",
          "Liderazgo de la arquitectura del sitio y del lanzamiento del rebranding, mejorando más del 50 % la velocidad móvil e incrementando el tráfico orgánico mes a mes.",
          "Implementación de HubSpot para centralizar datos de marketing, ventas y atención; optimización SEO de páginas y programación de publicaciones tres o cuatro veces por semana.",
          "Seguimiento del ROI de campañas en Google y Facebook y contribución a la dirección de contenido, creatividades, landing pages y coherencia de marca.",
        ],
        focus: [
          "Estrategia digital",
          "WordPress y SEO",
          "HubSpot",
          "UX y rendimiento",
          "Contenido y campañas",
        ],
      },
      {
        number: "03",
        label: "MAR 2018 — ENE 2020 / BRASIL",
        company: "Prime Academia — Salvador, BA, Brasil",
        role: "Gestor de Comunicación Digital",
        description:
          "Trabajo integrado entre comunicación, marketing digital y mejora de procesos del gimnasio.",
        highlights: [
          "Ideación de un prototipo de sistema para recepción, orientado a reducir errores de facturación y mejorar el flujo de caja.",
          "Planificación y ejecución de marketing digital, automatización, análisis de comportamiento, canales digitales y campañas. En ocho meses de automatización, la operación alcanzó más de 12.000 seguidores y más de un millón de impresiones.",
          "Participación en el prototipo de la landing page institucional y en la definición funcional de una aplicación móvil para el gimnasio.",
        ],
        focus: [
          "Comunicación digital",
          "Automatización de marketing",
          "Análisis de comportamiento",
          "Prototipado de producto",
        ],
      },
      {
        number: "04",
        label: "SEP 2016 — SEP 2017 / BRASIL",
        company: "Santo Pesce — Salvador, BA, Brasil",
        role: "Coordinador de Logística",
        description:
          "Coordinación de almacén y apoyo directo a la gerencia en decisiones operativas en el sector de restauración.",
        highlights: [
          "Promoción a la coordinación del almacén después de cuatro meses, con apoyo directo a la gerencia en decisiones operativas.",
          "Propuesta de sistematización de una plataforma WMS a medida para controlar stock, recepción y expedición, además de gestionar proveedores y procesos regulatorios.",
        ],
        focus: [
          "Coordinación de almacén",
          "Gestión de stock",
          "WMS",
          "Proveedores",
        ],
      },
      {
        number: "05",
        label: "EXPERIENCIA MULTISECTORIAL",
        company: "Repsol · Prysmian · BA Glass",
        role: "Industrial Operations",
        description:
          "Experiencia transversal en operaciones industriales, logística y producción, incluyendo la monitorización de equipos, el apoyo al mantenimiento técnico y la colaboración con operarios, electricistas e ingenieros para garantizar la continuidad y seguridad de los procesos. También trabajé en la organización y optimización de la logística interna, la planificación de recepción y expedición, el uso de sistemas WMS y la ejecución de tareas según especificaciones, requisitos de calidad y plazos establecidos.",
        focus: [
          "Logística y almacén",
          "Flujo de materiales",
          "Producción industrial",
          "Procesos de fabricación",
        ],
      },
    ],
  },
  de: {
    eyebrow: "ERFAHRUNG",
    title: "Erfahrung an der Schnittstelle von Technologie, Marketing und Betrieb.",
    description:
      "Produktentwicklung, digitale Strategie und praktische Erfahrung in Industrie, Logistik und Dienstleistung.",
    items: [
      {
        number: "01",
        label: "AKTUELL / FREELANCE / BRASILIEN",
        company: "Projeto Nucleo — Brasilien",
        role: "Agentic engineering (Freelance) | Projeto Nucleo",
        description:
          "Softwareentwicklung für einen Betrieb rund um ein wettkampforientiertes HYROX- und CrossFit-Trainingszentrum, mit integrierten KI-, Daten- und Anwendungskomponenten.",
        focus: [
          "KI und Agenten",
          "Backend",
          "Frontend",
          "Daten und Integrationen",
        ],
      },
      {
        number: "02",
        label: "MÄR 2022 — JAN 2024 / REMOTE",
        company: "Feirense FC — Salvador, Bahia, Brasilien",
        role: "Digital Strategy and Web Experience",
        description:
          "Digitale Strategie, Web-Erlebnis und visuelle Kommunikation im Homeoffice von Portugal aus.",
        highlights: [
          "Verantwortung für das WordPress-Web-Erlebnis einer Website mit über 8.000 monatlichen Besuchern; Abstimmung zwischen Bereichen und Priorisierung von UX-, Inhalts- und Leistungsverbesserungen mit der Webentwicklung.",
          "Leitung der Website-Architektur und des Rebranding-Launches, mit über 50 % höherer mobiler Geschwindigkeit und monatlichem Wachstum des organischen Traffics.",
          "Einführung von HubSpot zur Zentralisierung von Marketing-, Vertriebs- und Supportdaten; SEO-Optimierung von Seiten und Planung von drei bis vier Veröffentlichungen pro Woche.",
          "Überwachung des ROI von Google- und Facebook-Kampagnen sowie Beiträge zu Content-Richtung, Kreativmaterial, Landingpages und Markenkonsistenz.",
        ],
        focus: [
          "Digitale Strategie",
          "WordPress und SEO",
          "HubSpot",
          "UX und Performance",
          "Inhalte und Kampagnen",
        ],
      },
      {
        number: "03",
        label: "MÄR 2018 — JAN 2020 / BRASILIEN",
        company: "Prime Academia — Salvador, Bahia, Brasilien",
        role: "Manager für digitale Kommunikation",
        description:
          "Verbindung von Kommunikation, digitalem Marketing und Prozessverbesserung im Fitnessstudio.",
        highlights: [
          "Konzeption eines Prototyps für ein Empfangssystem, um Abrechnungsfehler zu reduzieren und den Cashflow zu verbessern.",
          "Planung und Umsetzung von digitalem Marketing, Automatisierung, Verhaltensanalyse, digitalen Kanälen und Kampagnen. Innerhalb von acht Monaten Automatisierung erreichte der Betrieb über 12.000 Follower und mehr als eine Million Impressionen.",
          "Mitwirkung am Prototyp der institutionellen Landingpage und an der funktionalen Definition einer mobilen App für das Fitnessstudio.",
        ],
        focus: [
          "Digitale Kommunikation",
          "Marketing-Automatisierung",
          "Verhaltensanalyse",
          "Produkt-Prototyping",
        ],
      },
      {
        number: "04",
        label: "SEP 2016 — SEP 2017 / BRASILIEN",
        company: "Santo Pesce — Salvador, Bahia, Brasilien",
        role: "Logistikkoordinator",
        description:
          "Lagerkoordination und direkte Unterstützung der Geschäftsleitung bei operativen Entscheidungen in der Gastronomie.",
        highlights: [
          "Nach vier Monaten zur Lagerkoordination befördert und die Geschäftsleitung direkt bei operativen Entscheidungen unterstützt.",
          "Konzept für ein maßgeschneidertes WMS zur Bestandskontrolle sowie für Wareneingang und Versand entwickelt; zusätzlich Lieferanten und regulatorische Prozesse verwaltet.",
        ],
        focus: [
          "Lagerkoordination",
          "Bestandsverwaltung",
          "WMS",
          "Lieferanten",
        ],
      },
      {
        number: "05",
        label: "BRANCHENÜBERGREIFENDE ERFAHRUNG",
        company: "Repsol · Prysmian · BA Glass",
        role: "Industrial Operations",
        description:
          "Branchenübergreifende Erfahrung in industriellen Abläufen, Logistik und Produktion, einschließlich Anlagenüberwachung, technischer Wartungsunterstützung und Zusammenarbeit mit Bedienern, Elektrikern und Ingenieuren zur Sicherstellung von Prozesskontinuität und Sicherheit. Außerdem Erfahrung in der Organisation und Optimierung der internen Logistik, der Planung von Wareneingang und Versand, im Umgang mit WMS-Systemen sowie in der Ausführung operativer Aufgaben nach Vorgaben, Qualitätsanforderungen und Fristen.",
        focus: [
          "Logistik und Lager",
          "Materialfluss",
          "Industrielle Produktion",
          "Fertigungsprozesse",
        ],
      },
    ],
  },
};

export function WorkHistory() {
  const { language } = useSitePreferences();
  const experience = experienceCopy[language];

  return (
    <section
      className="work-history"
      id="experience"
      aria-labelledby="experience-title"
    >
      <div className="container">
        <div className="section-intro">
          <span className="section-intro__index">03</span>
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
          {experience.items.map((item) => (
            <article className="experience-card" key={item.number}>
              <div className="experience-card__meta">
                <span>{item.number}</span>
                <span>{item.label}</span>
              </div>

              <p className="experience-card__company">
                {item.company}
              </p>
              <h3>{item.role}</h3>
              <p className="experience-card__description">
                {item.description}
              </p>

              {item.highlights && (
                <ul className="experience-card__highlights">
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              )}

              <div className="experience-card__focus">
                {item.focus.map((focus) => (
                  <span key={focus}>{focus}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
