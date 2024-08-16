import { createAsyncThunk } from "@reduxjs/toolkit";
import { clientId, getRandomPhotosEndpoint } from "../App/api/keys";


//random
export const FetchImagesListThunk = createAsyncThunk(
  "imgs/fetchImagesList",
  async () => {
    try {
      const url = getRandomPhotosEndpoint();
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



/*import { createAsyncThunk } from '@reduxjs/toolkit';

const apiUrl = 'https://api.unsplash.com';
const clientId = 'XMqPNJrgL8VFZqe_iv0gq654sK1ROSypf78XCHUFGjI';

export const fetchImages = createAsyncThunk('search/fetchImages', async (query = '') => {
  const endpoint = query
    ? `${apiUrl}/search/photos?query=${query}&per_page=30&client_id=${clientId}`
    : `${apiUrl}/photos/random?count=30&client_id=${clientId}`;

  const response = await fetch(endpoint);

  if (!response.ok) {
    throw new Error('Error al buscar imágenes');
  }

  const data = await response.json();
  
  return query ? data.results : data;
});*/

