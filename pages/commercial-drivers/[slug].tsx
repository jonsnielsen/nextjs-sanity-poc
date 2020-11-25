import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import {
  getAllCommercialDriverPaths,
  getCommercialDriver,
} from 'src/domain/CommercialDriver/commercialDriverApi';
import { CommercialDriver } from 'src/domain/CommercialDriver/commercialDriverTypes';
import CommercialDriverTemplate from 'src/domain/CommercialDriver/CommercialDriverTemplate';
import { Region, RegionId } from 'src/data/region';

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
