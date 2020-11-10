import { regionsById } from 'src/data/region';
import { LanguageId, languagesById } from 'src/data/language';
import { useDispatch, useSelector } from 'react-redux';
import { changeLanguage } from 'src/store/settingsSlice';
import { RootState } from 'src/store';

const LanguageSelector = () => {
  const dispatch = useDispatch();
  const { languageId, regionId } = useSelector(
    (state: RootState) => state.settings,
  );

  const languageIds = regionsById[regionId].languageIds;
  const languages = languageIds.map((id) => languagesById[id]);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguageId = e.target.value as LanguageId;
    dispatch(changeLanguage(selectedLanguageId));
  };

  return (
    <select value={languageId} onChange={handleLanguageChange}>
      {languages.map((language) => {
        return <option value={language.id}>{language.name}</option>;
      })}
    </select>
  );
};
export default LanguageSelector;
