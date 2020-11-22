export const regions = [
  { id: 'na', title: 'Na' },
  { id: 'dk', title: 'Dk' },
  { id: 'eu', title: 'Eu' },
  { id: 'de', title: 'De' },
];

export const languages = {
  en: { title: 'En', id: 'en' },
  enEu: { title: 'En', id: 'enEu' },
  da: { title: 'Da', id: 'da' },
  daEn: { title: 'En', id: 'daEn' },
  de: { title: 'De', id: 'de' },
  deEn: { title: 'En', id: 'deEn' },
};

export const regionLanguageMap = {
  na: [languages.en],
  dk: [languages.da, languages.daEn],
  de: [languages.de, languages.deEn],
  eu: [languages.enEu],
};
