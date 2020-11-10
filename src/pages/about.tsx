import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';

interface IAboutPage {}
const AboutPage = ({}: IAboutPage) => {
  const { languageId } = useSelector((state: RootState) => state.settings);

  return (
    <>
      <UsingLanguage />
      about
    </>
  );
};

const UsingLanguage = () => {
  const { languageId } = useSelector((state: RootState) => state.settings);
  return <p>language: {languageId}</p>;
};

export async function getStaticProps({ locale }) {
  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {},
  };
}

export default AboutPage;
