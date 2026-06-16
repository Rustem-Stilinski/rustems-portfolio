// Central type definitions — imported by components and data modules.
export interface NavItem {
  path: string;
  label: string;
}

export interface Project {
  id: string;
  title: string;
  blurb: string;
  tags: string[];
  year: string;
  link?: string;
}

export type SkillLevel = 'Learning' | 'Comfortable' | 'Proficient' | 'Advanced';

export interface Skill {
  name: string;
  level: number;
  label: SkillLevel;
}

export interface SkillGroup {
  category: string;
  note: string;
  skills: Skill[];
}

export interface Interest {
  id: string;
  title: string;
  description: string;
  hue: number;
}

export interface ExperienceItem {
  role: string;
  org: string;
  period: string;
  location: string;
  points: string[];
}

export interface EducationItem {
  credential: string;
  school: string;
  period: string;
  detail: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export type FormErrors = Partial<Record<keyof ContactForm, string>>;

export type Theme = 'light' | 'dark';
