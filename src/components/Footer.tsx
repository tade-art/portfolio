import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="text-center py-6 text-xs text-textMuted">
      <p>Designed & built by Tadas Ivanauskas © {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;