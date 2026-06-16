import type { Skill } from '../types';
import './SkillBar.css';

interface SkillBarProps {
  skill: Skill;
}

export default function SkillBar({ skill }: SkillBarProps) {
  return (
    <li className="skillbar">
      <div className="skillbar__head">
        <span className="skillbar__name">{skill.name}</span>
        <span className="skillbar__label">{skill.label}</span>
      </div>
      <div
        className="skillbar__track"
        role="progressbar"
        aria-valuenow={skill.level}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${skill.name}: ${skill.label}`}
      >
        <span
          className="skillbar__fill"
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </li>
  );
}
