export enum LanguageId {
  En = 'en',
  Da = 'da',
  No = 'no',
}

export const defaultLanguageId = LanguageId.En;

export enum LanguageName {
  Default = 'English',
  English = 'English',
  Danish = 'Danish',
  Norwegian = 'Norwegian',
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
  [LanguageId.Da]: {
    id: LanguageId.Da,
    name: LanguageName.Danish,
  },
  [LanguageId.No]: {
    id: LanguageId.No,
    name: LanguageName.Norwegian,
  },
};
