import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FetchImagesListThunk } from '../search/searchThunk';
const RandomImages = () => {
  const dispatch = useDispatch();
  const randomPhotos = useSelector((state) => state.imgs.randomPhotos);
  const status = useSelector((state) => state.imgs.status);
  const error = useSelector((state) => state.imgs.error.randomPhotos);

  useEffect(() => {
    dispatch(FetchImagesListThunk());
  }, [dispatch]);

  if (status === 'pending') {
    return <p>Loading...</p>;
  }

  if (status === 'rejected') {
    return <p>Error fetching images: {error}</p>;
  }

  return (
    <div className="images-container">
      {randomPhotos.map((photo) => (
        <img key={photo.id} src={photo.urls.small} alt={photo.alt_description} className="random-image" />
      ))}
    </div>
  );
};

export default RandomImages;