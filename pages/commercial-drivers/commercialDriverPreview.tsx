import React, { useEffect, useState } from 'react';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { getCommercialDriver } from 'src/domain/CommercialDriver/commercialDriverApi';
import { CommercialDriver } from 'src/domain/CommercialDriver/commercialDriverTypes';
import CommercialDriverTemplate from 'src/domain/CommercialDriver/CommercialDriverTemplate';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { usePreviewSubscription } from 'src/lib/sanity';
import { commercialDriverDTOToCommercialDriver } from 'src/domain/CommercialDriver/commercialDriverUtils';

type Query = {
  slug: string;
  secret: string;
};
const commercialDriverQuery = `*[_type == "commercialDriver" && slug.current == $slug] { slug, meta, hero } [0]`;

const CommercialDriverPreviewPage = () => {
  // const [
  //   commercialDriver,
  //   setCommercialDriver,
  // ] = useState<CommercialDriver | null>(null);
  const { regionId } = useSelector((state: RootState) => state.settings);
  const query = useRouter().query as Query;
  const { secret, slug } = query;

  const { data: commercialDriverDTO } = usePreviewSubscription(
    commercialDriverQuery,
    {
      params: { slug },
      initialData: null,
      enabled: true,
    },
  );

  if (!commercialDriverDTO) {
    return null;
  }

  const commercialDriver = commercialDriverDTOToCommercialDriver(
    commercialDriverDTO,
    regionId,
  );

  return <CommercialDriverTemplate commercialDriver={commercialDriver} />;
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

export default CommercialDriverPreviewPage;
