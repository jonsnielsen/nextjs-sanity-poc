import { ReactElement, useState } from 'react';
import { Region } from 'src/config/localization';
import I18nContext from './I18nContext';

interface II18nProvider {
  children: ReactElement;
}
const I18nProvider = ({ children }: II18nProvider) => {
  const [region, setRegion] = useState<Region>(Region.Default);

  return (
    <I18nContext.Provider value={{ region, setRegion }}>
      {children}
    </I18nContext.Provider>
  );
};

export default I18nProvider;
