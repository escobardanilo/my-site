"use client";

import Image from "next/image";
import { useSitePreferences } from "@/context/SitePreferencesProvider";
import type { Language } from "@/lib/translations";

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
    role: "AI Engineer e Augmented Software Engineer",
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
    role: "AI Engineer and Augmented Software Engineer",
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
    role: "AI Engineer y Augmented Software Engineer",
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
    role: "AI Engineer und Augmented Software Engineer",
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
            <div className="about__copy">
              <p className="about__lead">
                Sou{" "}
                {language === "pt" ? (
                  <strong>
                    {about.role}
                  </strong>
                ) : language === "en" ? (
                  <>
                    I&apos;m an{" "}
                    <strong>
                      {about.role}
                    </strong>
                  </>
                ) : language === "es" ? (
                  <>
                    Soy{" "}
                    <strong>
                      {about.role}
                    </strong>
                  </>
                ) : (
                  <>
                    Ich bin{" "}
                    <strong>
                      {about.role}
                    </strong>
                  </>
                )}
                .{" "}
                {about.intro}
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