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
  const [activeMedia, setActiveMedia] =
    useState<{
      src: string;
      alt: string;
      label: string;
      description: string;
      number: string;
    } | null>(null);

  useEffect(() => {
    if (!activeMedia) {
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
        setActiveMedia(null);
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
  }, [activeMedia]);

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

          <div className="project-visuals">
            {project.product.visuals.map(
              (visual) => (
                <article
                  className={`project-visual${visual.fullWidth ? " project-visual--full" : ""}`}
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
                    {visual.gallery &&
                    visual.gallery.length > 0 ? (
                      <div
                        className={`project-visual__gallery${visual.galleryLayout === "three-by-two" ? " project-visual__gallery--three-by-two" : ""}`}
                      >
                        {visual.gallery.map(
                          (
                            image,
                            index,
                          ) => (
                            <button
                              type="button"
                              className="project-visual__gallery-item"
                              key={image}
                              onClick={() =>
                                setActiveMedia({
                                  src: image,
                                  alt:
                                    visual.galleryAlts?.[
                                      index
                                    ] ?? visual.alt,
                                  label: visual.label,
                                  description:
                                    visual.description,
                                  number:
                                    `${visual.number}.${index + 1}`,
                                })
                              }
                              aria-label={`Ampliar imagem ${index + 1} de ${visual.label}`}
                            >
                              <Image
                                src={image}
                                alt={
                                  visual.galleryAlts?.[
                                    index
                                  ] ??
                                  visual.alt
                                }
                                fill
                                sizes="(max-width: 700px) 100vw, 33vw"
                                className="project-visual__gallery-image"
                              />

                              <span className="project-visual__expand">
                                ↗
                              </span>
                            </button>
                          ),
                        )}
                      </div>
                    ) : visual.image ? (
                      <button
                        type="button"
                        className="project-visual__image-button"
                        onClick={() =>
                          setActiveMedia({
                            src: visual.image as string,
                            alt: visual.alt,
                            label: visual.label,
                            description:
                              visual.description,
                            number: visual.number,
                          })
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

      {activeMedia && (
          <div
            className="project-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={
              activeMedia.label
            }
            onClick={() =>
              setActiveMedia(null)
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
                    {activeMedia.number}
                  </span>

                  <span>
                    {activeMedia.label}
                  </span>
                </div>

                <button
                  type="button"
                  className="project-lightbox__close"
                  onClick={() =>
                    setActiveMedia(null)
                  }
                  aria-label="Fechar imagem"
                >
                  ×
                </button>
              </div>

              <div className="project-lightbox__image-wrapper">
                <Image
                  src={
                    activeMedia.src
                  }
                  alt={activeMedia.alt}
                  fill
                  sizes="95vw"
                  className="project-lightbox__image"
                  priority
                />
              </div>

              <p className="project-lightbox__caption">
                {
                  activeMedia.description
                }
              </p>
            </div>
          </div>
        )}
    </>
  );
}