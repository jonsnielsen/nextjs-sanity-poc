import { useContext } from 'react';
import I18nContext from './I18nContext';

const useI18n = () => {
  const i18nContext = useContext(I18nContext);

  if (!i18nContext) {
    throw new Error('useI18n must be used withing an I18nProvider');
  }

  return i18nContext;
};

export default useI18n;
