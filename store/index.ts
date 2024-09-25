import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import profileReducer from "./profileSlice";
import tracksReducer from "./tracksSlice";
import configReducer from "./configSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    profile: profileReducer,
    tracks: tracksReducer,
    config: configReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
