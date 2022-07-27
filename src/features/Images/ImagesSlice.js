import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  images: [],
};

export const imagesSlice = createSlice({
  name: "imagePreview",
  initialState,

  reducers: {
    addImg: (state, action) => {
      const newImg = action.payload;
      state.images.push(newImg);
    },

    deleteImg: (state, action) => {
      const imgToDelete = action.payload;
      console.log(imgToDelete);
      const newArr = state.images.filter(
        (element) => element !== imgToDelete[0]
      );

      state.images = newArr;
    },
  },
});

export const imagesActions = imagesSlice.actions;

export default imagesSlice.reducer;
