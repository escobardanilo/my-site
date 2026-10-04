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
      eyebrow: "AI AUGMENTED SOFTWARE ENGINEER",
      description:
        "Atuo na interseção entre IA e engenharia de software, construindo sistemas que conectam modelos, dados, APIs e processos reais de operação. O foco está em transformar tarefas manuais e fluxos fragmentados em aplicações mais rápidas, consistentes e controláveis, usando TypeScript, React, Next.js, Node.js, sistemas em tempo real e infraestrutura na edge — com automação onde faz sentido e supervisão humana onde a decisão exige contexto.",
      selectedWork: "Ver projetos",
    },

    stack: {
      eyebrow: "TECH STACK",
      title: "Engenharia de sistemas em torno da IA.",
      description:
        "As capacidades de engenharia que utilizo para transformar modelos de IA, software, dados e requisitos operacionais em aplicações fiáveis.",
      capabilities: [
        {
          number: "01",
          title: "Sistemas de IA",
          description:
            "Desenvolvimento de aplicações baseadas em IA que conectam modelos, dados estruturados, lógica de software e fluxos reais de produto.",
        },
        {
          number: "02",
          title: "Integração de LLMs",
          description:
            "Integração de modelos de linguagem com APIs, ferramentas, camadas de validação e lógica determinística de aplicação.",
        },
        {
          number: "03",
          title: "Backend & APIs",
          description:
            "Construção de backends e APIs que garantem comunicação fiável entre IA, produtos e sistemas externos.",
        },
        {
          number: "04",
          title: "Dados & Validação",
          description:
            "Estruturação de dados, validação de outputs de modelos e criação de limites previsíveis entre IA e software.",
        },
        {
          number: "05",
          title: "Product Engineering",
          description:
            "Transformação de capacidades técnicas em produtos utilizáveis, com arquitetura clara, fluxos de interação e código sustentável.",
        },
        {
          number: "06",
          title: "Automação Operacional",
          description:
            "Engenharia de sistemas que automatizam fluxos operacionais preservando controlo, rastreabilidade e supervisão humana.",
        },
      ],
    },

    expertise: {
      eyebrow: "ESPECIALIZAÇÃO PROFISSIONAL",
      title: "Da capacidade de IA ao software em produção.",
      description:
        "O meu trabalho encontra-se entre inteligência artificial, engenharia de software e sistemas operacionais, transformando capacidades técnicas em produtos capazes de funcionar de forma fiável em ambientes reais.",
      items: [
        {
          number: "01",
          title: "AI Engineering",
          description:
            "Conceção e implementação de sistemas de software baseados em IA que combinam modelos de linguagem, lógica de aplicação, outputs estruturados e fluxos de produção.",
          capabilities: [
            "Aplicações com LLMs",
            "Outputs estruturados",
            "Fluxos assistidos por IA",
            "Integração de modelos",
          ],
        },
        {
          number: "02",
          title: "Software Engineering",
          description:
            "Desenvolvimento de produtos de software fiáveis com arquitetura clara, interfaces tipadas, APIs e lógica de aplicação sustentável.",
          capabilities: ["TypeScript", "Next.js", "React", "FastAPI"],
        },
        {
          number: "03",
          title: "Inteligência Operacional",
          description:
            "Transformação de requisitos operacionais em fluxos de software controlados, com rastreabilidade, validação e camadas determinísticas de decisão.",
          capabilities: [
            "Automação de workflows",
            "Regras de negócio",
            "Validação",
            "Auditabilidade",
          ],
        },
      ],
    },

    work: {
      eyebrow: "ATUAÇÃO",
      title: "Engenharia moldada pela operação.",
      description:
        "O meu trabalho combina contexto operacional com software e AI Engineering, trazendo uma perspetiva prática sobre como os sistemas precisam funcionar para além da camada técnica.",
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
          period: "CONTEXTO OPERACIONAL",
          role: "Operações & Sistemas",
          context: "PROCESSOS & OPERAÇÕES",
          description:
            "Trabalho com processos operacionais, sistemas e fluxos estruturados, transformando requisitos reais de negócio em formas de trabalho mais claras, controladas e mensuráveis.",
          focus: [
            "Operações",
            "Análise de processos",
            "Design de workflows",
            "Inteligência operacional",
          ],
        },
      ],
    },

    projects: {
      eyebrow: "PROJETOS SELECIONADOS",
      title: "Sistemas concebidos para resolver problemas reais.",
      description:
        "Uma seleção de projetos de engenharia focados em IA, sistemas de software, fluxos operacionais e desenvolvimento de produto.",
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
      title: "IA, software e operações no mesmo sistema.",
      statement:
        "Trabalho na interseção entre AI Engineering, desenvolvimento de software e sistemas operacionais, construindo produtos onde os modelos são apenas uma parte de uma arquitetura maior e controlada.",
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
        "Disponível para conversas sobre AI Engineering, sistemas de software, produtos inteligentes e tecnologia aplicada a operações.",
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
        "Trabajo en la intersección entre IA e ingeniería de software, construyendo sistemas que conectan modelos, datos, APIs y procesos reales de operación. El foco está en transformar tareas manuales y flujos fragmentados en aplicaciones más rápidas, consistentes y controlables, usando TypeScript, React, Next.js, Node.js, sistemas en tiempo real e infraestructura edge — con automatización donde tiene sentido y supervisión humana donde la decisión exige contexto.",
      selectedWork: "Ver proyectos",
    },

    stack: {
      eyebrow: "TECH STACK",
      title: "Ingeniería de sistemas alrededor de la IA.",
      description:
        "Las capacidades de ingeniería que utilizo para convertir modelos de IA, software, datos y requisitos operativos en aplicaciones fiables.",
      capabilities: [
        {
          number: "01",
          title: "Sistemas de IA",
          description:
            "Desarrollo de aplicaciones impulsadas por IA que conectan modelos, datos estructurados, lógica de software y flujos reales de producto.",
        },
        {
          number: "02",
          title: "Integración de LLMs",
          description:
            "Integración de modelos de lenguaje con APIs, herramientas, capas de validación y lógica determinista de aplicación.",
        },
        {
          number: "03",
          title: "Backend & APIs",
          description:
            "Construcción de backends y APIs que permiten una comunicación fiable entre IA, productos y sistemas externos.",
        },
        {
          number: "04",
          title: "Datos & Validación",
          description:
            "Estructuración de datos, validación de outputs y creación de límites predecibles entre IA y software.",
        },
        {
          number: "05",
          title: "Product Engineering",
          description:
            "Transformación de capacidades técnicas en productos utilizables con arquitectura clara, flujos de interacción y código mantenible.",
        },
        {
          number: "06",
          title: "Automatización Operativa",
          description:
            "Ingeniería de sistemas que automatizan flujos operativos preservando control, trazabilidad y supervisión humana.",
        },
      ],
    },

    expertise: {
      eyebrow: "ESPECIALIZACIÓN PROFESIONAL",
      title: "De la capacidad de IA al software en producción.",
      description:
        "Mi trabajo se sitúa entre inteligencia artificial, ingeniería de software y sistemas operativos, transformando capacidades técnicas en productos fiables para entornos reales.",
      items: [
        {
          number: "01",
          title: "AI Engineering",
          description:
            "Diseño e implementación de sistemas de software basados en IA que combinan modelos de lenguaje, lógica de aplicación, outputs estructurados y flujos de producción.",
          capabilities: [
            "Aplicaciones con LLMs",
            "Outputs estructurados",
            "Flujos asistidos por IA",
            "Integración de modelos",
          ],
        },
        {
          number: "02",
          title: "Software Engineering",
          description:
            "Desarrollo de productos de software fiables con arquitectura clara, interfaces tipadas, APIs y lógica mantenible.",
          capabilities: ["TypeScript", "Next.js", "React", "FastAPI"],
        },
        {
          number: "03",
          title: "Inteligencia Operativa",
          description:
            "Transformación de requisitos operativos en flujos controlados con trazabilidad, validación y capas deterministas de decisión.",
          capabilities: [
            "Automatización de workflows",
            "Reglas de negocio",
            "Validación",
            "Auditabilidad",
          ],
        },
      ],
    },

    work: {
      eyebrow: "ÁREAS DE ACTUACIÓN",
      title: "Ingeniería moldeada por la operación.",
      description:
        "Mi trabajo combina contexto operativo con software y AI Engineering, aportando una perspectiva práctica sobre cómo deben funcionar los sistemas más allá de la capa técnica.",
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
          period: "CONTEXTO OPERATIVO",
          role: "Operaciones & Sistemas",
          context: "PROCESOS & OPERACIONES",
          description:
            "Trabajo con procesos operativos, sistemas y flujos estructurados, convirtiendo requisitos reales de negocio en formas de trabajo más claras, controladas y medibles.",
          focus: [
            "Operaciones",
            "Análisis de procesos",
            "Diseño de workflows",
            "Inteligencia operativa",
          ],
        },
      ],
    },

    projects: {
      eyebrow: "PROYECTOS SELECCIONADOS",
      title: "Sistemas diseñados para resolver problemas reales.",
      description:
        "Una selección de proyectos de ingeniería centrados en IA, sistemas de software, flujos operativos y desarrollo de producto.",
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
      title: "IA, software y operaciones en el mismo sistema.",
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
        "Disponible para conversaciones sobre AI Engineering, sistemas de software, productos inteligentes y tecnología aplicada a operaciones.",
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
        "I work at the intersection of AI and software engineering, building systems that connect models, data, APIs and real operational processes. The focus is on turning manual tasks and fragmented workflows into faster, more consistent and controllable applications using TypeScript, React, Next.js, Node.js, real-time systems and edge infrastructure — with automation where it makes sense and human oversight where decisions require context.",
      selectedWork: "Selected work",
    },

    stack: {
      eyebrow: "MY TECH STACK",
      title: "Engineering systems around AI.",
      description:
        "The engineering capabilities I use to turn AI models, software, data and operational requirements into reliable applications.",
      capabilities: [
        {
          number: "01",
          title: "AI Systems",
          description:
            "Designing AI-powered applications that connect models, structured data, software logic and real product workflows.",
        },
        {
          number: "02",
          title: "LLM Integration",
          description:
            "Integrating large language models with APIs, tools, validation layers and deterministic application logic.",
        },
        {
          number: "03",
          title: "Backend & APIs",
          description:
            "Building application backends and APIs that provide reliable communication between AI, products and external systems.",
        },
        {
          number: "04",
          title: "Data & Validation",
          description:
            "Structuring application data, validating model outputs and creating predictable boundaries between AI and software.",
        },
        {
          number: "05",
          title: "Product Engineering",
          description:
            "Turning technical capabilities into usable software products with clear architecture, interaction flows and maintainable code.",
        },
        {
          number: "06",
          title: "Operational Automation",
          description:
            "Engineering systems that automate operational workflows while preserving control, traceability and human oversight.",
        },
      ],
    },

    expertise: {
      eyebrow: "PROFESSIONAL EXPERTISE",
      title: "From AI capability to production software.",
      description:
        "My work sits between artificial intelligence, software engineering and operational systems — transforming technical capabilities into products that can operate reliably in real environments.",
      items: [
        {
          number: "01",
          title: "AI Engineering",
          description:
            "Design and implementation of AI-powered software systems that combine language models, application logic, structured outputs and production workflows.",
          capabilities: [
            "LLM applications",
            "Structured outputs",
            "AI-assisted workflows",
            "Model integration",
          ],
        },
        {
          number: "02",
          title: "Software Engineering",
          description:
            "Development of reliable software products with clear architecture, typed interfaces, APIs and maintainable application logic.",
          capabilities: ["TypeScript", "Next.js", "React", "FastAPI"],
        },
        {
          number: "03",
          title: "Operational Intelligence",
          description:
            "Turning operational requirements into controlled software workflows with traceability, validation and deterministic decision layers.",
          capabilities: [
            "Workflow automation",
            "Business rules",
            "Validation",
            "Auditability",
          ],
        },
      ],
    },

    work: {
      eyebrow: "PRACTICE",
      title: "Engineering shaped by operations.",
      description:
        "My work combines operational context with software and AI engineering, giving me a practical perspective on how systems need to work beyond the technical layer.",
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
          period: "OPERATIONAL CONTEXT",
          role: "Operations & Systems",
          context: "PROCESSES & OPERATIONS",
          description:
            "Working with operational processes, systems and structured workflows, translating real business requirements into clearer, more controlled and measurable ways of working.",
          focus: [
            "Operations",
            "Process analysis",
            "Workflow design",
            "Operational intelligence",
          ],
        },
      ],
    },

    projects: {
      eyebrow: "SELECTED PROJECTS",
      title: "Systems designed to solve real problems.",
      description:
        "A selection of engineering projects focused on AI, software systems, operational workflows and product development.",
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
      title: "AI, software and operations in the same system.",
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
        "Open to conversations around AI engineering, software systems, intelligent products and operational technology.",
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
        "Ich arbeite an der Schnittstelle von KI und Software Engineering und entwickle Systeme, die Modelle, Daten, APIs und reale operative Prozesse verbinden. Der Fokus liegt darauf, manuelle Aufgaben und fragmentierte Abläufe in schnellere, konsistentere und kontrollierbare Anwendungen zu überführen — mit TypeScript, React, Next.js, Node.js, Echtzeitsystemen und Edge-Infrastruktur sowie Automatisierung dort, wo sie sinnvoll ist, und menschlicher Aufsicht dort, wo Entscheidungen Kontext erfordern.",
      selectedWork: "Projekte ansehen",
    },

    stack: {
      eyebrow: "TECH STACK",
      title: "Systementwicklung rund um KI.",
      description:
        "Die Engineering-Kompetenzen, mit denen ich KI-Modelle, Software, Daten und operative Anforderungen in zuverlässige Anwendungen überführe.",
      capabilities: [
        {
          number: "01",
          title: "KI-Systeme",
          description:
            "Entwicklung KI-gestützter Anwendungen, die Modelle, strukturierte Daten, Softwarelogik und reale Produktabläufe verbinden.",
        },
        {
          number: "02",
          title: "LLM-Integration",
          description:
            "Integration großer Sprachmodelle mit APIs, Tools, Validierungsschichten und deterministischer Anwendungslogik.",
        },
        {
          number: "03",
          title: "Backend & APIs",
          description:
            "Entwicklung von Backends und APIs für eine zuverlässige Kommunikation zwischen KI, Produkten und externen Systemen.",
        },
        {
          number: "04",
          title: "Daten & Validierung",
          description:
            "Strukturierung von Anwendungsdaten, Validierung von Modellausgaben und klare Grenzen zwischen KI und Software.",
        },
        {
          number: "05",
          title: "Product Engineering",
          description:
            "Überführung technischer Fähigkeiten in nutzbare Softwareprodukte mit klarer Architektur und wartbarem Code.",
        },
        {
          number: "06",
          title: "Operative Automatisierung",
          description:
            "Entwicklung von Systemen zur Automatisierung operativer Workflows unter Wahrung von Kontrolle, Nachvollziehbarkeit und menschlicher Aufsicht.",
        },
      ],
    },

    expertise: {
      eyebrow: "PROFESSIONELLE EXPERTISE",
      title: "Von KI-Fähigkeiten zu produktiver Software.",
      description:
        "Meine Arbeit verbindet künstliche Intelligenz, Software Engineering und operative Systeme und überführt technische Fähigkeiten in zuverlässige Produkte für reale Umgebungen.",
      items: [
        {
          number: "01",
          title: "AI Engineering",
          description:
            "Konzeption und Implementierung KI-gestützter Softwaresysteme mit Sprachmodellen, Anwendungslogik, strukturierten Outputs und Produktionsworkflows.",
          capabilities: [
            "LLM-Anwendungen",
            "Strukturierte Outputs",
            "KI-gestützte Workflows",
            "Modellintegration",
          ],
        },
        {
          number: "02",
          title: "Software Engineering",
          description:
            "Entwicklung zuverlässiger Softwareprodukte mit klarer Architektur, typisierten Schnittstellen, APIs und wartbarer Anwendungslogik.",
          capabilities: ["TypeScript", "Next.js", "React", "FastAPI"],
        },
        {
          number: "03",
          title: "Operational Intelligence",
          description:
            "Überführung operativer Anforderungen in kontrollierte Software-Workflows mit Nachvollziehbarkeit, Validierung und deterministischen Entscheidungsschichten.",
          capabilities: [
            "Workflow-Automatisierung",
            "Geschäftsregeln",
            "Validierung",
            "Auditierbarkeit",
          ],
        },
      ],
    },

    work: {
      eyebrow: "ARBEITSFELDER",
      title: "Engineering geprägt durch Operations.",
      description:
        "Meine Arbeit verbindet operativen Kontext mit Software und AI Engineering und schafft eine praktische Perspektive darauf, wie Systeme jenseits der technischen Ebene funktionieren müssen.",
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
          period: "OPERATIVER KONTEXT",
          role: "Operations & Systeme",
          context: "PROZESSE & OPERATIONS",
          description:
            "Arbeit mit operativen Prozessen, Systemen und strukturierten Workflows, um reale Geschäftsanforderungen in klarere, kontrollierbare und messbare Abläufe zu überführen.",
          focus: [
            "Operations",
            "Prozessanalyse",
            "Workflow Design",
            "Operational Intelligence",
          ],
        },
      ],
    },

    projects: {
      eyebrow: "AUSGEWÄHLTE PROJEKTE",
      title: "Systeme zur Lösung realer Probleme.",
      description:
        "Eine Auswahl von Engineering-Projekten mit Fokus auf KI, Softwaresysteme, operative Workflows und Produktentwicklung.",
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
      title: "KI, Software und Operations in einem System.",
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
        "Offen für Gespräche über AI Engineering, Softwaresysteme, intelligente Produkte und operative Technologie.",
    },

    footer: {
      role: "AI Engineer",
      location: "Portugal",
    },
  },
};