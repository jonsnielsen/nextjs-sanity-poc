import React from 'react';
import styled from 'styled-components';

interface IImage {
  src: string;
  alt: string;
}

const Image = ({ src, alt }: IImage) => {
  return <Img src={src} alt={alt} />;
};

const Img = styled.img`
  width: 100%;
`;

export default Image;
