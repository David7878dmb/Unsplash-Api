import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FetchImagesListThunk } from '../search/searchThunk';
import ImageCard from '../components/imageCard';

const RandomImages = () => {
  const dispatch = useDispatch();
  const {randomPhotos, status, error} = useSelector((state) => state.imgs);
  //const randomPhotos = useSelector((state) => state.imgs.randomPhotos);
  //const status = useSelector((state) => state.imgs.status);
  //const error = useSelector((state) => state.imgs.error.randomPhotos);

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
    <div className="random-images">
      {randomPhotos.length > 0 ? (
        randomPhotos.map((photo) => (
          <ImageCard key={photo.id} photo={photo} />
        ))
      ) : (
        <p>No images found</p>
      )}
    </div>
  );
};

export default RandomImages;