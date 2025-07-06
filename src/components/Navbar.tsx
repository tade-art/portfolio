import React, { useEffect, useState } from 'react';
import Resume from '../content/cv/TI-CV-.pdf';
import Logo from '../content/img/D.png';
import Fade from '../styles/fadeAnimations';
import { navbarText } from '../styles/text';

const Navbar: React.FC = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShow(currentScrollY < lastScrollY || currentScrollY < 10);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`fixed top-0 z-50 w-full transition-transform duration-300 ${show ? 'translate-y-0' : '-translate-y-full'} bg-bgLight/80 backdrop-blur border-b border-borderDark`}>
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Fade direction="down"><a href="#hero"><img src={Logo} alt="Logo" className="w-[10px] sm:w-[20px] md:w-[30px] lg:w-[40px] h-auto object-contain"/></a></Fade>
        <div className="flex items-center space-x-8">
          <ul className="flex space-x-6 text-base text-textMuted">
            <Fade delay={100} direction="down"><li><a href="#about" className={navbarText}><span className="text-green">01.</span>About</a></li></Fade>
            <Fade delay={200} direction="down"><li><a href="#experience" className={navbarText}><span className="text-green">02.</span>Experience</a></li></Fade>
            <Fade delay={300} direction="down"><li><a href="#projects" className={navbarText}><span className="text-green">03.</span>Projects</a></li></Fade>
            <Fade delay={400} direction="down"><li><a href="#contact" className={navbarText}><span className="text-green">04.</span>Contact</a></li></Fade>
          </ul>
          <Fade delay={500} direction="down"><a href={Resume} target="_blank" rel="noopener noreferrer" className="border border-green text-green font-mono text-sm px-4 py-2 rounded hover:bg-green/10 transition duration-200 hover:no-underline">Resume</a></Fade>
        </div>
    </nav>
    </header>
  );
};

export default Navbar;