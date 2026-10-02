export type Language = "pt" | "es" | "en" | "de";

type Capability = {
  number: string;
  title: string;
  description: string;
};

type ExpertiseItem = {
  number: string;
  title: string;
  description: string;
  capabilities: string[];
};

type ExperienceItem = {
  number: string;
  period: string;
  role: string;
  context: string;
  description: string;
  focus: string[];
};

type ProjectItem = {
  number: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
};

type Principle = {
  number: string;
  title: string;
  description: string;
};

export type SiteCopy = {
  controls: {
    language: string;
    enableDark: string;
    enableLight: string;
  };

  header: {
    stack: string;
    expertise: string;
    experience: string;
    projects: string;
    about: string;
    contact: string;
  };

  hero: {
    eyebrow: string;
    description: string;
    selectedWork: string;
  };

  stack: {
    eyebrow: string;
    title: string;
    description: string;
    capabilities: Capability[];
  };

  expertise: {
    eyebrow: string;
    title: string;
    description: string;
    items: ExpertiseItem[];
  };

  work: {
    eyebrow: string;
    title: string;
    description: string;
    items: ExperienceItem[];
  };

  projects: {
    eyebrow: string;
    title: string;
    description: string;
    visual: string;
    viewCase: string;
    items: ProjectItem[];
  };

  about: {
    eyebrow: string;
    title: string;
    statement: string;
    approach: string;
    paragraphs: string[];
    principles: Principle[];
  };

  contact: {
    eyebrow: string;
    titleLineOne: string;
    titleLineTwo: string;
    description: string;
  };

  footer: {
    role: string;
    location: string;
  };
};

export const translations: Record<Language, SiteCopy> = {
  pt: {
    controls: {
      language: "Idioma",
      enableDark: "Ativar modo escuro",
      enableLight: "Ativar modo claro",
    },

    header: {
      stack: "Stack",
      expertise: "Especialização",
      experience: "Atuação",
      projects: "Projetos",
      about: "Sobre",
      contact: "Contacto",
    },

    hero: {
      eyebrow: "AI ENGINEER",
      description:
        "Desenvolvo sistemas que conectam IA, software, dados, APIs e workflows para analisar informação, automatizar processos e apoiar decisões em Marketing, negócio e operação.",
      selectedWork: "Ver projetos",
    },

    stack: {
      eyebrow: "ENGENHARIA & SISTEMAS",
      title: "Tecnologia ligada ao trabalho que precisa executar.",
      description:
        "IA, software, dados, integrações e automação tratados como partes do mesmo sistema, com responsabilidades claras entre interpretação, execução e controlo.",
      capabilities: [
        {
          number: "01",
          title: "AI Systems",
          description:
            "LLMs, agentes, RAG, ferramentas e outputs estruturados integrados em aplicações com contexto, validação e limites explícitos.",
        },
        {
          number: "02",
          title: "Automation & Orchestration",
          description:
            "APIs, agentes, workflows, triggers e regras de negócio conectados para reduzir trabalho manual e coordenar execução entre sistemas.",
        },
        {
          number: "03",
          title: "MarTech Systems",
          description:
            "Sistemas e dados aplicados a CRM, analytics, comportamento, segmentação, campanhas, personalização e apoio à decisão.",
        },
        {
          number: "04",
          title: "Data & Decision Systems",
          description:
            "Estruturação e cruzamento de dados para identificar padrões, acompanhar comportamento e melhorar o contexto disponível para decisão.",
        },
        {
          number: "05",
          title: "Software & APIs",
          description:
            "Aplicações, backends, integrações, bases de dados e contratos tipados que sustentam a camada de IA e conectam sistemas externos.",
        },
        {
          number: "06",
          title: "Control & Validation",
          description:
            "Regras determinísticas, permissões, auditabilidade e human-in-the-loop para manter decisões e ações críticas sob controlo.",
        },
      ],
    },

    expertise: {
      eyebrow: "ÁREAS DE ESPECIALIZAÇÃO",
      title: "IA como eixo. MarTech e Automation como aplicação.",
      description:
        "Trabalho na interseção entre AI Engineering, software, Marketing e operação, usando IA como infraestrutura integrada a dados, sistemas e processos reais.",
      items: [
        {
          number: "01",
          title: "AI Engineering",
          description:
            "Construção de sistemas onde modelos participam de processos reais através de contexto, ferramentas, dados, APIs, regras e validação.",
          capabilities: [
            "LLMs & agentes",
            "RAG & ferramentas",
            "Outputs estruturados",
            "Validação",
          ],
        },
        {
          number: "02",
          title: "MarTech & Data",
          description:
            "Aplicação de software, IA e dados a comportamento, CRM, analytics, segmentação, campanhas, personalização e suporte à decisão.",
          capabilities: ["CRM & analytics", "Segmentação", "Campanhas", "Personalização"],
        },
        {
          number: "03",
          title: "Automation & Operations",
          description:
            "Integração de sistemas, agentes, APIs e workflows para reduzir trabalho manual, coordenar processos e tornar execução e decisão mais rastreáveis.",
          capabilities: [
            "Workflow automation",
            "APIs & integrações",
            "Agentes",
            "Processos operacionais",
          ],
        },
      ],
    },

    work: {
      eyebrow: "ATUAÇÃO",
      title: "Engenharia aplicada onde dados, decisões e execução se encontram.",
      description:
        "O trabalho parte do processo real: que informação existe, que decisão precisa de contexto, que sistemas precisam comunicar e o que pode ser automatizado sem perder controlo.",
      items: [
        {
          number: "01",
          period: "ENGENHARIA APLICADA",
          role: "AI & Software Engineering",
          context: "PRODUTOS & SISTEMAS",
          description:
            "Desenvolvimento de produtos baseados em IA que combinam modelos de linguagem, APIs, dados estruturados, validação e lógica determinística de software.",
          focus: [
            "Sistemas de IA",
            "Integração de LLMs",
            "Arquitetura de software",
            "Product engineering",
          ],
        },
        {
          number: "02",
          period: "SISTEMAS APLICADOS",
          role: "MarTech & Automation",
          context: "MARKETING & OPERAÇÃO",
          description:
            "Aplicação de dados, integrações e automação a processos de Marketing e operação — de CRM, analytics e comportamento a workflows, sistemas internos e execução entre ferramentas.",
          focus: [
            "CRM & Analytics",
            "Segmentação & campanhas",
            "Workflows & APIs",
            "Automação de processos",
          ],
        },
      ],
    },

    projects: {
      eyebrow: "PROJETOS SELECIONADOS",
      title: "IA aplicada dentro de sistemas, não ao lado deles.",
      description:
        "Projetos onde modelos, dados, software e workflows fazem parte da mesma arquitetura — em operações financeiras, ambiente industrial e contexto clínico.",
      visual: "VISUAL DO PROJETO",
      viewCase: "Ver case study",
      items: [
        {
          number: "01",
          title: "Projeto 01",
          category: "PROJETO / CASE STUDY",
          description:
            "Estrutura reservada para um case study completo de engenharia.",
          tags: ["IA", "Software", "Engenharia"],
        },
        {
          number: "02",
          title: "Projeto 02",
          category: "PROJETO / CASE STUDY",
          description:
            "Estrutura reservada para um case study completo de engenharia.",
          tags: ["Produto", "Sistemas", "Desenvolvimento"],
        },
        {
          number: "03",
          title: "Projeto 03",
          category: "PROJETO / CASE STUDY",
          description:
            "Estrutura reservada para um case study completo de engenharia.",
          tags: ["Operações", "IA", "Software"],
        },
      ],
    },

    about: {
      eyebrow: "SOBRE",
      title: "IA como parte da infraestrutura do trabalho.",
      statement:
        "Trabalho na ligação entre AI Engineering, software, dados, Marketing e operação, com modelos inseridos em arquiteturas maiores e controladas.",
      approach: "ABORDAGEM",
      paragraphs: [
        "O meu trabalho concentra-se em transformar capacidades técnicas em sistemas funcionais. Isso significa conectar modelos com dados, APIs, interfaces, regras determinísticas e camadas de validação, em vez de tratar a IA como um componente isolado.",
        "A minha experiência operacional também influencia a forma como desenvolvo software: observo como a informação circula, onde as decisões acontecem, o que necessita de controlo e como um sistema se comporta quando sai do ambiente de desenvolvimento.",
      ],
      principles: [
        {
          number: "01",
          title: "Engenharia acima de demos",
          description:
            "Capacidades de IA só se tornam produtos úteis quando suportadas por arquitetura de software, validação, controlo e lógica de aplicação fiável.",
        },
        {
          number: "02",
          title: "Sistemas acima de funcionalidades isoladas",
          description:
            "Abordo produtos como sistemas conectados, considerando dados, interfaces, workflows, regras de negócio e consequências operacionais em conjunto.",
        },
        {
          number: "03",
          title: "Operação no mundo real",
          description:
            "O objetivo não é apenas fazer o software funcionar tecnicamente, mas torná-lo compreensível, sustentável e útil em ambientes operacionais reais.",
        },
      ],
    },

    contact: {
      eyebrow: "CONTACTO",
      titleLineOne: "Vamos construir",
      titleLineTwo: "algo juntos.",
      description:
        "Disponível para projetos e oportunidades relacionados com AI Engineering, MarTech, Automation, sistemas de software e integração de IA em processos de negócio e operação.",
    },

    footer: {
      role: "AI Engineer",
      location: "Portugal",
    },
  },

  es: {
    controls: {
      language: "Idioma",
      enableDark: "Activar modo oscuro",
      enableLight: "Activar modo claro",
    },

    header: {
      stack: "Stack",
      expertise: "Especialización",
      experience: "Áreas de actuación",
      projects: "Proyectos",
      about: "Sobre mí",
      contact: "Contacto",
    },

    hero: {
      eyebrow: "AI ENGINEER / AUGMENTED SOFTWARE ENGINEER",
      description:
        "Desarrollo sistemas que conectan IA, software, datos, APIs y workflows para analizar información, automatizar procesos y apoyar decisiones en Marketing, negocio y operación.",
      selectedWork: "Ver proyectos",
    },

    stack: {
      eyebrow: "INGENIERÍA & SISTEMAS",
      title: "Tecnología conectada al trabajo que debe ejecutar.",
      description:
        "IA, software, datos, integraciones y automatización tratados como partes del mismo sistema, con responsabilidades claras entre interpretación, ejecución y control.",
      capabilities: [
        {
          number: "01",
          title: "AI Systems",
          description:
            "LLMs, agentes, RAG, herramientas y outputs estructurados integrados en aplicaciones con contexto, validación y límites explícitos.",
        },
        {
          number: "02",
          title: "Automation & Orchestration",
          description:
            "APIs, agentes, workflows, triggers y reglas de negocio conectados para reducir trabajo manual y coordinar la ejecución entre sistemas.",
        },
        {
          number: "03",
          title: "MarTech Systems",
          description:
            "Sistemas y datos aplicados a CRM, analytics, comportamiento, segmentación, campañas, personalización y apoyo a la decisión.",
        },
        {
          number: "04",
          title: "Data & Decision Systems",
          description:
            "Estructuración y cruce de datos para identificar patrones, seguir comportamiento y mejorar el contexto disponible para decidir.",
        },
        {
          number: "05",
          title: "Software & APIs",
          description:
            "Aplicaciones, backends, integraciones, bases de datos y contratos tipados que sostienen la capa de IA y conectan sistemas externos.",
        },
        {
          number: "06",
          title: "Control & Validation",
          description:
            "Reglas deterministas, permisos, auditabilidad y human-in-the-loop para mantener decisiones y acciones críticas bajo control.",
        },
      ],
    },

    expertise: {
      eyebrow: "ÁREAS DE ESPECIALIZACIÓN",
      title: "IA como eje. MarTech y Automation como aplicación.",
      description:
        "Trabajo en la intersección entre AI Engineering, software, Marketing y operación, usando IA como infraestructura conectada a datos, sistemas y procesos reales.",
      items: [
        {
          number: "01",
          title: "AI Engineering",
          description:
            "Construcción de sistemas donde los modelos participan en procesos reales mediante contexto, herramientas, datos, APIs, reglas y validación.",
          capabilities: [
            "LLMs & agentes",
            "RAG & herramientas",
            "Outputs estructurados",
            "Validación",
          ],
        },
        {
          number: "02",
          title: "MarTech & Data",
          description:
            "Aplicación de software, IA y datos a comportamiento, CRM, analytics, segmentación, campañas, personalización y apoyo a la decisión.",
          capabilities: ["CRM & analytics", "Segmentación", "Campañas", "Personalización"],
        },
        {
          number: "03",
          title: "Automation & Operations",
          description:
            "Integración de sistemas, agentes, APIs y workflows para reducir trabajo manual, coordinar procesos y hacer la ejecución y la decisión más trazables.",
          capabilities: [
            "Workflow automation",
            "APIs & integraciones",
            "Agentes",
            "Procesos operativos",
          ],
        },
      ],
    },

    work: {
      eyebrow: "ÁREAS DE ACTUACIÓN",
      title: "Ingeniería aplicada donde se encuentran datos, decisiones y ejecución.",
      description:
        "El trabajo parte del proceso real: qué información existe, qué decisión necesita contexto, qué sistemas deben comunicarse y qué puede automatizarse sin perder control.",
      items: [
        {
          number: "01",
          period: "INGENIERÍA APLICADA",
          role: "AI & Software Engineering",
          context: "PRODUCTOS & SISTEMAS",
          description:
            "Desarrollo de productos basados en IA que combinan modelos de lenguaje, APIs, datos estructurados, validación y lógica determinista.",
          focus: [
            "Sistemas de IA",
            "Integración de LLMs",
            "Arquitectura de software",
            "Product engineering",
          ],
        },
        {
          number: "02",
          period: "SISTEMAS APLICADOS",
          role: "MarTech & Automation",
          context: "MARKETING & OPERACIÓN",
          description:
            "Aplicación de datos, integraciones y automatización a procesos de Marketing y operación, desde CRM, analytics y comportamiento hasta workflows, sistemas internos y ejecución entre herramientas.",
          focus: [
            "CRM & Analytics",
            "Segmentación & campañas",
            "Workflows & APIs",
            "Automatización de procesos",
          ],
        },
      ],
    },

    projects: {
      eyebrow: "PROYECTOS SELECCIONADOS",
      title: "IA aplicada dentro de sistemas, no al lado de ellos.",
      description:
        "Proyectos donde modelos, datos, software y workflows forman parte de la misma arquitectura: operaciones financieras, entorno industrial y contexto clínico.",
      visual: "VISUAL DEL PROYECTO",
      viewCase: "Ver case study",
      items: [
        {
          number: "01",
          title: "Proyecto 01",
          category: "PROYECTO / CASE STUDY",
          description:
            "Estructura reservada para un case study completo de ingeniería.",
          tags: ["IA", "Software", "Ingeniería"],
        },
        {
          number: "02",
          title: "Proyecto 02",
          category: "PROYECTO / CASE STUDY",
          description:
            "Estructura reservada para un case study completo de ingeniería.",
          tags: ["Producto", "Sistemas", "Desarrollo"],
        },
        {
          number: "03",
          title: "Proyecto 03",
          category: "PROYECTO / CASE STUDY",
          description:
            "Estructura reservada para un case study completo de ingeniería.",
          tags: ["Operaciones", "IA", "Software"],
        },
      ],
    },

    about: {
      eyebrow: "SOBRE MÍ",
      title: "IA como parte de la infraestructura del trabajo.",
      statement:
        "Trabajo en la intersección entre AI Engineering, desarrollo de software y sistemas operativos, construyendo productos donde los modelos son solo una parte de una arquitectura mayor y controlada.",
      approach: "ENFOQUE",
      paragraphs: [
        "Mi trabajo se centra en convertir capacidades técnicas en sistemas funcionales. Esto significa conectar modelos con datos, APIs, interfaces, reglas deterministas y capas de validación.",
        "Mi experiencia operativa también influye en cómo desarrollo software: observo cómo circula la información, dónde se toman decisiones, qué necesita control y cómo se comporta un sistema fuera del entorno de desarrollo.",
      ],
      principles: [
        {
          number: "01",
          title: "Ingeniería antes que demos",
          description:
            "Las capacidades de IA solo se convierten en productos útiles cuando están respaldadas por arquitectura, validación, control y lógica fiable.",
        },
        {
          number: "02",
          title: "Sistemas antes que funciones aisladas",
          description:
            "Abordo los productos como sistemas conectados, considerando datos, interfaces, workflows, reglas de negocio y consecuencias operativas.",
        },
        {
          number: "03",
          title: "Operación en el mundo real",
          description:
            "El objetivo no es solo hacer que el software funcione técnicamente, sino hacerlo comprensible, mantenible y útil en entornos reales.",
        },
      ],
    },

    contact: {
      eyebrow: "CONTACTO",
      titleLineOne: "Construyamos",
      titleLineTwo: "algo juntos.",
      description:
        "Disponible para proyectos y oportunidades relacionados con AI Engineering, MarTech, Automation, sistemas de software e integración de IA en procesos de negocio y operación.",
    },

    footer: {
      role: "AI Engineer",
      location: "Portugal",
    },
  },

  en: {
    controls: {
      language: "Language",
      enableDark: "Enable dark mode",
      enableLight: "Enable light mode",
    },

    header: {
      stack: "Stack",
      expertise: "Expertise",
      experience: "Practice",
      projects: "Projects",
      about: "About",
      contact: "Contact",
    },

    hero: {
      eyebrow: "AI ENGINEER / AUGMENTED SOFTWARE ENGINEER",
      description:
        "I build systems that connect AI, software, data, APIs and workflows to analyze information, automate processes and support decisions across Marketing, business and operations.",
      selectedWork: "Selected work",
    },

    stack: {
      eyebrow: "ENGINEERING & SYSTEMS",
      title: "Technology connected to the work it needs to execute.",
      description:
        "AI, software, data, integrations and automation treated as parts of the same system, with clear boundaries between interpretation, execution and control.",
      capabilities: [
        {
          number: "01",
          title: "AI Systems",
          description:
            "LLMs, agents, RAG, tools and structured outputs integrated into applications with context, validation and explicit boundaries.",
        },
        {
          number: "02",
          title: "Automation & Orchestration",
          description:
            "APIs, agents, workflows, triggers and business rules connected to reduce manual work and coordinate execution across systems.",
        },
        {
          number: "03",
          title: "MarTech Systems",
          description:
            "Systems and data applied to CRM, analytics, behavior, segmentation, campaigns, personalization and decision support.",
        },
        {
          number: "04",
          title: "Data & Decision Systems",
          description:
            "Structuring and combining data to identify patterns, track behavior and improve the context available for decisions.",
        },
        {
          number: "05",
          title: "Software & APIs",
          description:
            "Applications, backends, integrations, databases and typed contracts that support the AI layer and connect external systems.",
        },
        {
          number: "06",
          title: "Control & Validation",
          description:
            "Deterministic rules, permissions, auditability and human-in-the-loop controls for critical decisions and actions.",
        },
      ],
    },

    expertise: {
      eyebrow: "AREAS OF EXPERTISE",
      title: "AI as the core. MarTech and Automation as applied systems.",
      description:
        "I work across AI engineering, software, Marketing and operations, using AI as infrastructure connected to data, systems and real processes.",
      items: [
        {
          number: "01",
          title: "AI Engineering",
          description:
            "Building systems where models participate in real processes through context, tools, data, APIs, rules and validation.",
          capabilities: [
            "LLMs & agents",
            "RAG & tools",
            "Structured outputs",
            "Validation",
          ],
        },
        {
          number: "02",
          title: "MarTech & Data",
          description:
            "Applying software, AI and data to behavior, CRM, analytics, segmentation, campaigns, personalization and decision support.",
          capabilities: ["CRM & analytics", "Segmentation", "Campaigns", "Personalization"],
        },
        {
          number: "03",
          title: "Automation & Operations",
          description:
            "Connecting systems, agents, APIs and workflows to reduce manual work, coordinate processes and make execution and decisions more traceable.",
          capabilities: [
            "Workflow automation",
            "APIs & integrations",
            "Agents",
            "Operational processes",
          ],
        },
      ],
    },

    work: {
      eyebrow: "PRACTICE",
      title: "Applied engineering where data, decisions and execution meet.",
      description:
        "The work starts with the real process: what information exists, which decision needs context, which systems must communicate and what can be automated without losing control.",
      items: [
        {
          number: "01",
          period: "APPLIED ENGINEERING",
          role: "AI & Software Engineering",
          context: "PRODUCTS & SYSTEMS",
          description:
            "Designing and building AI-powered products that combine language models, APIs, structured data, validation and deterministic software logic.",
          focus: [
            "AI systems",
            "LLM integration",
            "Software architecture",
            "Product engineering",
          ],
        },
        {
          number: "02",
          period: "APPLIED SYSTEMS",
          role: "MarTech & Automation",
          context: "MARKETING & OPERATIONS",
          description:
            "Applying data, integrations and automation to Marketing and operational processes, from CRM, analytics and behavior to workflows, internal systems and execution across tools.",
          focus: [
            "CRM & Analytics",
            "Segmentation & campaigns",
            "Workflows & APIs",
            "Process automation",
          ],
        },
      ],
    },

    projects: {
      eyebrow: "SELECTED PROJECTS",
      title: "AI applied inside systems, not beside them.",
      description:
        "Projects where models, data, software and workflows belong to the same architecture — across payment operations, industrial environments and clinical context.",
      visual: "PROJECT VISUAL",
      viewCase: "View case study",
      items: [
        {
          number: "01",
          title: "Project 01",
          category: "PROJECT / CASE STUDY",
          description:
            "Project structure reserved for a complete engineering case study.",
          tags: ["AI", "Software", "Engineering"],
        },
        {
          number: "02",
          title: "Project 02",
          category: "PROJECT / CASE STUDY",
          description:
            "Project structure reserved for a complete engineering case study.",
          tags: ["Product", "Systems", "Development"],
        },
        {
          number: "03",
          title: "Project 03",
          category: "PROJECT / CASE STUDY",
          description:
            "Project structure reserved for a complete engineering case study.",
          tags: ["Operations", "AI", "Software"],
        },
      ],
    },

    about: {
      eyebrow: "ABOUT",
      title: "AI as part of the infrastructure of work.",
      statement:
        "I work at the intersection of AI engineering, software development and operational systems, building products where models are only one part of a larger and controlled architecture.",
      approach: "APPROACH",
      paragraphs: [
        "My work focuses on turning technical capabilities into functional systems. That means connecting models with data, APIs, interfaces, deterministic rules and validation layers instead of treating AI as an isolated component.",
        "My operational background also influences how I engineer software: I pay attention to how information moves, where decisions happen, what needs control and how a system behaves when it leaves the development environment.",
      ],
      principles: [
        {
          number: "01",
          title: "Engineering over demos",
          description:
            "AI capabilities only become useful products when they are supported by software architecture, validation, control and reliable application logic.",
        },
        {
          number: "02",
          title: "Systems over isolated features",
          description:
            "I approach products as connected systems, considering data, interfaces, workflows, business rules and operational consequences together.",
        },
        {
          number: "03",
          title: "Real-world operation",
          description:
            "The goal is not simply to make software work technically, but to make it understandable, maintainable and useful within real operational environments.",
        },
      ],
    },

    contact: {
      eyebrow: "CONTACT",
      titleLineOne: "Let's build",
      titleLineTwo: "something together.",
      description:
        "Open to projects and opportunities in AI Engineering, MarTech, Automation, software systems and the integration of AI into business and operational processes.",
    },

    footer: {
      role: "AI Engineer",
      location: "Portugal",
    },
  },

  de: {
    controls: {
      language: "Sprache",
      enableDark: "Dunklen Modus aktivieren",
      enableLight: "Hellen Modus aktivieren",
    },

    header: {
      stack: "Stack",
      expertise: "Expertise",
      experience: "Arbeitsfelder",
      projects: "Projekte",
      about: "Über mich",
      contact: "Kontakt",
    },

    hero: {
      eyebrow: "AI ENGINEER / AUGMENTED SOFTWARE ENGINEER",
      description:
        "Ich entwickle Systeme, die KI, Software, Daten, APIs und Workflows verbinden, um Informationen zu analysieren, Prozesse zu automatisieren und Entscheidungen in Marketing, Business und Operations zu unterstützen.",
      selectedWork: "Projekte ansehen",
    },

    stack: {
      eyebrow: "ENGINEERING & SYSTEME",
      title: "Technologie verbunden mit der Arbeit, die sie ausführen soll.",
      description:
        "KI, Software, Daten, Integrationen und Automatisierung als Teile desselben Systems, mit klaren Grenzen zwischen Interpretation, Ausführung und Kontrolle.",
      capabilities: [
        {
          number: "01",
          title: "AI Systems",
          description:
            "LLMs, Agenten, RAG, Tools und strukturierte Outputs integriert in Anwendungen mit Kontext, Validierung und klaren Grenzen.",
        },
        {
          number: "02",
          title: "Automation & Orchestration",
          description:
            "APIs, Agenten, Workflows, Trigger und Geschäftsregeln verbunden, um manuelle Arbeit zu reduzieren und Ausführung zwischen Systemen zu koordinieren.",
        },
        {
          number: "03",
          title: "MarTech Systems",
          description:
            "Systeme und Daten für CRM, Analytics, Verhalten, Segmentierung, Kampagnen, Personalisierung und Entscheidungsunterstützung.",
        },
        {
          number: "04",
          title: "Data & Decision Systems",
          description:
            "Daten strukturieren und verbinden, um Muster zu erkennen, Verhalten zu verfolgen und den Kontext für Entscheidungen zu verbessern.",
        },
        {
          number: "05",
          title: "Software & APIs",
          description:
            "Anwendungen, Backends, Integrationen, Datenbanken und typisierte Verträge, die die KI-Schicht tragen und externe Systeme verbinden.",
        },
        {
          number: "06",
          title: "Control & Validation",
          description:
            "Deterministische Regeln, Berechtigungen, Auditierbarkeit und Human-in-the-loop für kritische Entscheidungen und Aktionen.",
        },
      ],
    },

    expertise: {
      eyebrow: "SPEZIALISIERUNG",
      title: "KI als Kern. MarTech und Automation als Anwendung.",
      description:
        "Ich arbeite an der Schnittstelle von AI Engineering, Software, Marketing und Operations und nutze KI als Infrastruktur für Daten, Systeme und reale Prozesse.",
      items: [
        {
          number: "01",
          title: "AI Engineering",
          description:
            "Entwicklung von Systemen, in denen Modelle über Kontext, Tools, Daten, APIs, Regeln und Validierung an realen Prozessen teilnehmen.",
          capabilities: [
            "LLMs & Agenten",
            "RAG & Tools",
            "Strukturierte Outputs",
            "Validierung",
          ],
        },
        {
          number: "02",
          title: "MarTech & Data",
          description:
            "Anwendung von Software, KI und Daten auf Verhalten, CRM, Analytics, Segmentierung, Kampagnen, Personalisierung und Entscheidungsunterstützung.",
          capabilities: ["CRM & Analytics", "Segmentierung", "Kampagnen", "Personalisierung"],
        },
        {
          number: "03",
          title: "Automation & Operations",
          description:
            "Verbindung von Systemen, Agenten, APIs und Workflows, um manuelle Arbeit zu reduzieren, Prozesse zu koordinieren und Ausführung und Entscheidungen nachvollziehbarer zu machen.",
          capabilities: [
            "Workflow-Automation",
            "APIs & Integrationen",
            "Agenten",
            "Operative Prozesse",
          ],
        },
      ],
    },

    work: {
      eyebrow: "ARBEITSFELDER",
      title: "Angewandtes Engineering, wo Daten, Entscheidungen und Ausführung zusammenkommen.",
      description:
        "Die Arbeit beginnt mit dem realen Prozess: Welche Informationen existieren, welche Entscheidung Kontext benötigt, welche Systeme kommunizieren müssen und was sich automatisieren lässt, ohne Kontrolle zu verlieren.",
      items: [
        {
          number: "01",
          period: "ANGEWANDTES ENGINEERING",
          role: "AI & Software Engineering",
          context: "PRODUKTE & SYSTEME",
          description:
            "Entwicklung KI-gestützter Produkte, die Sprachmodelle, APIs, strukturierte Daten, Validierung und deterministische Softwarelogik kombinieren.",
          focus: [
            "KI-Systeme",
            "LLM-Integration",
            "Softwarearchitektur",
            "Product Engineering",
          ],
        },
        {
          number: "02",
          period: "ANGEWANDTE SYSTEME",
          role: "MarTech & Automation",
          context: "MARKETING & OPERATIONS",
          description:
            "Anwendung von Daten, Integrationen und Automatisierung auf Marketing- und operative Prozesse — von CRM, Analytics und Verhalten bis zu Workflows, internen Systemen und Ausführung zwischen Tools.",
          focus: [
            "CRM & Analytics",
            "Segmentierung & Kampagnen",
            "Workflows & APIs",
            "Prozessautomatisierung",
          ],
        },
      ],
    },

    projects: {
      eyebrow: "AUSGEWÄHLTE PROJEKTE",
      title: "KI innerhalb von Systemen, nicht daneben.",
      description:
        "Projekte, in denen Modelle, Daten, Software und Workflows Teil derselben Architektur sind — in Payment Operations, Industrie und klinischem Kontext.",
      visual: "PROJEKT VISUAL",
      viewCase: "Case Study ansehen",
      items: [
        {
          number: "01",
          title: "Projekt 01",
          category: "PROJEKT / CASE STUDY",
          description:
            "Reservierte Struktur für eine vollständige Engineering Case Study.",
          tags: ["KI", "Software", "Engineering"],
        },
        {
          number: "02",
          title: "Projekt 02",
          category: "PROJEKT / CASE STUDY",
          description:
            "Reservierte Struktur für eine vollständige Engineering Case Study.",
          tags: ["Produkt", "Systeme", "Entwicklung"],
        },
        {
          number: "03",
          title: "Projekt 03",
          category: "PROJEKT / CASE STUDY",
          description:
            "Reservierte Struktur für eine vollständige Engineering Case Study.",
          tags: ["Operations", "KI", "Software"],
        },
      ],
    },

    about: {
      eyebrow: "ÜBER MICH",
      title: "KI als Teil der Infrastruktur von Arbeit.",
      statement:
        "Ich arbeite an der Schnittstelle von AI Engineering, Softwareentwicklung und operativen Systemen und entwickle Produkte, in denen Modelle nur ein Teil einer größeren kontrollierten Architektur sind.",
      approach: "ANSATZ",
      paragraphs: [
        "Meine Arbeit konzentriert sich darauf, technische Fähigkeiten in funktionale Systeme zu überführen. Dazu verbinde ich Modelle mit Daten, APIs, Interfaces, deterministischen Regeln und Validierungsschichten.",
        "Mein operativer Hintergrund beeinflusst ebenfalls meine Softwareentwicklung: Ich betrachte Informationsflüsse, Entscheidungspunkte, Kontrollanforderungen und das Verhalten eines Systems außerhalb der Entwicklungsumgebung.",
      ],
      principles: [
        {
          number: "01",
          title: "Engineering statt Demos",
          description:
            "KI-Fähigkeiten werden erst dann zu nützlichen Produkten, wenn sie durch Softwarearchitektur, Validierung, Kontrolle und zuverlässige Logik unterstützt werden.",
        },
        {
          number: "02",
          title: "Systeme statt isolierter Features",
          description:
            "Ich betrachte Produkte als verbundene Systeme aus Daten, Interfaces, Workflows, Geschäftsregeln und operativen Konsequenzen.",
        },
        {
          number: "03",
          title: "Betrieb in der realen Welt",
          description:
            "Das Ziel ist nicht nur technisch funktionierende Software, sondern verständliche, wartbare und in realen Umgebungen nutzbare Systeme.",
        },
      ],
    },

    contact: {
      eyebrow: "KONTAKT",
      titleLineOne: "Lassen Sie uns",
      titleLineTwo: "gemeinsam etwas bauen.",
      description:
        "Offen für Projekte und Möglichkeiten in AI Engineering, MarTech, Automation, Softwaresystemen und der Integration von KI in Business- und operative Prozesse.",
    },

    footer: {
      role: "AI Engineer",
      location: "Portugal",
    },
  },
};