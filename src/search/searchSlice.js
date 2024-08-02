import { createSlice } from "@reduxjs/toolkit"

export const SearchSlice = createSlice({
    name : "search",
    initialState:{
        status:"idle",
        images:[],
        error: null,
    },
    reducers:{},
    extraReducers: (builders) => {
        builder
            .addCase(fetchPhotos.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchPhotos.fulfilled, (state, action) => {
                state.status = "fulfilled";
                state.photos = action.payload;
            })
            .addCase(fetchPhotos.rejected, (state, action) => {
                state.status = "rejected";
                state.error = action.error.message;
            });
    },
})

export default SearchSlice.reducer;