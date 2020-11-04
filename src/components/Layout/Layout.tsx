import React, { ReactNode } from 'react';
import Navigation from 'src/components/Navigation';

interface ILayout {
  children: ReactNode;
}

const TRANSITION_DURATION = 0.5;

const Layout = ({ children }: ILayout) => {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
};

export default Layout;
