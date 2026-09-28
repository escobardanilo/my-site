import type {
  ProjectContent,
  ProjectPageLabels,
} from "@/lib/projects";

type ProjectProblemProps = {
  project: ProjectContent;
  labels: ProjectPageLabels;
};

export function ProjectProblem({
  project,
  labels,
}: ProjectProblemProps) {
  return (
    <section className="project-section">
      <div className="container">
        <div className="project-section__heading">
          <span>02</span>
          <p>{labels.problem}</p>
        </div>

        <div className="project-problem">
          <h2>{project.problem.title}</h2>

          <p>{project.problem.description}</p>
        </div>
      </div>
    </section>
  );
}