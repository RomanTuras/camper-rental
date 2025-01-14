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
import favoritesReducer from './favorites/slice.js';
import campersReducer from './campers/slice.js';
import filtersReducer from './filters/slice.js';

const persistFavoritesConfig = {
  key: 'favorites',
  storage,
  whitelist: ['items'],
};

const persistFiltersConfig = {
  key: 'filters',
  storage,
  whitelist: ['params'],
};

const rootReducer = combineReducers({
  favorites: persistReducer(persistFavoritesConfig, favoritesReducer),
  campers: campersReducer,
  filters: persistReducer(persistFiltersConfig, filtersReducer),
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
