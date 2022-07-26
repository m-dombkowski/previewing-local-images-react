import { configureStore } from "@reduxjs/toolkit";
import { imagesSlice } from "../features/Images/ImagesSlice";

export const store = configureStore({
  reducer: {
    images: imagesSlice.reducer,
  },
});
