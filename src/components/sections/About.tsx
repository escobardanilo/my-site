"use client";

import Image from "next/image";
import { useSitePreferences } from "@/context/SitePreferencesProvider";
import type { Language } from "@/lib/translations";

const manifestoCopy: Record<
  Language,
  {
    label: string;
    title: string;
    paragraphs: string[];
  }
> = {
  pt: {
    label: "MANIFESTO",
    title:
      "Eu persigo problemas que ainda não têm uma solução óbvia.",
    paragraphs: [
      "Minha trajetória sempre esteve ligada a entender como as coisas funcionam de verdade — operações, processos, sistemas, tecnologia e as decisões que existem por trás deles. Com o tempo, essa busca naturalmente encontrou a inteligência artificial.",
      "Não me interessa IA apenas como modelo, ferramenta ou tendência. Interessa-me o que acontece quando ela deixa de ser uma camada isolada e passa a fazer parte da própria estrutura de um sistema — conectada a dados, software, processos e pessoas.",
      "É nesse ponto que gosto de trabalhar: transformar complexidade em algo funcional.",
      "Construo produtos e sistemas onde engenharia e inteligência artificial trabalham juntas para automatizar, analisar, decidir, organizar e ampliar aquilo que pessoas e empresas conseguem fazer. Não para substituir pensamento ou experiência humana, mas para criar melhores condições para que ambos sejam usados onde realmente importam.",
      "Acredito que o futuro da IA não será definido apenas por modelos mais poderosos. Será definido pela capacidade de integrá-los ao mundo real com contexto, controlo, responsabilidade e propósito.",
      "Por isso, procuro construir coisas que tenham utilidade antes de aparência, estrutura antes de tendência e impacto antes de discurso.",
      "Ainda existe muito por descobrir, testar e construir. É exatamente isso que torna este momento interessante. O futuro não chega pronto. Nós o construímos.",
    ],
  },
  en: {
    label: "MANIFESTO",
    title:
      "I pursue problems that do not yet have an obvious solution.",
    paragraphs: [
      "My path has always been tied to understanding how things actually work — operations, processes, systems, technology and the decisions behind them. Over time, that pursuit naturally led me to artificial intelligence.",
      "I am not interested in AI only as a model, tool or trend. I am interested in what happens when it stops being an isolated layer and becomes part of the structure of a system itself — connected to data, software, processes and people.",
      "That is where I like to work: turning complexity into something functional.",
      "I build products and systems where engineering and artificial intelligence work together to automate, analyze, decide, organize and expand what people and companies can do. Not to replace human thought or experience, but to create better conditions for both to be used where they matter most.",
      "I believe the future of AI will not be defined only by more powerful models. It will be defined by our ability to integrate them into the real world with context, control, responsibility and purpose.",
      "That is why I try to build things with usefulness before appearance, structure before trend and impact before rhetoric.",
      "There is still a great deal to discover, test and build. That is exactly what makes this moment interesting. The future does not arrive finished. We build it.",
    ],
  },
  es: {
    label: "MANIFIESTO",
    title:
      "Persigo problemas que todavía no tienen una solución obvia.",
    paragraphs: [
      "Mi trayectoria siempre ha estado ligada a entender cómo funcionan realmente las cosas: operaciones, procesos, sistemas, tecnología y las decisiones que existen detrás de ellos. Con el tiempo, esa búsqueda encontró naturalmente la inteligencia artificial.",
      "No me interesa la IA solo como modelo, herramienta o tendencia. Me interesa lo que ocurre cuando deja de ser una capa aislada y pasa a formar parte de la propia estructura de un sistema, conectada a datos, software, procesos y personas.",
      "Es ahí donde me gusta trabajar: transformar complejidad en algo funcional.",
      "Construyo productos y sistemas donde ingeniería e inteligencia artificial trabajan juntas para automatizar, analizar, decidir, organizar y ampliar lo que personas y empresas pueden hacer. No para sustituir el pensamiento o la experiencia humana, sino para crear mejores condiciones para que ambos se utilicen donde realmente importan.",
      "Creo que el futuro de la IA no estará definido solo por modelos más potentes. Estará definido por la capacidad de integrarlos en el mundo real con contexto, control, responsabilidad y propósito.",
      "Por eso, busco construir cosas que tengan utilidad antes que apariencia, estructura antes que tendencia e impacto antes que discurso.",
      "Todavía queda mucho por descubrir, probar y construir. Eso es exactamente lo que hace interesante este momento. El futuro no llega terminado. Lo construimos.",
    ],
  },
  de: {
    label: "MANIFEST",
    title:
      "Ich verfolge Probleme, für die es noch keine offensichtliche Lösung gibt.",
    paragraphs: [
      "Mein Weg war immer davon geprägt zu verstehen, wie Dinge tatsächlich funktionieren — Abläufe, Prozesse, Systeme, Technologie und die Entscheidungen dahinter. Mit der Zeit führte diese Suche ganz natürlich zur künstlichen Intelligenz.",
      "Mich interessiert KI nicht nur als Modell, Werkzeug oder Trend. Mich interessiert, was passiert, wenn sie keine isolierte Schicht mehr ist, sondern Teil der Struktur eines Systems wird — verbunden mit Daten, Software, Prozessen und Menschen.",
      "Genau dort arbeite ich am liebsten: Komplexität in etwas Funktionales zu verwandeln.",
      "Ich entwickle Produkte und Systeme, in denen Engineering und künstliche Intelligenz zusammenarbeiten, um zu automatisieren, zu analysieren, zu entscheiden, zu organisieren und die Möglichkeiten von Menschen und Unternehmen zu erweitern. Nicht um menschliches Denken oder Erfahrung zu ersetzen, sondern um bessere Bedingungen dafür zu schaffen, dass beides dort eingesetzt wird, wo es wirklich zählt.",
      "Ich glaube, dass die Zukunft der KI nicht allein durch leistungsfähigere Modelle bestimmt wird. Entscheidend wird sein, wie gut wir sie mit Kontext, Kontrolle, Verantwortung und Zweck in die reale Welt integrieren.",
      "Deshalb versuche ich Dinge zu bauen, bei denen Nutzen vor Erscheinung, Struktur vor Trend und Wirkung vor Rhetorik steht.",
      "Es gibt noch viel zu entdecken, zu testen und zu bauen. Genau das macht diesen Moment interessant. Die Zukunft kommt nicht fertig an. Wir bauen sie.",
    ],
  },
};

const aboutCopy: Record<
  Language,
  {
    role: string;
    intro: string;
    second: string;
    thirdBefore: string;
    thirdEmphasis: string;
    contactCta: string;
  }
> = {
  pt: {
    role: "AI Engineer e Creative Technologist",
    intro:
      "O meu trabalho parte de uma pergunta simples: o que pode ser feito melhor quando software e inteligência artificial deixam de ser apenas ferramentas e passam a participar do próprio trabalho?",
    second:
      "É a partir daí que desenvolvo produtos que ajudam pessoas a investigar, decidir, executar e compreender melhor processos complexos. Alguns exigem IA, outros exigem regras, dados, automação ou simplesmente uma arquitetura de software bem pensada. O importante é que cada componente tenha uma função clara e produza valor real no uso.",
    thirdBefore:
      "A minha experiência em operações industriais trouxe-me uma visão que levo para a engenharia: tecnologia não existe isolada. Ela entra em processos que já têm pessoas, responsabilidades, restrições, erros e decisões. É nesse espaço que procuro construir — ",
    thirdEmphasis:
      "entre o que o software consegue fazer e o que realmente melhora a forma de trabalhar.",
    contactCta: "Contacte-me",
  },
  en: {
    role: "AI Engineer and Creative Technologist",
    intro:
      "My work starts with a simple question: what can be done better when software and artificial intelligence stop being just tools and start taking part in the work itself?",
    second:
      "From there, I build products that help people investigate, decide, execute and better understand complex processes. Some require AI, others require rules, data, automation or simply well-designed software architecture. What matters is that each component has a clear function and creates real value in use.",
    thirdBefore:
      "My experience in industrial operations has shaped a perspective that I bring into engineering: technology does not exist in isolation. It enters processes that already involve people, responsibilities, constraints, errors and decisions. That is the space where I choose to build — ",
    thirdEmphasis:
      "between what software can do and what actually improves the way people work.",
    contactCta: "Get in touch",
  },
  es: {
    role: "AI Engineer y Creative Technologist",
    intro:
      "Mi trabajo parte de una pregunta simple: ¿qué puede hacerse mejor cuando el software y la inteligencia artificial dejan de ser solo herramientas y pasan a formar parte del propio trabajo?",
    second:
      "A partir de ahí desarrollo productos que ayudan a las personas a investigar, decidir, ejecutar y comprender mejor procesos complejos. Algunos requieren IA, otros reglas, datos, automatización o simplemente una arquitectura de software bien diseñada. Lo importante es que cada componente tenga una función clara y produzca valor real en su uso.",
    thirdBefore:
      "Mi experiencia en operaciones industriales me ha dado una perspectiva que llevo a la ingeniería: la tecnología no existe de forma aislada. Entra en procesos que ya tienen personas, responsabilidades, restricciones, errores y decisiones. Es en ese espacio donde busco construir — ",
    thirdEmphasis:
      "entre lo que el software puede hacer y lo que realmente mejora la forma de trabajar.",
    contactCta: "Contactar",
  },
  de: {
    role: "AI Engineer und Creative Technologist",
    intro:
      "Meine Arbeit beginnt mit einer einfachen Frage: Was lässt sich besser machen, wenn Software und künstliche Intelligenz nicht mehr nur Werkzeuge sind, sondern Teil der eigentlichen Arbeit werden?",
    second:
      "Von dort aus entwickle ich Produkte, die Menschen dabei unterstützen, komplexe Prozesse zu untersuchen, Entscheidungen zu treffen, Aufgaben auszuführen und Zusammenhänge besser zu verstehen. Manche benötigen KI, andere Regeln, Daten, Automatisierung oder einfach eine gut durchdachte Softwarearchitektur. Entscheidend ist, dass jede Komponente eine klare Funktion erfüllt und im realen Einsatz einen konkreten Wert schafft.",
    thirdBefore:
      "Meine Erfahrung in industriellen Abläufen prägt meine Arbeit als Engineer: Technologie existiert nicht isoliert. Sie wird Teil von Prozessen, in denen bereits Menschen, Verantwortlichkeiten, Einschränkungen, Fehler und Entscheidungen existieren. Genau in diesem Raum möchte ich Systeme entwickeln — ",
    thirdEmphasis:
      "zwischen dem, was Software leisten kann, und dem, was die Art zu arbeiten tatsächlich verbessert.",
    contactCta: "Kontakt aufnehmen",
  },
};

export function About() {
  const {
    copy,
    language,
  } = useSitePreferences();

  const about =
    aboutCopy[language];

  const manifesto =
    manifestoCopy[language];

  return (
    <section
      className="about about--combined"
      id="about"
    >
      <div className="container about-combined__container">
        <div className="about-combined__manifesto">
          <div className="about-combined__meta">
            <span>00</span>
            <span>{manifesto.label}</span>
          </div>

          <h2 className="about-combined__manifesto-title">
            {manifesto.title}
          </h2>

          <div className="about-combined__manifesto-copy">
            {manifesto.paragraphs.map(
              (paragraph) => (
                <p key={paragraph}>
                  {paragraph}
                </p>
              ),
            )}
          </div>
        </div>

        <div className="about-combined__about">
          <div className="about-combined__about-text">
            <div className="about-combined__meta">
              <span>05</span>
              <span>
                {copy.about.eyebrow}
              </span>
            </div>

            <div className="about__copy">
              <p className="about__lead">
              {language === "pt" ? (
                <>
                  Sou{" "}
                  <strong>
                    {about.role}
                  </strong>
                  .{" "}
                  {about.intro}
                </>
              ) : language === "en" ? (
                <>
                  I&apos;m an{" "}
                  <strong>
                    {about.role}
                  </strong>
                  .{" "}
                  {about.intro}
                </>
              ) : language === "es" ? (
                <>
                  Soy{" "}
                  <strong>
                    {about.role}
                  </strong>
                  .{" "}
                  {about.intro}
                </>
              ) : (
                <>
                  Ich bin{" "}
                  <strong>
                    {about.role}
                  </strong>
                  .{" "}
                  {about.intro}
                </>
              )}
            </p>

            <p className="about__paragraph">
              {about.second}
            </p>

              <p className="about__paragraph">
                {about.thirdBefore}
                <strong>
                  {about.thirdEmphasis}
                </strong>
              </p>
            </div>

            <a
              className="about__cta"
              href="mailto:d.escobar-016@hotmail.com"
            >
              <span>
                {about.contactCta}
              </span>

              <span aria-hidden="true">
                ↗
              </span>
            </a>
          </div>

          <div className="about-combined__portrait">
            <Image
              src="/images/escobar-portrait.png"
              alt="Danilo Escobar"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              className="about-combined__image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
