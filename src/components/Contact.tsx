import React from 'react';
import { outlineButton } from '../styles/button';
import Fade from '../styles/fadeAnimations';
import { sectionClass } from '../styles/layout';
import { bodyText, headingClass, subheadingClass } from '../styles/text';

const Contact: React.FC = () => {
  return (
    <section id="contact" className={sectionClass}>
      <div className="text-center max-w-xl mx-auto">
        <Fade delay={100} direction='up'><p className={subheadingClass}>04. Contact</p></Fade>
        <Fade delay={200} direction='up'><h2 className={`${headingClass} mb-6`}>Get In Touch</h2></Fade>
        <Fade delay={300} direction='up'><p className={`${bodyText} mb-8`}>I'm always open to chatting about new opportunities or collaborations. Drop me a message and let’s connect!</p></Fade>
        <Fade delay={400} direction='up'><a href="mailto:tadas@example.com" className={outlineButton}>Email me</a></Fade>
      </div>
    </section>
  );
};

export default Contact;
