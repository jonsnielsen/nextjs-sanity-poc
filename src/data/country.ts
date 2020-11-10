import { RegionId } from 'src/data/region';

export enum CountryId {
  No = 'no',
  Dk = 'dk',
  USA = 'usa',
  It = 'it',
}

export enum CountryName {
  Norway = 'Norway',
  Denmark = 'Denmark',
  USA = 'USA',
  Italy = 'Italy',
}

export type Country = {
  name: string;
  id: CountryId;
  regionId: RegionId;
};

export const countriesById: Record<CountryId, Country> = {
  [CountryId.Dk]: {
    id: CountryId.Dk,
    name: CountryName.Denmark,
    regionId: RegionId.Dk,
  },
  [CountryId.No]: {
    id: CountryId.No,
    name: CountryName.Norway,
    regionId: RegionId.No,
  },
  [CountryId.USA]: {
    id: CountryId.USA,
    name: CountryName.USA,
    regionId: RegionId.Na,
  },
  [CountryId.It]: {
    id: CountryId.It,
    name: CountryName.Italy,
    regionId: RegionId.Eu,
  },
};

export const countries: Country[] = Object.keys(countriesById).map(
  (countryId) => {
    return countriesById[countryId];
  },
);
