import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import {
  getAllCommercialDriverPaths,
  getCommercialDriver,
} from 'src/domain/CommercialDriver/commercialDriverApi';
import { CommercialDriver } from 'src/domain/CommercialDriver/commercialDriverTypes';
import { imageTranslationsToReact } from 'src/domain/CommercialDriver/commercialDriverUtils';
import CommercialDriverTemplate from 'src/domain/CommercialDriver/CommercialDriverTemplate';
import { Region, RegionId } from 'src/data/region';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';
// import { useI18n, I18nProvider } from 'src/lib/i18n';

interface ICommercialDriverPage {
  commercialDriver: CommercialDriver;
  region: Region;
}
const CommercialDriverPage = ({ commercialDriver }: ICommercialDriverPage) => {
  const { regionId } = useSelector((state: RootState) => state.settings);

  console.log('hello from: ', regionId);
  return null;
  // return <CommercialDriverTemplate commercialDriver={commercialDriver} />;
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

export default CommercialDriverPage;
