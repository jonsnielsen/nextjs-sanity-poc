import RegionSelector from './RegionSelector';
import LanguageSelector from './LanguageSelector';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'src/store/index';
import { handleLocaleChange } from 'src/store/settingsSlice';
import { LanguageId, languagesById } from 'src/data/language';
import { RegionId, regionsById } from 'src/data/region';

const LocaleSelector = () => {
  const { regionId, languageId } = useSelector(
    (state: RootState) => state.settings,
  );
  const dispatch = useDispatch();

  const [selectedRegionId, setSelectedRegionId] = useState(regionId);
  const {
    selectedLanguageId,
    setSelectedLanguageId,
    selectableLanguages,
  } = useLanguage(languageId, selectedRegionId);

  const handleChangeRegion = (newRegionId: RegionId) => {
    setSelectedRegionId(newRegionId);
  };

  const handleChangeLanguage = (newLanguageId: LanguageId) => {
    setSelectedLanguageId(newLanguageId);
  };

  return (
    <>
      <RegionSelector
        regionId={selectedRegionId}
        onChange={handleChangeRegion}
      />
      <LanguageSelector
        languageId={selectedLanguageId}
        regionId={selectedRegionId}
        selectableLanguages={selectableLanguages}
        onChange={handleChangeLanguage}
      />
      <button
        onClick={() => {
          dispatch(handleLocaleChange(selectedRegionId, selectedLanguageId));
        }}
      >
        Submit
      </button>
    </>
  );
};

const useLanguage = (
  initialLanguageId: LanguageId,
  selectedRegionId: RegionId,
) => {
  const [selectedLanguageId, setSelectedLanguageId] = useState(
    initialLanguageId,
  );

  const selectableLanguageIds = regionsById[selectedRegionId].languageIds;
  const selectableLanguages = selectableLanguageIds.map(
    (id) => languagesById[id],
  );

  // if the region changes, the selected language has to change as well, otherwise we might end up with a language that is not supported in that region
  useEffect(() => {
    setSelectedLanguageId(selectableLanguageIds[0]);
  }, [selectedRegionId]);

  return { selectedLanguageId, setSelectedLanguageId, selectableLanguages };
};

export default LocaleSelector;
