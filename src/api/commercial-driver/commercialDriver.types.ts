import { Language } from 'src/data/language';
import { RegionId } from 'src/data/region';
import { Translations } from 'src/lib/i18n/Trans';

export type CommercialDriverDTO = {
  slug: {
    current: string;
  };
  meta: {
    regions: string[];
  };
  hero: {
    title: {
      _type: string;
      na: {
        en: string;
      };
      dk: {
        en: string;
        da: string;
      };
      no: {
        no: string;
        en: string;
      };
      eu: {
        en: string;
      };
    };
  };
};

export type LocaleString = Partial<Record<RegionId, Translations>>;

export type CommercialDriver = {
  slug: {
    current: string;
  };
  meta: {
    regions: string[];
  };
  hero: {
    title: {
      _type: string;
      translations: Translations;
    };
  };
};

export type CommercialDriverPath = {
  slug: string;
  regions: string[];
};
