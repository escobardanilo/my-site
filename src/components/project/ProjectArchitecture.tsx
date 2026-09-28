import type {
  ProjectContent,
  ProjectPageLabels,
} from "@/lib/projects";

type ProjectArchitectureProps = {
  project: ProjectContent;
  labels: ProjectPageLabels;
};

export function ProjectArchitecture({
  project,
  labels,
}: ProjectArchitectureProps) {
  return (
    <section className="project-section">
      <div className="container">
        <div className="project-section__heading">
          <span>04</span>
          <p>{labels.architecture}</p>
        </div>

        <div className="project-section__intro">
          <h2>{project.architecture.title}</h2>

          <p>
            {project.architecture.description}
          </p>
        </div>

        <div className="project-architecture">
          {project.architecture.flow.map(
            (item, index) => (
              <div
                className="project-architecture__item"
                key={`${item}-${index}`}
              >
                <span>
                  {String(index + 1).padStart(
                    2,
                    "0",
                  )}
                </span>

                <strong>{item}</strong>

                {index <
                  project.architecture.flow
                    .length -
                    1 && (
                  <span
                    className="project-architecture__arrow"
                    aria-hidden="true"
                  >
                    →
                  </span>
                )}
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}