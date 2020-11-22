import { LanguageId } from './language';

export enum RegionId {
  Default = 'na',
  Na = 'na',
  Dk = 'dk',
  De = 'de',
  Eu = 'eu',
}

export enum RegionName {
  NorthAmerica = 'North America',
  Denmark = 'Denmark',
  Germany = 'Germany',
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
    languageIds: [LanguageId.Da, LanguageId.DaEn],
  },
  [RegionId.De]: {
    id: RegionId.De,
    name: RegionName.Germany,
    languageIds: [LanguageId.De, LanguageId.DeEn],
  },
  [RegionId.Eu]: {
    id: RegionId.Eu,
    name: RegionName.Europe,
    languageIds: [LanguageId.EnEu],
  },
};

export const regions: Region[] = Object.keys(regionsById).map((regionId) => {
  return regionsById[regionId];
});
