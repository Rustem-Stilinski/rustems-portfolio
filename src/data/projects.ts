import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'decision-engine',
    title: 'Mortgage Credit-Scoring Decision Engine',
    blurb:
      'Drools-based decision trees that score mortgage borrowers, built on a Java / Spring Boot service with an Angular front end and deployed on AWS. The interesting part is keeping business rules readable for analysts while staying fast and testable.',
    tags: ['Java', 'Spring Boot', 'Drools', 'Angular', 'AWS'],
    year: '2026',
  },
  {
    id: 'grocery-inventory',
    title: 'Grocery Store Inventory App',
    blurb:
      'A Vite + React + TypeScript app for tracking store inventory, with a drag-and-drop produce sorter and form-driven editing. Built for CS601 to practice component state and typed props.',
    tags: ['React', 'TypeScript', 'Vite', 'Drag & Drop'],
    year: '2025',
  },
  {
    id: 'ectol-configurator',
    title: 'ECTOL 3D Aircraft Configurator',
    blurb:
      'A React + Three.js canvas that lets users configure an aircraft in real time. Spent most of the effort on render performance — instancing, lazy loading, and trimming re-renders.',
    tags: ['React', 'Three.js', 'WebGL', 'Performance'],
    year: '2025',
  },
  {
    id: 'warehouse',
    title: 'Warehouse Management App',
    blurb:
      'A full-stack warehouse tool with AWS Cognito authentication, role-based access, and a React front end talking to a serverless back end.',
    tags: ['React', 'AWS Cognito', 'Serverless'],
    year: '2024',
  },
  {
    id: 'price-tracker',
    title: 'GroceryPriceTracker Database',
    blurb:
      'A normalized PostgreSQL schema (ERDs, stored procedures, triggers, BCNF) for tracking grocery prices over time — the data-modeling counterpart to the inventory app.',
    tags: ['PostgreSQL', 'Database Design', 'SQL'],
    year: '2024',
  },
];
