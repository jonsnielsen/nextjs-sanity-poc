import { LanguageId, languagesById, LanguageName } from 'src/data/language';
import { RegionId, regionsById } from 'src/data/region';
import { CommercialDriverDTO, CommercialDriver } from './commercialDriverTypes';
import { RegionTranslations, Translations } from 'src/types/translations';
import { Image, ImageDTO } from 'src/types/image';
import { urlFor } from 'src/lib/sanity';

export function localeToTranslations<T>(
  allRegionsTranslations: RegionTranslations<T>,
  regionId: RegionId,
): Translations<T> {
  // The translation for the default region (NA)
  const defaultTranslation =
    allRegionsTranslations[RegionId.Default]?.[LanguageId.Default];
  const regionTranslations = Object.entries(
    allRegionsTranslations[regionId],
  ).reduce((acc, [langId, tran]) => {
    const isDefaultLanguage =
      languagesById[langId].name === LanguageName.English;
    return {
      ...acc,
      // If there is no english for that region, use default Region english
      [langId]: !isDefaultLanguage ? tran : tran || defaultTranslation,
    };
  }, {});
  const region = regionsById[regionId];
  const defaultLanguageId = region.languageIds[region.languageIds.length - 1];
  if (!regionTranslations[defaultLanguageId]) {
    regionTranslations[defaultLanguageId] = defaultTranslation;
  }

  return regionTranslations;
}

export const imageDTOTranslationsToImage = (
  imageDTOTranslations: Translations<ImageDTO>,
): Translations<Image> => {
  const imageTranslations = Object.entries(imageDTOTranslations).reduce(
    (acc, [langId, imageDTO]) => ({
      ...acc,
      [langId]: {
        alt: imageDTO.altText,
        src: urlFor(imageDTO.asset._ref).url(),
      },
    }),
    {},
  );

  return imageTranslations;
};

export const commercialDriverDTOToCommercialDriver = (
  commercialDriverDTO: CommercialDriverDTO,
  regionId: RegionId,
): CommercialDriver => {
  const title = localeToTranslations(commercialDriverDTO.hero.title, regionId);
  const description = localeToTranslations(
    commercialDriverDTO.hero.description,
    regionId,
  );
  const backgroundImage = imageDTOTranslationsToImage(
    localeToTranslations(commercialDriverDTO.hero.backgroundImage, regionId),
  );

  return {
    hero: {
      title,
      description,
      backgroundImage,
    },
  };
};
