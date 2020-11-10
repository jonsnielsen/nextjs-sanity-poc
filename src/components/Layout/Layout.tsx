import React, { ReactNode } from 'react';
import Header from 'src/components/Header';

interface ILayout {
  children: ReactNode;
}

const Layout = ({ children }: ILayout) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
