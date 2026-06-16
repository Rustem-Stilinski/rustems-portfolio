import { experience, education } from '../data/content';

export default function Resume() {
  return (
    <section className="page container rise">
      <div className="resume__head">
        <div>
          <h1 className="page-title">Experience</h1>
        </div>
      </div>

      <ol className="timeline">
        {experience.map((job) => (
          <li key={`${job.org}-${job.period}`} className="timeline__item">
            <div className="timeline__meta">
              <span className="timeline__period">{job.period}</span>
              <span className="timeline__loc">{job.location}</span>
            </div>
            <div className="timeline__body">
              <h3 className="timeline__role">{job.role}</h3>
              <p className="timeline__org">{job.org}</p>
              <ul className="timeline__points">
                {job.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>

      <h2 className="resume__subhead">Education</h2>
      <ol className="timeline">
        {education.map((ed) => (
          <li key={ed.school} className="timeline__item">
            <div className="timeline__meta">
              <span className="timeline__period">{ed.period}</span>
            </div>
            <div className="timeline__body">
              <h3 className="timeline__role">{ed.credential}</h3>
              <p className="timeline__org">{ed.school}</p>
              <ul className="timeline__points">
                <li>{ed.detail}</li>
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
