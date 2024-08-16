import { createSlice } from "@reduxjs/toolkit";
import { FetchImagesListThunk } from "./searchThunk";


export const ImagesSlice = createSlice({
    name: "imgs",
  initialState: {
    status: "idle",
    randomPhotos: [],
    searchPhotos: [],
    error: {
      randomPhotos: null,
      searchPhotos: null,
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    //random
    builder
    .addCase(FetchImagesListThunk.pending, (state) => {
        state.status = "pending";
    })
    .addCase(FetchImagesListThunk.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.randomPhotos = action.payload == null ? [] : action.payload;
    })
    .addCase(FetchImagesListThunk.rejected,(state, action) => {
        state.status = "rejected";
        state.error.randomPhotos = action.error.message;
    });


  },
});

export default ImagesSlice.reducer;