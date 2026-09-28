import type {
  ProjectContent,
  ProjectPageLabels,
} from "@/lib/projects";

type ProjectProcessProps = {
  project: ProjectContent;
  labels: ProjectPageLabels;
};

export function ProjectProcess({
  project,
  labels,
}: ProjectProcessProps) {
  return (
    <section className="project-section">
      <div className="container">
        <div className="project-section__heading">
          <span>05</span>
          <p>{labels.howItWorks}</p>
        </div>

        <div className="project-section__intro">
          <h2>{project.process.title}</h2>

          <p>{project.process.description}</p>
        </div>

        <div className="project-process">
          {project.process.steps.map(
            (step) => (
              <article
                className="project-process__item"
                key={step.number}
              >
                <span>{step.number}</span>

                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}