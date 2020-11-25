import { useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { useState, useEffect } from 'react';
import { Translations } from 'src/types/translations';

const useTranslation = <T>(translations: Translations<T>) => {
  const { languageId } = useSelector((state: RootState) => state.settings);
  const [translation, setTranslation] = useState(translations[languageId]);

  useEffect(() => {
    if (translations[languageId]) {
      setTranslation(translations[languageId]);
    }
  }, [languageId, translations]);
  // TODO: Throw error if there is no translation (ie., if we expect that there ALWAYS should be a translation)

  return translation;
};

export default useTranslation;
