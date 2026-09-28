import type {
  ProjectContent,
  ProjectPageLabels,
} from "@/lib/projects";

type ProjectResultsProps = {
  project: ProjectContent;
  labels: ProjectPageLabels;
};

export function ProjectResults({
  project,
  labels,
}: ProjectResultsProps) {
  return (
    <section className="project-section">
      <div className="container">
        <div className="project-section__heading">
          <span>08</span>
          <p>{labels.results}</p>
        </div>

        <div className="project-section__intro">
          <h2>{project.results.title}</h2>

          <p>{project.results.description}</p>
        </div>

        <div className="project-results">
          {project.results.items.map(
            (item) => (
              <article
                className="project-result"
                key={item.value}
              >
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ),
          )}
        </div>

        <div className="project-links">
          {project.links.github ? (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <span>{labels.github}</span>
              <span aria-hidden="true">↗</span>
            </a>
          ) : (
            <div>
              <span>{labels.github}</span>
              <small>
                {labels.comingSoon}
              </small>
            </div>
          )}

          {project.links.live ? (
            <a
              href={project.links.live}
              target="_blank"
              rel="noreferrer"
            >
              <span>
                {labels.liveProduct}
              </span>

              <span aria-hidden="true">↗</span>
            </a>
          ) : (
            <div>
              <span>
                {labels.liveProduct}
              </span>

              <small>
                {labels.comingSoon}
              </small>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}