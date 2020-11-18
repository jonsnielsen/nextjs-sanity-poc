import { Language } from 'src/data/language';
import { RegionId } from 'src/data/region';
import { Translations } from 'src/lib/i18n/Trans';
import { RegionTranslations } from 'src/types/translations';

export type CommercialDriverDTO = {
  slug: {
    current: string;
  };
  meta: {
    regions: string[];
  };
  hero: {
    title: RegionTranslations;
    description: RegionTranslations;
  };
};

export type CommercialDriver = {
  slug: {
    current: string;
  };
  meta: {
    regions: string[];
  };
  hero: {
    title: Translations;
    description: Translations;
  };
};

export type CommercialDriverPath = {
  slug: string;
  regions: string[];
};
