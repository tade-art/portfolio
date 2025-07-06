export interface ExperienceEntry {
  company: string;
  role: string;
  url: string;
  time: string;
  bullets: string[];
}

export const experiences: ExperienceEntry[] = [
  {
    company: 'ITPI',
    role: 'Junior QA Engineer',
    url: 'https://www.lancaster.ac.uk/iss/itpi/',
    time: 'April 2024 - 2025',
    bullets: [
      'Tested and debugged web and mobile applications to ensurefunctionality and performance',
      'Optimized CI/CD pipelines in Azure DevOps, reducing buildtimes and integrating SAST and linting checks',
      'Developed automated test suites in Cypress and Jest',
    ],
  },
  {
    company: 'McDonalds',
    role: 'Crew Member',
    url: 'https://www.mcdonalds.com/gb/en-gb.html',
    time: 'October 2020 - 2021',
    bullets: [
      'Adapted quickly to new tools, systems, and responsibilities with minimal supervision',
      'Collaborated effectively with team members to meet sharedgoals and deadlines',
      'Identified and resolved issues to maintain smooth operationsand customer satisfaction',
    ],
  },
];
