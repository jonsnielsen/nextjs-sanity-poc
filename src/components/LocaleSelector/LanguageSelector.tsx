import { regionsById, RegionId } from 'src/data/region';
import { LanguageId, Language, languagesById } from 'src/data/language';
import { useDispatch, useSelector } from 'react-redux';
import { changeLanguage } from 'src/store/settingsSlice';
import { RootState } from 'src/store';

interface ILanguageSelector {
  onChange(selectedLanguageId: LanguageId): void;
  languageId: LanguageId;
  regionId: RegionId;
  selectableLanguages: Language[];
}

const LanguageSelector = ({
  onChange,
  regionId,
  languageId,
  selectableLanguages,
}: ILanguageSelector) => {
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguageId = e.target.value as LanguageId;
    onChange(selectedLanguageId);
  };

  return (
    <select value={languageId} onChange={handleLanguageChange}>
      {selectableLanguages.map((language) => {
        return (
          <option key={language.id} value={language.id}>
            {language.name}
          </option>
        );
      })}
    </select>
  );
};
export default LanguageSelector;
