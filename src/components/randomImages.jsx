import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FetchImagesListThunk } from '../search/searchThunk';
import ImageCard from '../components/imageCard';
import Masonry from 'react-masonry-css';

const RandomImages = () => {
  const dispatch = useDispatch();
  const {randomPhotos, status, error} = useSelector((state) => state.imgs);

  
  const [imagesToShow, setImagesToShow] = useState(24);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(FetchImagesListThunk(page));
  }, [dispatch, page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1); 
    setImagesToShow((prevCount) => prevCount + 12); 
  };

  const breakpointColumns = {
    default: 4,  
    1100: 3,     
    700: 2,     
    500: 1,
  };

  if (status === 'pending') {
    return <p>Loading...</p>;
  }

  if (status === 'rejected') {
    return <p>Error fetching images: {error}</p>;
  }

  return (
    <div className="random">
      <Masonry
        breakpointCols={breakpointColumns}
        className="random__images"
        columnClassName="random__images__column"
      >
        {randomPhotos.length > 0 ? (
          randomPhotos.slice(0, imagesToShow).map((photo) => (
            <ImageCard key={photo.id} photo={photo} />
          ))
        ) : (
          <p>No images found</p>
        )}
      </Masonry>
      <button className="random__images__button" onClick={handleLoadMore}>
        Load More
      </button>
    </div>
  );
};
export default RandomImages;