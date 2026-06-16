import type { Interest, ExperienceItem, EducationItem } from '../types';

export const interests: Interest[] = [
  {
    id: 'hiking',
    title: 'Hiking',
    description:
      'Trails around Northern Virginia and farther out when there is a long weekend. Good thinking time away from a screen.',
    hue: 150,
  },
  {
    id: 'snowboarding',
    title: 'Snowboarding',
    description:
      'Winters are for the mountains. Still chasing cleaner turns and the occasional powder day.',
    hue: 200,
  },
  {
    id: 'soccer',
    title: 'Soccer',
    description:
      'Pickup games and watching the bigger leagues. The easiest way to meet people in a new city.',
    hue: 95,
  },
  {
    id: 'tennis',
    title: 'Tennis',
    description:
      'Recently started taking lessons. Humbling, but the progress is addictive.',
    hue: 40,
  },
  {
    id: 'coffee',
    title: 'Coffee Shops',
    description:
      'Always scouting the next good espresso. Half hobby, half mobile office for side projects.',
    hue: 25,
  },
  {
    id: 'languages',
    title: 'Languages',
    description:
      'Bilingual in English and Russian, with roots in Kazakhstan. Switching languages keeps the brain limber.',
    hue: 275,
  },
];

export const experience: ExperienceItem[] = [
  {
    role: 'Software Development Engineer',
    org: 'Freddie Mac',
    period: '2026 — Present',
    location: 'McLean, VA',
    points: [
      'Build Machine learning-based decision trees for credit scoring of mortgage borrowers.',
      'Develop full-stack features with Java, Spring Boot, Angular, and AWS.'
    ],
  },
  {
    role: 'Software Development Engineer II',
    org: 'Amazon',
    period: '2025 — 2026',
    location: 'Remote / VA',
    points: [
      'Built tax applications on ASP.NET Core, Angular, and AWS services.',
      'Worked across SQS, Lambda, CloudWatch, and DynamoDB at scale.',
      'Owned features end to end, from design through on-call support.',
      'Developed a Python-based automated diagnostics job leveraging AWS Lambda, SQS, and S3 for data validation across tax workflows, reducing manual verification time',
      'Led an initiative to onboard a new customer onto a multi-tenant tax compliance platform serving 10+ internal teams, implementing their business rules in a configurable rule engine that eliminated code deployment cycles',
      'Optimized an Angular autocomplete components performance by 90% through virtual scrolling, enabling smooth rendering of 2,000+ item datasets in production',
      'Built a distributed event-monitoring system on AWS CloudWatch to track data flows across downstream services, enabling proactive identification of tax data pipeline issues',
      'Served on the on-call rotation during peak tax season, triaging and resolving production incidents to maintain 99.9% uptime within strict SLA requirements',
      'Hardened application security with ASP.NET cookie configurations using SameSite attributes, mitigating CSRF vulnerabilities across the enterprise tax platform',
      'Served on the on-call rotation during peak tax season, triaging and resolving production incidents to maintain 99.9% uptime within strict SLA requirements'
    ],
  },
  {
    role: 'Software Development Engineer',
    org: 'Freddie Mac',
    period: '2022 — 2025',
    location: 'VA',
    points: [
      'Migrated legacy systems to microservices with Java, Spring Boot, and Drools.',
      'Helped modernize a rules platform that downstream teams relied on.',
      'Led migration of a monolithic financial application to a microservices architecture, improving scalability, maintainability, and deployment velocity for a multifamily lending platform processing $10B+ annually',
      'Architected a zero-downtime Drools-based rules engine with a PostgreSQL backend, enabling business users to modify financial calculation formulas without code deployments and eliminating 2-week release cycles',
      'Designed and implemented a Spring Boot microservice with Spring Batch for high-volume loan data processing, using Spring Retry for fault tolerance and serving downstream financial analytics systems',
      'Implemented a comprehensive test automation suite using JUnit, Mockito, and Cucumber, increasing code coverage from 45% to 75% and reducing production defects by 40%',
      'Developed a secure authentication layer using Spring Security with LDAP and JWT, integrating with enterprise identity management systems'
    ],
  },
];

export const education: EducationItem[] = [
  {
    credential: 'M.S., Computer Information Systems',
    school: 'Boston University',
    period: 'In progress',
    detail:
      'Coursework in frontend frameworks (CS601), database design (CS669), and server-side development (CS602).',
  },
];
