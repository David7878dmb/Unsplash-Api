import React from 'react';
import { useSelector } from 'react-redux';
import ImageCard from '../components/imageCard';

const SearchResults = () => {
  const { searchPhotos, status, error } = useSelector((state) => state.imgs);

  if (status === 'pending') {
    return <div>Loading...</div>;
  }

  if (error.searchPhotos) {
    return <div>Error: {error.searchPhotos}</div>;
  }

  return (
    <div className="search__results">
    {searchPhotos.length > 0 ? (
      searchPhotos.map((photo) => (
        <ImageCard key={photo.id} photo={photo} />
      ))
    ) : (
      <p>No results found</p>
    )}
  </div>
  );
};

export default SearchResults;