import { LanguageId } from 'src/data/language';
import { RegionId } from 'src/data/region';
import { ImageDTO } from './image';

// export type LocaleImageDTO = PartialRecord<RegionId, ImageDTO> & {
//   _type: string;
// };

// export type LocaleImage = PartialRecord<RegionId, Translations>;

// export type StringTranslationsDTO = Partial<Record<LanguageId, string>>;
// export type StringTranslationsDTO = PartialRecord<LanguageId, string>;

export type Translations<T> = PartialRecord<LanguageId, T>;

export type RegionTranslations<T> = PartialRecord<RegionId, Translations<T>> & {
  _type: string;
};
