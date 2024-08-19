import { createSlice } from "@reduxjs/toolkit";
import { FetchImagesListThunk, FetchSearchImagesListThunk, downloadImageThunk } from "./searchThunk";


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

     //Search
     builder
     .addCase(FetchSearchImagesListThunk.pending, (state) => {
       state.status = "pending";
     })
     .addCase(FetchSearchImagesListThunk.fulfilled, (state, action) => {
       state.status = "fulfilled";
       state.searchPhotos = action.payload == null ? [] : action.payload;
     })
     .addCase(FetchSearchImagesListThunk.rejected, (state, action) => {
       state.status = "rejected";
       state.error.searchPhotos = action.error.message;
     });


      //Download Photos
    builder
    .addCase(downloadImageThunk.pending, (state) => {
      state.status = "pending";
    })
    .addCase(downloadImageThunk.fulfilled, (state) => {
      state.status = "fullfilled";
    })
    .addCase(downloadImageThunk.rejected, (state, action) => {
      state.status = "rejected";
      state.error.download = action.payload || action.error.message;
    });

  },
});




export default ImagesSlice.reducer;

