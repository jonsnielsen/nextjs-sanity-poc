import { LanguageId } from 'src/data/language';
// import useI18n from './useI18n';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { useState, useEffect } from 'react';

export type Translations = Partial<Record<LanguageId, any>>;
export interface ITrans {
  translations: Translations;
}
// const Trans = ({ translations }: ITrans) => {
//   // const { language } = useI18n();
//   const { languageId, regionId } = useSelector(
//     (state: RootState) => state.settings,
//   );
//   const [translation, setTranslation] = useState(translations[languageId]);

//   console.log(translations);
//   useEffect(() => {
//     if (translations[languageId]) {
//       setTranslation(translations[languageId]);
//     }
//     return () => {
//       console.log(' this bad boy is destroyed');
//     };
//   });

//   return translation;
// };

const Trans = ({ translations }: ITrans) => {
  // const { language } = useI18n();
  const { languageId, regionId } = useSelector(
    (state: RootState) => state.settings,
  );
  const [translation, setTranslation] = useState(translations[languageId]);

  useEffect(() => {
    if (translations[languageId]) {
      setTranslation(translations[languageId]);
    }
  });

  return translation;
};

export default Trans;
