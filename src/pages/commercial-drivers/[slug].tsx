import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import {
  getAllCommercialDriverPaths,
  getCommercialDriver,
} from 'src/api/commercial-driver/commercialDriver.api';
import { CommercialDriver } from 'src/api/commercial-driver/commercialDriver.types';
import CommercialDriverTemplate from 'src/templates/CommercialDriver';
import { Region, RegionId } from 'src/data/region';
// import { useI18n, I18nProvider } from 'src/lib/i18n';

interface ICommercialDriverPage {
  commercialDriver: CommercialDriver;
  region: Region;
}
const CommercialDriverPage = ({
  commercialDriver,
  region,
}: ICommercialDriverPage) => {
  return <CommercialDriverTemplate commercialDriver={commercialDriver} />;
};

type Context = {
  params: {
    slug: string;
  };
  locale: string;
  fallback?: boolean;
  preview?: boolean;
  previewData?: any;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allPaths = await getAllCommercialDriverPaths();
  const paths = allPaths.reduce((acc, path) => {
    path.regions.forEach((region) => {
      const context: Context = {
        params: {
          slug: path.slug,
        },
        locale: region,
      };
      acc.push(context);
    });
    return acc;
  }, []);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
  locale,
  preview,
  previewData,
}: Context) => {
  const commercialDriver = await getCommercialDriver(
    params.slug,
    locale as RegionId,
  );

  return {
    props: { commercialDriver, region: locale },
  };
};

export default CommercialDriverPage;
