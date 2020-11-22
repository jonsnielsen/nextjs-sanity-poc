export enum LanguageId {
  Default = 'en',
  En = 'en',
  EnEu = 'enEu',
  Da = 'da',
  DaEn = 'daEn',
  De = 'de',
  DeEn = 'deEn',
}

export enum LanguageName {
  Default = 'English',
  English = 'English',
  Danish = 'Danish',
  German = 'German',
}

export type Language = {
  id: LanguageId;
  name: LanguageName;
};

export const languagesById: Record<LanguageId, Language> = {
  [LanguageId.En]: {
    id: LanguageId.En,
    name: LanguageName.English,
  },
  [LanguageId.EnEu]: {
    id: LanguageId.EnEu,
    name: LanguageName.English,
  },
  [LanguageId.Da]: {
    id: LanguageId.Da,
    name: LanguageName.Danish,
  },
  [LanguageId.DaEn]: {
    id: LanguageId.DaEn,
    name: LanguageName.English,
  },
  [LanguageId.De]: {
    id: LanguageId.De,
    name: LanguageName.German,
  },
  [LanguageId.DeEn]: {
    id: LanguageId.DeEn,
    name: LanguageName.English,
  },
};
