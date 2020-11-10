import { LanguageId } from 'src/data/language';
// import useI18n from './useI18n';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';

export type Translations = Partial<Record<LanguageId, any>>;
export interface ITrans {
  translations: Translations;
}
const Trans = ({ translations }: ITrans) => {
  // const { language } = useI18n();
  const { languageId } = useSelector((state: RootState) => state.settings);

  return translations[languageId];
};

export default Trans;
