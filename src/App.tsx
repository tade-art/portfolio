import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import SocialDock from './components/SocialDock';

const App: React.FC = () => {
  useEffect(() => {
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true, // animation only once
  });
}, []);
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience/>
      <Projects />
      <Contact />
      <Footer />
      <SocialDock />
    </>
  );
};

export default App;
