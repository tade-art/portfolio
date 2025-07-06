import React from 'react';
import { projects } from '../content/data/projects';
import Fade from '../styles/fadeAnimations';
import { card, sectionClass } from '../styles/layout';
import { headingClass, subheadingClass } from '../styles/text';

const Projects: React.FC = () => {
  return (
    <section id="projects" className={sectionClass}>
      <div className="max-w-5xl mx-auto">
        <Fade direction='up'><p className={subheadingClass}>03. Projects</p></Fade>
        <Fade delay={100} direction='up'><h2 className={`${headingClass} mb-6`}>Some things I’ve built</h2></Fade>

        <Fade delay={200} direction='up'><div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <div key={i} className={card}>
              <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-textMuted text-sm mb-4">{project.desc}</p>
              <ul className="flex flex-wrap gap-2 text-xs text-accent mb-4">
                {project.tech.map((tech, idx) => (
                  <li key={idx} className="bg-bg px-2 py-1 rounded">{tech}</li>
                ))}
              </ul>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent text-sm hover:no-underline underline-animate"
              >
                View Code ↗
              </a>
            </div>
          ))}
        </div></Fade>
      </div>
    </section>
  );
};

export default Projects;
