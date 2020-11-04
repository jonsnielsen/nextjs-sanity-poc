export enum Region {
  Default = 'na',
  Na = 'na',
  Dk = 'dk',
  No = 'no',
  Eu = 'eu',
}
exports.Region = Region;

export enum Language {
  En = 'en',
  Da = 'da',
}

type Locale = Record<Region, Language[]>;

export const regions: Region[] = [Region.Na, Region.Dk, Region.No, Region.Eu];
exports.regions = regions;

export const languages: Language[] = [Language.En, Language.Da];
// type locales = Locale[]

// type Locale = {

// }
// type Localization = {
//   locale: Locale;
//   languages: Record<{

//   }
// }
// export const locales = [Locale.En, Locale.Dk, Locale.No];

export const locales: Locale = {
  [Region.Na]: [Language.En],
  [Region.Dk]: [Language.Da, Language.En],
  [Region.No]: [Language.En],
  [Region.Eu]: [Language.En],
};

// type Language
// export const languages =
