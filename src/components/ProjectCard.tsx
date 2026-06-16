import type { Project } from '../types';
import './ProjectCard.css';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { title, blurb, tags, year, link } = project;

  const Body = (
    <>
      <div className="project__top">
        <h3 className="project__title">{title}</h3>
        <span className="project__year">{year}</span>
      </div>
      <p className="project__blurb">{blurb}</p>
      <ul className="project__tags">
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </>
  );

  // If a link exists, make the whole card a link; otherwise a plain article.
  return link ? (
    <a
      className="card project"
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      {Body}
    </a>
  ) : (
    <article className="card project">{Body}</article>
  );
}
