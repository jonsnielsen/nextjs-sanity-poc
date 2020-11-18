import { defaultLanguageId, Language } from 'src/data/language';
import { defaultRegionId, RegionId } from 'src/data/region';
import { CommercialDriverDTO, CommercialDriver } from './commercialDriverTypes';
import { RegionTranslations } from 'src/types/translations';
import { Translations } from 'src/lib/i18n';

export function localeToTranslations(
  allRegionsTranslations: RegionTranslations,
  regionId: RegionId,
): Translations {
  const regionTranslations = allRegionsTranslations[regionId];
  const defaultTranslation =
    allRegionsTranslations[defaultRegionId] &&
    allRegionsTranslations[defaultRegionId].en
      ? { [defaultLanguageId]: allRegionsTranslations[defaultRegionId].en }
      : {};

  const result = {
    ...defaultTranslation,
    ...regionTranslations,
  };
  return result;
}

export const commercialDriverDTOToCommercialDriver = (
  commercialDriverDTO: CommercialDriverDTO,
  regionId: RegionId,
): CommercialDriver => {
  return {
    ...commercialDriverDTO,
    hero: {
      title: localeToTranslations(commercialDriverDTO.hero.title, regionId),
      description: localeToTranslations(
        commercialDriverDTO.hero.description,
        regionId,
      ),
    },
  };
};
