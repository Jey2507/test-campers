import { configureStore } from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { trackReducer } from "./track/slice.js";
import { filtersReducer } from "./filter/slice.js";

const persistConfig = {
    key: 'track', 
    storage,      
  };

const persistorTrackReducer = persistReducer(persistConfig, trackReducer);

export const store = configureStore({
  reducer: {
    track: persistorTrackReducer,
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
