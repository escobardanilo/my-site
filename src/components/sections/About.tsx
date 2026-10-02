"use client";

import Image from "next/image";

import { useSitePreferences } from "@/context/SitePreferencesProvider";
import type { Language } from "@/lib/translations";

const aboutCopy: Record<
  Language,
  {
    role: string;
    paragraphs: string[];
    emphasis: string;
  }
> = {
  pt: {
    role: "AI Engineer",
    paragraphs: [
      "Trabalho na ligação entre inteligência artificial, software, dados e processos. Interessa-me menos o modelo isolado e mais o sistema que existe à sua volta: de onde vem a informação, que ferramentas podem ser utilizadas, que regras precisam de ser respeitadas e o que acontece depois de uma resposta ser gerada.",
      "Essa abordagem também se estende ao Marketing. MarTech, para mim, não é apenas utilizar ferramentas de Marketing, mas construir e conectar a infraestrutura por trás delas — CRM, analytics, comportamento, segmentação, campanhas, dados e modelos capazes de transformar sinais dispersos em contexto para decisão.",
      "Em Automation, o princípio é semelhante: agentes, APIs, workflows, dados e sistemas precisam trabalhar em conjunto para reduzir tarefas repetitivas, coordenar operações e permitir que pessoas intervenham onde julgamento, responsabilidade ou contexto realmente importam.",
      "A minha experiência em Marketing e operações industriais influencia diretamente essa forma de trabalhar. Antes de automatizar um processo, procuro entender como ele funciona, onde a informação circula, quem decide, onde surgem erros e quais partes realmente beneficiam de software ou IA.",
    ],
    emphasis:
      "É nesse espaço entre tecnologia, Marketing e operação que estou a construir o meu trabalho.",
  },

  es: {
    role: "AI Engineer",
    paragraphs: [
      "Trabajo en la conexión entre inteligencia artificial, software, datos y procesos. Me interesa menos el modelo aislado y más el sistema que existe a su alrededor: de dónde viene la información, qué herramientas pueden utilizarse, qué reglas deben respetarse y qué ocurre después de generar una respuesta.",
      "Ese enfoque también se extiende al Marketing. Para mí, MarTech no significa simplemente utilizar herramientas de Marketing, sino construir y conectar la infraestructura que hay detrás: CRM, analytics, comportamiento, segmentación, campañas, datos y modelos capaces de transformar señales dispersas en contexto para decidir.",
      "En Automation, el principio es similar: agentes, APIs, workflows, datos y sistemas deben trabajar juntos para reducir tareas repetitivas, coordinar operaciones y permitir que las personas intervengan donde el juicio, la responsabilidad o el contexto realmente importan.",
      "Mi experiencia en Marketing y operaciones industriales influye directamente en esta forma de trabajar. Antes de automatizar un proceso, busco entender cómo funciona, por dónde circula la información, quién decide, dónde aparecen errores y qué partes realmente se benefician de software o IA.",
    ],
    emphasis:
      "Es en ese espacio entre tecnología, Marketing y operación donde estoy construyendo mi trabajo.",
  },

  en: {
    role: "AI Engineer",
    paragraphs: [
      "I work at the intersection of artificial intelligence, software, data and processes. I am less interested in the model in isolation than in the system around it: where information comes from, which tools can be used, which rules must be enforced and what happens after a response is generated.",
      "That approach also extends to Marketing. For me, MarTech is not simply about using Marketing tools; it is about building and connecting the infrastructure behind them — CRM, analytics, behavior, segmentation, campaigns, data and models that turn scattered signals into decision context.",
      "Automation follows the same principle: agents, APIs, workflows, data and systems need to work together to reduce repetitive work, coordinate operations and let people step in where judgment, responsibility or context actually matter.",
      "My experience in Marketing and industrial operations directly shapes how I approach this work. Before automating a process, I try to understand how it works, where information moves, who decides, where errors appear and which parts genuinely benefit from software or AI.",
    ],
    emphasis:
      "That space between technology, Marketing and operations is where I am building my work.",
  },

  de: {
    role: "AI Engineer",
    paragraphs: [
      "Ich arbeite an der Verbindung von künstlicher Intelligenz, Software, Daten und Prozessen. Mich interessiert weniger das isolierte Modell als das System darum herum: Woher Informationen kommen, welche Tools genutzt werden dürfen, welche Regeln gelten und was nach einer generierten Antwort passiert.",
      "Dieser Ansatz gilt auch für Marketing. MarTech bedeutet für mich nicht nur, Marketing-Tools zu nutzen, sondern die Infrastruktur dahinter zu bauen und zu verbinden — CRM, Analytics, Verhalten, Segmentierung, Kampagnen, Daten und Modelle, die verteilte Signale in Entscheidungskontext überführen.",
      "Bei Automation gilt dasselbe Prinzip: Agenten, APIs, Workflows, Daten und Systeme müssen zusammenspielen, um repetitive Arbeit zu reduzieren, Abläufe zu koordinieren und Menschen dort einzubeziehen, wo Urteil, Verantwortung oder Kontext entscheidend sind.",
      "Meine Erfahrung in Marketing und industriellen Abläufen prägt diese Arbeitsweise direkt. Bevor ich einen Prozess automatisiere, versuche ich zu verstehen, wie er funktioniert, wo Informationen fließen, wer entscheidet, wo Fehler entstehen und welche Teile tatsächlich von Software oder KI profitieren.",
    ],
    emphasis:
      "Genau in diesem Raum zwischen Technologie, Marketing und Operations entwickle ich meine Arbeit weiter.",
  },
};

export function About() {
  const {
    copy,
    language,
  } = useSitePreferences();

  const about =
    aboutCopy[language];

  return (
    <section
      className="about"
      id="about"
    >
      <div className="container">
        <div className="about__header">
          <span className="about__index">
            05
          </span>

          <span className="about__eyebrow">
            {copy.about.eyebrow}
          </span>
        </div>

        <div className="about__layout">
          <div className="about__content">
            <h2 className="about__title">
              {
                copy.about.title
              }
            </h2>

            <div className="about__copy">
              <p className="about__lead">
                {language === "pt"
                  ? "Sou "
                  : language === "es"
                    ? "Soy "
                    : language === "en"
                      ? "I'm an "
                      : "Ich bin "}
                <strong>
                  {about.role}
                </strong>
                .
              </p>

              {about.paragraphs.map(
                (paragraph) => (
                  <p
                    className="about__paragraph"
                    key={paragraph}
                  >
                    {paragraph}
                  </p>
                ),
              )}

              <p className="about__paragraph">
                <strong>
                  {about.emphasis}
                </strong>
              </p>
            </div>

            <a
              className="about__cta"
              href="#projects"
            >
              <span>
                {
                  copy.hero
                    .selectedWork
                }
              </span>

              <span aria-hidden="true">
                ↗
              </span>
            </a>
          </div>

          <div className="about__portrait">
            <Image
              src="/images/escobar-portrait.png"
              alt="Danilo Escobar"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              className="about__image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
