import { LanguageId } from 'src/data/language';
// import useI18n from './useI18n';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { useState, useEffect, ReactNode } from 'react';

// The translation HAS to be of type any, otherwise some place typescript complains that ReactNode cannot be used in jsx.
export type Translations = Partial<Record<LanguageId, any>>;
export interface ITrans {
  translations: Translations;
}

const Trans = ({ translations }: ITrans) => {
  const { languageId } = useSelector((state: RootState) => state.settings);
  const [translation, setTranslation] = useState(translations[languageId]);

  useEffect(() => {
    if (translations[languageId]) {
      setTranslation(translations[languageId]);
    }
  });

  // TODO: Throw error if there is no translation (ie., if we expect that there ALWAYS should be a translation)

  return translation;
};

export default Trans;
