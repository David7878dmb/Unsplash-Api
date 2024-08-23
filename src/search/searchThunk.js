import { createAsyncThunk } from "@reduxjs/toolkit";
import { clientId, getRandomPhotosEndpoint, getSearchPhotosEndpoint } from "../App/api/keys";


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
        return data.results; // Los resultados de búsqueda están en `data.results`
      } else {
        throw new Error("Failed to fetch search images");
      }
    } catch (error) {
      console.error("Error fetching search images:", error);
      throw error;
    }
  }
);

//Download
export const downloadImageThunk = createAsyncThunk(
  "img/downloadImage",
  async (imageId, { getState }) => {
    try {
      const state = getState();
      const randomPhotos = state.imgs.randomPhotos || [];
      const searchPhotos = state.imgs.searchPhotos || [];
      const photo =
        randomPhotos.find((photo) => photo.id === imageId) ||
        searchPhotos.find((photo) => photo.id === imageId);

      if (!photo) {
        throw new Error("Photo not found");
      }

      //enviar solicitud de seguimiento de descarga
      const downloadTrackingUrl = photo.links.download_location;
      console.log("Download URL:", downloadTrackingUrl);
       await fetch(downloadTrackingUrl, {
        method: "GET",
        headers: {
          Authorization: `Client-ID ${clientId}`,
        },
      });

      //descargar imagen
      const imageUrlDownload = photo.urls.full;
      const response = await fetch(imageUrlDownload, {
        method: "GET",
        headers: {
          Authorization: `Client-ID ${clientId}`,
        }
      });

      console.log("Download response status:", response.status);
      if (response.ok) {
        const blob = await response.blob();
        console.log("Blob size:", blob.size);
        const fileUrl = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = fileUrl;
        a.download = `${imageId}.jpg`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      } else {
        throw new Error("Failed to download photo");
      }
    } catch (error) {
      console.error("Error downloading photo:", error);
      throw error;
    }
  }
);