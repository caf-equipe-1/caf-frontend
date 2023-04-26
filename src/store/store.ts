import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/user-slice";
import passwordSlice from "./slices/password-slice";
import documentSlice from "./slices/document-slice";
import cardSlice from "./slices/card-slice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    passwords: passwordSlice,
    documents: documentSlice,
    cards: cardSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
