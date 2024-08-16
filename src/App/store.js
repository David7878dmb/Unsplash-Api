import { configureStore } from "@reduxjs/toolkit";
import { ImagesSlice } from "../search/searchSlice";


export const store = configureStore({
    reducer: {
        "imgs" : ImagesSlice.reducer
    },
});
