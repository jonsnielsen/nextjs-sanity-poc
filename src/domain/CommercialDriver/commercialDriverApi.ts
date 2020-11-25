import {
  CommercialDriver,
  CommercialDriverDTO,
  CommercialDriverPath,
} from './commercialDriverTypes';
import { getClient } from 'src/lib/sanity';
import { RegionId } from 'src/data/region';
import { commercialDriverDTOToCommercialDriver } from './commercialDriverUtils';

const commercialDriverSlugsQuery = `*[_type == "commercialDriver"] { slug, meta }`;

/**
 * We need to query allCommercialDriver (and not a single commercial driver) because otherwise
 * we would need the id. The problem is that we can only pass the slug through to getstaticprops from getstaticpaths.
 * That would mean that we need use the 'id' as slug
 */
const commercialDriverQuery = `*[_type == "commercialDriver" && slug.current == $slug] { slug, meta, hero } [0]`;

export const getAllCommercialDriverPaths = async (): Promise<
  CommercialDriverPath[]
> => {
  const sanityClient = getClient(false);
  const allCommercialDrivers = await sanityClient.fetch(
    commercialDriverSlugsQuery,
  );
  const paths = allCommercialDrivers.map((commercialDriver) => ({
    slug: commercialDriver.slug.current,
    regions: commercialDriver.meta.regions || [],
  }));
  return paths;
};

export const getCommercialDriver = async (
  slug: string,
  regionId: RegionId,
  previewToken?: string,
): Promise<CommercialDriver | null> => {
  const client = getClient(!!previewToken);
  const commercialDriverDTO: CommercialDriverDTO = await client.fetch(
    commercialDriverQuery,
    {
      slug,
    },
  );
  const commercialDriver = commercialDriverDTOToCommercialDriver(
    commercialDriverDTO,
    regionId,
  );

  return commercialDriver;
};
