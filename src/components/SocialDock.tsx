import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialDock: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex gap-3 bg-bgLight/80 backdrop-blur-md p-3 rounded-full border border-borderDark shadow-lg">
      <a
        href="https://github.com/tade-art"
        target="_blank"
        rel="noopener noreferrer"
        className="text-green hover:scale-110 transition"
        aria-label="GitHub"
      >
        <FaGithub size={28} />
      </a>
      <a
        href="https://www.linkedin.com/in/tadas-ivanauskas-3534031b7/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-green hover:scale-110 transition"
        aria-label="LinkedIn"
      >
        <FaLinkedin size={28} />
      </a>
      <a
        href="mailto:tivanauskas32@gmail.com"
        className="text-green hover:scale-110 transition"
        aria-label="Email"
      >
        <FaEnvelope size={28} />
      </a>
    </div>
  );
};

export default SocialDock;
