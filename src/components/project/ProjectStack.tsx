import type {
  ProjectContent,
  ProjectPageLabels,
} from "@/lib/projects";

type ProjectStackProps = {
  project: ProjectContent;
  labels: ProjectPageLabels;
};

export function ProjectStack({
  project,
  labels,
}: ProjectStackProps) {
  return (
    <section className="project-section">
      <div className="container">
        <div className="project-section__heading">
          <span>07</span>
          <p>{labels.stack}</p>
        </div>

        <div className="project-section__intro">
          <h2>{project.stack.title}</h2>

          <p>{project.stack.description}</p>
        </div>

        <div className="project-stack">
          {project.stack.items.map(
            (technology, index) => (
              <div
                className="project-stack__item"
                key={`${technology}-${index}`}
              >
                <span>
                  {String(index + 1).padStart(
                    2,
                    "0",
                  )}
                </span>

                <strong>{technology}</strong>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}