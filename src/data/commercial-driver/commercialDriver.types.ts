export type CommercialDriver = {
  slug: {
    current: string;
  };
  meta: {
    regions: string[];
  };
  hero: {
    title: {
      en: string;
      dk: {
        translation: string;
        englishTranslation: string;
      };
    };
  };
};

export type CommercialDriverPath = {
  slug: string;
  regions: string[];
};
