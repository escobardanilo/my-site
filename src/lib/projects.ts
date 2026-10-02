import type { Language } from "@/lib/translations";

export const projectSlugs = [
  "project-01",
  "project-02",
  "project-03",
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
      gallery?: string[];
      galleryAlts?: string[];
      galleryLayout?: "three-by-two";
      fullWidth?: boolean;
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
    role: "Função",
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
    role: "Función",
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
    role: "Role",
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
    role: "Rolle",
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
        "AI Systems",
        "Automation",
        "Workflow Engineering",
        "Payments",
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
      github:
        "https://github.com/escobardanilo/paypart",
      live:
        "https://paypart.vercel.app/",
    },
  },

  es: {
    card: {
      category: "",
      description:
        "Workspace que conecta solicitudes, aprobaciones, transacciones, excepciones y actividad operativa en un flujo trazable y controlado.",
      tags: [
        "AI Systems",
        "Automation",
        "Workflow Engineering",
        "Payments",
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
      github:
        "https://github.com/escobardanilo/paypart",
      live:
        "https://paypart.vercel.app/",
    },
  },

  en: {
    card: {
      category: "",
      description:
        "A workspace connecting payment requests, approvals, transactions, exceptions and operational activity into one controlled, traceable flow.",
      tags: [
        "AI Systems",
        "Automation",
        "Workflow Engineering",
        "Payments",
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
      github:
        "https://github.com/escobardanilo/paypart",
      live:
        "https://paypart.vercel.app/",
    },
  },

  de: {
    card: {
      category: "",
      description:
        "Ein Workspace für Zahlungsanfragen, Freigaben, Transaktionen, Ausnahmen und operative Aktivitäten.",
      tags: [
        "AI Systems",
        "Automation",
        "Workflow Engineering",
        "Payments",
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
      github:
        "https://github.com/escobardanilo/paypart",
      live:
        "https://paypart.vercel.app/",
    },
  },
};

const diaction: Record<
  Language,
  Omit<ProjectContent, "number">
> = {
  pt: {
    card: {
      category: "",
      description:
        "Trabalho de MarTech e Website Marketing na diaction, ligando SEO, CRO, conteúdo, social media, UTM e IA à aquisição e conversão.",
      tags: [
        "MarTech",
        "SEO & CRO",
        "Social Media",
        "Automation",
      ],
    },

    eyebrow:
      "MARTECH / WEBSITE MARKETING / SOCIAL MEDIA",

    title: "diaction",

    subtitle:
      "Performance web, conteúdo e automação conectados à aquisição e conversão.",

    summary:
      "Na diaction atuei como Sênior, Marketing de Sites, com responsabilidade sobre desempenho digital, SEO, CRO e jornadas na web. O trabalho incluiu landing page orientada à conversão, tracking por UTM, geração de leads através de CTA, conteúdo e copywriting, redação e edição diária do jornal da marca, expansão para novas redes sociais e integração de IA através do Opinsy.",

    overview: {
      role:
        "Sênior, Marketing de Sites",
      type:
        "MarTech / Website Marketing / Social Media",
      status:
        "Trabalho profissional",
    },

    problem: {
      title:
        "Marketing digital perde eficiência quando descoberta, conteúdo e conversão funcionam como partes separadas.",

      description:
        "O trabalho exigia tratar o site e os canais digitais como um sistema: melhorar descoberta orgânica, reduzir fricção nas jornadas, estruturar páginas para conversão, identificar origem de tráfego, manter produção editorial diária e ampliar a presença da marca sem perder consistência.",
    },

    product: {
      title:
        "Um sistema de aquisição, conteúdo e presença digital.",

      description:
        "Website, social media e conteúdo foram tratados como um único sistema de aquisição. SEO e CRO melhoram descoberta e conversão; UTM preserva a origem do tráfego; landing pages e CTA transformam interesse em lead; o Opinsy apoia análise, produção e consistência de conteúdo.",

      visuals: [
        {
          number: "01",
          label:
            "DIACTION / BRAND",

          title: "diaction",

          description:
            "Identidade utilizada como capa do projeto no portfólio.",

          image:
            "/images/diaction.png",

          alt:
            "Logotipo da diaction",
        },

        {
          number: "02",
          label:
            "DIACTION / BRAND SYSTEM",

          title: "diaction",

          description:
            "Elemento visual complementar da identidade e comunicação da marca.",

          image:
            "/images/typographyedita-brand-logo-bon.png",

          alt:
            "Sistema tipográfico e visual da diaction",
        },

        {
          number: "03",
          label:
            "DIACTION / WEB + SOCIAL",

          title: "diaction",

          description:
            "Landing pages, conteúdo e materiais digitais reunidos num único frame visual.",

          image: null,

          alt:
            "Conjunto de seis imagens do trabalho realizado na diaction",

          gallery: [
            "/images/40.png",
            "/images/41.png",
            "/images/42.png",
            "/images/43.png",
            "/images/44.png",
            "/images/45.png",
          ],

          galleryAlts: [
            "Diaction visual 40",
            "Diaction visual 41",
            "Diaction visual 42",
            "Diaction visual 43",
            "Diaction visual 44",
            "Diaction visual 45",
          ],

          galleryLayout:
            "three-by-two",

          fullWidth: true,
        },
      ],
    },

    architecture: {
      title:
        "Da descoberta ao lead, o percurso precisa manter contexto.",

      description:
        "SEO e conteúdo criam descoberta; a landing page concentra a proposta e o CTA; UTM identifica a origem da visita; a conversão transforma interesse em lead; análise e conteúdo alimentam a próxima decisão. O Opinsy entra como camada de IA para apoiar leitura, produção e consistência operacional.",
      flow: [
        "SEO + Conteúdo",
        "Landing Page",
        "UTM + CTA",
        "Lead",
        "Análise",
        "Opinsy / AI",
      ],
    },

    process: {
      title:
        "Performance, conteúdo e distribuição trabalhados como um mesmo ciclo.",

      description:
        "O trabalho foi estruturado em frentes conectadas, evitando tratar site, social media, conteúdo e IA como iniciativas isoladas.",

      steps: [
        {
          number: "01",
          title:
            "SEO + CRO",
          description:
            "Responsabilidade pelo desempenho digital da diaction, com atenção à visibilidade orgânica, páginas, jornadas, pontos de fricção e conversão.",
        },

        {
          number: "02",
          title:
            "Landing page",
          description:
            "Criação de landing page orientada à conversão, com hierarquia de conteúdo e CTA definidos para transformar tráfego em oportunidade.",
        },

        {
          number: "03",
          title:
            "UTM + origem",
          description:
            "Estruturação de URLs com UTM para distinguir origem e campanha, permitindo relacionar tráfego com a captação de leads.",
        },

        {
          number: "04",
          title:
            "Conteúdo + copy",
          description:
            "Criação de conteúdos e copywriting para site e comunicação digital, alinhando clareza da mensagem com objetivos de navegação e conversão.",
        },

        {
          number: "05",
          title:
            "Jornal diário",
          description:
            "Redação e edição diária de notícias para o jornal da diaction, com temas ligados a saúde, alimentação e assuntos relevantes para a audiência.",
        },

        {
          number: "06",
          title:
            "Social media",
          description:
            "Desenvolvimento de estratégia para ampliar a marca em outras redes, adaptar formatos por canal, reaproveitar conteúdo de forma consistente e criar novos pontos de entrada para audiência.",
        },

        {
          number: "07",
          title:
            "Opinsy + IA",
          description:
            "Integração do meu sistema Opinsy como apoio à análise, produção e organização de conteúdo, ligando IA ao fluxo de Marketing em vez de utilizá-la como ferramenta isolada.",
        },
      ],
    },

    decisions: {
      title:
        "Decisões orientadas por jornada, distribuição e contexto.",

      description:
        "A prioridade foi conectar aquisição, conteúdo e conversão. Cada elemento precisava ter função clara no percurso do utilizador e produzir informação útil para a próxima ação.",

      items: [
        {
          number: "01",
          title:
            "Conversão antes de decoração",
          description:
            "A landing page foi estruturada a partir da ação esperada do utilizador, com mensagem, hierarquia e CTA a servir esse objetivo.",
        },

        {
          number: "02",
          title:
            "UTM antes de distribuir",
          description:
            "Campanhas e links precisam preservar origem para que o tráfego possa ser lido no contexto correto depois da visita.",
        },

        {
          number: "03",
          title:
            "Conteúdo como sistema",
          description:
            "O jornal, o site e as redes sociais foram tratados como superfícies conectadas, com possibilidade de adaptação e redistribuição por canal.",
        },

        {
          number: "04",
          title:
            "Expansão por canal",
          description:
            "A estratégia social considerou adequação de formato, frequência, distribuição e coerência de marca em vez de replicar a mesma peça em todas as redes.",
        },

        {
          number: "05",
          title:
            "IA dentro do processo",
          description:
            "Opinsy foi integrado como infraestrutura de apoio à análise e conteúdo, mantendo decisão editorial e direção de Marketing sob controlo humano.",
        },
      ],
    },

    stack: {
      title:
        "MarTech aplicado a performance, conteúdo e execução.",

      description:
        "A stack deste trabalho é menos sobre uma ferramenta única e mais sobre o conjunto de práticas e sistemas que conectam descoberta, conversão, tracking, conteúdo e automação.",
      items: [
        "SEO",
        "CRO",
        "Landing Pages",
        "UTM Tracking",
        "CTA / Lead Generation",
        "Social Media",
        "Copywriting",
        "Content Operations",
        "Opinsy / AI",
      ],
    },

    results: {
      title:
        "Escopo entregue e capacidades aplicadas.",

      description:
        "Sem recorrer a métricas artificiais, o projeto demonstra trabalho real sobre aquisição, conversão, conteúdo, distribuição e integração de IA no contexto de Marketing.",
      items: [
        {
          value: "SEO + CRO",
          label:
            "Desempenho digital, jornadas web e otimização orientada à conversão",
        },

        {
          value: "UTM + CTA",
          label:
            "Landing page preparada para atribuição de origem e geração de leads",
        },

        {
          value: "EDITORIAL",
          label:
            "Redação, edição diária, conteúdo e copywriting para a comunicação da marca",
        },

        {
          value: "MULTICHANNEL",
          label:
            "Estratégia de expansão da marca para novas redes sociais e formatos",
        },

        {
          value: "OPINSY",
          label:
            "IA integrada ao fluxo de Marketing para apoiar análise e operação de conteúdo",
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
        "Trabajo de MarTech y Website Marketing en diaction, conectando SEO, CRO, contenido, social media, UTM e IA con adquisición y conversión.",
      tags: [
        "MarTech",
        "SEO & CRO",
        "Social Media",
        "Automation",
      ],
    },

    eyebrow:
      "MARTECH / WEBSITE MARKETING / SOCIAL MEDIA",

    title: "diaction",

    subtitle:
      "Performance web, contenido y automatización conectados con adquisición y conversión.",

    summary:
      "En diaction trabajé como Senior, Marketing de Sitios, con responsabilidad sobre rendimiento digital, SEO, CRO y recorridos web. El trabajo incluyó una landing page orientada a conversión, tracking por UTM, generación de leads mediante CTA, contenido y copywriting, redacción y edición diaria del periódico de la marca, expansión a nuevas redes sociales e integración de IA mediante Opinsy.",

    overview: {
      role:
        "Senior, Marketing de Sitios",
      type:
        "MarTech / Website Marketing / Social Media",
      status:
        "Trabajo profesional",
    },

    problem: {
      title:
        "El Marketing digital pierde eficiencia cuando descubrimiento, contenido y conversión funcionan por separado.",

      description:
        "El trabajo exigía tratar el sitio y los canales digitales como un sistema: mejorar descubrimiento orgánico, reducir fricción en los recorridos, estructurar páginas para conversión, identificar origen del tráfico, mantener producción editorial diaria y ampliar la presencia de marca sin perder consistencia.",
    },

    product: {
      title:
        "Un sistema de adquisición, contenido y presencia digital.",

      description:
        "Website, social media y contenido se trabajaron como un único sistema de adquisición. SEO y CRO mejoran descubrimiento y conversión; UTM preserva el origen del tráfico; landing pages y CTA convierten interés en lead; Opinsy apoya análisis, producción y consistencia de contenido.",

      visuals: [
        {
          number: "01",
          label:
            "DIACTION / BRAND",
          title: "diaction",
          description:
            "Identidad utilizada como portada del proyecto en el portfolio.",
          image:
            "/images/diaction.png",
          alt:
            "Logotipo de diaction",
        },

        {
          number: "02",
          label:
            "DIACTION / BRAND SYSTEM",
          title: "diaction",
          description:
            "Elemento visual complementario de la identidad y comunicación de marca.",
          image:
            "/images/typographyedita-brand-logo-bon.png",
          alt:
            "Sistema tipográfico y visual de diaction",
        },

        {
          number: "03",
          label:
            "DIACTION / WEB + SOCIAL",
          title: "diaction",
          description:
            "Landing pages, contenido y materiales digitales reunidos en un único frame visual.",
          image: null,
          alt:
            "Conjunto de seis imágenes del trabajo realizado en diaction",
          gallery: [
            "/images/40.png",
            "/images/41.png",
            "/images/42.png",
            "/images/43.png",
            "/images/44.png",
            "/images/45.png",
          ],
          galleryAlts: [
            "Diaction visual 40",
            "Diaction visual 41",
            "Diaction visual 42",
            "Diaction visual 43",
            "Diaction visual 44",
            "Diaction visual 45",
          ],
          galleryLayout:
            "three-by-two",
          fullWidth: true,
        },
      ],
    },

    architecture: {
      title:
        "Desde el descubrimiento hasta el lead, el recorrido necesita conservar contexto.",

      description:
        "SEO y contenido generan descubrimiento; la landing page concentra propuesta y CTA; UTM identifica el origen; la conversión transforma interés en lead; análisis y contenido alimentan la siguiente decisión. Opinsy entra como capa de IA para apoyar lectura, producción y consistencia operativa.",
      flow: [
        "SEO + Contenido",
        "Landing Page",
        "UTM + CTA",
        "Lead",
        "Análisis",
        "Opinsy / AI",
      ],
    },

    process: {
      title:
        "Performance, contenido y distribución trabajados como un mismo ciclo.",

      description:
        "El trabajo se estructuró en frentes conectados, evitando tratar sitio, social media, contenido e IA como iniciativas aisladas.",

      steps: [
        {
          number: "01",
          title:
            "SEO + CRO",
          description:
            "Responsabilidad sobre rendimiento digital, visibilidad orgánica, páginas, recorridos, fricción y conversión.",
        },
        {
          number: "02",
          title:
            "Landing page",
          description:
            "Creación de landing page orientada a conversión, con jerarquía de contenido y CTA definidos.",
        },
        {
          number: "03",
          title:
            "UTM + origen",
          description:
            "Estructuración de URLs con UTM para distinguir origen y campaña y relacionar tráfico con captación de leads.",
        },
        {
          number: "04",
          title:
            "Contenido + copy",
          description:
            "Creación de contenidos y copywriting para sitio y comunicación digital.",
        },
        {
          number: "05",
          title:
            "Periódico diario",
          description:
            "Redacción y edición diaria de noticias sobre salud, alimentación y temas relevantes para la audiencia.",
        },
        {
          number: "06",
          title:
            "Social media",
          description:
            "Estrategia para ampliar la marca en otras redes, adaptar formatos por canal, reutilizar contenido con consistencia y crear nuevas entradas de audiencia.",
        },
        {
          number: "07",
          title:
            "Opinsy + IA",
          description:
            "Integración de Opinsy como apoyo al análisis, producción y organización de contenido dentro del flujo de Marketing.",
        },
      ],
    },

    decisions: {
      title:
        "Decisiones orientadas por recorrido, distribución y contexto.",

      description:
        "La prioridad fue conectar adquisición, contenido y conversión con funciones claras a lo largo del recorrido del usuario.",

      items: [
        {
          number: "01",
          title:
            "Conversión antes que decoración",
          description:
            "La landing page fue estructurada a partir de la acción esperada, con mensaje, jerarquía y CTA al servicio del objetivo.",
        },
        {
          number: "02",
          title:
            "UTM antes de distribuir",
          description:
            "Campañas y enlaces preservan origen para poder interpretar correctamente el tráfico después de la visita.",
        },
        {
          number: "03",
          title:
            "Contenido como sistema",
          description:
            "Periódico, sitio y redes se trataron como superficies conectadas, adaptables y redistribuibles por canal.",
        },
        {
          number: "04",
          title:
            "Expansión por canal",
          description:
            "La estrategia social consideró formato, frecuencia, distribución y coherencia de marca.",
        },
        {
          number: "05",
          title:
            "IA dentro del proceso",
          description:
            "Opinsy se integró como infraestructura de apoyo al análisis y contenido con control editorial humano.",
        },
      ],
    },

    stack: {
      title:
        "MarTech aplicado a performance, contenido y ejecución.",
      description:
        "Un conjunto de prácticas y sistemas que conectan descubrimiento, conversión, tracking, contenido y automatización.",
      items: [
        "SEO",
        "CRO",
        "Landing Pages",
        "UTM Tracking",
        "CTA / Lead Generation",
        "Social Media",
        "Copywriting",
        "Content Operations",
        "Opinsy / AI",
      ],
    },

    results: {
      title:
        "Alcance entregado y capacidades aplicadas.",
      description:
        "El proyecto muestra trabajo real sobre adquisición, conversión, contenido, distribución e integración de IA sin recurrir a métricas artificiales.",
      items: [
        {
          value: "SEO + CRO",
          label:
            "Rendimiento digital, recorridos web y optimización orientada a conversión",
        },
        {
          value: "UTM + CTA",
          label:
            "Landing page preparada para atribución de origen y generación de leads",
        },
        {
          value: "EDITORIAL",
          label:
            "Redacción, edición diaria, contenido y copywriting",
        },
        {
          value: "MULTICHANNEL",
          label:
            "Estrategia de expansión de marca hacia nuevas redes y formatos",
        },
        {
          value: "OPINSY",
          label:
            "IA integrada al flujo de Marketing para apoyar análisis y operación de contenido",
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
        "MarTech and Website Marketing work at diaction, connecting SEO, CRO, content, social media, UTM and AI to acquisition and conversion.",
      tags: [
        "MarTech",
        "SEO & CRO",
        "Social Media",
        "Automation",
      ],
    },

    eyebrow:
      "MARTECH / WEBSITE MARKETING / SOCIAL MEDIA",

    title: "diaction",

    subtitle:
      "Web performance, content and automation connected to acquisition and conversion.",

    summary:
      "At diaction I worked as Senior, Website Marketing, responsible for digital performance, SEO, CRO and web journeys. The work included a conversion-oriented landing page, UTM tracking, lead generation through CTA, content and copywriting, daily writing and editing for the brand journal, expansion into additional social networks and AI integration through Opinsy.",

    overview: {
      role:
        "Senior, Website Marketing",
      type:
        "MarTech / Website Marketing / Social Media",
      status:
        "Professional work",
    },

    problem: {
      title:
        "Digital Marketing loses efficiency when discovery, content and conversion operate as separate parts.",

      description:
        "The work required treating the website and digital channels as a system: improving organic discovery, reducing friction across journeys, structuring pages for conversion, identifying traffic origin, maintaining daily editorial production and expanding brand presence without losing consistency.",
    },

    product: {
      title:
        "A system for acquisition, content and digital presence.",

      description:
        "Website, social media and content were treated as one acquisition system. SEO and CRO improve discovery and conversion; UTM preserves traffic source; landing pages and CTAs turn interest into leads; Opinsy supports analysis, production and content consistency.",

      visuals: [
        {
          number: "01",
          label:
            "DIACTION / BRAND",
          title: "diaction",
          description:
            "Brand identity used as the project cover in the portfolio.",
          image:
            "/images/diaction.png",
          alt:
            "diaction logo",
        },

        {
          number: "02",
          label:
            "DIACTION / BRAND SYSTEM",
          title: "diaction",
          description:
            "Complementary visual element from the brand identity and communication system.",
          image:
            "/images/typographyedita-brand-logo-bon.png",
          alt:
            "diaction typography and visual system",
        },

        {
          number: "03",
          label:
            "DIACTION / WEB + SOCIAL",
          title: "diaction",
          description:
            "Landing pages, content and digital materials grouped into one visual frame.",
          image: null,
          alt:
            "Six-image collection from the work completed at diaction",
          gallery: [
            "/images/40.png",
            "/images/41.png",
            "/images/42.png",
            "/images/43.png",
            "/images/44.png",
            "/images/45.png",
          ],
          galleryAlts: [
            "Diaction visual 40",
            "Diaction visual 41",
            "Diaction visual 42",
            "Diaction visual 43",
            "Diaction visual 44",
            "Diaction visual 45",
          ],
          galleryLayout:
            "three-by-two",
          fullWidth: true,
        },
      ],
    },

    architecture: {
      title:
        "From discovery to lead, the journey needs to preserve context.",

      description:
        "SEO and content create discovery; the landing page concentrates proposition and CTA; UTM identifies origin; conversion turns interest into a lead; analysis and content inform the next decision. Opinsy acts as the AI layer supporting reading, production and operational consistency.",
      flow: [
        "SEO + Content",
        "Landing Page",
        "UTM + CTA",
        "Lead",
        "Analysis",
        "Opinsy / AI",
      ],
    },

    process: {
      title:
        "Performance, content and distribution handled as one cycle.",

      description:
        "The work was structured across connected workstreams rather than treating website, social media, content and AI as isolated initiatives.",

      steps: [
        {
          number: "01",
          title:
            "SEO + CRO",
          description:
            "Responsibility for digital performance, organic visibility, pages, journeys, friction points and conversion.",
        },
        {
          number: "02",
          title:
            "Landing page",
          description:
            "Built a conversion-oriented landing page with content hierarchy and CTA defined around the intended user action.",
        },
        {
          number: "03",
          title:
            "UTM + source",
          description:
            "Structured UTM URLs to distinguish source and campaign and connect traffic with lead capture.",
        },
        {
          number: "04",
          title:
            "Content + copy",
          description:
            "Created content and copywriting for website and digital communication.",
        },
        {
          number: "05",
          title:
            "Daily journal",
          description:
            "Daily writing and editing of news around health, food and topics relevant to the audience.",
        },
        {
          number: "06",
          title:
            "Social media",
          description:
            "Developed a strategy to expand the brand into additional networks, adapt formats by channel, reuse content consistently and create new audience entry points.",
        },
        {
          number: "07",
          title:
            "Opinsy + AI",
          description:
            "Integrated Opinsy as support for analysis, content production and organization within the Marketing workflow.",
        },
      ],
    },

    decisions: {
      title:
        "Decisions driven by journey, distribution and context.",

      description:
        "The priority was to connect acquisition, content and conversion, with each element serving a clear function in the user journey.",

      items: [
        {
          number: "01",
          title:
            "Conversion before decoration",
          description:
            "The landing page was structured around the intended action, with message, hierarchy and CTA serving that objective.",
        },
        {
          number: "02",
          title:
            "UTM before distribution",
          description:
            "Campaign links preserve source so traffic can be interpreted in the correct context after the visit.",
        },
        {
          number: "03",
          title:
            "Content as a system",
          description:
            "Journal, website and social networks were treated as connected surfaces that could be adapted and redistributed by channel.",
        },
        {
          number: "04",
          title:
            "Channel-specific expansion",
          description:
            "The social strategy considered format, cadence, distribution and brand consistency rather than duplicating the same asset everywhere.",
        },
        {
          number: "05",
          title:
            "AI inside the process",
          description:
            "Opinsy was integrated as infrastructure supporting analysis and content while editorial and Marketing direction remained human-controlled.",
        },
      ],
    },

    stack: {
      title:
        "MarTech applied to performance, content and execution.",
      description:
        "A set of practices and systems connecting discovery, conversion, tracking, content and automation.",
      items: [
        "SEO",
        "CRO",
        "Landing Pages",
        "UTM Tracking",
        "CTA / Lead Generation",
        "Social Media",
        "Copywriting",
        "Content Operations",
        "Opinsy / AI",
      ],
    },

    results: {
      title:
        "Delivered scope and applied capabilities.",
      description:
        "The project demonstrates real work across acquisition, conversion, content, distribution and AI integration without relying on invented metrics.",
      items: [
        {
          value: "SEO + CRO",
          label:
            "Digital performance, web journeys and conversion-oriented optimization",
        },
        {
          value: "UTM + CTA",
          label:
            "Landing page prepared for source attribution and lead generation",
        },
        {
          value: "EDITORIAL",
          label:
            "Daily writing, editing, content and copywriting",
        },
        {
          value: "MULTICHANNEL",
          label:
            "Brand expansion strategy across additional networks and formats",
        },
        {
          value: "OPINSY",
          label:
            "AI integrated into the Marketing workflow to support analysis and content operations",
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
        "MarTech- und Website-Marketing-Arbeit bei diaction, die SEO, CRO, Content, Social Media, UTM und KI mit Akquisition und Conversion verbindet.",
      tags: [
        "MarTech",
        "SEO & CRO",
        "Social Media",
        "Automation",
      ],
    },

    eyebrow:
      "MARTECH / WEBSITE MARKETING / SOCIAL MEDIA",

    title: "diaction",

    subtitle:
      "Web-Performance, Content und Automatisierung verbunden mit Akquisition und Conversion.",

    summary:
      "Bei diaction arbeitete ich als Senior, Website Marketing, mit Verantwortung für digitale Performance, SEO, CRO und Web Journeys. Dazu gehörten eine conversion-orientierte Landing Page, UTM-Tracking, Lead-Generierung über CTA, Content und Copywriting, tägliche Redaktion des Markenjournals, Expansion in weitere soziale Netzwerke und KI-Integration über Opinsy.",

    overview: {
      role:
        "Senior, Website Marketing",
      type:
        "MarTech / Website Marketing / Social Media",
      status:
        "Professionelle Arbeit",
    },

    problem: {
      title:
        "Digitales Marketing verliert Effizienz, wenn Discovery, Content und Conversion getrennt voneinander arbeiten.",

      description:
        "Die Aufgabe erforderte, Website und digitale Kanäle als System zu behandeln: organische Auffindbarkeit verbessern, Reibung in Journeys reduzieren, Seiten auf Conversion ausrichten, Traffic-Ursprung identifizieren, tägliche redaktionelle Produktion sicherstellen und Markenpräsenz konsistent erweitern.",
    },

    product: {
      title:
        "Ein System für Akquisition, Content und digitale Präsenz.",

      description:
        "Website, Social Media und Content wurden als ein gemeinsames Akquisitionssystem behandelt. SEO und CRO verbessern Discovery und Conversion; UTM bewahrt die Traffic-Herkunft; Landing Pages und CTAs machen Interesse zu Leads; Opinsy unterstützt Analyse, Produktion und Content-Konsistenz.",

      visuals: [
        {
          number: "01",
          label:
            "DIACTION / BRAND",
          title: "diaction",
          description:
            "Markenidentität als Cover des Projekts im Portfolio.",
          image:
            "/images/diaction.png",
          alt:
            "diaction Logo",
        },

        {
          number: "02",
          label:
            "DIACTION / BRAND SYSTEM",
          title: "diaction",
          description:
            "Ergänzendes visuelles Element der Markenidentität und Kommunikation.",
          image:
            "/images/typographyedita-brand-logo-bon.png",
          alt:
            "Typografie- und visuelles System von diaction",
        },

        {
          number: "03",
          label:
            "DIACTION / WEB + SOCIAL",
          title: "diaction",
          description:
            "Landing Pages, Content und digitale Materialien in einem gemeinsamen visuellen Frame.",
          image: null,
          alt:
            "Sechs Bilder der Arbeit für diaction",
          gallery: [
            "/images/40.png",
            "/images/41.png",
            "/images/42.png",
            "/images/43.png",
            "/images/44.png",
            "/images/45.png",
          ],
          galleryAlts: [
            "Diaction Visual 40",
            "Diaction Visual 41",
            "Diaction Visual 42",
            "Diaction Visual 43",
            "Diaction Visual 44",
            "Diaction Visual 45",
          ],
          galleryLayout:
            "three-by-two",
          fullWidth: true,
        },
      ],
    },

    architecture: {
      title:
        "Von Discovery bis Lead muss die Journey Kontext erhalten.",

      description:
        "SEO und Content erzeugen Discovery; die Landing Page bündelt Proposition und CTA; UTM identifiziert den Ursprung; Conversion macht Interesse zum Lead; Analyse und Content informieren die nächste Entscheidung. Opinsy dient als KI-Schicht für Analyse, Produktion und operative Konsistenz.",
      flow: [
        "SEO + Content",
        "Landing Page",
        "UTM + CTA",
        "Lead",
        "Analyse",
        "Opinsy / AI",
      ],
    },

    process: {
      title:
        "Performance, Content und Distribution als ein gemeinsamer Zyklus.",

      description:
        "Die Arbeit wurde als verbundene Workstreams strukturiert, statt Website, Social Media, Content und KI als isolierte Initiativen zu behandeln.",

      steps: [
        {
          number: "01",
          title:
            "SEO + CRO",
          description:
            "Verantwortung für digitale Performance, organische Sichtbarkeit, Seiten, Journeys, Reibungspunkte und Conversion.",
        },
        {
          number: "02",
          title:
            "Landing Page",
          description:
            "Entwicklung einer conversion-orientierten Landing Page mit klarer Inhaltshierarchie und CTA.",
        },
        {
          number: "03",
          title:
            "UTM + Herkunft",
          description:
            "Strukturierung von UTM-URLs zur Unterscheidung von Quelle und Kampagne und zur Verbindung von Traffic mit Lead-Erfassung.",
        },
        {
          number: "04",
          title:
            "Content + Copy",
          description:
            "Erstellung von Content und Copywriting für Website und digitale Kommunikation.",
        },
        {
          number: "05",
          title:
            "Tägliches Journal",
          description:
            "Tägliche Redaktion von Nachrichten zu Gesundheit, Ernährung und relevanten Themen für die Zielgruppe.",
        },
        {
          number: "06",
          title:
            "Social Media",
          description:
            "Strategie zur Expansion in weitere Netzwerke, zur Anpassung von Formaten pro Kanal, zur konsistenten Wiederverwendung von Content und für neue Audience-Einstiegspunkte.",
        },
        {
          number: "07",
          title:
            "Opinsy + KI",
          description:
            "Integration von Opinsy als Unterstützung für Analyse, Content-Produktion und Organisation innerhalb des Marketing-Workflows.",
        },
      ],
    },

    decisions: {
      title:
        "Entscheidungen entlang von Journey, Distribution und Kontext.",

      description:
        "Priorität war die Verbindung von Akquisition, Content und Conversion mit klaren Funktionen entlang der User Journey.",

      items: [
        {
          number: "01",
          title:
            "Conversion vor Dekoration",
          description:
            "Die Landing Page wurde von der gewünschten Nutzeraktion aus strukturiert; Botschaft, Hierarchie und CTA dienen diesem Ziel.",
        },
        {
          number: "02",
          title:
            "UTM vor Distribution",
          description:
            "Kampagnenlinks bewahren die Herkunft, damit Traffic nach dem Besuch im richtigen Kontext gelesen werden kann.",
        },
        {
          number: "03",
          title:
            "Content als System",
          description:
            "Journal, Website und Social Networks wurden als verbundene Flächen behandelt, die je Kanal angepasst und verteilt werden können.",
        },
        {
          number: "04",
          title:
            "Kanalspezifische Expansion",
          description:
            "Die Social-Strategie berücksichtigte Format, Frequenz, Distribution und Markenkonsistenz.",
        },
        {
          number: "05",
          title:
            "KI im Prozess",
          description:
            "Opinsy wurde als Infrastruktur für Analyse und Content integriert, während redaktionelle und Marketing-Entscheidungen unter menschlicher Kontrolle blieben.",
        },
      ],
    },

    stack: {
      title:
        "MarTech angewendet auf Performance, Content und Ausführung.",
      description:
        "Ein Set aus Praktiken und Systemen, das Discovery, Conversion, Tracking, Content und Automatisierung verbindet.",
      items: [
        "SEO",
        "CRO",
        "Landing Pages",
        "UTM Tracking",
        "CTA / Lead Generation",
        "Social Media",
        "Copywriting",
        "Content Operations",
        "Opinsy / AI",
      ],
    },

    results: {
      title:
        "Gelieferter Umfang und eingesetzte Fähigkeiten.",
      description:
        "Das Projekt zeigt reale Arbeit in Akquisition, Conversion, Content, Distribution und KI-Integration ohne erfundene Kennzahlen.",
      items: [
        {
          value: "SEO + CRO",
          label:
            "Digitale Performance, Web Journeys und conversion-orientierte Optimierung",
        },
        {
          value: "UTM + CTA",
          label:
            "Landing Page für Herkunftszuordnung und Lead-Generierung",
        },
        {
          value: "EDITORIAL",
          label:
            "Tägliche Redaktion, Content und Copywriting",
        },
        {
          value: "MULTICHANNEL",
          label:
            "Strategie zur Markenexpansion über weitere Netzwerke und Formate",
        },
        {
          value: "OPINSY",
          label:
            "KI im Marketing-Workflow zur Unterstützung von Analyse und Content Operations",
        },
      ],
    },

    links: {
      github: null,
      live: null,
    },
  },
};

const alta: Record<
  Language,
  Omit<ProjectContent, "number">
> = {
  pt: {
    card: {
      category: "",
      description:
        "Plataforma de inteligência clínica com agente de IA que transforma contexto fragmentado em investigação estruturada, evidência e trabalho preparado para revisão profissional.",
      tags: [
        "Clinical AI",
        "Agents",
        "RAG",
        "Python",
      ],
    },

    eyebrow:
      "CLINICAL AI / AGENTIC WORKFLOWS",

    title: "ALTA",

    subtitle:
      "Inteligência clínica que investiga o caso antes de responder.",

    summary:
      "A ALTA é uma plataforma de inteligência clínica criada para centralizar histórico, consultas, exames, documentos, medicação e evolução do paciente. O agente trabalha sobre esse contexto, identifica a informação necessária, seleciona ferramentas controladas, investiga o caso e prepara respostas estruturadas para revisão profissional.",

    overview: {
      role:
        "AI Engineering / Product Architecture",
      type:
        "Clinical AI / Agentic Workspace",
      status:
        "Em desenvolvimento",
    },

    problem: {
      title:
        "A informação clínica existe. O problema é reuni-la a tempo de decidir.",

      description:
        "Prontuários, exames, PDFs, relatórios, notas, medicamentos e consultas anteriores podem estar dispersos entre diferentes fontes. A ALTA transforma esse material em contexto clínico estruturado, pesquisável e utilizável pelo profissional e pelo agente.",
    },

    product: {
      title:
        "Um agente que trabalha sobre o caso, não apenas sobre a pergunta.",

      description:
        "O agente interpreta a solicitação, recupera o contexto do paciente, seleciona ferramentas específicas, executa operações controladas e combina os resultados antes de apresentar uma resposta. O profissional mantém a decisão final e ações críticas continuam sujeitas a confirmação explícita.",

      visuals: [
        {
          number: "01",
          label:
            "ALTA / AGENT ORCHESTRATION",

          title: "ALTA",

          description:
            "O agente recupera contexto, seleciona ferramentas e investiga o caso sem receber acesso irrestrito à infraestrutura ou às operações críticas.",

          image: "/images/alta-one.png",

          alt:
            "Orquestração do agente de inteligência clínica ALTA",
        },

        {
          number: "02",
          label:
            "ALTA / CLINICAL FLOW",

          title: "ALTA",

          description:
            "Dados clínicos passam por processamento, estruturação, contexto, agente, ferramentas, validação, revisão profissional e auditoria.",

          image: "/images/alta-two.png",

          alt:
            "Fluxo de inteligência clínica da ALTA",
        },

        {
          number: "03",
          label:
            "ALTA / CLINICAL CONTEXT",

          title: "ALTA",

          description:
            "Histórico, consultas, exames, medicação e documentos formam um contexto longitudinal sobre o qual o agente pode investigar alterações e produzir sínteses estruturadas.",

          image: "/images/alta-tree.png",

          alt:
            "Contexto clínico longitudinal da ALTA",
        },

        {
          number: "04",
          label:
            "ALTA / AI ARCHITECTURE",

          title: "ALTA",

          description:
            "Next.js comunica com FastAPI e um núcleo Python responsável por agentes, ferramentas, RAG, embeddings, documentos, validação e workflows.",

          image: "/images/alta-four.png",

          alt:
            "Arquitetura de AI Engineering da plataforma ALTA",
        },
      ],
    },

    architecture: {
      title:
        "O LLM interpreta. Python executa e orquestra.",

      description:
        "A aplicação web funciona como camada de interação. FastAPI expõe os serviços Python; o agente coordena ferramentas controladas; RAG e embeddings recuperam contexto; PostgreSQL preserva dados e histórico. O software mantém regras, permissões e validação fora do modelo.",

      flow: [
        "Next.js / React / TypeScript",
        "FastAPI",
        "Python AI Engine",
        "AI Agent + Tool Orchestration",
        "RAG / Embeddings / Documents",
        "PostgreSQL / Supabase / pgvector",
      ],
    },

    process: {
      title:
        "Do contexto fragmentado à resposta estruturada e auditável.",

      description:
        "O fluxo separa contexto clínico, interpretação do agente, execução de ferramentas, validação do software e decisão profissional.",

      steps: [
        {
          number: "01",
          title:
            "Contexto do paciente",
          description:
            "Histórico, consultas, exames, documentos, medicação, sintomas e evolução são reunidos num contexto estruturado.",
        },

        {
          number: "02",
          title:
            "Recuperação",
          description:
            "O sistema identifica dados e documentos relevantes para a solicitação atual.",
        },

        {
          number: "03",
          title:
            "Interpretação",
          description:
            "O agente compreende a pergunta e determina que informação ainda precisa investigar.",
        },

        {
          number: "04",
          title:
            "Seleção de ferramentas",
          description:
            "O agente escolhe ferramentas de contexto, timeline, documentos, pesquisa, medicação, cálculos ou resumo.",
        },

        {
          number: "05",
          title:
            "Execução controlada",
          description:
            "Funções Python executam as operações concretas. O LLM não recebe controlo irrestrito sobre a infraestrutura.",
        },

        {
          number: "06",
          title:
            "RAG + evidência",
          description:
            "Documentos e fontes relevantes podem ser recuperados semanticamente para fundamentar a resposta.",
        },

        {
          number: "07",
          title:
            "Validação",
          description:
            "Pydantic, Zod, regras, permissões e contratos verificam a estrutura e os limites do resultado.",
        },

        {
          number: "08",
          title:
            "Revisão profissional",
          description:
            "O profissional confirma, altera ou rejeita a informação antes de qualquer ação sensível.",
        },

        {
          number: "09",
          title:
            "Auditoria",
          description:
            "Tool calls, fontes, contexto recuperado, versões e decisões permanecem rastreáveis.",
        },
      ],
    },

    decisions: {
      title:
        "Autonomia do agente limitada pelo software.",

      description:
        "O LLM interpreta e raciocina; Python executa; ferramentas possuem limites claros; o software valida; o profissional mantém a decisão final.",

      items: [
        {
          number: "01",
          title:
            "Python como núcleo da inteligência",
          description:
            "Agentes, workflows, processamento documental, RAG, embeddings, cálculos, avaliação e ferramentas clínicas ficam concentrados na camada Python.",
        },

        {
          number: "02",
          title:
            "Ferramentas com responsabilidade específica",
          description:
            "O agente decide qual ferramenta utilizar, mas cada função tem operações explicitamente definidas pelo software.",
        },

        {
          number: "03",
          title:
            "Outputs estruturados antes de texto livre",
          description:
            "Pydantic no backend e Zod na aplicação web validam contratos e formatos antes de os resultados entrarem no produto.",
        },

        {
          number: "04",
          title:
            "Human-in-the-loop nas ações críticas",
          description:
            "O fluxo mantém a sequência IA analisa → IA sugere → software valida → profissional confirma → sistema executa.",
        },

        {
          number: "05",
          title:
            "Arquitetura model-agnostic",
          description:
            "Modelos diferentes podem ser utilizados para extração, classificação, embeddings e raciocínio sem prender o produto a um único fornecedor.",
        },

        {
          number: "06",
          title:
            "Observabilidade da IA",
          description:
            "Latência, custos, tokens, tool calls, erros, versões de prompts, modelos e resultados das ferramentas devem permanecer observáveis.",
        },
      ],
    },

    stack: {
      title:
        "Uma arquitetura de AI Engineering com Python no centro.",

      description:
        "A stack separa aplicação web, serviços Python, agentes, retrieval, dados, validação e testes para manter o sistema controlável e evolutivo.",

      items: [
        "Python",
        "FastAPI",
        "Pydantic",
        "LangGraph / state machine",
        "Next.js + React",
        "TypeScript + Zod",
        "PostgreSQL + Supabase",
        "pgvector",
        "RAG + Embeddings",
        "PyMuPDF / pypdf",
        "Docker",
        "Pytest + Vitest + Playwright",
      ],
    },

    results: {
      title:
        "O núcleo técnico da ALTA está definido antes da implementação completa.",

      description:
        "Como o projeto está em arquitetura e construção de MVP, estes indicadores representam capacidades projetadas e decisões de engenharia, não métricas de produção.",

      items: [
        {
          value: "9 TOOLS",
          label:
            "Ferramentas previstas para contexto, timeline, documentos, evidência, cálculos, medicação, resumo, geração e auditoria",
        },

        {
          value: "HITL",
          label:
            "Ações críticas dependem de confirmação profissional",
        },

        {
          value:
            "MODEL-AGNOSTIC",
          label:
            "Arquitetura preparada para diferentes modelos e fornecedores",
        },

        {
          value: "RAG",
          label:
            "Recuperação de contexto clínico e documental antes da geração",
        },

        {
          value: "AUDITÁVEL",
          label:
            "Tool calls, fontes, versões e decisões deixam rasto",
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
        "Plataforma de inteligencia clínica con agente de IA que transforma contexto fragmentado en investigación estructurada, evidencia y trabajo preparado para revisión profesional.",
      tags: [
        "Clinical AI",
        "Agents",
        "RAG",
        "Python",
      ],
    },

    eyebrow:
      "CLINICAL AI / AGENTIC WORKFLOWS",

    title: "ALTA",

    subtitle:
      "Inteligencia clínica que investiga el caso antes de responder.",

    summary:
      "ALTA es una plataforma de inteligencia clínica diseñada para centralizar historial, consultas, exámenes, documentos, medicación y evolución del paciente. El agente trabaja sobre ese contexto, selecciona herramientas controladas, investiga el caso y prepara respuestas estructuradas para revisión profesional.",

    overview: {
      role:
        "AI Engineering / Product Architecture",
      type:
        "Clinical AI / Agentic Workspace",
      status:
        "En desarrollo",
    },

    problem: {
      title:
        "La información clínica existe. El problema es reunirla a tiempo para decidir.",

      description:
        "Historias clínicas, exámenes, PDFs, informes, notas, medicación y consultas anteriores pueden quedar dispersos entre distintas fuentes. ALTA transforma ese material en contexto clínico estructurado y utilizable.",
    },

    product: {
      title:
        "Un agente que trabaja sobre el caso, no solo sobre la pregunta.",

      description:
        "El agente interpreta la solicitud, recupera el contexto del paciente, selecciona herramientas específicas, ejecuta operaciones controladas y combina los resultados antes de presentar una respuesta. El profesional mantiene la decisión final.",

      visuals: [
        {
          number: "01",
          label:
            "ALTA / AGENT ORCHESTRATION",
          title: "ALTA",
          description:
            "El agente recupera contexto, selecciona herramientas e investiga el caso sin recibir acceso irrestricto a infraestructura u operaciones críticas.",
          image: "/images/alta-one.png",
          alt:
            "Orquestación del agente clínico de ALTA",
        },

        {
          number: "02",
          label:
            "ALTA / CLINICAL FLOW",
          title: "ALTA",
          description:
            "Los datos clínicos pasan por procesamiento, estructuración, contexto, agente, herramientas, validación, revisión profesional y auditoría.",
          image: "/images/alta-two.png",
          alt:
            "Flujo de inteligencia clínica de ALTA",
        },

        {
          number: "03",
          label:
            "ALTA / CLINICAL CONTEXT",
          title: "ALTA",
          description:
            "Historial, consultas, exámenes, medicación y documentos forman un contexto longitudinal que el agente puede investigar.",
          image: "/images/alta-tree.png",
          alt:
            "Contexto clínico longitudinal de ALTA",
        },

        {
          number: "04",
          label:
            "ALTA / AI ARCHITECTURE",
          title: "ALTA",
          description:
            "Next.js se comunica con FastAPI y un núcleo Python responsable de agentes, herramientas, RAG, embeddings, documentos y validación.",
          image: "/images/alta-four.png",
          alt:
            "Arquitectura de AI Engineering de ALTA",
        },
      ],
    },

    architecture: {
      title:
        "El LLM interpreta. Python ejecuta y orquesta.",

      description:
        "La aplicación web funciona como capa de interacción. FastAPI expone servicios Python; el agente coordina herramientas controladas; RAG y embeddings recuperan contexto; PostgreSQL conserva datos e historial.",

      flow: [
        "Next.js / React / TypeScript",
        "FastAPI",
        "Python AI Engine",
        "AI Agent + Tool Orchestration",
        "RAG / Embeddings / Documents",
        "PostgreSQL / Supabase / pgvector",
      ],
    },

    process: {
      title:
        "Del contexto fragmentado a una respuesta estructurada y auditable.",

      description:
        "El flujo separa contexto clínico, interpretación del agente, ejecución de herramientas, validación del software y decisión profesional.",

      steps: [
        {
          number: "01",
          title:
            "Contexto del paciente",
          description:
            "Historial, consultas, exámenes, documentos, medicación, síntomas y evolución se reúnen en un contexto estructurado.",
        },
        {
          number: "02",
          title:
            "Recuperación",
          description:
            "El sistema identifica datos y documentos relevantes para la solicitud actual.",
        },
        {
          number: "03",
          title:
            "Interpretación",
          description:
            "El agente comprende la pregunta y determina qué información necesita investigar.",
        },
        {
          number: "04",
          title:
            "Selección de herramientas",
          description:
            "El agente elige herramientas de contexto, timeline, documentos, búsqueda, medicación, cálculos o resumen.",
        },
        {
          number: "05",
          title:
            "Ejecución controlada",
          description:
            "Funciones Python ejecutan las operaciones concretas. El LLM no controla directamente la infraestructura.",
        },
        {
          number: "06",
          title:
            "RAG + evidencia",
          description:
            "Documentos y fuentes relevantes se recuperan semánticamente antes de generar la respuesta.",
        },
        {
          number: "07",
          title:
            "Validación",
          description:
            "Pydantic, Zod, reglas y permisos comprueban estructura y límites.",
        },
        {
          number: "08",
          title:
            "Revisión profesional",
          description:
            "El profesional confirma, modifica o rechaza la información antes de una acción sensible.",
        },
        {
          number: "09",
          title:
            "Auditoría",
          description:
            "Tool calls, fuentes, contexto, versiones y decisiones permanecen trazables.",
        },
      ],
    },

    decisions: {
      title:
        "Autonomía del agente limitada por el software.",

      description:
        "El LLM interpreta y razona; Python ejecuta; las herramientas tienen límites claros; el software valida y el profesional conserva la decisión final.",

      items: [
        {
          number: "01",
          title:
            "Python como núcleo de inteligencia",
          description:
            "Agentes, workflows, documentos, RAG, embeddings, cálculos y evaluación se concentran en la capa Python.",
        },
        {
          number: "02",
          title:
            "Herramientas con responsabilidad específica",
          description:
            "El agente decide qué herramienta usar, pero el software define exactamente qué puede hacer.",
        },
        {
          number: "03",
          title:
            "Outputs estructurados",
          description:
            "Pydantic y Zod validan contratos antes de que los resultados entren en el producto.",
        },
        {
          number: "04",
          title:
            "Human-in-the-loop",
          description:
            "IA analiza → IA sugiere → software valida → profesional confirma → sistema ejecuta.",
        },
        {
          number: "05",
          title:
            "Arquitectura model-agnostic",
          description:
            "Modelos distintos pueden utilizarse para extracción, clasificación, embeddings y razonamiento.",
        },
        {
          number: "06",
          title:
            "Observabilidad de IA",
          description:
            "Latencia, costes, tokens, tool calls, errores, prompts, modelos y resultados permanecen observables.",
        },
      ],
    },

    stack: {
      title:
        "Una arquitectura de AI Engineering con Python en el centro.",

      description:
        "La stack separa aplicación web, servicios Python, agentes, retrieval, datos, validación y pruebas.",

      items: [
        "Python",
        "FastAPI",
        "Pydantic",
        "LangGraph / state machine",
        "Next.js + React",
        "TypeScript + Zod",
        "PostgreSQL + Supabase",
        "pgvector",
        "RAG + Embeddings",
        "PyMuPDF / pypdf",
        "Docker",
        "Pytest + Vitest + Playwright",
      ],
    },

    results: {
      title:
        "El núcleo técnico de ALTA está definido antes de la implementación completa.",

      description:
        "Como el proyecto está en arquitectura y construcción del MVP, estos indicadores representan capacidades proyectadas y no métricas de producción.",

      items: [
        {
          value: "9 TOOLS",
          label:
            "Herramientas previstas para contexto, timeline, documentos, evidencia, cálculos, medicación, resumen, generación y auditoría",
        },
        {
          value: "HITL",
          label:
            "Las acciones críticas requieren confirmación profesional",
        },
        {
          value:
            "MODEL-AGNOSTIC",
          label:
            "Arquitectura preparada para distintos modelos y proveedores",
        },
        {
          value: "RAG",
          label:
            "Recuperación de contexto clínico y documental antes de la generación",
        },
        {
          value:
            "AUDITABLE",
          label:
            "Tool calls, fuentes, versiones y decisiones permanecen trazables",
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
        "Clinical intelligence platform with an AI agent that turns fragmented context into structured investigation, evidence and work prepared for professional review.",
      tags: [
        "Clinical AI",
        "Agents",
        "RAG",
        "Python",
      ],
    },

    eyebrow:
      "CLINICAL AI / AGENTIC WORKFLOWS",

    title: "ALTA",

    subtitle:
      "Clinical intelligence that investigates the case before answering.",

    summary:
      "ALTA is a clinical intelligence platform designed to centralize patient history, consultations, exams, documents, medication and clinical evolution. The agent works over that context, identifies the information it needs, selects controlled tools, investigates the case and prepares structured responses for professional review.",

    overview: {
      role:
        "AI Engineering / Product Architecture",
      type:
        "Clinical AI / Agentic Workspace",
      status:
        "In development",
    },

    problem: {
      title:
        "The clinical information exists. The challenge is bringing it together in time to decide.",

      description:
        "Records, exams, PDFs, reports, notes, medication and previous consultations can be fragmented across different sources. ALTA transforms that material into structured, searchable clinical context.",
    },

    product: {
      title:
        "An agent that works on the case, not only on the question.",

      description:
        "The agent interprets the request, retrieves patient context, selects specific tools, executes controlled operations and combines results before presenting a response. The professional retains final authority over sensitive decisions.",

      visuals: [
        {
          number: "01",
          label:
            "ALTA / AGENT ORCHESTRATION",
          title: "ALTA",
          description:
            "The agent retrieves context, selects tools and investigates the case without unrestricted access to infrastructure or critical operations.",
          image: "/images/alta-one.png",
          alt:
            "ALTA clinical AI agent orchestration",
        },

        {
          number: "02",
          label:
            "ALTA / CLINICAL FLOW",
          title: "ALTA",
          description:
            "Clinical data moves through processing, structuring, context, agent tools, validation, professional review and audit.",
          image: "/images/alta-two.png",
          alt:
            "ALTA clinical intelligence flow",
        },

        {
          number: "03",
          label:
            "ALTA / CLINICAL CONTEXT",
          title: "ALTA",
          description:
            "History, consultations, exams, medication and documents form a longitudinal context the agent can investigate.",
          image: "/images/alta-tree.png",
          alt:
            "ALTA longitudinal clinical context",
        },

        {
          number: "04",
          label:
            "ALTA / AI ARCHITECTURE",
          title: "ALTA",
          description:
            "Next.js communicates with FastAPI and a Python core responsible for agents, tools, RAG, embeddings, document processing, validation and workflows.",
          image: "/images/alta-four.png",
          alt:
            "ALTA AI Engineering architecture",
        },
      ],
    },

    architecture: {
      title:
        "The LLM interprets. Python executes and orchestrates.",

      description:
        "The web application is the interaction layer. FastAPI exposes Python services; the agent coordinates controlled tools; RAG and embeddings retrieve context; PostgreSQL preserves data and history. Rules, permissions and validation remain outside the model.",

      flow: [
        "Next.js / React / TypeScript",
        "FastAPI",
        "Python AI Engine",
        "AI Agent + Tool Orchestration",
        "RAG / Embeddings / Documents",
        "PostgreSQL / Supabase / pgvector",
      ],
    },

    process: {
      title:
        "From fragmented context to a structured, auditable response.",

      description:
        "The flow separates clinical context, agent interpretation, tool execution, software validation and professional decision-making.",

      steps: [
        {
          number: "01",
          title:
            "Patient context",
          description:
            "History, consultations, exams, documents, medication, symptoms and clinical evolution are assembled into structured context.",
        },
        {
          number: "02",
          title:
            "Retrieval",
          description:
            "The system identifies data and documents relevant to the current request.",
        },
        {
          number: "03",
          title:
            "Interpretation",
          description:
            "The agent understands the request and determines what information still needs investigation.",
        },
        {
          number: "04",
          title:
            "Tool selection",
          description:
            "The agent chooses context, timeline, document, search, medication, calculation or summary tools.",
        },
        {
          number: "05",
          title:
            "Controlled execution",
          description:
            "Python functions execute concrete operations. The LLM does not receive unrestricted control over infrastructure.",
        },
        {
          number: "06",
          title:
            "RAG + evidence",
          description:
            "Relevant documents and authorized sources can be retrieved semantically before generation.",
        },
        {
          number: "07",
          title:
            "Validation",
          description:
            "Pydantic, Zod, rules, permissions and contracts check structure and boundaries.",
        },
        {
          number: "08",
          title:
            "Professional review",
          description:
            "The professional confirms, edits or rejects information before any sensitive action.",
        },
        {
          number: "09",
          title:
            "Audit",
          description:
            "Tool calls, sources, retrieved context, versions and decisions remain traceable.",
        },
      ],
    },

    decisions: {
      title:
        "Agent autonomy constrained by software.",

      description:
        "The LLM interprets and reasons; Python executes; tools have explicit boundaries; software validates; the professional retains final authority.",

      items: [
        {
          number: "01",
          title:
            "Python as the intelligence core",
          description:
            "Agents, workflows, document processing, RAG, embeddings, calculations, evaluation and clinical tools primarily live in Python.",
        },
        {
          number: "02",
          title:
            "Tools with explicit responsibilities",
          description:
            "The agent decides which tool to use, while software defines exactly what each function is allowed to do.",
        },
        {
          number: "03",
          title:
            "Structured outputs before free text",
          description:
            "Pydantic and Zod validate contracts before results enter the product.",
        },
        {
          number: "04",
          title:
            "Human-in-the-loop for critical actions",
          description:
            "AI analyzes → AI suggests → software validates → professional confirms → system executes.",
        },
        {
          number: "05",
          title:
            "Model-agnostic architecture",
          description:
            "Different models can be selected for extraction, classification, embeddings and reasoning without locking the product to one provider.",
        },
        {
          number: "06",
          title:
            "AI observability",
          description:
            "Latency, cost, tokens, tool calls, errors, prompt versions, model versions and tool results remain observable.",
        },
      ],
    },

    stack: {
      title:
        "An AI Engineering architecture with Python at the core.",

      description:
        "The stack separates the web application, Python services, agents, retrieval, data, validation and testing so the system remains controlled and evolvable.",

      items: [
        "Python",
        "FastAPI",
        "Pydantic",
        "LangGraph / state machine",
        "Next.js + React",
        "TypeScript + Zod",
        "PostgreSQL + Supabase",
        "pgvector",
        "RAG + Embeddings",
        "PyMuPDF / pypdf",
        "Docker",
        "Pytest + Vitest + Playwright",
      ],
    },

    results: {
      title:
        "ALTA's technical core is defined before full implementation.",

      description:
        "Because the project is currently in architecture and MVP construction, these indicators represent planned capabilities and engineering decisions rather than production metrics.",

      items: [
        {
          value: "9 TOOLS",
          label:
            "Planned tools for context, timeline, documents, evidence, calculations, medication, summaries, generation and audit",
        },
        {
          value: "HITL",
          label:
            "Critical actions depend on professional confirmation",
        },
        {
          value:
            "MODEL-AGNOSTIC",
          label:
            "Architecture prepared for different models and providers",
        },
        {
          value: "RAG",
          label:
            "Clinical and document context retrieval before generation",
        },
        {
          value:
            "AUDITABLE",
          label:
            "Tool calls, sources, versions and decisions remain traceable",
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
        "Plattform für klinische Intelligenz mit KI-Agent, die fragmentierten Kontext in strukturierte Untersuchung, Evidenz und professionell zu prüfende Arbeit überführt.",
      tags: [
        "Clinical AI",
        "Agents",
        "RAG",
        "Python",
      ],
    },

    eyebrow:
      "CLINICAL AI / AGENTIC WORKFLOWS",

    title: "ALTA",

    subtitle:
      "Klinische Intelligenz, die den Fall untersucht, bevor sie antwortet.",

    summary:
      "ALTA ist eine Plattform für klinische Intelligenz, die Patientenhistorie, Konsultationen, Untersuchungen, Dokumente, Medikation und klinische Entwicklung zentralisiert. Der Agent arbeitet auf diesem Kontext, wählt kontrollierte Tools aus, untersucht den Fall und bereitet strukturierte Antworten zur professionellen Prüfung vor.",

    overview: {
      role:
        "AI Engineering / Product Architecture",
      type:
        "Clinical AI / Agentic Workspace",
      status:
        "In Entwicklung",
    },

    problem: {
      title:
        "Die klinischen Informationen existieren. Die Herausforderung ist, sie rechtzeitig für eine Entscheidung zusammenzuführen.",

      description:
        "Patientenakten, Untersuchungen, PDFs, Berichte, Notizen, Medikation und frühere Konsultationen können über verschiedene Quellen verteilt sein. ALTA überführt dieses Material in strukturierten, durchsuchbaren klinischen Kontext.",
    },

    product: {
      title:
        "Ein Agent, der am Fall arbeitet und nicht nur auf die Frage antwortet.",

      description:
        "Der Agent interpretiert die Anfrage, ruft Patientenkontext ab, wählt spezifische Tools, führt kontrollierte Operationen aus und kombiniert Ergebnisse. Die endgültige Autorität bleibt beim medizinischen Fachpersonal.",

      visuals: [
        {
          number: "01",
          label:
            "ALTA / AGENT ORCHESTRATION",
          title: "ALTA",
          description:
            "Der Agent ruft Kontext ab, wählt Tools und untersucht den Fall ohne uneingeschränkten Zugriff auf Infrastruktur oder kritische Operationen.",
          image: "/images/alta-one.png",
          alt:
            "ALTA Orchestrierung des klinischen KI-Agenten",
        },

        {
          number: "02",
          label:
            "ALTA / CLINICAL FLOW",
          title: "ALTA",
          description:
            "Klinische Daten durchlaufen Verarbeitung, Strukturierung, Kontext, Agent-Tools, Validierung, professionelle Prüfung und Audit.",
          image: "/images/alta-two.png",
          alt:
            "ALTA Ablauf klinischer Intelligenz",
        },

        {
          number: "03",
          label:
            "ALTA / CLINICAL CONTEXT",
          title: "ALTA",
          description:
            "Historie, Konsultationen, Untersuchungen, Medikation und Dokumente bilden einen longitudinalen Kontext für die Untersuchung durch den Agenten.",
          image: "/images/alta-tree.png",
          alt:
            "ALTA longitudinaler klinischer Kontext",
        },

        {
          number: "04",
          label:
            "ALTA / AI ARCHITECTURE",
          title: "ALTA",
          description:
            "Next.js kommuniziert mit FastAPI und einem Python-Kern für Agenten, Tools, RAG, Embeddings, Dokumentverarbeitung, Validierung und Workflows.",
          image: "/images/alta-four.png",
          alt:
            "ALTA AI-Engineering-Architektur",
        },
      ],
    },

    architecture: {
      title:
        "Das LLM interpretiert. Python führt aus und orchestriert.",

      description:
        "Die Webanwendung ist die Interaktionsschicht. FastAPI stellt Python-Dienste bereit; der Agent koordiniert kontrollierte Tools; RAG und Embeddings rufen Kontext ab; PostgreSQL bewahrt Daten und Historie. Regeln, Berechtigungen und Validierung bleiben außerhalb des Modells.",

      flow: [
        "Next.js / React / TypeScript",
        "FastAPI",
        "Python AI Engine",
        "AI Agent + Tool Orchestration",
        "RAG / Embeddings / Documents",
        "PostgreSQL / Supabase / pgvector",
      ],
    },

    process: {
      title:
        "Von fragmentiertem Kontext zu einer strukturierten und auditierbaren Antwort.",

      description:
        "Der Ablauf trennt klinischen Kontext, Agenteninterpretation, Tool-Ausführung, Softwarevalidierung und professionelle Entscheidung.",

      steps: [
        {
          number: "01",
          title:
            "Patientenkontext",
          description:
            "Historie, Konsultationen, Untersuchungen, Dokumente, Medikation, Symptome und klinische Entwicklung werden strukturiert zusammengeführt.",
        },
        {
          number: "02",
          title:
            "Retrieval",
          description:
            "Das System identifiziert relevante Daten und Dokumente für die aktuelle Anfrage.",
        },
        {
          number: "03",
          title:
            "Interpretation",
          description:
            "Der Agent versteht die Anfrage und bestimmt, welche Informationen noch untersucht werden müssen.",
        },
        {
          number: "04",
          title:
            "Tool-Auswahl",
          description:
            "Der Agent wählt Tools für Kontext, Timeline, Dokumente, Suche, Medikation, Berechnung oder Zusammenfassung.",
        },
        {
          number: "05",
          title:
            "Kontrollierte Ausführung",
          description:
            "Python-Funktionen führen konkrete Operationen aus. Das LLM erhält keinen uneingeschränkten Zugriff auf die Infrastruktur.",
        },
        {
          number: "06",
          title:
            "RAG + Evidenz",
          description:
            "Relevante Dokumente und autorisierte Quellen können vor der Generierung semantisch abgerufen werden.",
        },
        {
          number: "07",
          title:
            "Validierung",
          description:
            "Pydantic, Zod, Regeln, Berechtigungen und Verträge prüfen Struktur und Grenzen.",
        },
        {
          number: "08",
          title:
            "Professionelle Prüfung",
          description:
            "Die Fachkraft bestätigt, bearbeitet oder verwirft Informationen vor sensiblen Aktionen.",
        },
        {
          number: "09",
          title:
            "Audit",
          description:
            "Tool Calls, Quellen, abgerufener Kontext, Versionen und Entscheidungen bleiben nachvollziehbar.",
        },
      ],
    },

    decisions: {
      title:
        "Agentenautonomie wird durch Software begrenzt.",

      description:
        "Das LLM interpretiert und schlussfolgert; Python führt aus; Tools haben explizite Grenzen; Software validiert; der Mensch behält die endgültige Autorität.",

      items: [
        {
          number: "01",
          title:
            "Python als Intelligenzkern",
          description:
            "Agenten, Workflows, Dokumentverarbeitung, RAG, Embeddings, Berechnungen, Evaluation und klinische Tools liegen primär in Python.",
        },
        {
          number: "02",
          title:
            "Tools mit expliziter Verantwortung",
          description:
            "Der Agent entscheidet, welches Tool verwendet wird, während die Software genau definiert, was jede Funktion tun darf.",
        },
        {
          number: "03",
          title:
            "Strukturierte Outputs vor freiem Text",
          description:
            "Pydantic und Zod validieren Verträge, bevor Ergebnisse ins Produkt gelangen.",
        },
        {
          number: "04",
          title:
            "Human-in-the-loop für kritische Aktionen",
          description:
            "KI analysiert → KI schlägt vor → Software validiert → Fachkraft bestätigt → System führt aus.",
        },
        {
          number: "05",
          title:
            "Model-agnostic Architektur",
          description:
            "Verschiedene Modelle können für Extraktion, Klassifikation, Embeddings und Reasoning eingesetzt werden.",
        },
        {
          number: "06",
          title:
            "KI-Observability",
          description:
            "Latenz, Kosten, Tokens, Tool Calls, Fehler, Prompt-Versionen, Modellversionen und Tool-Ergebnisse bleiben beobachtbar.",
        },
      ],
    },

    stack: {
      title:
        "Eine AI-Engineering-Architektur mit Python im Kern.",

      description:
        "Der Stack trennt Webanwendung, Python-Dienste, Agenten, Retrieval, Daten, Validierung und Tests.",

      items: [
        "Python",
        "FastAPI",
        "Pydantic",
        "LangGraph / state machine",
        "Next.js + React",
        "TypeScript + Zod",
        "PostgreSQL + Supabase",
        "pgvector",
        "RAG + Embeddings",
        "PyMuPDF / pypdf",
        "Docker",
        "Pytest + Vitest + Playwright",
      ],
    },

    results: {
      title:
        "Der technische Kern von ALTA ist vor der vollständigen Implementierung definiert.",

      description:
        "Da sich das Projekt in Architektur und MVP-Aufbau befindet, beschreiben diese Angaben geplante Fähigkeiten und Engineering-Entscheidungen statt Produktionsmetriken.",

      items: [
        {
          value: "9 TOOLS",
          label:
            "Geplante Tools für Kontext, Timeline, Dokumente, Evidenz, Berechnungen, Medikation, Zusammenfassung, Generierung und Audit",
        },
        {
          value: "HITL",
          label:
            "Kritische Aktionen benötigen professionelle Bestätigung",
        },
        {
          value:
            "MODEL-AGNOSTIC",
          label:
            "Architektur für verschiedene Modelle und Anbieter",
        },
        {
          value: "RAG",
          label:
            "Klinischer und dokumentbasierter Kontext vor der Generierung",
        },
        {
          value:
            "AUDITIERBAR",
          label:
            "Tool Calls, Quellen, Versionen und Entscheidungen bleiben nachvollziehbar",
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
  "project-01": "01",
  "project-02": "02",
  "project-03": "03",
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
  if (slug === "project-01") {
    return {
      number: "01",
      ...payPart[language],
    };
  }

  if (slug === "project-02") {
    return {
      number: "02",
      ...diaction[language],
    };
  }

  return {
    number: "03",
    ...alta[language],
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