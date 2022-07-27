import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  images: [],
};

export const imagesSlice = createSlice({
  name: "imagePreview",
  initialState,

  reducers: {
    addImg: (state, action) => {
      state.images.push(action.payload);
    },

    deleteImg: (state, action) => {
      const imgToDelete = action.payload;
      const filteredImages = state.images.filter(
        (element) => element !== imgToDelete[0]
      );

      state.images = filteredImages;
    },

    updateArrayIfMoreThan5: (state, action) => {
      const newArr = action.payload;
      state.images = newArr;
    },
  },
});

export const imagesActions = imagesSlice.actions;

export default imagesSlice.reducer;
