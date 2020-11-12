import React from 'react';
import styled from 'styled-components';
import LocaleSelector from 'src/components/LocaleSelector';
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
        <LocaleSelector />
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

const LocaleSelectorWrapper = styled.div``;

export default Navigation;
