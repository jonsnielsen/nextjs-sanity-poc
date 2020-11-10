import styled from 'styled-components';

const Index = () => {
  return (
    <div style={{ height: '5000px' }}>
      <div
        style={{
          display: 'flex',
          flex: 1,
          justifyContent: 'center',
        }}
      >
        <div style={{ width: '100%', maxWidth: '1200px', margin: '0 100px' }}>
          hello
        </div>
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
