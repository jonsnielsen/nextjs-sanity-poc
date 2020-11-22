import React, { useEffect, useState } from 'react';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { getCommercialDriver } from 'src/domain/CommercialDriver/commercialDriverApi';
import { CommercialDriver } from 'src/domain/CommercialDriver/commercialDriverTypes';
import CommercialDriverTemplate from 'src/domain/CommercialDriver/CommercialDriverTemplate';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';

type Query = {
  slug: string;
  secret: string;
};

const CommercialDriverPreviewPage = () => {
  const [
    commercialDriver,
    setCommercialDriver,
  ] = useState<CommercialDriver | null>(null);
  const { regionId } = useSelector((state: RootState) => state.settings);
  const query = useRouter().query as Query;
  const { secret, slug } = query;

  useEffect(() => {
    if (!slug || !secret) {
      return;
    }
    (async () => {
      const fetchedCommercialDriver = await getCommercialDriver(
        slug,
        regionId,
        secret,
      );
      setCommercialDriver(fetchedCommercialDriver);
    })();
  }, [slug, secret, regionId]);

  if (!commercialDriver) {
    return null;
  }

  return <CommercialDriverTemplate commercialDriver={commercialDriver} />;
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

export default CommercialDriverPreviewPage;
