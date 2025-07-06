import React, { useState } from 'react';
import { experiences } from '../content/data/experience';
import Fade from '../styles/fadeAnimations';
import { sectionClass } from '../styles/layout';
import { headingClass, subheadingClass } from '../styles/text';

const Experience: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fading, setFading] = useState(false);

  const handleTabClick = (i: number) => {
    if (i === activeIndex) return;
    setFading(true);
    setTimeout(() => {
      setActiveIndex(i);
      setFading(false);
    }, 300); // fade-out duration
  };

  const activeExp = experiences[activeIndex];

  return (
    <section id="experience" className={sectionClass}>
      <div className="max-w-4xl mx-auto">
        <Fade direction="up"><p className={subheadingClass}>02. Experience</p></Fade>
        <Fade delay={100} direction="up"><h2 className={`${headingClass} mb-6`}>Where I've worked</h2></Fade>

        <Fade delay={200} direction="up"><div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/4 border-l border-borderDark space-y-2">
            {experiences.map((exp, i) => (
              <button
                key={i}
                className={`text-left w-full px-4 py-2 font-mono text-sm rounded transition duration-200 ${
                  activeIndex === i
                    ? 'bg-bgLighter text-accent border-l-2 border-accent'
                    : 'text-textSub hover:bg-hoverBg'
                }`}
                onClick={() => handleTabClick(i)}
              >
                {exp.company}
              </button>
            ))}
          </div>

          <div
            className={`md:w-3/4 space-y-4 transition-opacity duration-300 min-h-[300px] ${
            fading ? 'opacity-0' : 'opacity-100'
          }`}
>
            <h3 className="text-xl font-semibold text-white">
              {activeExp.role}{' '}
              <a
                href={activeExp.url}
                target="_blank"
                rel="noreferrer"
                className="text-accent hover:no-underline"
              >
                @ <span className="underline-animate">{activeExp.company}</span>
              </a>
            </h3>
            <p className="font-mono text-sm text-textMuted">{activeExp.time}</p>
            <ul className="list-none mt-4 space-y-3">
              {activeExp.bullets.map((point, idx) => (
                <li
                  key={idx}
                  className="relative pl-6 text-textSub before:absolute before:left-0 before:top-1 before:content-['▹'] before:text-accent"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div></Fade>
      </div>
    </section>
  );
};

export default Experience;
