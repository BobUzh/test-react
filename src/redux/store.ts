import { configureStore } from "@reduxjs/toolkit";
import wishlistSlice from "./wishlistSlice";
import langSlice from "./langSlice";
import userSlice from "./userSlice";

export const store = configureStore({
    reducer: {
        wishlist: wishlistSlice,
        user: userSlice,
        lang: langSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
