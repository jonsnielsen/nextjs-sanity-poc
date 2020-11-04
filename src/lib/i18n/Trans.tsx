import { ReactNode } from 'react';
// import { Locale } from 'src/config/localization';
import useI18n from './useI18n';
interface ITrans {
  defaultLanguage: ReactNode;
  dk: {
    translation: ReactNode;
    englishTranslation: ReactNode;
  };
}
const Trans = ({ defaultLanguage, dk }: ITrans) => {
  const { region } = useI18n();
  // problem, need not only locale, but need language.
  // if (locale === Locale.En) {
  //   return def;
  // }
  return null;
};

export default Trans;
