import React from 'react';
import { outlineButton } from '../styles/button';
import Fade from '../styles/fadeAnimations';
import { sectionClass } from '../styles/layout';
import { bodyText } from '../styles/text';

const Hero: React.FC = () => {
  return (
    <section id="hero" className={`${sectionClass} flex flex-col justify-center items-center text-center h-screen`}>
      <Fade delay={1000} direction='up'><p className="text-accent text-sm font-mono">Hi, my name is</p></Fade>
      <Fade delay={1100} direction='up'><h1 className="text-5xl sm:text-6xl font-bold text-white mt-2 mb-4">Tadas Ivanauskas.</h1></Fade>
      <Fade delay={1200} direction='up'><h2 className="text-3xl sm:text-4xl font-bold text-textMuted mb-6">I like to code.</h2></Fade>
      <Fade delay={1300} direction='up'><p className={`${bodyText} max-w-xl mb-10`}>I’m a Computer Science Graduate from Lancaster University passionate about testing, automation, and creating polished frontend applications.</p></Fade>
      <Fade delay={1400} direction='up'><a
        href="#projects"
        className={outlineButton}
      >
        Check out my past projects!
      </a></Fade>
    </section>
  );
};

export default Hero;
