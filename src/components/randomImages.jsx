import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FetchImagesListThunk } from '../search/searchThunk';
import ImageCard from '../components/imageCard';

const RandomImages = () => {
  const dispatch = useDispatch();
  const {randomPhotos, status, error} = useSelector((state) => state.imgs);
  //const randomPhotos = useSelector((state) => state.imgs.randomPhotos);
  //const status = useSelector((state) => state.imgs.status);
  //const error = useSelector((state) => state.imgs.error.randomPhotos);
  
  const [imagesToShow, setImagesToShow] = useState(12);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(FetchImagesListThunk(page));
  }, [dispatch, page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1); // Incrementa la página
    setImagesToShow((prevCount) => prevCount + 12); // Opcional, para mostrar más en pantalla
  };

  if (status === 'pending') {
    return <p>Loading...</p>;
  }

  if (status === 'rejected') {
    return <p>Error fetching images: {error}</p>;
  }

  return (
    <div>
    <div className="random__images">
      
      {randomPhotos.length > 0 ? (
        randomPhotos.slice(0, imagesToShow).map((photo) => (
          <ImageCard key={photo.id} photo={photo} />
        ))
      ) : (
        <p>No images found</p>
      )}

      
    </div>
      <button className="random__images__button" onClick={handleLoadMore}>Load More</button>
      </div>
  );
};

export default RandomImages;