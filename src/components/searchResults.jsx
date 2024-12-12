import React from 'react';
import { useSelector } from 'react-redux';
import ImageCard from '../components/imageCard';
import Masonry from 'react-masonry-css';

const SearchResults = () => {
  const { searchPhotos, status, error } = useSelector((state) => state.imgs);

  const breakpointColumns = {
    default: 4,  
    1100: 3,     
    700: 2,     
    500: 1,
  };

  if (status === 'pending') {
    return <div>Loading...</div>;
  }

  if (error.searchPhotos) {
    return <div>Error: {error.searchPhotos}</div>;
  }

  return (
  //   <div className="search__results">
  //   {searchPhotos.length > 0 ? (
  //     searchPhotos.map((photo) => (
  //       <ImageCard key={photo.id} photo={photo} />
  //     ))
  //   ) : (
  //     <p>No results found</p>
  //   )}
  // </div>

    <div className="random">
      <Masonry
        breakpointCols={breakpointColumns}
        className="random__images"
        columnClassName="random__images__column"
      >
        {searchPhotos.length > 0 ? (
          searchPhotos.map((photo) => (
         <ImageCard key={photo.id} photo={photo} />
        ))
     ) : (
          <p>No images found</p>
        )}
      </Masonry>
    </div>
  );
};

export default SearchResults;