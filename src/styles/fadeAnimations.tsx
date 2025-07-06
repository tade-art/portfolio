import React from 'react';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down';
}

const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  direction = 'up',
}) => {
  const animationType = direction === 'down' ? 'fade-down' : 'fade-up';

  return (
    <div
      data-aos={animationType}
      data-aos-delay={delay}
    >
      {children}
    </div>
  );
};

export default FadeIn;
