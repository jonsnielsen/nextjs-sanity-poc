import { useState } from 'react';
import styled from 'styled-components';

const Index = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div style={{ height: '5000px' }}>
      <div
        style={{
          display: 'flex',
          flex: 1,
          justifyContent: 'center',
        }}
      >
        <div
          style={{ width: '100%', maxWidth: '1200px', margin: '0 100px' }}
        ></div>
      </div>
    </div>
  );
};

const H1 = styled.h1`
  text-align: center;
  font-size: 10.5vw;
  font-weight: 400;
`;

export default Index;
