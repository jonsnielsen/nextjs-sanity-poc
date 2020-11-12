import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { defaultLanguageId, LanguageId } from 'src/data/language';
import { defaultRegionId, RegionId } from 'src/data/region';
import Router from 'next/router';
import { AppThunk } from './index';

// const defaultRegionId = regions.allIds[0];
// const defaultRegion = regions.byId[defaultRegionId];
// const { defaultCountryId } = defaultRegion;
// const defaultLanguageId = defaultRegion.languageIds[0];

// const defaultState = {
//   languageId: defaultLanguageId,
//   regionId: defaultRegionId,
//   countryId: defaultCountryId,
//   idCountryId: null,
// };

type SettingsState = {
  languageId: LanguageId;
  regionId: RegionId;
};

const initialState: SettingsState = {
  languageId: defaultLanguageId,
  regionId: defaultRegionId,
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    changeLanguage(state, action: PayloadAction<LanguageId>) {
      state.languageId = action.payload;
    },
    changeRegion(state, action: PayloadAction<RegionId>) {
      state.regionId = action.payload;
    },
  },
});

export const handleLocaleChange = (
  regionId: RegionId,
  languageId: LanguageId,
): AppThunk => async (dispatch, getState) => {
  const { regionId: prevRegionId } = getState().settings;

  if (prevRegionId == regionId) {
    return;
  }

  Router.push(
    {
      pathname: Router.router.pathname,
      query: Router.router.query,
    },
    {},
    {
      locale: regionId,
    },
  );
  dispatch(changeRegion(regionId));
  dispatch(changeLanguage(languageId));
};

export const { changeLanguage, changeRegion } = settingsSlice.actions;

export default settingsSlice.reducer;
