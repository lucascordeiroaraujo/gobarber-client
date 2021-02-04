import React from 'react';

import Container from './style';

interface TooltipProps {
  title: string;
  className?: string;
}

const Tootip: React.FC<TooltipProps> = ({ title, className, children }) => (
  <Container className={className}>
    {children}

    <span>{title}</span>
  </Container>
);

export default Tootip;
