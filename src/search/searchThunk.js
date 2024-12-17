
import { createAsyncThunk } from "@reduxjs/toolkit";
import { clientId, getRandomPhotosEndpoint, getSearchPhotosEndpoint } from "../App/api/keys";


//random
export const FetchImagesListThunk = createAsyncThunk(
  "imgs/fetchImagesList",
  async (page = 1) => { 
    try {
      const url = getRandomPhotosEndpoint(page); 
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Client-ID ${clientId}`,
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error("Failed to fetch");
      }
    } catch (error) {
      console.error("Error fetching images:", error);
      throw error(error);
    }
  }
);


//serch
export const FetchSearchImagesListThunk = createAsyncThunk(
  "imgs/fetchSearchImagesList",
  async (searchTerm) => {
    try {
      const url = getSearchPhotosEndpoint(searchTerm);
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Client-ID ${clientId}`,
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        return data.results;
      } else {
        throw new Error("Failed to fetch search images");
      }
    } catch (error) {
      console.error("Error fetching search images:", error);
      throw error;
    }
  }
);





