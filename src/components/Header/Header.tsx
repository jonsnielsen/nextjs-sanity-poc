import React from 'react';
import styled from 'styled-components';
import LocaleSelector from 'src/components/LocaleSelector';
import Link from 'next/link';

const Navigation = () => {
  return (
    <StyledHeader>
      <Link href="/commercial-drivers/black-friday">
        <a>Black Friday</a>
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
