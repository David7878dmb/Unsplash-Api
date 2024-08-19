import { configureStore } from "@reduxjs/toolkit";
import { ImagesSlice } from "../search/searchSlice";
import FavSlice from "../fav/favSlice";
import CommentSlice from "../components/description/descriptionSlice" 

export const store = configureStore({
    reducer: {
        "imgs" : ImagesSlice.reducer,
        "favs": FavSlice,
        "comments": CommentSlice,
    },
});
