import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section className="page container rise">
      <h1 className="page-title">Things I&apos;ve built</h1>
      <p className="lead">
        A mix of work systems, course projects, and side projects I took on to
        understand something better.
      </p>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
