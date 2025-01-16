import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore,
  persistReducer,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import favouritesReducer from './favourites/slice.js';
import campersReducer from './campers/slice.js';
import filtersReducer from './filters/slice.js';

const persistFavoritesConfig = {
  key: 'favourites',
  storage,
  whitelist: ['items'],
};

const persistFiltersConfig = {
  key: 'filter',
  storage,
  whitelist: ['params'],
};

const rootReducer = combineReducers({
  favourites: persistReducer(persistFavoritesConfig, favouritesReducer),
  campers: campersReducer,
  // filter: persistReducer(persistFiltersConfig, filtersReducer),
  filter: filtersReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
