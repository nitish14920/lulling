import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type ConfigState = {
  accessToken: string;
  refreshToken: string;
};
const initialState: ConfigState = {
  accessToken: "",
  refreshToken: "",
};

const configSlice = createSlice({
  name: "config",
  initialState: initialState,
  reducers: {
    setAccessToken: (state: ConfigState, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
  },
});

export const { setAccessToken } = configSlice.actions;
export default configSlice.reducer;
