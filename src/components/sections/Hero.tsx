"use client";

import { useSitePreferences } from "@/context/SitePreferencesProvider";
import type { Language } from "@/lib/translations";

const heroManifesto: Record<Language, string[]> = {
  pt: [
    "Eu persigo problemas que ainda não têm uma solução óbvia.",
    "Minha trajetória sempre esteve ligada a entender como as coisas funcionam de verdade — operações, processos, sistemas, tecnologia e as decisões que existem por trás deles. Com o tempo, essa busca naturalmente encontrou a inteligência artificial.",
    "Não me interessa IA apenas como modelo, ferramenta ou tendência. Interessa-me o que acontece quando ela deixa de ser uma camada isolada e passa a fazer parte da própria estrutura de um sistema — conectada a dados, software, processos e pessoas.",
    "É nesse ponto que gosto de trabalhar: transformar complexidade em algo funcional.",
    "Construo produtos e sistemas onde engenharia e inteligência artificial trabalham juntas para automatizar, analisar, decidir, organizar e ampliar aquilo que pessoas e empresas conseguem fazer. Não para substituir pensamento ou experiência humana, mas para criar melhores condições para que ambos sejam usados onde realmente importam.",
    "Acredito que o futuro da IA não será definido apenas por modelos mais poderosos. Será definido pela capacidade de integrá-los ao mundo real com contexto, controlo, responsabilidade e propósito.",
    "Por isso, procuro construir coisas que tenham utilidade antes de aparência, estrutura antes de tendência e impacto antes de discurso.",
    "Ainda existe muito por descobrir, testar e construir.",
    "É exatamente isso que torna este momento interessante.",
    "O futuro não chega pronto. Nós o construímos.",
  ],

  es: [
    "Persigo problemas que todavía no tienen una solución obvia.",
    "Mi trayectoria siempre ha estado ligada a entender cómo funcionan realmente las cosas: operaciones, procesos, sistemas, tecnología y las decisiones que existen detrás de ellos. Con el tiempo, esa búsqueda encontró naturalmente la inteligencia artificial.",
    "No me interesa la IA solo como modelo, herramienta o tendencia. Me interesa lo que ocurre cuando deja de ser una capa aislada y pasa a formar parte de la propia estructura de un sistema, conectada a datos, software, procesos y personas.",
    "Es ahí donde me gusta trabajar: transformar complejidad en algo funcional.",
    "Construyo productos y sistemas donde ingeniería e inteligencia artificial trabajan juntas para automatizar, analizar, decidir, organizar y ampliar lo que personas y empresas pueden hacer. No para sustituir el pensamiento o la experiencia humana, sino para crear mejores condiciones para que ambos se utilicen donde realmente importan.",
    "Creo que el futuro de la IA no estará definido solo por modelos más potentes. Estará definido por la capacidad de integrarlos en el mundo real con contexto, control, responsabilidad y propósito.",
    "Por eso, busco construir cosas que tengan utilidad antes que apariencia, estructura antes que tendencia e impacto antes que discurso.",
    "Todavía queda mucho por descubrir, probar y construir.",
    "Eso es exactamente lo que hace interesante este momento.",
    "El futuro no llega terminado. Lo construimos.",
  ],

  en: [
    "I pursue problems that do not yet have an obvious solution.",
    "My path has always been tied to understanding how things actually work — operations, processes, systems, technology and the decisions behind them. Over time, that pursuit naturally led me to artificial intelligence.",
    "I am not interested in AI only as a model, tool or trend. I am interested in what happens when it stops being an isolated layer and becomes part of the structure of a system itself — connected to data, software, processes and people.",
    "That is where I like to work: turning complexity into something functional.",
    "I build products and systems where engineering and artificial intelligence work together to automate, analyze, decide, organize and expand what people and companies can do. Not to replace human thought or experience, but to create better conditions for both to be used where they matter most.",
    "I believe the future of AI will not be defined only by more powerful models. It will be defined by our ability to integrate them into the real world with context, control, responsibility and purpose.",
    "That is why I try to build things with usefulness before appearance, structure before trend and impact before rhetoric.",
    "There is still a great deal to discover, test and build.",
    "That is exactly what makes this moment interesting.",
    "The future does not arrive finished. We build it.",
  ],

  de: [
    "Ich verfolge Probleme, für die es noch keine offensichtliche Lösung gibt.",
    "Mein Weg war immer davon geprägt zu verstehen, wie Dinge tatsächlich funktionieren — Abläufe, Prozesse, Systeme, Technologie und die Entscheidungen dahinter. Mit der Zeit führte diese Suche ganz natürlich zur künstlichen Intelligenz.",
    "Mich interessiert KI nicht nur als Modell, Werkzeug oder Trend. Mich interessiert, was passiert, wenn sie keine isolierte Schicht mehr ist, sondern Teil der Struktur eines Systems wird — verbunden mit Daten, Software, Prozessen und Menschen.",
    "Genau dort arbeite ich am liebsten: Komplexität in etwas Funktionales zu verwandeln.",
    "Ich entwickle Produkte und Systeme, in denen Engineering und künstliche Intelligenz zusammenarbeiten, um zu automatisieren, zu analysieren, zu entscheiden, zu organisieren und die Möglichkeiten von Menschen und Unternehmen zu erweitern. Nicht um menschliches Denken oder Erfahrung zu ersetzen, sondern um bessere Bedingungen dafür zu schaffen, dass beides dort eingesetzt wird, wo es wirklich zählt.",
    "Ich glaube, dass die Zukunft der KI nicht allein durch leistungsfähigere Modelle bestimmt wird. Entscheidend wird sein, wie gut wir sie mit Kontext, Kontrolle, Verantwortung und Zweck in die reale Welt integrieren.",
    "Deshalb versuche ich Dinge zu bauen, bei denen Nutzen vor Erscheinung, Struktur vor Trend und Wirkung vor Rhetorik steht.",
    "Es gibt noch viel zu entdecken, zu testen und zu bauen.",
    "Genau das macht diesen Moment interessant.",
    "Die Zukunft kommt nicht fertig an. Wir bauen sie.",
  ],
};

export function Hero() {
  const { copy, language } =
    useSitePreferences();

  return (
    <section
      className="hero"
      id="home"
    >
      <div className="container hero__inner">
        <div className="hero__top">
          <p className="hero__eyebrow">
            {copy.hero.eyebrow}
          </p>
        </div>

        <div className="hero__main">
          <h1 className="hero__title">
            Danilo Escobar
          </h1>
        </div>

        <div className="hero__manifesto">
          {heroManifesto[language].map(
            (paragraph) => (
              <p key={paragraph}>
                {paragraph}
              </p>
            ),
          )}
        </div>

        <div className="hero__footer">
          <a
            href="/#projects"
            className="hero__link"
          >
            {
              copy.hero
                .selectedWork
            }

            <span aria-hidden="true">
              ↘
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
