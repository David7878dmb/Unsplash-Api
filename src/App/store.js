import { configureStore } from "@reduxjs/toolkit";
import { ImagesSlice } from "../search/searchSlice";
import favSlice from "../fav/favSlice";


export const store = configureStore({
    reducer: {
        "imgs" : ImagesSlice.reducer,
        "favs": favSlice,
    },
});
