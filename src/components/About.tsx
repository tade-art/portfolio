import React from 'react';
import Fade from '../styles/fadeAnimations';
import { sectionClass } from '../styles/layout';
import { bodyText, headingClass, subheadingClass } from '../styles/text';

const About: React.FC = () => {
  return (
    <section id="about" className={sectionClass}>
      <Fade direction='up'><p className={subheadingClass}>01. About Me</p></Fade>
      <Fade delay={100} direction='up'><h2 className={`${headingClass} mb-6`}>Who I am</h2></Fade>
      <div className="space-y-4">
      <Fade delay={100} direction='up'><p className={bodyText}>Hey — I’m Tadas! I’m a Computer Science Graduate from Lancaster University and I enjoy building, testing, and breaking things (in a good way). My tech journey kicked off when I was introduced to Python when I was 13 — and I’ve been fascinated ever since!</p></Fade>
        <Fade delay={200} direction='up'><p className={bodyText}>I’ve had the pleasure of working as a QA tester at ITPI, where I wrote automated test suites, sped up CI/CD pipelines, and poked around web apps with Burp Suite to uncover vulnerabilities. I really enjoy working across both the development and testing pipeline — especially when I get to improve performance or catch sneaky bugs early.</p></Fade>
        <Fade delay={300} direction='up'><p className={bodyText}>Here are some tools and tech I’ve been working with lately:</p></Fade>
            <Fade delay={400} direction='up'><ul className="grid grid-cols-2 gap-x-10 gap-y-1 font-mono text-sm text-lightSlate">
              <li className="before:content-['▹'] before:text-green before:mr-2">React</li>
              <li className="before:content-['▹'] before:text-green before:mr-2">Typescript</li>
              <li className="before:content-['▹'] before:text-green before:mr-2">Node.js</li>
              <li className="before:content-['▹'] before:text-green before:mr-2">Cypress + Jest</li>
              <li className="before:content-['▹'] before:text-green before:mr-2">CI/CD (Azure DevOps)</li>
              <li className="before:content-['▹'] before:text-green before:mr-2">Tailwind CSS</li>
            </ul></Fade>
      </div>
    </section> 
  );
};

export default About;
