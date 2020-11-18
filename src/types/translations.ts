import { LanguageId } from 'src/data/language';
import { RegionId } from 'src/data/region';
import { Translations } from 'src/lib/i18n/Trans';

export type ImageDTO = {
  _type: string;
  altText: string;
  asset: {
    _ref: string;
    _type: string;
  };
};

export type LocaleImageDTO = PartialRecord<RegionId, ImageDTO> & {
  _type: string;
};

export type LocaleImage = PartialRecord<RegionId, Translations>;

// export type StringTranslationsDTO = Partial<Record<LanguageId, string>>;
export type StringTranslationsDTO = PartialRecord<LanguageId, string>;

export type RegionTranslations = PartialRecord<RegionId, Translations> & {
  _type: string;
};
