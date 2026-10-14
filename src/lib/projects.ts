import type { Language } from "@/lib/translations";

export const projectSlugs = [
  "paypart",
  "liio",
  "opinsy",
] as const;

export type ProjectSlug =
  (typeof projectSlugs)[number];

export type ProjectPageLabels = {
  backToProjects: string;
  overview: string;
  problem: string;
  product: string;
  architecture: string;
  howItWorks: string;
  decisions: string;
  stack: string;
  results: string;
  role: string;
  type: string;
  status: string;
  github: string;
  liveProduct: string;
  comingSoon: string;
  previousProject: string;
  nextProject: string;
  allProjects: string;
};

export type ProjectContent = {
  number: string;

  card: {
    category: string;
    description: string;
    tags: string[];
  };

  eyebrow: string;
  title: string;
  subtitle: string;
  summary: string;

  overview: {
    role: string;
    type: string;
    status: string;
  };

  problem: {
    title: string;
    description: string;
  };

  product: {
    title: string;
    description: string;

    visuals: {
      number: string;
      label: string;
      title: string;
      description: string;
      image: string | null;
      alt: string;
    }[];
  };

  architecture: {
    title: string;
    description: string;
    flow: string[];
  };

  process: {
    title: string;
    description: string;

    steps: {
      number: string;
      title: string;
      description: string;
    }[];
  };

  decisions: {
    title: string;
    description: string;

    items: {
      number: string;
      title: string;
      description: string;
    }[];
  };

  stack: {
    title: string;
    description: string;
    items: string[];
  };

  results: {
    title: string;
    description: string;

    items: {
      value: string;
      label: string;
    }[];
  };

  links: {
    github: string | null;
    live: string | null;
  };
};

const labels: Record<
  Language,
  ProjectPageLabels
> = {
  pt: {
    backToProjects: "Voltar aos projetos",
    overview: "Visão geral",
    problem: "Problema",
    product: "Produto",
    architecture: "Arquitetura",
    howItWorks: "Como funciona",
    decisions: "Decisões de engenharia",
    stack: "Stack",
    results: "Resultados",
    role: "Engenharia",
    type: "Tipo",
    status: "Estado",
    github: "GitHub",
    liveProduct: "Ver demo",
    comingSoon: "Por adicionar",
    previousProject: "Projeto anterior",
    nextProject: "Próximo projeto",
    allProjects: "Todos os projetos",
  },

  es: {
    backToProjects: "Volver a proyectos",
    overview: "Visión general",
    problem: "Problema",
    product: "Producto",
    architecture: "Arquitectura",
    howItWorks: "Cómo funciona",
    decisions: "Decisiones de ingeniería",
    stack: "Stack",
    results: "Resultados",
    role: "Ingeniería",
    type: "Tipo",
    status: "Estado",
    github: "GitHub",
    liveProduct: "Ver demo",
    comingSoon: "Por añadir",
    previousProject: "Proyecto anterior",
    nextProject: "Siguiente proyecto",
    allProjects: "Todos los proyectos",
  },

  en: {
    backToProjects: "Back to projects",
    overview: "Overview",
    problem: "Problem",
    product: "Product",
    architecture: "Architecture",
    howItWorks: "How it works",
    decisions: "Engineering decisions",
    stack: "Stack",
    results: "Results",
    role: "Engineering",
    type: "Type",
    status: "Status",
    github: "GitHub",
    liveProduct: "View demo",
    comingSoon: "To be added",
    previousProject: "Previous project",
    nextProject: "Next project",
    allProjects: "All projects",
  },

  de: {
    backToProjects: "Zurück zu den Projekten",
    overview: "Überblick",
    problem: "Problem",
    product: "Produkt",
    architecture: "Architektur",
    howItWorks: "Funktionsweise",
    decisions: "Engineering-Entscheidungen",
    stack: "Stack",
    results: "Ergebnisse",
    role: "Engineering",
    type: "Typ",
    status: "Status",
    github: "GitHub",
    liveProduct: "Demo ansehen",
    comingSoon: "Wird ergänzt",
    previousProject: "Vorheriges Projekt",
    nextProject: "Nächstes Projekt",
    allProjects: "Alle Projekte",
  },
};

const payPart: Record<
  Language,
  Omit<ProjectContent, "number">
> = {
  pt: {
    card: {
      category: "",
      description:
        "Workspace que conecta pedidos, aprovações, transações, exceções e atividade operacional num fluxo rastreável e controlado.",
      tags: [
        "Payment Operations",
        "AI",
        "Full-stack",
      ],
    },

    eyebrow:
      "PAYMENT OPERATIONS / AI-ASSISTED WORKSPACE",

    title: "PayPart",

    subtitle:
      "Operações de pagamento coordenadas do pedido à resolução.",

    summary:
      "O PayPart centraliza pedidos de pagamento, aprovações, transações, exceções e atividade operacional num único workspace. Responsabilidade, estado, próxima ação e histórico permanecem ligados ao mesmo contexto operacional.",

    overview: {
      role:
        "Full-stack engineering / AI systems",
      type:
        "Payment Operations Workspace",
      status:
        "Demo de portfólio / dados simulados",
    },

    problem: {
      title:
        "O problema não é apenas o pagamento. É tudo o que acontece à volta dele.",

      description:
        "Operações de pagamento podem ficar fragmentadas entre pedidos, documentos, cadeias de aprovação, providers e sistemas internos. O PayPart concentra essa camada operacional para tornar visível o que foi solicitado, quem é responsável, o que precisa de aprovação, qual é o estado atual e o que exige atenção.",
    },

    product: {
      title:
        "Um workspace para coordenar o ciclo operacional.",

      description:
        "Requests, Approvals, Transactions, Exceptions e Activity partilham o mesmo contexto. Cada área tem uma responsabilidade específica sem quebrar a continuidade do fluxo operacional.",

      visuals: [
        {
          number: "01",
          label: "PAYPART / TRANSACTIONS",
          title: "PayPart",
          description:
            "Ledger operacional com transações, contraparte, valor, tipo, estado e provider disponíveis no mesmo contexto.",
          image: "/images/paypart-one.png",
          alt:
            "Ledger de transações do PayPart",
        },

        {
          number: "02",
          label: "PAYPART / EXCEPTIONS",
          title: "PayPart",
          description:
            "Workspace de exceções com ownership, motivo, estado, contexto operacional e próxima ação recomendada.",
          image: "/images/paypart-two.png",
          alt:
            "Workspace de exceções do PayPart",
        },

        {
          number: "03",
          label: "PAYPART / APPROVALS",
          title: "PayPart",
          description:
            "Fila de revisão e detalhe de autorização com valor, finalidade, risco, autoridade requerida e histórico da decisão.",
          image: "/images/paypart-tree.png",
          alt:
            "Workspace de aprovações do PayPart",
        },

        {
          number: "04",
          label: "PAYPART / PINY",
          title: "PayPart",
          description:
            "Assistente de Payment Operations em modo read-only para consultar o workspace, resumir aprovações, identificar exceções e apoiar a preparação de pedidos.",
          image: "/images/paypart-four.png",
          alt:
            "Piny, assistente de Payment Operations do PayPart",
        },
      ],
    },

    architecture: {
      title:
        "Estado operacional, validação e autoridade separados por design.",

      description:
        "A aplicação mantém interface, contratos de dados, validação, persistência e assistência por IA em responsabilidades distintas. Piny opera como uma camada read-only sobre o contexto do workspace, enquanto ações que alteram estado permanecem explícitas no produto.",

      flow: [
        "Next.js + React",
        "TypeScript",
        "Zod",
        "Supabase / PostgreSQL",
        "Groq / LLM",
      ],
    },

    process: {
      title:
        "Do pedido à resolução, com autoridade humana no centro.",

      description:
        "O lifecycle mantém cada etapa explícita e rastreável. O software coordena contexto e estado; decisões com impacto permanecem sob controlo do utilizador.",

      steps: [
        {
          number: "01",
          title: "Pedido",
          description:
            "Um pedido é criado com contraparte, valor, finalidade, vencimento e contexto de suporte.",
        },

        {
          number: "02",
          title: "Revisão",
          description:
            "O contexto é verificado antes de o pedido avançar para a autoridade adequada.",
        },

        {
          number: "03",
          title: "Aprovação",
          description:
            "Valor, finalidade, risco, autoridade necessária e histórico ficam disponíveis no mesmo registo.",
        },

        {
          number: "04",
          title: "Transação",
          description:
            "O workspace acompanha a representação operacional da transação e o seu estado.",
        },

        {
          number: "05",
          title: "Monitorização",
          description:
            "Estados, atividade e sinais que exigem atenção permanecem visíveis no workspace.",
        },

        {
          number: "06",
          title: "Resolução",
          description:
            "Exceções são encaminhadas para revisão, atribuição e resolução dentro do mesmo contexto.",
        },
      ],
    },

    decisions: {
      title:
        "A IA ajuda. O software mantém o controlo.",

      description:
        "O PayPart separa assistência operacional de ações com autoridade sobre o workflow.",

      items: [
        {
          number: "01",
          title:
            "Workflow como fonte de estado",
          description:
            "Requests, Approvals, Transactions e Exceptions mantêm estados explícitos. A interface não depende da IA para determinar o estado operacional.",
        },

        {
          number: "02",
          title:
            "Piny em modo read-only",
          description:
            "O assistente consulta contexto, resume informação e ajuda a preparar pedidos sem assumir controlo sobre aprovações, resolução ou execução.",
        },

        {
          number: "03",
          title:
            "Autoridade humana preservada",
          description:
            "Aprovação, rejeição, atribuição, revisão e resolução continuam sendo ações explícitas do utilizador.",
        },

        {
          number: "04",
          title:
            "Estado rastreável",
          description:
            "Decisões, ownership e alterações de estado permanecem visíveis no próprio workflow.",
        },
      ],
    },

    stack: {
      title:
        "Tecnologia ligada às responsabilidades do produto.",

      description:
        "A stack suporta interface, contratos tipados, validação, persistência e assistência por IA.",

      items: [
        "Next.js 16",
        "React 19",
        "TypeScript",
        "Groq + LLM",
        "Zod",
        "Supabase + PostgreSQL",
        "Tailwind CSS 4 + CSS custom",
      ],
    },

    results: {
      title:
        "O que o PayPart demonstra como produto de engenharia.",

      description:
        "O projeto conecta operação, software e IA sem esconder responsabilidade ou estado atrás da automação.",

      items: [
        {
          value: "01",
          label:
            "Ciclo conectado de Payment Operations",
        },
        {
          value: "02",
          label:
            "IA contextual dentro do workspace",
        },
        {
          value: "03",
          label:
            "Assistência separada de autoridade financeira",
        },
        {
          value: "04",
          label:
            "Inputs e outputs estruturados e validados",
        },
        {
          value: "05",
          label:
            "Decisões e mudanças de estado rastreáveis",
        },
      ],
    },

    links: {
      github: null,
      live: null,
    },
  },

  es: {
    card: {
      category: "",
      description:
        "Workspace que conecta solicitudes, aprobaciones, transacciones, excepciones y actividad operativa en un flujo trazable y controlado.",
      tags: [
        "Payment Operations",
        "AI",
        "Full-stack",
      ],
    },

    eyebrow:
      "PAYMENT OPERATIONS / AI-ASSISTED WORKSPACE",

    title: "PayPart",

    subtitle:
      "Operaciones de pago coordinadas desde la solicitud hasta la resolución.",

    summary:
      "PayPart centraliza solicitudes, aprobaciones, transacciones, excepciones y actividad operativa en un único workspace.",

    overview: {
      role:
        "Full-stack engineering / AI systems",
      type:
        "Payment Operations Workspace",
      status:
        "Demo de portfolio / datos simulados",
    },

    problem: {
      title:
        "El problema no es solo el pago. Es todo lo que ocurre a su alrededor.",

      description:
        "PayPart concentra la capa operativa alrededor de solicitudes, aprobaciones, transacciones, excepciones y responsabilidad.",
    },

    product: {
      title:
        "Un workspace para coordinar el ciclo operativo.",

      description:
        "Requests, Approvals, Transactions, Exceptions y Activity comparten el mismo contexto operativo.",

      visuals: [
        {
          number: "01",
          label: "PAYPART / TRANSACTIONS",
          title: "PayPart",
          description:
            "Ledger operativo con transacciones, contraparte, importe, tipo, estado y provider.",
          image: "/images/paypart-one.png",
          alt:
            "Ledger de transacciones de PayPart",
        },

        {
          number: "02",
          label: "PAYPART / EXCEPTIONS",
          title: "PayPart",
          description:
            "Workspace de excepciones con ownership, motivo, estado y siguiente acción.",
          image: "/images/paypart-two.png",
          alt:
            "Workspace de excepciones de PayPart",
        },

        {
          number: "03",
          label: "PAYPART / APPROVALS",
          title: "PayPart",
          description:
            "Cola de revisión y solicitud de autorización con importe, propósito, riesgo, autoridad requerida e historial.",
          image: "/images/paypart-tree.png",
          alt:
            "Workspace de aprobaciones de PayPart",
        },

        {
          number: "04",
          label: "PAYPART / PINY",
          title: "PayPart",
          description:
            "Asistente read-only de Payment Operations para consultar el workspace, resumir aprobaciones, identificar excepciones y preparar solicitudes.",
          image: "/images/paypart-four.png",
          alt:
            "Piny, asistente de Payment Operations de PayPart",
        },
      ],
    },

    architecture: {
      title:
        "Estado operativo, validación y autoridad separados por diseño.",

      description:
        "La aplicación mantiene interfaz, contratos de datos, validación, persistencia y asistencia por IA como responsabilidades diferenciadas. Piny funciona como una capa read-only sobre el contexto del workspace.",

      flow: [
        "Next.js + React",
        "TypeScript",
        "Zod",
        "Supabase / PostgreSQL",
        "Groq / LLM",
      ],
    },

    process: {
      title:
        "De la solicitud a la resolución, con autoridad humana en el centro.",

      description:
        "El lifecycle mantiene cada etapa explícita y trazable.",

      steps: [
        {
          number: "01",
          title: "Solicitud",
          description:
            "La solicitud contiene contraparte, importe, propósito, vencimiento y contexto.",
        },
        {
          number: "02",
          title: "Revisión",
          description:
            "El contexto se revisa antes de continuar.",
        },
        {
          number: "03",
          title: "Aprobación",
          description:
            "La autorización mantiene propósito, riesgo, autoridad requerida e historial.",
        },
        {
          number: "04",
          title: "Transacción",
          description:
            "El workspace sigue el estado operativo de la transacción.",
        },
        {
          number: "05",
          title: "Monitorización",
          description:
            "Estados y señales relevantes permanecen visibles.",
        },
        {
          number: "06",
          title: "Resolución",
          description:
            "Las excepciones pueden revisarse, asignarse y resolverse.",
        },
      ],
    },

    decisions: {
      title:
        "La IA ayuda. El software mantiene el control.",

      description:
        "PayPart separa asistencia operativa de acciones con autoridad sobre el workflow.",

      items: [
        {
          number: "01",
          title:
            "Workflow como fuente de estado",
          description:
            "Los estados operativos permanecen explícitos en el producto.",
        },
        {
          number: "02",
          title:
            "Piny en modo read-only",
          description:
            "El asistente consulta contexto y apoya al usuario sin controlar acciones operativas.",
        },
        {
          number: "03",
          title:
            "Autoridad humana preservada",
          description:
            "Aprobación, rechazo, asignación y resolución permanecen bajo control humano.",
        },
        {
          number: "04",
          title:
            "Estado trazable",
          description:
            "Decisiones y cambios de estado permanecen visibles.",
        },
      ],
    },

    stack: {
      title:
        "Tecnología ligada a las responsabilidades del producto.",

      description:
        "La stack soporta interfaz, tipado, validación, persistencia e IA.",

      items: [
        "Next.js 16",
        "React 19",
        "TypeScript",
        "Groq + LLM",
        "Zod",
        "Supabase + PostgreSQL",
        "Tailwind CSS 4 + CSS custom",
      ],
    },

    results: {
      title:
        "Lo que PayPart demuestra como producto de ingeniería.",

      description:
        "El proyecto conecta operación, software e IA manteniendo responsabilidad y estado visibles.",

      items: [
        {
          value: "01",
          label:
            "Ciclo conectado de Payment Operations",
        },
        {
          value: "02",
          label:
            "IA contextual dentro del workspace",
        },
        {
          value: "03",
          label:
            "Asistencia separada de autoridad financiera",
        },
        {
          value: "04",
          label:
            "Inputs y outputs estructurados y validados",
        },
        {
          value: "05",
          label:
            "Decisiones y cambios de estado trazables",
        },
      ],
    },

    links: {
      github: null,
      live: null,
    },
  },

  en: {
    card: {
      category: "",
      description:
        "A workspace connecting payment requests, approvals, transactions, exceptions and operational activity into one controlled, traceable flow.",
      tags: [
        "Payment Operations",
        "AI",
        "Full-stack",
      ],
    },

    eyebrow:
      "PAYMENT OPERATIONS / AI-ASSISTED WORKSPACE",

    title: "PayPart",

    subtitle:
      "Payment operations coordinated from request to resolution.",

    summary:
      "PayPart centralizes payment requests, approvals, transactions, exceptions and operational activity in a single workspace.",

    overview: {
      role:
        "Full-stack engineering / AI systems",
      type:
        "Payment Operations Workspace",
      status:
        "Portfolio demo / simulated data",
    },

    problem: {
      title:
        "The problem is not only the payment. It is everything around it.",

      description:
        "PayPart focuses on the operational layer around payment requests, authorization, transactions, exceptions and ownership.",
    },

    product: {
      title:
        "One workspace for the operational lifecycle.",

      description:
        "Requests, Approvals, Transactions, Exceptions and Activity share the same operational context.",

      visuals: [
        {
          number: "01",
          label: "PAYPART / TRANSACTIONS",
          title: "PayPart",
          description:
            "Operational ledger with transaction reference, counterparty, amount, type, status and provider.",
          image: "/images/paypart-one.png",
          alt:
            "PayPart transaction ledger",
        },

        {
          number: "02",
          label: "PAYPART / EXCEPTIONS",
          title: "PayPart",
          description:
            "Exception workspace combining ownership, failure context, state and recommended next action.",
          image: "/images/paypart-two.png",
          alt:
            "PayPart exception workspace",
        },

        {
          number: "03",
          label: "PAYPART / APPROVALS",
          title: "PayPart",
          description:
            "Review queue and authorization detail with amount, purpose, risk, required authority and approval history.",
          image: "/images/paypart-tree.png",
          alt:
            "PayPart approvals workspace",
        },

        {
          number: "04",
          label: "PAYPART / PINY",
          title: "PayPart",
          description:
            "Read-only Payment Operations assistant for querying workspace context, summarizing approvals, identifying open exceptions and preparing request drafts.",
          image: "/images/paypart-four.png",
          alt:
            "Piny, the PayPart Payment Operations assistant",
        },
      ],
    },

    architecture: {
      title:
        "Operational state, validation and authority separated by design.",

      description:
        "Interface, data contracts, validation, persistence and AI assistance remain distinct responsibilities. Piny operates as a read-only layer over workspace context while state-changing actions remain explicit in the product.",

      flow: [
        "Next.js + React",
        "TypeScript",
        "Zod",
        "Supabase / PostgreSQL",
        "Groq / LLM",
      ],
    },

    process: {
      title:
        "From request to resolution, with human authority at the center.",

      description:
        "The lifecycle keeps each operational stage explicit and traceable.",

      steps: [
        {
          number: "01",
          title: "Request",
          description:
            "The request contains counterparty, amount, purpose, due date and supporting context.",
        },
        {
          number: "02",
          title: "Review",
          description:
            "Context is reviewed before moving to authorization.",
        },
        {
          number: "03",
          title: "Approval",
          description:
            "Purpose, risk, required authority and decision history remain attached to the request.",
        },
        {
          number: "04",
          title: "Transaction",
          description:
            "The workspace tracks the operational representation and state of the transaction.",
        },
        {
          number: "05",
          title: "Monitoring",
          description:
            "Status and signals requiring attention remain visible.",
        },
        {
          number: "06",
          title: "Resolution",
          description:
            "Exceptions can be reviewed, assigned and resolved in context.",
        },
      ],
    },

    decisions: {
      title:
        "AI assists. Software keeps control.",

      description:
        "PayPart separates operational assistance from actions carrying workflow authority.",

      items: [
        {
          number: "01",
          title:
            "Workflow as the state source",
          description:
            "Operational states remain explicit in Requests, Approvals, Transactions and Exceptions.",
        },
        {
          number: "02",
          title:
            "Piny is read-only",
          description:
            "The assistant can inspect context, summarize information and help prepare requests without controlling workflow actions.",
        },
        {
          number: "03",
          title:
            "Human authority preserved",
          description:
            "Approval, rejection, assignment, review and resolution remain explicit user actions.",
        },
        {
          number: "04",
          title:
            "Traceable state",
          description:
            "Ownership, decisions and state changes remain visible in the workflow.",
        },
      ],
    },

    stack: {
      title:
        "Technology tied to product responsibilities.",

      description:
        "The stack supports interface, typed contracts, validation, persistence and AI assistance.",

      items: [
        "Next.js 16",
        "React 19",
        "TypeScript",
        "Groq + LLM",
        "Zod",
        "Supabase + PostgreSQL",
        "Tailwind CSS 4 + custom CSS",
      ],
    },

    results: {
      title:
        "What PayPart demonstrates as an engineering product.",

      description:
        "The project connects operations, software and AI while keeping ownership and state explicit.",

      items: [
        {
          value: "01",
          label:
            "Connected Payment Operations lifecycle",
        },
        {
          value: "02",
          label:
            "Context-aware AI inside the workspace",
        },
        {
          value: "03",
          label:
            "Assistance separated from financial authority",
        },
        {
          value: "04",
          label:
            "Structured and validated inputs and outputs",
        },
        {
          value: "05",
          label:
            "Traceable decisions and state changes",
        },
      ],
    },

    links: {
      github: null,
      live: null,
    },
  },

  de: {
    card: {
      category: "",
      description:
        "Ein Workspace für Zahlungsanfragen, Freigaben, Transaktionen, Ausnahmen und operative Aktivitäten.",
      tags: [
        "Payment Operations",
        "AI",
        "Full-stack",
      ],
    },

    eyebrow:
      "PAYMENT OPERATIONS / AI-ASSISTED WORKSPACE",

    title: "PayPart",

    subtitle:
      "Zahlungsoperationen vom Antrag bis zur Lösung koordiniert.",

    summary:
      "PayPart verbindet Requests, Approvals, Transactions, Exceptions und Activity in einem operativen Workspace.",

    overview: {
      role:
        "Full-stack engineering / AI systems",
      type:
        "Payment Operations Workspace",
      status:
        "Portfolio-Demo / simulierte Daten",
    },

    problem: {
      title:
        "Das Problem ist nicht nur die Zahlung. Es ist alles, was darum herum passiert.",

      description:
        "PayPart bündelt die operative Ebene rund um Zahlungsanfragen, Freigaben, Transaktionen und Ausnahmen.",
    },

    product: {
      title:
        "Ein Workspace für den operativen Zyklus.",

      description:
        "Requests, Approvals, Transactions, Exceptions und Activity teilen denselben Kontext.",

      visuals: [
        {
          number: "01",
          label: "PAYPART / TRANSACTIONS",
          title: "PayPart",
          description:
            "Operatives Ledger mit Gegenpartei, Betrag, Typ, Status und Provider.",
          image: "/images/paypart-one.png",
          alt:
            "PayPart Transaktions-Ledger",
        },

        {
          number: "02",
          label: "PAYPART / EXCEPTIONS",
          title: "PayPart",
          description:
            "Exception Workspace mit Ownership, Fehlerkontext, Status und nächster Aktion.",
          image: "/images/paypart-two.png",
          alt:
            "PayPart Exception Workspace",
        },

        {
          number: "03",
          label: "PAYPART / APPROVALS",
          title: "PayPart",
          description:
            "Review Queue und Autorisierungsdetail mit Betrag, Zweck, Risiko, benötigter Freigabe und Verlauf.",
          image: "/images/paypart-tree.png",
          alt:
            "PayPart Approvals Workspace",
        },

        {
          number: "04",
          label: "PAYPART / PINY",
          title: "PayPart",
          description:
            "Read-only Payment Operations Assistant für Workspace-Kontext, Approval-Zusammenfassungen, offene Exceptions und Request-Vorbereitung.",
          image: "/images/paypart-four.png",
          alt:
            "Piny, der Payment Operations Assistant von PayPart",
        },
      ],
    },

    architecture: {
      title:
        "Operativer Status, Validierung und Autorität bewusst getrennt.",

      description:
        "Interface, Datenverträge, Validierung, Persistenz und KI-Unterstützung bleiben getrennte Verantwortlichkeiten. Piny arbeitet read-only auf dem Workspace-Kontext.",

      flow: [
        "Next.js + React",
        "TypeScript",
        "Zod",
        "Supabase / PostgreSQL",
        "Groq / LLM",
      ],
    },

    process: {
      title:
        "Vom Antrag bis zur Lösung, mit menschlicher Autorität im Zentrum.",

      description:
        "Jede operative Phase bleibt explizit und nachvollziehbar.",

      steps: [
        {
          number: "01",
          title: "Anfrage",
          description:
            "Die Anfrage enthält Gegenpartei, Betrag, Zweck, Fälligkeit und Kontext.",
        },
        {
          number: "02",
          title: "Prüfung",
          description:
            "Der Kontext wird vor der Autorisierung geprüft.",
        },
        {
          number: "03",
          title: "Freigabe",
          description:
            "Zweck, Risiko, benötigte Autorität und Entscheidungshistorie bleiben verbunden.",
        },
        {
          number: "04",
          title: "Transaktion",
          description:
            "Der operative Transaktionsstatus wird im Workspace verfolgt.",
        },
        {
          number: "05",
          title: "Monitoring",
          description:
            "Status und relevante Signale bleiben sichtbar.",
        },
        {
          number: "06",
          title: "Lösung",
          description:
            "Exceptions können geprüft, zugewiesen und gelöst werden.",
        },
      ],
    },

    decisions: {
      title:
        "KI unterstützt. Die Software behält die Kontrolle.",

      description:
        "PayPart trennt operative Assistenz von Aktionen mit Workflow-Autorität.",

      items: [
        {
          number: "01",
          title:
            "Workflow als Statusquelle",
          description:
            "Operative Zustände bleiben explizit im Produkt.",
        },
        {
          number: "02",
          title:
            "Piny arbeitet read-only",
          description:
            "Der Assistent analysiert Kontext und unterstützt den Nutzer, ohne Workflow-Aktionen zu kontrollieren.",
        },
        {
          number: "03",
          title:
            "Menschliche Autorität bleibt erhalten",
          description:
            "Freigabe, Ablehnung, Zuweisung und Lösung bleiben Nutzeraktionen.",
        },
        {
          number: "04",
          title:
            "Nachvollziehbarer Status",
          description:
            "Ownership, Entscheidungen und Statusänderungen bleiben sichtbar.",
        },
      ],
    },

    stack: {
      title:
        "Technologie entlang der Produktverantwortung.",

      description:
        "Der Stack unterstützt Interface, Typisierung, Validierung, Persistenz und KI.",

      items: [
        "Next.js 16",
        "React 19",
        "TypeScript",
        "Groq + LLM",
        "Zod",
        "Supabase + PostgreSQL",
        "Tailwind CSS 4 + Custom CSS",
      ],
    },

    results: {
      title:
        "Was PayPart als Engineering-Produkt demonstriert.",

      description:
        "Das Projekt verbindet Operations, Software und KI mit sichtbarer Verantwortung und nachvollziehbarem Status.",

      items: [
        {
          value: "01",
          label:
            "Zusammenhängender Payment-Operations-Zyklus",
        },
        {
          value: "02",
          label:
            "Kontextbezogene KI im Workspace",
        },
        {
          value: "03",
          label:
            "Assistenz getrennt von finanzieller Autorität",
        },
        {
          value: "04",
          label:
            "Strukturierte und validierte Inputs und Outputs",
        },
        {
          value: "05",
          label:
            "Nachvollziehbare Entscheidungen und Statusänderungen",
        },
      ],
    },

    links: {
      github: null,
      live: null,
    },
  },
};

const liio: Record<
  Language,
  Omit<ProjectContent, "number">
> = {
  pt: {
    card: {
      category: "",
      description:
        "Uma experiência de aprendizagem com IA que orienta crianças e jovens a pensar, em vez de entregar respostas prontas.",
      tags: [
        "AI Learning Tutor",
        "AI Engineering",
        "EdTech",
      ],
    },

    eyebrow:
      "EDTECH / AI LEARNING SYSTEM",

    title: "LIIO",

    subtitle:
      "Menos respostas prontas. Mais raciocínio, pistas e descoberta — sobretudo em matemática, física e química.",

    summary:
      "LIIO começou a tomar forma quando eu trabalhava com UI design e explorava experiências no Framer. A ideia evoluiu ao longo do tempo para um projeto de aprendizagem com IA: ajudar crianças e jovens a avançar quando encontram dificuldades, sobretudo em matemática, física e química, sem entregar imediatamente a solução. Em vez de responder como um LLM generalista, LIIO procura orientar o raciocínio com pistas, explicações e perguntas, ajudando a chegar à resposta por conta própria. O projeto já estava em desenvolvimento antes de eu conhecer abordagens semelhantes em produtos como o Grok; vê-las surgir foi uma surpresa positiva, não a origem do LIIO. O produto continua em construção, e esta forma de ajudar ainda está a ser testada e aperfeiçoada.",

    overview: {
      role:
        "AI Engineering / Full-stack",
      type:
        "EdTech / AI Learning System",
      status:
        "Implementação funcional / em desenvolvimento",
    },

    problem: {
      title:
        "Um chatbot responde. Um tutor precisa decidir como ensinar.",

      description:
        "Uma resposta imediata pode resolver o exercício, mas não garante compreensão. O LIIO procura perceber onde a criança ou o jovem está com dificuldade e orientar o passo seguinte com pistas, explicações e perguntas, mantendo o contexto do problema. O foco inicial está em matemática, física e química, onde compreender o raciocínio é tão importante quanto chegar ao resultado.",
    },

    product: {
      title:
        "Homework Mode concentra a experiência funcional atual.",

      description:
        "A experiência funcional atual concentra-se no Homework Mode. A ajuda adapta-se à dificuldade apresentada: pode explicar um conceito, dar pistas para orientar o raciocínio ou rever uma tentativa, sem revelar a solução de imediato. Esta abordagem continua em desenvolvimento.",

      visuals: [
        {
          number: "01",
          label:
            "LIIO / IDENTITY",

          title: "LIIO",

          description:
            "Identidade visual do tutor — uma presença simples e reconhecível para uma experiência de aprendizagem dirigida a crianças e adolescentes.",

          image:
            "/images/0001.png",

          alt:
            "Personagem visual do LIIO",
        },

        {
          number: "02",
          label:
            "LIIO / PARENTS AREA",

          title: "Parents Area",

          description:
            "Exploração de produto para a área parental: perfis, atividade, ligação de dispositivos e controlo de tempo e limites. Esta superfície representa a direção de produto e permanece separada do núcleo funcional de aprendizagem.",

          image:
            "/images/0002.png",

          alt:
            "Conjunto de ecrãs da área parental do LIIO",
        },
      ],
    },

    architecture: {
      title:
        "A política pedagógica fica fora do modelo.",

      description:
        "A API valida o pedido, restaura o contexto recente e classifica a interação antes da geração. Respostas com maior risco pedagógico passam por um avaliador independente. Se forem rejeitadas, existe uma única tentativa de correção; persistindo o problema, o sistema encerra o caminho generativo com um fallback determinístico. Chaves, prompts, avaliação e regras permanecem server-side.",

      flow: [
        "Contexto da sessão",
        "Classificação pedagógica",
        "Geração server-side",
        "Avaliação independente",
        "Correção limitada ou fallback",
      ],
    },

    process: {
      title:
        "O contexto da sessão altera o comportamento do sistema.",

      description:
        "Mensagens como “não entendi”, “mais fácil” ou uma nova tentativa do aluno não são tratadas como perguntas isoladas. O LIIO recupera a intenção anterior e adapta a próxima resposta ao estado da aprendizagem.",

      steps: [],
    },

    decisions: {
      title:
        "Decisões de engenharia que tornam o tutor controlável.",

      description:
        "O ponto forte do LIIO não é apenas gerar texto adequado à idade. É tornar comportamento, segurança e continuidade verificáveis no software.",

      items: [
        {
          number: "01",
          title:
            "Geração separada de aceitação",
          description:
            "O modelo produz uma resposta candidata; outra etapa decide se ela pode ser entregue ao aluno.",
        },

        {
          number: "02",
          title:
            "Política testável em código",
          description:
            "Idade, limites de request, número de perguntas e adaptação após confusão possuem regras que podem ser verificadas fora do prompt.",
        },

        {
          number: "03",
          title:
            "Recuperação limitada",
          description:
            "Uma resposta reprovada pode ser corrigida uma vez. Depois disso, o sistema prefere um fallback seguro a continuar regenerando.",
        },

        {
          number: "04",
          title:
            "Produto preparado para evoluir",
          description:
            "A camada de decisão foi separada da interface e do modelo para permitir que novas capacidades, políticas e formas de aprendizagem sejam incorporadas sem transformar o produto num conjunto de prompts acoplados.",
        },
      ],
    },

    stack: {
      title:
        "Stack orientada a produto full-stack e controle server-side.",

      description:
        "A implementação combina aplicação web, contratos tipados, geração por LLM e validação estruturada para manter o comportamento observável e testável.",

      items: [
        "Next.js 16.3.5",
        "React 19.2.8",
        "TypeScript 5",
        "Groq SDK 1.6",
        "Zod 4.6",
        "Motion 13.2",
      ],
    },

    results: {
      title:
        "O que a implementação atual demonstra.",

      description:
        "Um tutor com estado de sessão, classificação pedagógica, avaliação independente e limites de recuperação definidos por software.",

      items: [],
    },

    links: {
      github:
        "https://github.com/escobardanilo/liio",
      live:
        "https://liio.vercel.app/",
    },
  },

  en: {
    card: {
      category: "",
      description:
        "An AI learning experience that guides children and young people through reasoning instead of handing them ready-made answers.",
      tags: [
        "AI Learning Tutor",
        "AI Engineering",
        "EdTech",
      ],
    },

    eyebrow:
      "EDTECH / AI LEARNING SYSTEM",

    title: "LIIO",

    subtitle:
      "Fewer ready-made answers. More reasoning, hints and discovery — especially in mathematics, physics and chemistry.",

    summary:
      "LIIO began to take shape while I was working in UI design and exploring experiences in Framer. Over time, that idea evolved into an AI learning project: helping children and young people move forward when they struggle, especially with mathematics, physics and chemistry, without immediately giving away the solution. Rather than responding like a general-purpose LLM, LIIO aims to guide reasoning through hints, explanations and questions that help them reach an answer themselves. The project was already in development before I encountered similar approaches in products such as Grok; seeing them emerge was a positive surprise, not the origin of LIIO. The product is still being built, and this approach continues to be tested and refined.",

    overview: {
      role:
        "AI Engineering / Full-stack",
      type:
        "EdTech / AI Learning System",
      status:
        "Functional implementation / in development",
    },

    problem: {
      title:
        "A chatbot answers. A tutor has to decide how to teach.",

      description:
        "An immediate answer can solve an exercise without ensuring understanding. LIIO aims to identify where a child or young person is struggling and guide the next step with hints, explanations and questions, while keeping the original problem in context. Its initial focus is mathematics, physics and chemistry, where understanding the reasoning matters as much as reaching the result.",
    },

    product: {
      title:
        "Homework Mode is the current functional core.",

      description:
        "The current functional experience centers on Homework Mode. Help adapts to the difficulty at hand: it can explain a concept, offer hints to guide reasoning or review an attempt without immediately revealing the solution. This approach is still in development.",

      visuals: [
        {
          number: "01",
          label:
            "LIIO / IDENTITY",

          title: "LIIO",

          description:
            "The tutor's visual identity — a simple, recognizable presence for a learning experience designed for children and teenagers.",

          image:
            "/images/0001.png",

          alt:
            "LIIO visual character",
        },

        {
          number: "02",
          label:
            "LIIO / PARENTS AREA",

          title: "Parents Area",

          description:
            "Product exploration for the parent area: profiles, activity, device linking, and time and limit controls. This surface represents product direction and remains separate from the functional learning core.",

          image:
            "/images/0002.png",

          alt:
            "LIIO parent area interface screens",
        },
      ],
    },

    architecture: {
      title:
        "Pedagogical policy lives outside the model.",

      description:
        "The API validates the request, restores recent context and classifies the interaction before generation. Higher-risk pedagogical responses pass through an independent evaluator. If rejected, one correction attempt is allowed; if the issue persists, the system ends the generative path with a deterministic fallback. Keys, prompts, evaluation and rules remain server-side.",

      flow: [
        "Session context",
        "Pedagogical classification",
        "Server-side generation",
        "Independent evaluation",
        "Bounded correction or fallback",
      ],
    },

    process: {
      title:
        "Session context changes system behavior.",

      description:
        "Messages such as “I don't understand”, “make it easier” or a new learner attempt are not treated as isolated questions. LIIO restores the previous learning intent and adapts the next response to the current state of the session.",

      steps: [],
    },

    decisions: {
      title:
        "Engineering decisions that make the tutor controllable.",

      description:
        "LIIO's strongest technical point is not simply generating age-appropriate text. It is making behavior, safety and continuity verifiable in software.",

      items: [
        {
          number: "01",
          title:
            "Generation separated from acceptance",
          description:
            "The model produces a candidate response; another stage decides whether it may be delivered to the learner.",
        },

        {
          number: "02",
          title:
            "Testable policy in code",
          description:
            "Age, request limits, question count and adaptation after confusion have rules that can be verified outside the prompt.",
        },

        {
          number: "03",
          title:
            "Bounded recovery",
          description:
            "A rejected response may be corrected once. After that, the system prefers a safe fallback over continued regeneration.",
        },

        {
          number: "04",
          title:
            "Designed to evolve",
          description:
            "The decision layer is separated from the interface and model so new capabilities, policies and learning patterns can be added without turning the product into a set of tightly coupled prompts.",
        },
      ],
    },

    stack: {
      title:
        "A stack focused on full-stack product engineering and server-side control.",

      description:
        "The implementation combines a web application, typed contracts, LLM generation and structured validation to keep behavior observable and testable.",

      items: [
        "Next.js 16.3.5",
        "React 19.2.8",
        "TypeScript 5",
        "Groq SDK 1.6",
        "Zod 4.6",
        "Motion 13.2",
      ],
    },

    results: {
      title:
        "What the current implementation demonstrates.",

      description:
        "A tutor with session state, pedagogical classification, independent evaluation and recovery limits defined by software.",

      items: [],
    },

    links: {
      github:
        "https://github.com/escobardanilo/liio",
      live:
        "https://liio.vercel.app/",
    },
  },

  es: {
    card: {
      category: "",
      description:
        "Una experiencia de aprendizaje con IA que guía a niños y jóvenes en el razonamiento, en lugar de darles respuestas hechas.",
      tags: [
        "AI Learning Tutor",
        "AI Engineering",
        "EdTech",
      ],
    },

    eyebrow:
      "EDTECH / AI LEARNING SYSTEM",

    title: "LIIO",

    subtitle:
      "Menos respuestas hechas. Más razonamiento, pistas y descubrimiento — especialmente en matemáticas, física y química.",

    summary:
      "LIIO empezó a tomar forma cuando trabajaba en UI design y exploraba experiencias en Framer. Con el tiempo, la idea evolucionó hasta convertirse en un proyecto de aprendizaje con IA: ayudar a niños y jóvenes a avanzar cuando encuentran dificultades, especialmente en matemáticas, física y química, sin darles inmediatamente la solución. En lugar de responder como un LLM generalista, LIIO busca orientar el razonamiento con pistas, explicaciones y preguntas. El proyecto ya estaba en desarrollo antes de conocer enfoques similares en productos como Grok; verlos aparecer fue una sorpresa positiva, no el origen de LIIO. El producto sigue en construcción y esta forma de ayudar continúa probándose y perfeccionándose.",

    overview: {
      role:
        "AI Engineering / Full-stack",
      type:
        "EdTech / AI Learning System",
      status:
        "Implementación funcional / en desarrollo",
    },

    problem: {
      title:
        "Un chatbot responde. Un tutor debe decidir cómo enseñar.",

      description:
        "Una respuesta inmediata puede resolver un ejercicio sin garantizar la comprensión. LIIO busca identificar dónde tiene dificultades el niño o joven y orientar el siguiente paso con pistas, explicaciones y preguntas, manteniendo el contexto del problema. El foco inicial está en matemáticas, física y química, donde comprender el razonamiento importa tanto como llegar al resultado.",
    },

    product: {
      title:
        "Homework Mode es el núcleo funcional actual.",

      description:
        "La experiencia funcional actual se centra en Homework Mode. La ayuda se adapta a la dificultad: puede explicar un concepto, ofrecer pistas para orientar el razonamiento o revisar un intento sin revelar la solución de inmediato. Este enfoque sigue en desarrollo.",

      visuals: [
        {
          number: "01",
          label:
            "LIIO / IDENTITY",
          title: "LIIO",
          description:
            "Identidad visual del tutor: una presencia simple y reconocible para una experiencia de aprendizaje dirigida a niños y adolescentes.",
          image:
            "/images/0001.png",
          alt:
            "Personaje visual de LIIO",
        },
        {
          number: "02",
          label:
            "LIIO / PARENTS AREA",
          title: "Parents Area",
          description:
            "Exploración de producto para el área parental: perfiles, actividad, vinculación de dispositivos y controles de tiempo y límites. Esta superficie representa la dirección de producto y permanece separada del núcleo funcional de aprendizaje.",
          image:
            "/images/0002.png",
          alt:
            "Pantallas del área parental de LIIO",
        },
      ],
    },

    architecture: {
      title:
        "La política pedagógica vive fuera del modelo.",

      description:
        "La API valida la solicitud, restaura contexto y clasifica la interacción antes de generar. Las respuestas con mayor riesgo pasan por evaluación independiente, una corrección limitada y fallback determinista cuando es necesario.",
      flow: [
        "Contexto de sesión",
        "Clasificación pedagógica",
        "Generación server-side",
        "Evaluación independiente",
        "Corrección o fallback",
      ],
    },

    process: {
      title:
        "El contexto de sesión modifica el comportamiento.",
      description:
        "Las solicitudes de ayuda y nuevos intentos del alumno modifican la sesión activa en lugar de iniciar conversaciones desconectadas.",
      steps: [],
    },

    decisions: {
      title:
        "Decisiones de ingeniería para un tutor controlable.",
      description:
        "El valor técnico no está solo en generar texto, sino en hacer comportamiento, seguridad y continuidad verificables por software.",
      items: [
        {
          number: "01",
          title:
            "Generación separada de aceptación",
          description:
            "Una etapa genera; otra decide si la respuesta puede llegar al alumno.",
        },
        {
          number: "02",
          title:
            "Política verificable en código",
          description:
            "Edad, límites y adaptación pueden comprobarse fuera del prompt.",
        },
        {
          number: "03",
          title:
            "Recuperación limitada",
          description:
            "Una corrección antes de utilizar fallback seguro.",
        },
        {
          number: "04",
          title:
            "Diseñado para evolucionar",
          description:
            "La capa de decisión está separada para incorporar nuevas capacidades y formas de aprendizaje sin acoplar el producto a un conjunto fijo de prompts.",
        },
      ],
    },

    stack: {
      title:
        "Producto full-stack con control server-side.",
      description:
        "Aplicación web, contratos tipados, generación por LLM y validación estructurada.",
      items: [
        "Next.js 16.3.5",
        "React 19.2.8",
        "TypeScript 5",
        "Groq SDK 1.6",
        "Zod 4.6",
        "Motion 13.2",
      ],
    },

    results: {
      title:
        "Qué demuestra la implementación actual.",
      description:
        "Un tutor con contexto de sesión, clasificación pedagógica, evaluación independiente y límites de recuperación definidos por software.",
      items: [],
    },

    links: {
      github:
        "https://github.com/escobardanilo/liio",
      live:
        "https://liio.vercel.app/",
    },
  },

  de: {
    card: {
      category: "",
      description:
        "Ein KI-Lernerlebnis, das Kinder und Jugendliche beim Denken begleitet, statt fertige Antworten zu liefern.",
      tags: [
        "AI Learning Tutor",
        "AI Engineering",
        "EdTech",
      ],
    },

    eyebrow:
      "EDTECH / AI LEARNING SYSTEM",

    title: "LIIO",

    subtitle:
      "Weniger fertige Antworten. Mehr Denken, Hinweise und Entdecken — besonders in Mathematik, Physik und Chemie.",

    summary:
      "LIIO nahm Gestalt an, als ich im UI Design arbeitete und Erfahrungen in Framer erkundete. Mit der Zeit entwickelte sich daraus ein KI-Lernprojekt: Kindern und Jugendlichen zu helfen, Schwierigkeiten zu überwinden — besonders in Mathematik, Physik und Chemie — ohne sofort die Lösung zu verraten. Anders als ein allgemeines LLM soll LIIO mit Hinweisen, Erklärungen und Fragen zum eigenen Lösungsweg führen. Das Projekt war bereits in Entwicklung, bevor ich auf ähnliche Ansätze in Produkten wie Grok stieß; sie zu sehen, war eine positive Überraschung und nicht der Ursprung von LIIO. Das Produkt wird weiterhin entwickelt und dieser Ansatz laufend getestet und verbessert.",

    overview: {
      role:
        "AI Engineering / Full-stack",
      type:
        "EdTech / AI Learning System",
      status:
        "Funktionale Implementierung / in Entwicklung",
    },

    problem: {
      title:
        "Ein Chatbot antwortet. Ein Tutor muss entscheiden, wie er lehrt.",

      description:
        "Eine sofortige Antwort kann eine Aufgabe lösen, ohne Verständnis zu garantieren. LIIO versucht zu erkennen, wo ein Kind oder Jugendlicher Schwierigkeiten hat, und mit Hinweisen, Erklärungen und Fragen zum nächsten Schritt zu führen. Der anfängliche Schwerpunkt liegt auf Mathematik, Physik und Chemie, wo der Lösungsweg genauso wichtig ist wie das Ergebnis.",
    },

    product: {
      title:
        "Homework Mode ist der aktuelle funktionale Kern.",

      description:
        "Die aktuelle funktionale Erfahrung konzentriert sich auf Homework Mode. Die Hilfe passt sich der Schwierigkeit an: Sie kann einen Begriff erklären, Hinweise zum Denken geben oder einen Lösungsversuch prüfen, ohne sofort die Antwort zu verraten. Dieser Ansatz wird weiterentwickelt.",

      visuals: [
        {
          number: "01",
          label:
            "LIIO / IDENTITY",
          title: "LIIO",
          description:
            "Die visuelle Identität des Tutors — eine einfache, wiedererkennbare Präsenz für eine Lernerfahrung für Kinder und Jugendliche.",
          image:
            "/images/0001.png",
          alt:
            "LIIO visuelle Figur",
        },
        {
          number: "02",
          label:
            "LIIO / PARENTS AREA",
          title: "Parents Area",
          description:
            "Produktkonzept für den Elternbereich: Profile, Aktivität, Geräteverknüpfung sowie Zeit- und Limitsteuerung. Diese Oberfläche zeigt die Produktrichtung und bleibt vom funktionalen Lernkern getrennt.",
          image:
            "/images/0002.png",
          alt:
            "LIIO Elternbereich Oberflächen",
        },
      ],
    },

    architecture: {
      title:
        "Die pädagogische Policy liegt außerhalb des Modells.",

      description:
        "Die API validiert die Anfrage, stellt Kontext wieder her und klassifiziert die Interaktion vor der Generierung. Pädagogisch riskantere Antworten durchlaufen unabhängige Bewertung, begrenzte Korrektur und bei Bedarf einen deterministischen Fallback.",
      flow: [
        "Sitzungskontext",
        "Pädagogische Klassifizierung",
        "Serverseitige Generierung",
        "Unabhängige Bewertung",
        "Korrektur oder Fallback",
      ],
    },

    process: {
      title:
        "Sitzungskontext verändert das Systemverhalten.",
      description:
        "Hilfefragen und neue Lernversuche verändern die aktive Sitzung, statt getrennte Unterhaltungen zu starten.",
      steps: [],
    },

    decisions: {
      title:
        "Engineering-Entscheidungen für einen kontrollierbaren Tutor.",
      description:
        "Der technische Wert liegt nicht nur in der Textgenerierung, sondern darin, Verhalten, Sicherheit und Kontinuität durch Software prüfbar zu machen.",
      items: [
        {
          number: "01",
          title:
            "Generierung getrennt von Akzeptanz",
          description:
            "Eine Stufe generiert; eine andere entscheidet, ob die Antwort ausgeliefert werden darf.",
        },
        {
          number: "02",
          title:
            "Prüfbare Policy im Code",
          description:
            "Alter, Limits und Anpassung können außerhalb des Prompts überprüft werden.",
        },
        {
          number: "03",
          title:
            "Begrenzte Recovery",
          description:
            "Eine Korrektur vor einem sicheren Fallback.",
        },
        {
          number: "04",
          title:
            "Für Weiterentwicklung konzipiert",
          description:
            "Die Entscheidungsschicht ist getrennt, damit neue Fähigkeiten und Lernformen integriert werden können, ohne das Produkt an feste Prompts zu koppeln.",
        },
      ],
    },

    stack: {
      title:
        "Full-stack Produkt mit serverseitiger Kontrolle.",
      description:
        "Webanwendung, typisierte Verträge, LLM-Generierung und strukturierte Validierung.",
      items: [
        "Next.js 16.3.5",
        "React 19.2.8",
        "TypeScript 5",
        "Groq SDK 1.6",
        "Zod 4.6",
        "Motion 13.2",
      ],
    },

    results: {
      title:
        "Was die aktuelle Implementierung demonstriert.",
      description:
        "Ein Tutor mit Sitzungskontext, pädagogischer Klassifizierung, unabhängiger Bewertung und softwaredefinierten Recovery-Grenzen.",
      items: [],
    },

    links: {
      github:
        "https://github.com/escobardanilo/liio",
      live:
        "https://liio.vercel.app/",
    },
  },
};

const opinsy: Record<
  Language,
  Omit<ProjectContent, "number">
> = {
  pt: {
    card: {
      category: "",
      description:
        "Plataforma de inteligência competitiva para marketing digital: transforma conteúdos e métricas em padrões, oportunidades e evidências para orientar decisões de marca.",
      tags: [
        "Competitive Intelligence",
        "MarTech",
        "AI / Data",
      ],
    },

    eyebrow:
      "MARTECH / COMPETITIVE INTELLIGENCE",

    title: "OPINSY",

    subtitle:
      "Entender o que move o conteúdo — e o que isso significa para a marca.",

    summary:
      "A OPINSY é uma plataforma de inteligência competitiva para marketing digital. Organiza conteúdos públicos de concorrentes e dados da própria marca, relaciona temas, intenções e palavras-chave com sinais de desempenho e transforma recorrências em evidências consultáveis. Em vez de ficar por rankings de visualizações, procura explicar padrões e o que podem significar para a estratégia. O agente Liio permite explorar essa base por perguntas, consultar evidências e receber próximos passos com um nível de confiança explícito. O MVP está em desenvolvimento: análise assistida por IA, importação CSV, deteção de padrões, comparação competitiva e o agente já têm implementação no código; as integrações diretas oficiais com redes sociais e outros sistemas continuam planeadas.",

    overview: {
      role:
        "Desenvolvimento de produto / IA e dados",
      type:
        "Competitive Intelligence / MarTech",
      status:
        "MVP em desenvolvimento",
    },

    problem: {
      title:
        "Os dashboards mostram números. A estratégia precisa de explicar os padrões.",

      description:
        "Visualizações, likes e engagement isolados não explicam por que certos temas, intenções ou formatos se repetem, nem se o resultado é consistente. Sem relacionar dados da própria marca com evidência competitiva e histórico, é fácil confundir uma publicação fora da curva com uma oportunidade replicável. A OPINSY procura ligar desempenho, contexto e evidência para apoiar uma leitura mais rigorosa.",
    },

    product: {
      title:
        "Uma base de conhecimento competitiva, consultável por evidências.",

      description:
        "A OPINSY estrutura conteúdos e métricas por perfil e plataforma. A camada de análise organiza informação disponível em campos tipados — tema, intenção, audiência, proposta de valor, CTA e sinais visuais ou de áudio quando existe evidência adequada — e calcula indicadores quando os dados permitem. Os padrões recorrentes são comparados com os da própria marca; o agente Liio permite perguntar sobre essas relações, consultar evidências e explorar próximos passos. As conclusões orientam a investigação, sem tratar correlação como causalidade comprovada.",

      visuals: [
        {
          number: "01",
          label:
            "OPINSY / INTELLIGENCE WORKSPACE",
          title: "OPINSY",
          description:
            "A plataforma organiza conteúdos, métricas e sinais competitivos num contexto comum para análise de marketing.",
          image: "/images/opin-1.png",
          alt:
            "Interface da plataforma de inteligência competitiva OPINSY",
        },
        {
          number: "02",
          label:
            "OPINSY / CONTENT ANALYSIS",
          title: "Content Intelligence",
          description:
            "Análise estruturada de cada publicação, preservando os dados disponíveis e distinguindo evidência de informação em falta.",
          image: "/images/opin-2.png",
          alt:
            "Interface de análise de conteúdos da OPINSY",
        },
        {
          number: "03",
          label:
            "OPINSY / COMPETITOR INTELLIGENCE",
          title: "Competitive Intelligence",
          description:
            "Comparação entre padrões observados nos concorrentes e os conteúdos da própria marca, para identificar semelhanças e lacunas.",
          image: "/images/opin-3.png",
          alt:
            "Interface de comparação de inteligência competitiva da OPINSY",
        },
        {
          number: "04",
          label:
            "OPINSY / LIIO EVIDENCE ASSISTANT",
          title: "Liio",
          description:
            "O agente consulta padrões e evidências da base para responder a perguntas estratégicas e sugerir o próximo passo.",
          image: "/images/opin-4.png",
          alt:
            "Interface do agente Liio na plataforma OPINSY",
        },
      ],
    },

    architecture: {
      title:
        "Uma pipeline que separa dados, análise e interpretação.",

      description:
        "A aplicação Next.js com TypeScript utiliza Supabase para autenticação e PostgreSQL para persistir organizações, perfis, conteúdos, métricas, análises, padrões, evidências e conversas do agente, com Drizzle ORM como camada de acesso a dados. A análise atual usa o SDK da Groq e o modelo openai/gpt-oss-20b, com saída estruturada validada por Zod. Os indicadores derivados e os agrupamentos de padrões são calculados em código, enquanto Liio consulta inteligência e evidências através de ferramentas controladas. A estrutura prevê dados visuais e de áudio, mas o sistema não deve afirmar o que não esteja sustentado pela evidência disponível.",

      flow: [
        "Perfis públicos e importação CSV",
        "Normalização de conteúdos e métricas",
        "PostgreSQL / Supabase + Drizzle ORM",
        "Análise estruturada: Groq + Zod",
        "Indicadores e padrões calculados em código",
        "Comparação: concorrentes vs. marca",
        "Liio: perguntas, evidências e próximos passos",
      ],
    },

    process: {
      title:
        "Do conteúdo bruto à decisão informada.",

      description:
        "O fluxo preserva a origem dos dados e separa observação, indicador, padrão e recomendação. A recolha direta por OAuth e outras integrações são etapas planeadas, não capacidades que o MVP deva apresentar como concluídas.",

      steps: [
        {
          number: "01",
          title:
            "Recolher e importar",
          description:
            "Perfis públicos podem ser registados e conteúdos e métricas podem entrar por CSV. A ligação direta oficial a Instagram e TikTok está planeada.",
        },
        {
          number: "02",
          title:
            "Estruturar o contexto",
          description:
            "Cada registo associa plataforma, perfil, formato, legenda, data, permalink e métricas disponíveis, preservando o histórico relevante.",
        },
        {
          number: "03",
          title:
            "Analisar com evidência",
          description:
            "O modelo produz uma análise estruturada. A instrução e o esquema exigem que informação ausente seja assinalada como indisponível, em vez de inventada.",
        },
        {
          number: "04",
          title:
            "Calcular desempenho",
          description:
            "O software calcula indicadores como engagement, reach, saves e shares quando existem dados suficientes e identifica as métricas em falta.",
        },
        {
          number: "05",
          title:
            "Detetar e comparar padrões",
          description:
            "Temas, intenções e palavras-chave recorrentes são agrupados e relacionados com métricas disponíveis, permitindo comparar sinais da marca e dos concorrentes.",
        },
        {
          number: "06",
          title:
            "Consultar com Liio",
          description:
            "O agente responde com base em padrões e evidências registados, indicando confiança e uma possível próxima ação, sem substituir a avaliação estratégica.",
        },
      ],
    },

    decisions: {
      title:
        "Inteligência útil exige evidência, contexto e limites claros.",

      description:
        "O objetivo não é produzir mais um resumo automático, mas criar uma base comparável e rastreável que ajude a interpretar o comportamento competitivo.",

      items: [
        {
          number: "01",
          title:
            "Evidência antes da interpretação",
          description:
            "A análise deve usar apenas os dados fornecidos e explicitar quando falta informação textual, visual, áudio ou de desempenho.",
        },
        {
          number: "02",
          title:
            "Métricas calculadas pelo software",
          description:
            "Indicadores derivados são calculados por funções determinísticas, em vez de depender da estimativa livre do modelo.",
        },
        {
          number: "03",
          title:
            "Recorrência não significa causalidade",
          description:
            "Os padrões representam sinais observados numa amostra; não provam, por si só, que um tema ou formato causou o desempenho.",
        },
        {
          number: "04",
          title:
            "Comparação com a própria marca",
          description:
            "A leitura competitiva relaciona padrões dos concorrentes com padrões internos para revelar semelhanças, diferenças e lacunas.",
        },
        {
          number: "05",
          title:
            "Integrações com estado explícito",
          description:
            "O catálogo distingue fontes disponíveis, como perfis públicos e CSV, de integrações OAuth com redes sociais, CRM, calendário e websites ainda planeadas.",
        },
      ],
    },

    stack: {
      title:
        "Uma stack web com análise assistida por IA e dados estruturados.",

      description:
        "O MVP combina uma aplicação web, persistência relacional, validação de contratos e um núcleo de análise que separa a interpretação do modelo dos cálculos e das regras de negócio.",

      items: [
        "Next.js 16.3.6",
        "React 19.2.8",
        "TypeScript 5",
        "PostgreSQL + Supabase",
        "Drizzle ORM",
        "Groq SDK · openai/gpt-oss-20b",
        "Zod 4",
        "csv-parse",
        "Supabase SSR Auth",
        "Tailwind CSS 4",
      ],
    },

    results: {
      title:
        "O que a implementação atual já demonstra.",

      description:
        "O projeto continua em desenvolvimento. Estes pontos descrevem componentes presentes no código, não resultados comerciais nem métricas de produção.",

      items: [
        {
          value: "CSV",
          label:
            "Importação validada de conteúdos e métricas históricas",
        },
        {
          value: "GROQ + ZOD",
          label:
            "Análise assistida por IA com saída estruturada e validada",
        },
        {
          value: "PATTERNS",
          label:
            "Agrupamento de temas, intenções e palavras-chave recorrentes",
        },
        {
          value: "COMPARAÇÃO",
          label:
            "Estrutura para comparar padrões da marca com padrões de concorrentes",
        },
        {
          value: "LIIO",
          label:
            "Agente com respostas associadas a evidências, confiança e próxima ação",
        },
      ],
    },

    links: {
      github: null,
      live: null,
    },
  },

  en: {
    card: {
      category: "",
      description:
        "Competitive intelligence for digital marketing: turning content and metrics into patterns, opportunities and evidence for brand decisions.",
      tags: [
        "Competitive Intelligence",
        "MarTech",
        "AI / Data",
      ],
    },

    eyebrow:
      "MARTECH / COMPETITIVE INTELLIGENCE",

    title: "OPINSY",

    subtitle:
      "Understand what moves content — and what it means for the brand.",

    summary:
      "OPINSY is a competitive-intelligence platform for digital marketing. It organizes public competitor content alongside a brand's own data, relates topics, intent and keywords to performance signals, and turns recurring observations into searchable evidence. Rather than stopping at view rankings, it aims to explain patterns and what they may mean for strategy. The Liio agent lets users query this knowledge base, inspect evidence and receive next steps with an explicit confidence level. The MVP is in development: AI-assisted analysis, CSV import, pattern detection, competitive comparison and the agent are represented in the code; direct official social integrations and connections to other systems remain planned.",

    overview: {
      role:
        "Product development / AI and data",
      type:
        "Competitive Intelligence / MarTech",
      status:
        "MVP in development",
    },

    problem: {
      title:
        "Dashboards show numbers. Strategy needs to explain the patterns.",

      description:
        "Views, likes and engagement in isolation do not explain why certain topics, intents or formats recur, or whether a result is consistent. Without connecting a brand's own data with competitive evidence and historical context, an outlier can easily be mistaken for a repeatable opportunity. OPINSY aims to connect performance, context and evidence for more rigorous interpretation.",
    },

    product: {
      title:
        "A competitive knowledge base that can be queried through evidence.",

      description:
        "OPINSY structures content and metrics by profile and platform. Its analysis layer organizes available information into typed fields — topic, intent, audience, value proposition, CTA, and visual or audio signals when suitable evidence exists — and calculates indicators when the data supports them. Recurring patterns can be compared with a brand's own patterns; Liio lets users ask questions, inspect evidence and explore next steps. Findings guide investigation without treating correlation as proven causality.",

      visuals: [
        {
          number: "01",
          label:
            "OPINSY / INTELLIGENCE WORKSPACE",
          title: "OPINSY",
          description:
            "The platform brings content, metrics and competitive signals into a shared marketing-intelligence context.",
          image: "/images/opin-1.png",
          alt:
            "OPINSY competitive intelligence platform interface",
        },
        {
          number: "02",
          label:
            "OPINSY / CONTENT ANALYSIS",
          title: "Content Intelligence",
          description:
            "Structured content analysis that preserves available data and distinguishes evidence from missing information.",
          image: "/images/opin-2.png",
          alt:
            "OPINSY content analysis interface",
        },
        {
          number: "03",
          label:
            "OPINSY / COMPETITOR INTELLIGENCE",
          title: "Competitive Intelligence",
          description:
            "Comparing observed competitor patterns with a brand's own content to identify similarities and gaps.",
          image: "/images/opin-3.png",
          alt:
            "OPINSY competitive intelligence comparison interface",
        },
        {
          number: "04",
          label:
            "OPINSY / LIIO EVIDENCE ASSISTANT",
          title: "Liio",
          description:
            "The Liio agent explores patterns and evidence through natural-language strategic questions.",
          image: "/images/opin-4.png",
          alt:
            "Liio agent interface within OPINSY",
        },
      ],
    },

    architecture: {
      title:
        "A pipeline that separates data, analysis and interpretation.",

      description:
        "The Next.js and TypeScript application uses Supabase for authentication and PostgreSQL to persist organizations, profiles, content, metrics, analyses, patterns, evidence and agent conversations, with Drizzle ORM as the data-access layer. Current analysis uses the Groq SDK and the openai/gpt-oss-20b model, with structured output validated by Zod. Derived indicators and pattern grouping are calculated in code, while Liio queries intelligence and evidence through controlled tools. The data model includes visual and audio fields, but the system should only claim what the available evidence supports.",

      flow: [
        "Public profiles and CSV import",
        "Content and metric normalization",
        "PostgreSQL / Supabase + Drizzle ORM",
        "Structured analysis: Groq + Zod",
        "Indicators and patterns calculated in code",
        "Comparison: competitors vs. brand",
        "Liio: questions, evidence and next steps",
      ],
    },

    process: {
      title:
        "From raw content to informed decisions.",

      description:
        "The workflow preserves data provenance and separates observations, indicators, patterns and recommendations. Direct OAuth collection and other integrations remain planned work, not completed MVP capabilities.",

      steps: [
        {
          number: "01",
          title:
            "Collect and import",
          description:
            "Public profiles can be registered and content and metrics can be imported through CSV. Direct official connections to Instagram and TikTok are planned.",
        },
        {
          number: "02",
          title:
            "Structure the context",
          description:
            "Each record connects platform, profile, format, caption, publication date, permalink and available metrics, preserving relevant history.",
        },
        {
          number: "03",
          title:
            "Analyze with evidence",
          description:
            "The model returns structured analysis. The prompt and schema require missing information to be marked unavailable rather than invented.",
        },
        {
          number: "04",
          title:
            "Calculate performance",
          description:
            "The software calculates engagement, reach, save and share indicators when enough data exists, and identifies missing metrics.",
        },
        {
          number: "05",
          title:
            "Detect and compare patterns",
          description:
            "Recurring topics, intents and keywords are grouped and related to available metrics, enabling comparisons between brand and competitor signals.",
        },
        {
          number: "06",
          title:
            "Query with Liio",
          description:
            "The agent answers from recorded patterns and evidence, provides a confidence level and suggests a possible next action without replacing strategic judgment.",
        },
      ],
    },

    decisions: {
      title:
        "Useful intelligence requires evidence, context and clear boundaries.",

      description:
        "The goal is not another automated summary, but a comparable and traceable knowledge base that helps interpret competitive behavior.",

      items: [
        {
          number: "01",
          title:
            "Evidence before interpretation",
          description:
            "Analysis should use only supplied data and state when text, visual, audio or performance evidence is missing.",
        },
        {
          number: "02",
          title:
            "Metrics calculated by software",
          description:
            "Derived indicators are calculated deterministically instead of relying on free-form model estimates.",
        },
        {
          number: "03",
          title:
            "Recurrence is not causality",
          description:
            "Patterns are signals observed in a sample; they do not prove that a topic or format caused performance.",
        },
        {
          number: "04",
          title:
            "Compare against the brand",
          description:
            "Competitive analysis relates competitor patterns to internal patterns to reveal similarities, differences and gaps.",
        },
        {
          number: "05",
          title:
            "Integrations have explicit status",
          description:
            "The catalog distinguishes available sources, such as public profiles and CSV, from planned OAuth integrations with social networks, CRM, calendar and websites.",
        },
      ],
    },

    stack: {
      title:
        "A web stack with AI-assisted analysis and structured data.",

      description:
        "The MVP combines a web application, relational persistence, contract validation and an analysis core that separates model interpretation from calculations and business rules.",

      items: [
        "Next.js 16.3.6",
        "React 19.2.8",
        "TypeScript 5",
        "PostgreSQL + Supabase",
        "Drizzle ORM",
        "Groq SDK · openai/gpt-oss-20b",
        "Zod 4",
        "csv-parse",
        "Supabase SSR Auth",
        "Tailwind CSS 4",
      ],
    },

    results: {
      title:
        "What the current implementation demonstrates.",

      description:
        "The project is still in development. These points describe components present in the code, not commercial outcomes or production metrics.",

      items: [
        {
          value: "CSV",
          label:
            "Validated import of historical content and metrics",
        },
        {
          value: "GROQ + ZOD",
          label:
            "AI-assisted analysis with structured, validated output",
        },
        {
          value: "PATTERNS",
          label:
            "Grouping recurring topics, intents and keywords",
        },
        {
          value: "COMPARISON",
          label:
            "Structure for comparing brand patterns with competitor patterns",
        },
        {
          value: "LIIO",
          label:
            "Agent responses connected to evidence, confidence and next action",
        },
      ],
    },

    links: {
      github: null,
      live: null,
    },
  },

  es: {
    card: {
      category: "",
      description:
        "Inteligencia competitiva para marketing digital: convierte contenidos y métricas en patrones, oportunidades y evidencias para orientar decisiones de marca.",
      tags: [
        "Competitive Intelligence",
        "MarTech",
        "AI / Data",
      ],
    },

    eyebrow:
      "MARTECH / COMPETITIVE INTELLIGENCE",

    title: "OPINSY",

    subtitle:
      "Entender qué mueve el contenido y qué significa para la marca.",

    summary:
      "OPINSY es una plataforma de inteligencia competitiva para marketing digital. Organiza contenidos públicos de competidores junto con datos de la propia marca, relaciona temas, intención y palabras clave con señales de rendimiento y convierte observaciones recurrentes en evidencias consultables. En lugar de limitarse a clasificar visualizaciones, busca explicar patrones y su posible significado estratégico. El agente Liio permite consultar esta base, revisar evidencias y recibir próximos pasos con un nivel de confianza explícito. El MVP sigue en desarrollo: el código ya incluye análisis asistido por IA, importación CSV, detección de patrones, comparación competitiva y el agente; las integraciones sociales oficiales directas y las conexiones con otros sistemas siguen planificadas.",

    overview: {
      role:
        "Desarrollo de producto / IA y datos",
      type:
        "Competitive Intelligence / MarTech",
      status:
        "MVP en desarrollo",
    },

    problem: {
      title:
        "Los dashboards muestran cifras. La estrategia necesita explicar los patrones.",

      description:
        "Las visualizaciones, los likes y el engagement por sí solos no explican por qué se repiten ciertos temas, intenciones o formatos, ni si el resultado es consistente. Sin conectar los datos de la marca con evidencias competitivas e histórico, es fácil confundir una publicación atípica con una oportunidad repetible. OPINSY busca conectar rendimiento, contexto y evidencia para una interpretación más rigurosa.",
    },

    product: {
      title:
        "Una base de conocimiento competitiva que se consulta mediante evidencias.",

      description:
        "OPINSY estructura contenidos y métricas por perfil y plataforma. Su capa de análisis organiza la información disponible en campos tipados —tema, intención, audiencia, propuesta de valor, CTA y señales visuales o de audio cuando existe evidencia adecuada— y calcula indicadores cuando los datos lo permiten. Los patrones recurrentes se pueden comparar con los de la propia marca; Liio permite hacer preguntas, consultar evidencias y explorar próximos pasos. Los hallazgos orientan la investigación sin tratar la correlación como causalidad demostrada.",

      visuals: [
        {
          number: "01",
          label:
            "OPINSY / INTELLIGENCE WORKSPACE",
          title: "OPINSY",
          description:
            "La plataforma reúne contenidos, métricas y señales competitivas en un contexto común de inteligencia de marketing.",
          image: "/images/opin-1.png",
          alt:
            "Interfaz de la plataforma de inteligencia competitiva OPINSY",
        },
        {
          number: "02",
          label:
            "OPINSY / CONTENT ANALYSIS",
          title: "Content Intelligence",
          description:
            "Análisis estructurado de contenidos que conserva los datos disponibles y distingue evidencia de información ausente.",
          image: "/images/opin-2.png",
          alt:
            "Interfaz de análisis de contenidos de OPINSY",
        },
        {
          number: "03",
          label:
            "OPINSY / COMPETITOR INTELLIGENCE",
          title: "Competitive Intelligence",
          description:
            "Comparación entre patrones observados en competidores y el contenido de la propia marca para identificar similitudes y brechas.",
          image: "/images/opin-3.png",
          alt:
            "Interfaz de comparación de inteligencia competitiva de OPINSY",
        },
        {
          number: "04",
          label:
            "OPINSY / LIIO EVIDENCE ASSISTANT",
          title: "Liio",
          description:
            "El agente Liio explora patrones y evidencias mediante preguntas estratégicas en lenguaje natural.",
          image: "/images/opin-4.png",
          alt:
            "Interfaz del agente Liio en OPINSY",
        },
      ],
    },

    architecture: {
      title:
        "Una pipeline que separa datos, análisis e interpretación.",

      description:
        "La aplicación Next.js con TypeScript utiliza Supabase para autenticación y PostgreSQL para almacenar organizaciones, perfiles, contenidos, métricas, análisis, patrones, evidencias y conversaciones del agente, con Drizzle ORM como capa de acceso a datos. El análisis actual usa el SDK de Groq y el modelo openai/gpt-oss-20b, con salida estructurada validada por Zod. Los indicadores derivados y la agrupación de patrones se calculan en código, mientras Liio consulta inteligencia y evidencias mediante herramientas controladas. El modelo de datos incluye campos visuales y de audio, pero el sistema solo debe afirmar lo que respalda la evidencia disponible.",

      flow: [
        "Perfiles públicos e importación CSV",
        "Normalización de contenidos y métricas",
        "PostgreSQL / Supabase + Drizzle ORM",
        "Análisis estructurado: Groq + Zod",
        "Indicadores y patrones calculados en código",
        "Comparación: competidores vs. marca",
        "Liio: preguntas, evidencias y próximos pasos",
      ],
    },

    process: {
      title:
        "Del contenido bruto a decisiones informadas.",

      description:
        "El flujo conserva la procedencia de los datos y separa observación, indicador, patrón y recomendación. La recopilación directa por OAuth y otras integraciones siguen siendo trabajo planificado, no capacidades terminadas del MVP.",

      steps: [
        {
          number: "01",
          title:
            "Recopilar e importar",
          description:
            "Se pueden registrar perfiles públicos e importar contenidos y métricas mediante CSV. Las conexiones oficiales directas con Instagram y TikTok están planificadas.",
        },
        {
          number: "02",
          title:
            "Estructurar el contexto",
          description:
            "Cada registro conecta plataforma, perfil, formato, descripción, fecha, permalink y métricas disponibles, conservando el historial relevante.",
        },
        {
          number: "03",
          title:
            "Analizar con evidencias",
          description:
            "El modelo devuelve un análisis estructurado. Las instrucciones y el esquema exigen marcar la información ausente como no disponible, en lugar de inventarla.",
        },
        {
          number: "04",
          title:
            "Calcular el rendimiento",
          description:
            "El software calcula indicadores de engagement, alcance, guardados y compartidos cuando hay datos suficientes e identifica métricas ausentes.",
        },
        {
          number: "05",
          title:
            "Detectar y comparar patrones",
          description:
            "Los temas, intenciones y palabras clave recurrentes se agrupan y relacionan con las métricas disponibles para comparar señales de la marca y de los competidores.",
        },
        {
          number: "06",
          title:
            "Consultar con Liio",
          description:
            "El agente responde a partir de patrones y evidencias registradas, indica un nivel de confianza y sugiere un posible siguiente paso sin sustituir el criterio estratégico.",
        },
      ],
    },

    decisions: {
      title:
        "La inteligencia útil necesita evidencia, contexto y límites claros.",

      description:
        "El objetivo no es producir otro resumen automático, sino crear una base de conocimiento comparable y trazable para interpretar el comportamiento competitivo.",

      items: [
        {
          number: "01",
          title:
            "Evidencia antes de interpretación",
          description:
            "El análisis debe usar solo los datos suministrados e indicar cuándo falta evidencia textual, visual, de audio o de rendimiento.",
        },
        {
          number: "02",
          title:
            "Métricas calculadas por software",
          description:
            "Los indicadores derivados se calculan de forma determinista, sin depender de estimaciones libres del modelo.",
        },
        {
          number: "03",
          title:
            "Recurrencia no significa causalidad",
          description:
            "Los patrones son señales observadas en una muestra; por sí solos no prueban que un tema o formato haya causado el rendimiento.",
        },
        {
          number: "04",
          title:
            "Comparación con la propia marca",
          description:
            "El análisis relaciona patrones de competidores con patrones internos para revelar similitudes, diferencias y brechas.",
        },
        {
          number: "05",
          title:
            "Estado explícito de las integraciones",
          description:
            "El catálogo distingue fuentes disponibles, como perfiles públicos y CSV, de las integraciones OAuth planificadas para redes sociales, CRM, calendario y sitios web.",
        },
      ],
    },

    stack: {
      title:
        "Una stack web con análisis asistido por IA y datos estructurados.",

      description:
        "El MVP combina una aplicación web, persistencia relacional, validación de contratos y un núcleo analítico que separa la interpretación del modelo de los cálculos y las reglas de negocio.",

      items: [
        "Next.js 16.3.6",
        "React 19.2.8",
        "TypeScript 5",
        "PostgreSQL + Supabase",
        "Drizzle ORM",
        "Groq SDK · openai/gpt-oss-20b",
        "Zod 4",
        "csv-parse",
        "Supabase SSR Auth",
        "Tailwind CSS 4",
      ],
    },

    results: {
      title:
        "Lo que demuestra la implementación actual.",

      description:
        "El proyecto sigue en desarrollo. Estos puntos describen componentes presentes en el código, no resultados comerciales ni métricas de producción.",

      items: [
        {
          value: "CSV",
          label:
            "Importación validada de contenidos y métricas históricas",
        },
        {
          value: "GROQ + ZOD",
          label:
            "Análisis asistido por IA con salida estructurada y validada",
        },
        {
          value: "PATTERNS",
          label:
            "Agrupación de temas, intenciones y palabras clave recurrentes",
        },
        {
          value: "COMPARACIÓN",
          label:
            "Estructura para comparar patrones de marca y competidores",
        },
        {
          value: "LIIO",
          label:
            "Respuestas del agente vinculadas a evidencias, confianza y siguiente acción",
        },
      ],
    },

    links: {
      github: null,
      live: null,
    },
  },

  de: {
    card: {
      category: "",
      description:
        "Wettbewerbsintelligenz für digitales Marketing: Inhalte und Kennzahlen werden zu Mustern, Chancen und nachvollziehbaren Entscheidungsgrundlagen.",
      tags: [
        "Competitive Intelligence",
        "MarTech",
        "AI / Data",
      ],
    },

    eyebrow:
      "MARTECH / COMPETITIVE INTELLIGENCE",

    title: "OPINSY",

    subtitle:
      "Verstehen, was Inhalte bewegt — und was das für die Marke bedeutet.",

    summary:
      "OPINSY ist eine Plattform für Wettbewerbsintelligenz im digitalen Marketing. Sie strukturiert öffentliche Wettbewerberinhalte und Daten der eigenen Marke, verknüpft Themen, Absichten und Keywords mit Leistungssignalen und macht wiederkehrende Beobachtungen als Evidenz abfragbar. Statt nur Aufrufzahlen zu sortieren, soll sie Muster und deren mögliche strategische Bedeutung erklären. Der Liio-Agent ermöglicht Fragen an diese Wissensbasis, den Zugriff auf Evidenz und nächste Schritte mit expliziter Konfidenz. Das MVP befindet sich in Entwicklung: KI-gestützte Analyse, CSV-Import, Mustererkennung, Wettbewerbsvergleich und der Agent sind im Code angelegt; direkte offizielle Social-Media-Integrationen und Verbindungen zu weiteren Systemen sind weiterhin geplant.",

    overview: {
      role:
        "Produktentwicklung / KI und Daten",
      type:
        "Competitive Intelligence / MarTech",
      status:
        "MVP in Entwicklung",
    },

    problem: {
      title:
        "Dashboards zeigen Zahlen. Strategie muss Muster erklären.",

      description:
        "Aufrufe, Likes und Engagement allein erklären nicht, warum bestimmte Themen, Absichten oder Formate wiederkehren oder ob ein Ergebnis stabil ist. Ohne die Daten der eigenen Marke mit Wettbewerbsbelegen und historischem Kontext zu verbinden, wird ein Ausreißer leicht mit einer wiederholbaren Chance verwechselt. OPINSY soll Leistung, Kontext und Evidenz für eine fundiertere Interpretation verbinden.",
    },

    product: {
      title:
        "Eine Wettbewerbs-Wissensbasis, die über Evidenz abgefragt werden kann.",

      description:
        "OPINSY strukturiert Inhalte und Kennzahlen nach Profil und Plattform. Die Analyseschicht ordnet verfügbare Informationen in typisierte Felder ein — Thema, Absicht, Zielgruppe, Wertversprechen, CTA sowie visuelle oder Audio-Signale, wenn geeignete Evidenz vorliegt — und berechnet Kennzahlen, sofern die Daten dies erlauben. Wiederkehrende Muster können mit den Mustern der eigenen Marke verglichen werden; Liio beantwortet Fragen, erschließt Evidenz und zeigt mögliche nächste Schritte. Erkenntnisse unterstützen die Untersuchung, ohne Korrelation als bewiesene Kausalität auszugeben.",

      visuals: [
        {
          number: "01",
          label:
            "OPINSY / INTELLIGENCE WORKSPACE",
          title: "OPINSY",
          description:
            "Die Plattform führt Inhalte, Kennzahlen und Wettbewerbssignale in einem gemeinsamen Marketing-Intelligence-Kontext zusammen.",
          image: "/images/opin-1.png",
          alt:
            "Oberfläche der Wettbewerbsintelligenz-Plattform OPINSY",
        },
        {
          number: "02",
          label:
            "OPINSY / CONTENT ANALYSIS",
          title: "Content Intelligence",
          description:
            "Strukturierte Inhaltsanalyse, die verfügbare Daten bewahrt und Evidenz von fehlenden Informationen unterscheidet.",
          image: "/images/opin-2.png",
          alt:
            "Oberfläche der Inhaltsanalyse von OPINSY",
        },
        {
          number: "03",
          label:
            "OPINSY / COMPETITOR INTELLIGENCE",
          title: "Competitive Intelligence",
          description:
            "Vergleich beobachteter Wettbewerbermuster mit eigenen Inhalten, um Gemeinsamkeiten und Lücken zu erkennen.",
          image: "/images/opin-3.png",
          alt:
            "Oberfläche des Wettbewerbsvergleichs in OPINSY",
        },
        {
          number: "04",
          label:
            "OPINSY / LIIO EVIDENCE ASSISTANT",
          title: "Liio",
          description:
            "Der Liio-Agent untersucht Muster und Evidenz anhand strategischer Fragen in natürlicher Sprache.",
          image: "/images/opin-4.png",
          alt:
            "Oberfläche des Liio-Agenten in OPINSY",
        },
      ],
    },

    architecture: {
      title:
        "Eine Pipeline, die Daten, Analyse und Interpretation trennt.",

      description:
        "Die Next.js- und TypeScript-Anwendung nutzt Supabase für Authentifizierung und PostgreSQL zur Speicherung von Organisationen, Profilen, Inhalten, Kennzahlen, Analysen, Mustern, Evidenz und Agentengesprächen; Drizzle ORM bildet die Datenzugriffsschicht. Die aktuelle Analyse verwendet das Groq SDK und das Modell openai/gpt-oss-20b mit strukturierter, durch Zod validierter Ausgabe. Abgeleitete Kennzahlen und Mustergruppen werden im Code berechnet, während Liio über kontrollierte Tools auf Intelligence und Evidenz zugreift. Das Datenmodell enthält Felder für visuelle und Audio-Daten, doch das System darf nur Aussagen treffen, die durch verfügbare Evidenz gestützt sind.",

      flow: [
        "Öffentliche Profile und CSV-Import",
        "Normalisierung von Inhalten und Kennzahlen",
        "PostgreSQL / Supabase + Drizzle ORM",
        "Strukturierte Analyse: Groq + Zod",
        "Kennzahlen und Muster im Code berechnet",
        "Vergleich: Wettbewerber vs. Marke",
        "Liio: Fragen, Evidenz und nächste Schritte",
      ],
    },

    process: {
      title:
        "Von Rohinhalten zu fundierten Entscheidungen.",

      description:
        "Der Ablauf bewahrt die Datenherkunft und trennt Beobachtung, Kennzahl, Muster und Empfehlung. Direkte OAuth-Erfassung und weitere Integrationen sind geplante Arbeit und keine abgeschlossenen MVP-Funktionen.",

      steps: [
        {
          number: "01",
          title:
            "Erfassen und importieren",
          description:
            "Öffentliche Profile können registriert sowie Inhalte und Kennzahlen per CSV importiert werden. Direkte offizielle Verbindungen zu Instagram und TikTok sind geplant.",
        },
        {
          number: "02",
          title:
            "Kontext strukturieren",
          description:
            "Jeder Datensatz verknüpft Plattform, Profil, Format, Caption, Veröffentlichungsdatum, Permalink und verfügbare Kennzahlen.",
        },
        {
          number: "03",
          title:
            "Evidenzbasiert analysieren",
          description:
            "Das Modell liefert eine strukturierte Analyse. Prompt und Schema verlangen, fehlende Informationen als nicht verfügbar zu markieren, statt sie zu erfinden.",
        },
        {
          number: "04",
          title:
            "Leistung berechnen",
          description:
            "Die Software berechnet Engagement-, Reach-, Save- und Share-Indikatoren, sofern genügend Daten vorhanden sind, und weist fehlende Kennzahlen aus.",
        },
        {
          number: "05",
          title:
            "Muster erkennen und vergleichen",
          description:
            "Wiederkehrende Themen, Absichten und Keywords werden gruppiert und mit verfügbaren Kennzahlen verknüpft, um Marken- und Wettbewerbssignale zu vergleichen.",
        },
        {
          number: "06",
          title:
            "Mit Liio abfragen",
          description:
            "Der Agent antwortet anhand gespeicherter Muster und Evidenz, nennt eine Konfidenzstufe und schlägt einen möglichen nächsten Schritt vor, ohne strategisches Urteil zu ersetzen.",
        },
      ],
    },

    decisions: {
      title:
        "Nützliche Intelligence braucht Evidenz, Kontext und klare Grenzen.",

      description:
        "Das Ziel ist nicht eine weitere automatische Zusammenfassung, sondern eine vergleichbare und nachvollziehbare Wissensbasis zur Interpretation von Wettbewerbsverhalten.",

      items: [
        {
          number: "01",
          title:
            "Evidenz vor Interpretation",
          description:
            "Die Analyse verwendet nur bereitgestellte Daten und weist fehlende Text-, Bild-, Audio- oder Leistungsbelege aus.",
        },
        {
          number: "02",
          title:
            "Kennzahlen werden durch Software berechnet",
          description:
            "Abgeleitete Indikatoren werden deterministisch berechnet, statt auf freien Modellschätzungen zu beruhen.",
        },
        {
          number: "03",
          title:
            "Wiederholung ist keine Kausalität",
          description:
            "Muster sind Signale aus einer Stichprobe und beweisen für sich genommen nicht, dass ein Thema oder Format die Leistung verursacht hat.",
        },
        {
          number: "04",
          title:
            "Vergleich mit der eigenen Marke",
          description:
            "Die Wettbewerbsanalyse verbindet Muster der Konkurrenz mit internen Mustern, um Gemeinsamkeiten, Unterschiede und Lücken sichtbar zu machen.",
        },
        {
          number: "05",
          title:
            "Integrationsstatus bleibt transparent",
          description:
            "Der Katalog unterscheidet verfügbare Quellen wie öffentliche Profile und CSV von geplanten OAuth-Integrationen für soziale Netzwerke, CRM, Kalender und Websites.",
        },
      ],
    },

    stack: {
      title:
        "Ein Web-Stack mit KI-gestützter Analyse und strukturierten Daten.",

      description:
        "Das MVP verbindet eine Webanwendung, relationale Persistenz, Vertragsvalidierung und einen Analyse-Kern, der Modellinterpretation von Berechnungen und Geschäftsregeln trennt.",

      items: [
        "Next.js 16.3.6",
        "React 19.2.8",
        "TypeScript 5",
        "PostgreSQL + Supabase",
        "Drizzle ORM",
        "Groq SDK · openai/gpt-oss-20b",
        "Zod 4",
        "csv-parse",
        "Supabase SSR Auth",
        "Tailwind CSS 4",
      ],
    },

    results: {
      title:
        "Was die aktuelle Implementierung zeigt.",

      description:
        "Das Projekt befindet sich weiterhin in Entwicklung. Diese Punkte beschreiben Komponenten im Code, keine kommerziellen Ergebnisse oder Produktionskennzahlen.",

      items: [
        {
          value: "CSV",
          label:
            "Validierter Import historischer Inhalte und Kennzahlen",
        },
        {
          value: "GROQ + ZOD",
          label:
            "KI-gestützte Analyse mit strukturierter und validierter Ausgabe",
        },
        {
          value: "PATTERNS",
          label:
            "Gruppierung wiederkehrender Themen, Absichten und Keywords",
        },
        {
          value: "VERGLEICH",
          label:
            "Struktur zum Vergleich eigener und konkurrierender Muster",
        },
        {
          value: "LIIO",
          label:
            "Agentenantworten mit Evidenz, Konfidenz und nächster Aktion",
        },
      ],
    },

    links: {
      github: null,
      live: null,
    },
  },
};

const projectNumbers: Record<
  ProjectSlug,
  string
> = {
  paypart: "01",
  liio: "02",
  opinsy: "03",
};

export function isProjectSlug(
  value: string,
): value is ProjectSlug {
  return projectSlugs.includes(
    value as ProjectSlug,
  );
}

export function getProjectNumber(
  slug: ProjectSlug,
) {
  return projectNumbers[slug];
}

export function getProjectLabels(
  language: Language,
) {
  return labels[language];
}

export function getProjectContent(
  slug: ProjectSlug,
  language: Language,
): ProjectContent {
  if (slug === "paypart") {
    return {
      number: "01",
      ...payPart[language],
    };
  }

  if (slug === "liio") {
    return {
      number: "02",
      ...liio[language],
    };
  }

  return {
    number: "03",
    ...opinsy[language],
  };
}

export function getAdjacentProjects(
  slug: ProjectSlug,
) {
  const index =
    projectSlugs.indexOf(slug);

  return {
    previous:
      index > 0
        ? projectSlugs[index - 1]
        : null,

    next:
      index <
      projectSlugs.length - 1
        ? projectSlugs[index + 1]
        : null,
  };
}