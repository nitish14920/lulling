/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SpotifyUserProfile = {
  display_name: string;
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  images: Array<unknown>; // assuming images array contains unknown objects, you can update this based on the actual structure
  type: string;
  uri: string;
  followers: {
    href: string | null;
    total: number;
  };
  country: string;
  product: string;
  explicit_content: {
    filter_enabled: boolean;
    filter_locked: boolean;
  };
  email: string;
};

interface ProfileState {
  profile: SpotifyUserProfile | null;
  loading: boolean;
  error: string | null;
}

const initialState: ProfileState = {
  profile: null,
  loading: false,
  error: null,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    fetchProfileStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchProfileSuccess: (
      state: ProfileState,
      action: PayloadAction<SpotifyUserProfile>
    ) => {
      state.profile = action.payload;
      state.loading = false;
    },
    fetchProfileFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export const { fetchProfileStart, fetchProfileSuccess, fetchProfileFailure } =
  profileSlice.actions;

export default profileSlice.reducer;
