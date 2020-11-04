import { createContext } from 'react';
import { Region } from 'src/config/localization';

interface II18nContext {
  region: Region;
  setRegion(region: Region): void;
}
const I18nContext = createContext<II18nContext | null>(null);

export default I18nContext;
