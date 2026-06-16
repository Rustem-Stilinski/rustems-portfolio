import type { SkillGroup } from '../types';

export const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend (CS601)',
    note: 'the focus of this course',
    skills: [
      { name: 'React', level: 88, label: 'Advanced' },
      { name: 'TypeScript', level: 85, label: 'Advanced' },
      { name: 'CSS & Responsive Layout', level: 82, label: 'Proficient' },
      { name: 'Angular', level: 78, label: 'Proficient' },
      { name: 'Three.js', level: 64, label: 'Comfortable' },
    ],
  },
  {
    category: 'Backend',
    note: 'services, rules, and APIs',
    skills: [
      { name: 'Java & Spring Boot', level: 86, label: 'Advanced' },
      { name: 'Drools (Decision Engines)', level: 84, label: 'Advanced' },
      { name: 'Node / Express', level: 75, label: 'Proficient' },
      { name: 'GraphQL', level: 66, label: 'Comfortable' },
    ],
  },
  {
    category: 'Cloud & Data',
    note: 'where it runs and lives',
    skills: [
      { name: 'AWS (Lambda, SQS, DynamoDB)', level: 82, label: 'Proficient' },
      { name: 'PostgreSQL', level: 80, label: 'Proficient' },
      { name: 'MongoDB', level: 68, label: 'Comfortable' },
      { name: 'CI/CD & Git', level: 84, label: 'Advanced' },
    ],
  },
];
