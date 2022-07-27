import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  errorMessage: "",
};

export const errorSlice = createSlice({
  name: "errors",
  initialState,
  reducers: {
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    },
    clearMessage: (state) => {
      state.errorMessage = "";
    },
  },
});

export const errorActions = errorSlice.actions;

export default errorSlice.reducer;
