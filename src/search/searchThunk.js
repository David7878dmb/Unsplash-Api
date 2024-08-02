import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchImages = createAsyncThunk('search/fetchImages', async (query = '') => {
  const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&per_page=30`, {
    headers: {
      Authorization: `XMqPNJrgL8VFZqe_iv0gq654sK1ROSypf78XCHUFGjI`,
    },
  });

  if (!response.ok) {
    throw new Error('Error al buscar imágenes');
  }

  const data = await response.json();
  return data.results;
});