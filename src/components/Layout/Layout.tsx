import React, { ReactNode } from 'react';
import Header from 'src/components/Header';
import styled from 'styled-components';

interface ILayout {
  children: ReactNode;
}

const Layout = ({ children }: ILayout) => {
  return (
    <>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <ContentWrapper>{children}</ContentWrapper>
    </>
  );
};

const HeaderWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 40px;
  margin: 0 auto;
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 80px auto 0 auto;
  padding: 0 40px;
`;

export default Layout;
