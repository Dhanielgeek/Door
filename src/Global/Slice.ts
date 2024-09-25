import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
  name: "merchant",
  initialState: {
    merchant: {},
    token: "",
    profile: {},
  },
  reducers: {
    setMerchant: (state, action) => {
      state.merchant = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUserPro: (state, action) => {
      state.profile = action.payload;
    },
  },
});

export const { setMerchant, setToken, setUserPro } = Slice.actions;

export default Slice.reducer;
