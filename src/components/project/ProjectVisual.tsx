"use client";

import Image from "next/image";

import {
  useEffect,
  useState,
} from "react";

import type {
  ProjectContent,
  ProjectPageLabels,
} from "@/lib/projects";

type ProjectVisualProps = {
  project: ProjectContent;
  labels: ProjectPageLabels;
};

type Visual =
  ProjectContent["product"]["visuals"][number];

export function ProjectVisual({
  project,
  labels,
}: ProjectVisualProps) {
  const [activeVisual, setActiveVisual] =
    useState<Visual | null>(null);

  useEffect(() => {
    if (!activeVisual) {
      return;
    }

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow =
      "hidden";

    function handleKeyDown(
      event: KeyboardEvent,
    ) {
      if (event.key === "Escape") {
        setActiveVisual(null);
      }
    }

    window.addEventListener(
      "keydown",
      handleKeyDown,
    );

    return () => {
      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        "keydown",
        handleKeyDown,
      );
    };
  }, [activeVisual]);

  return (
    <>
      <section className="project-section project-section--visual">
        <div className="container">
          <div className="project-section__heading">
            <span>03</span>

            <p>{labels.product}</p>
          </div>

          <div className="project-section__intro">
            <h2>
              {project.product.title}
            </h2>

            <p>
              {project.product.description}
            </p>
          </div>

          <div
            className={
              project.title === "LIIO"
                ? "project-visuals project-visuals--liio"
                : "project-visuals"
            }
          >
            {project.product.visuals.map(
              (visual) => (
                <article
                  className={
                    project.title === "LIIO"
                      ? `project-visual project-visual--liio project-visual--liio-${visual.number}`
                      : "project-visual"
                  }
                  key={visual.number}
                >
                  <div className="project-visual__top">
                    <span>
                      {visual.number}
                    </span>

                    <span>
                      {visual.label}
                    </span>
                  </div>

                  <div className="project-visual__canvas">
                    {visual.image ? (
                      <button
                        type="button"
                        className="project-visual__image-button"
                        onClick={() =>
                          setActiveVisual(
                            visual,
                          )
                        }
                        aria-label={`Ampliar ${visual.label}`}
                      >
                        <Image
                          src={visual.image}
                          alt={visual.alt}
                          fill
                          sizes="(max-width: 900px) 100vw, 50vw"
                          className="project-visual__image"
                          priority={
                            visual.number ===
                            "01"
                          }
                        />

                        <span className="project-visual__expand">
                          ↗
                        </span>
                      </button>
                    ) : (
                      <span>
                        {visual.title}
                      </span>
                    )}
                  </div>

                  <p>
                    {visual.description}
                  </p>
                </article>
              ),
            )}
          </div>
        </div>
      </section>

      {activeVisual &&
        activeVisual.image && (
          <div
            className="project-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={
              activeVisual.label
            }
            onClick={() =>
              setActiveVisual(null)
            }
          >
            <div
              className="project-lightbox__dialog"
              onClick={(event) =>
                event.stopPropagation()
              }
            >
              <div className="project-lightbox__header">
                <div>
                  <span>
                    {activeVisual.number}
                  </span>

                  <span>
                    {activeVisual.label}
                  </span>
                </div>

                <button
                  type="button"
                  className="project-lightbox__close"
                  onClick={() =>
                    setActiveVisual(null)
                  }
                  aria-label="Fechar imagem"
                >
                  ×
                </button>
              </div>

              <div className="project-lightbox__image-wrapper">
                <Image
                  src={
                    activeVisual.image
                  }
                  alt={activeVisual.alt}
                  fill
                  sizes="95vw"
                  className="project-lightbox__image"
                  priority
                />
              </div>

              <p className="project-lightbox__caption">
                {
                  activeVisual.description
                }
              </p>
            </div>
          </div>
        )}
    </>
  );
}