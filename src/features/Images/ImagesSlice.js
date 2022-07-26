import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  images: [],
};

export const imagesSlice = createSlice({
  name: "imagePreview",
  initialState,

  reducers: {
    addImg: (state, action) => {
      const newItem = action.payload;
      state.images.push(newItem);
      console.log(state);
    },
  },
});

export const imagesActions = imagesSlice.actions;

export default imagesSlice.reducer;
