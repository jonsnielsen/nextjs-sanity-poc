import { useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { useState, useEffect } from 'react';
import { Translations } from 'src/types/translations';

export interface ITrans {
  translations: Translations<any>; // HAS to be of type any, otherwise some place typescript complains that ReactNode cannot be used in jsx.
}

const Trans = ({ translations }: ITrans) => {
  const { languageId } = useSelector((state: RootState) => state.settings);
  const [translation, setTranslation] = useState(translations[languageId]);

  useEffect(() => {
    if (translations[languageId]) {
      setTranslation(translations[languageId]);
    }
  }, [languageId, translations]);
  // TODO: Throw error if there is no translation (ie., if we expect that there ALWAYS should be a translation)

  console.log(translations);
  return translation || null;
};

export default Trans;
