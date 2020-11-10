import React from 'react';
import styled from 'styled-components';
import RegionSelector from './RegionSelector';
import LanguageSelector from './LanguageSelector';
import Link from 'next/link';

const Navigation = () => {
  return (
    <StyledHeader>
      <Link href="/commercial-drivers/roskilde">
        <a>Roskilde</a>
      </Link>
      <Link href="/commercial-drivers/other-page">
        <a>other page</a>
      </Link>
      <Link href="/about">
        <a>about</a>
      </Link>
      <LocaleSelectorWrapper>
        <RegionSelector />
        <LanguageSelector />
      </LocaleSelectorWrapper>
    </StyledHeader>
  );
};
// render a button with the current

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const LocaleSelectorWrapper = styled.div`
  background-color: blue;
`;

export default Navigation;
