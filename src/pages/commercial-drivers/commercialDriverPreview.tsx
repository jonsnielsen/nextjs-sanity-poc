import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getCommercialDriver } from 'src/domain/CommercialDriver/commercialDriverApi';
import { CommercialDriver } from 'src/api/commercial-driver/commercialDriver.types';
import CommercialDriverTemplate from 'src/domain/CommercialDriver/CommercialDriverTemplate';
import { Region, defaultRegionId } from 'src/data/region';

type Query = {
  slug: string;
  secret: string;
};

const CommercialDriverPreviewPage = () => {
  const [
    commercialDriver,
    setCommercialDriver,
  ] = useState<CommercialDriver | null>(null);
  const query = useRouter().query as Query;
  const { secret, slug } = query;

  useEffect(() => {
    if (!slug || !secret) {
      // if not reroute to 404/error page
    }
    (async () => {
      const fetchedCommercialDriver = await getCommercialDriver(
        slug,
        defaultRegionId,
        secret,
      );
      if (!commercialDriver) {
        // if not reroute to 404/error page
      }
      setCommercialDriver(fetchedCommercialDriver);
    })();
  }, [slug, secret]);

  if (!commercialDriver) {
    return null;
  }

  return <CommercialDriverTemplate commercialDriver={commercialDriver} />;
};

export default CommercialDriverPreviewPage;
