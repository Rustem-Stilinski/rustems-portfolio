import SkillBar from '../components/SkillBar';
import { skillGroups } from '../data/skills';

const courseSkills = [
  'React components & composition',
  'TypeScript types & typed props',
  'Hooks: useState, useEffect, useContext',
  'Client-side routing (React Router)',
  'Controlled forms & validation',
  'Responsive CSS & accessibility',
  'Vite build tooling',
];

export default function Skills() {
  return (
    <section className="page container rise">
      <h1 className="page-title">What I work with</h1>
      <p className="lead">
        Roughly grouped by where they sit in the stack. The frontend group is
        where this course pushed me the most.
      </p>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div key={group.category} className="card skill-group">
            <h3 className="skill-group__title">{group.category}</h3>
            <p className="skill-group__note">{group.note}</p>
            <ul className="skill-group__list">
              {group.skills.map((skill) => (
                <SkillBar key={skill.name} skill={skill} />
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="course-callout">
        <h2 className="course-callout__title">Learned in this course</h2>
        <p className="course-callout__lead">
          This site itself is the proof — every item below is used somewhere in
          its source.
        </p>
        <ul className="course-callout__list">
          {courseSkills.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
