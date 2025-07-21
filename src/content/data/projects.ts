export interface ProjectEntry {
  title: string;
  desc: string;
  url: string;
  tech: string[];
}

export const projects: ProjectEntry[] = [
  {
    title: 'Tenaro',
    desc: 'A productivity app designed to help with task management, time tracking, and staying focused. It provides a simple, clean interface to organize tasks, manage priorities, and boost daily productivity.',
    url: 'https://github.com/tade-art/Tenaro',
    tech: ['React', 'TypeScript', 'TailwindCSS', 'Express', 'PostgreSQL', 'Prisma ORM'],
  },
  {
    title: 'Auction System',
    desc: 'A university project implementing a distributed auction system using Java RMI. Designed to work across multiple client nodes with a central server, features include item listing, bidding logic, client–server communication, and concurrency control.',
    url: 'https://github.com/tade-art/auction-system',
    tech: ['Java', 'Java RMI', 'Concurrency'],
  },
  {
    title: 'Air Hockey Game',
    desc: 'A 2D air hockey game built using core Java. Includes physics-based puck movement, realistic collision detection, sound effects, and hidden easter eggs for additional fun and interactivity.',
    url: 'https://github.com/tade-art/Java-Air-Hockey-Game',
    tech: ['Java', 'Swing']
  },
];
