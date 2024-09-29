import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
  name: "merchant",
  initialState: {
    merchant: {},
    token: "",
    profile: {},
    transactions: [],
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
    setHistory: (state, action) => {
      state.transactions = action.payload;
    },
    clearMerchant: (state) => {
      state.merchant = {};
      state.token = "";
      state.profile = {};
    },
  },
});

export const { setMerchant, setToken, setUserPro, setHistory, clearMerchant } =
  Slice.actions;

export default Slice.reducer;
