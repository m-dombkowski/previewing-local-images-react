import { configureStore } from "@reduxjs/toolkit";
import { errorSlice } from "../features/Errors/ErrorSlice";
import { imagesSlice } from "../features/Images/ImagesSlice";

export const store = configureStore({
  reducer: {
    images: imagesSlice.reducer,
    errors: errorSlice.reducer,
  },
  // added this to not have spam of errors in the console even though everything works as intended
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
