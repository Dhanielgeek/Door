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
    clearMerchant: (state) => {
      state.merchant = {};
      state.token = "";
      state.profile = {};
    },
  },
});

export const { setMerchant, setToken, setUserPro, clearMerchant } =
  Slice.actions;

export default Slice.reducer;
