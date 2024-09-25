import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // default storage (localStorage)
import merchantReducer from "./Slice"; // Import your merchant slice

// Combine reducers (can add more slices here)
const rootReducer = combineReducers({
  merchant: merchantReducer, // Using the merchant slice here
});

// Persist config for redux-persist
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["merchant"], // Only persist the merchant slice
};

// Create the persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store with persisted reducer and necessary middleware
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Create the persistor
export const persistor = persistStore(store);

// Export the store and types
export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];

export default store;
