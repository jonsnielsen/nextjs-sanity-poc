import { ImageDTO, Image } from 'src/types/image';
import { RegionTranslations, Translations } from 'src/types/translations';

export type CommercialDriverDTO = {
  slug: {
    current: string;
  };
  meta: {
    regions: string[];
  };
  hero: {
    title: RegionTranslations<string>;
    description: RegionTranslations<string>;
    backgroundImage: RegionTranslations<ImageDTO>;
  };
};

export type CommercialDriver = {
  hero: {
    title: Translations<string>;
    description: Translations<string>;
    backgroundImage: Translations<Image>;
  };
};

export type CommercialDriverPath = {
  slug: string;
  regions: string[];
};
