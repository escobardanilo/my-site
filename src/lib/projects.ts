import type { Language } from "@/lib/translations";

export const projectSlugs = [
  "paypart",
  "liio",
  "alta",
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
      github:
        "https://github.com/escobardanilo/paypart",
      live:
        "https://paypart.vercel.app/",
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
        "Tutor de aprendizagem com IA para crianças e adolescentes, com política pedagógica explícita, avaliação antes da entrega e contexto de sessão.",
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
      "Um sistema de aprendizagem com IA desenhado para orientar raciocínio, preservar contexto e controlar o que chega ao aluno.",

    summary:
      "LIIO explora uma questão de produto concreta: como usar modelos generativos na aprendizagem sem transformar o tutor num gerador de respostas. O sistema combina contexto de sessão, política pedagógica e avaliação server-side para decidir como responder e quando bloquear, corrigir ou simplificar uma saída. A arquitetura foi pensada para evoluir com novas capacidades dos modelos e novas formas de interação educativa, sem depender de um único prompt ou comportamento fixo.",

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
        "Em educação, a resposta mais provável nem sempre é a mais útil. Ela pode resolver o exercício pelo aluno, ignorar o nível de compreensão ou repetir uma estratégia que já falhou. O LIIO trata cada interação como parte de uma sessão de aprendizagem: identifica a intenção pedagógica, preserva o problema em contexto e separa a geração da decisão de entregar a resposta.",
    },

    product: {
      title:
        "Homework Mode concentra a experiência funcional atual.",

      description:
        "O núcleo trabalha com três comportamentos pedagógicos — EXPLAIN, GUIDE e CHECK — usados apenas como política interna para distinguir explicar um conceito, orientar um raciocínio e avaliar uma tentativa. A interface continua simples; a complexidade fica na camada de decisão.",

      visuals: [
        {
          number: "01",
          label:
            "LIIO / LEARNING SYSTEM",

          title: "LIIO",

          description:
            "O produto é apresentado como tutor de aprendizagem, não como chatbot genérico. O foco está na relação entre contexto, intenção pedagógica e resposta controlada.",

          image:
            "/images/liio-icon.svg",

          alt:
            "Marca LIIO, sistema de aprendizagem com IA",
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
        "AI learning tutor for children and teenagers with explicit pedagogical policy, pre-delivery evaluation and session context.",
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
      "An AI learning system designed to guide reasoning, preserve context and control what reaches the learner.",

    summary:
      "LIIO explores a concrete product problem: how to use generative models in learning without turning the tutor into an answer generator. The system combines session context, pedagogical policy and server-side evaluation to decide how to respond and when to block, correct or simplify an output. Its architecture is designed to evolve with new model capabilities and new forms of educational interaction without depending on a single prompt or fixed behavior.",

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
        "In education, the most likely answer is not always the most useful one. It may solve the exercise for the learner, miss their level of understanding or repeat a strategy that already failed. LIIO treats each interaction as part of a learning session: it identifies pedagogical intent, preserves the original problem in context and separates generation from the decision to deliver the response.",
    },

    product: {
      title:
        "Homework Mode is the current functional core.",

      description:
        "The core uses three pedagogical behaviors — EXPLAIN, GUIDE and CHECK — only as internal policy for distinguishing concept explanation, guided reasoning and attempt review. The interface stays simple; the complexity lives in the decision layer.",

      visuals: [
        {
          number: "01",
          label:
            "LIIO / LEARNING SYSTEM",

          title: "LIIO",

          description:
            "The product is positioned as a learning tutor rather than a generic chatbot. The focus is the relationship between context, pedagogical intent and controlled response delivery.",

          image:
            "/images/liio-icon.svg",

          alt:
            "LIIO AI learning system mark",
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
        "Tutor de aprendizaje con IA para niños y adolescentes con política pedagógica explícita, evaluación antes de la entrega y contexto de sesión.",
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
      "Un sistema de aprendizaje con IA diseñado para guiar el razonamiento, preservar contexto y controlar lo que llega al alumno.",

    summary:
      "LIIO explora un problema de producto concreto: cómo utilizar modelos generativos en aprendizaje sin convertir el tutor en un generador de respuestas. Combina contexto de sesión, política pedagógica y evaluación server-side, con una arquitectura preparada para evolucionar junto con nuevas capacidades de los modelos y nuevas formas de interacción educativa.",

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
        "En educación, la respuesta más probable no siempre es la más útil. LIIO trata cada interacción como parte de una sesión de aprendizaje, conserva el problema original en contexto y separa generación de entrega.",
    },

    product: {
      title:
        "Homework Mode es el núcleo funcional actual.",

      description:
        "El sistema utiliza tres comportamientos pedagógicos — EXPLAIN, GUIDE y CHECK — como política interna para diferenciar explicación, orientación y revisión de intentos.",

      visuals: [
        {
          number: "01",
          label:
            "LIIO / LEARNING SYSTEM",
          title: "LIIO",
          description:
            "Tutor de aprendizaje centrado en contexto, intención pedagógica y entrega controlada.",
          image:
            "/images/liio-icon.svg",
          alt:
            "Marca LIIO",
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
        "KI-Lerntutor für Kinder und Jugendliche mit expliziter pädagogischer Policy, Bewertung vor der Ausgabe und Sitzungskontext.",
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
      "Ein KI-Lernsystem, das Denken anleitet, Kontext bewahrt und kontrolliert, was den Lernenden erreicht.",

    summary:
      "LIIO untersucht ein konkretes Produktproblem: Wie lassen sich generative Modelle beim Lernen einsetzen, ohne den Tutor zu einem Antwortgenerator zu machen? Das System verbindet Sitzungskontext, pädagogische Policy und serverseitige Bewertung und ist so aufgebaut, dass es mit neuen Modellfähigkeiten und neuen Formen digitaler Lerninteraktion weiterentwickelt werden kann.",

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
        "Beim Lernen ist die wahrscheinlichste Antwort nicht immer die nützlichste. LIIO behandelt jede Interaktion als Teil einer Lernsitzung, bewahrt die ursprüngliche Aufgabe im Kontext und trennt Generierung von Ausgabe.",
    },

    product: {
      title:
        "Homework Mode ist der aktuelle funktionale Kern.",

      description:
        "Das System nutzt drei pädagogische Verhaltensweisen — EXPLAIN, GUIDE und CHECK — als interne Policy für Erklärung, angeleitetes Denken und Prüfung eines Versuchs.",

      visuals: [
        {
          number: "01",
          label:
            "LIIO / LEARNING SYSTEM",
          title: "LIIO",
          description:
            "Lerntutor mit Fokus auf Kontext, pädagogische Absicht und kontrollierte Antwortausgabe.",
          image:
            "/images/liio-icon.svg",
          alt:
            "LIIO Marke",
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
        "Agentic AI",
        "Python",
        "RAG",
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
        "Agentic AI",
        "Python",
        "RAG",
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
        "Agentic AI",
        "Python",
        "RAG",
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
        "Agentic AI",
        "Python",
        "RAG",
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
  paypart: "01",
  liio: "02",
  alta: "03",
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