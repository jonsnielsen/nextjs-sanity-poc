import {
  configureStore,
  combineReducers,
  CombinedState,
  ThunkAction,
  Action,
} from '@reduxjs/toolkit';
import settingsSliceReducer from './settingsSlice';

const rootReducer = combineReducers({ settings: settingsSliceReducer });
export type RootState = ReturnType<typeof rootReducer>;

export type InitialState = Pick<RootState, 'settings'>;

const getStore = (initialState: InitialState) =>
  configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
  });

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
// export type AppDispatch = typeof store.dispatch;

export default getStore;
