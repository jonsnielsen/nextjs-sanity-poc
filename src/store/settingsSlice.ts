import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LanguageId } from 'src/data/language';
import { RegionId } from 'src/data/region';
import Router from 'next/router';
import { AppThunk } from './index';

type SettingsState = {
  languageId: LanguageId;
  regionId: RegionId;
};

const initialState: SettingsState = {
  languageId: LanguageId.Default,
  regionId: RegionId.Default,
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
  const {
    regionId: prevRegionId,
    languageId: prevLanguageId,
  } = getState().settings;

  if (prevRegionId !== regionId) {
    console.log({ queryyy: Router.router.query });
    Router.push(
      {
        pathname: Router.router.pathname,
        query: Router.router.query,
      },
      {
        query: Router.router.query,
      },
      {
        locale: regionId,
      },
    );
    dispatch(changeRegion(regionId));
  }

  if (languageId !== prevLanguageId) {
    dispatch(changeLanguage(languageId));
  }
};

export const { changeLanguage, changeRegion } = settingsSlice.actions;

export default settingsSlice.reducer;
