import { LanguageId } from './language';

export enum RegionId {
  Na = 'na',
  Dk = 'dk',
  No = 'no',
  Eu = 'eu',
}

export const defaultRegionId = RegionId.Na;

export enum RegionName {
  NorthAmerica = 'North America',
  Denmark = 'Denmark',
  Norway = 'Norway',
  Europe = 'Europe',
}

export type Region = {
  id: RegionId;
  name: RegionName;
  languageIds: LanguageId[];
};

export const regionsById: Record<RegionId, Region> = {
  [RegionId.Na]: {
    id: RegionId.Na,
    name: RegionName.NorthAmerica,
    languageIds: [LanguageId.En],
  },
  [RegionId.Dk]: {
    id: RegionId.Dk,
    name: RegionName.Denmark,
    languageIds: [LanguageId.Da, LanguageId.En],
  },
  [RegionId.No]: {
    id: RegionId.No,
    name: RegionName.Norway,
    languageIds: [LanguageId.En],
  },
  [RegionId.Eu]: {
    id: RegionId.Eu,
    name: RegionName.Europe,
    languageIds: [LanguageId.En],
  },
};

export const regions: Region[] = Object.keys(regionsById).map((regionId) => {
  return regionsById[regionId];
});
