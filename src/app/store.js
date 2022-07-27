import { configureStore } from "@reduxjs/toolkit";
import { errorSlice } from "../features/Errors/ErrorSlice";
import { imagesSlice } from "../features/Images/ImagesSlice";

export const store = configureStore({
  reducer: {
    images: imagesSlice.reducer,
    errors: errorSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
