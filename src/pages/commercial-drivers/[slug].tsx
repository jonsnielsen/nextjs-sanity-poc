import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import {
  getAllCommercialDriverPaths,
  getCommercialDriver,
} from 'src/data/commercial-driver/commercialDriver.api';
import { CommercialDriver } from 'src/data/commercial-driver/commercialDriver.types';
import CommercialDriverTemplate from 'src/templates/CommercialDriver';

interface ICommercialDriverPage {
  commercialDriver: CommercialDriver;
}
const CommercialDriverPage = ({ commercialDriver }: ICommercialDriverPage) => {
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
  console.log({ allPaths });

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
  const commercialDriver = await getCommercialDriver(params.slug);
  console.log({ locale });
  console.log(params.slug);

  return {
    props: { commercialDriver },
  };
};

export default CommercialDriverPage;
