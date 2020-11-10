import { defaultLanguageId, Language } from 'src/data/language';
import { defaultRegionId, RegionId } from 'src/data/region';
import {
  CommercialDriverDTO,
  CommercialDriver,
  LocaleString,
} from './commercialDriver.types';

export const localeStringToTranslation = (
  localeString: LocaleString,
  regionId: RegionId,
) => {
  const translations = localeString[regionId];
  const defaultTranslation =
    localeString[defaultRegionId] && localeString[defaultRegionId].en
      ? { [defaultLanguageId]: localeString[defaultRegionId].en }
      : {};

  const result = {
    ...defaultTranslation,
    ...translations,
  };
  return result;
};

export const commercialDriverDTOToCommercialDriver = (
  commercialDriverDTO: CommercialDriverDTO,
  regionId: RegionId,
): CommercialDriver => {
  return {
    ...commercialDriverDTO,
    hero: {
      title: {
        _type: 'localeString',
        translations: localeStringToTranslation(
          commercialDriverDTO.hero.title,
          regionId,
        ),
      },
    },
  };
};
