export const regions = [
  { id: 'na', title: 'Na' },
  { id: 'dk', title: 'Dk' },
  { id: 'no', title: 'No' },
  { id: 'eu', title: 'Eu' },
];

export const languages = {
  en: { title: 'En', id: 'en' },
  da: { title: 'Da', id: 'da' },
  no: { title: 'No', id: 'no' },
};

export const regionLanguageMap = {
  na: [languages.en],
  dk: [languages.da, languages.en],
  no: [languages.no, languages.en],
  eu: [languages.en],
};
