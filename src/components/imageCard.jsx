import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFav, removeFav } from '../fav/favSlice'; 

import corazon from '../assets/corazon.png';
import like from '../assets/like.png';
import download from '../assets/download.png';
import { downloadImageThunk } from '../search/searchThunk';

const ImageCard = ({ photo }) => {
    const dispatch = useDispatch();
    const isFavorite = useSelector((state) =>
      state.favs.favs.find((fav) => fav.id === photo.id)
    );

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFav(photo));
    } else {
      dispatch(addFav(photo));
    }
  };

  const handleDownloadClick = () => {
    dispatch(downloadImageThunk(photo.id))
  };


  return (
    <div 
      className="image-card" 
      style={{
        backgroundImage: `url(${photo.urls.small})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        width: '500px',
        height: '400px',
      }}
    >
      <div className="image-card-buttons" style={{ 
        position: 'absolute',
        bottom: '10px',
        right: '10px',
        display: 'flex',
        gap: '10px',
      }}>
        <img 
          src={isFavorite ? like : corazon} 
          alt="Favorite" 
          onClick={handleFavoriteClick} 
          className="favorite-button"
        />
        <img 
          src={download} 
          alt="Download"
          onClick={handleDownloadClick}
          className="download-button"
        />
      </div>
    </div>
  );
};

export default ImageCard;