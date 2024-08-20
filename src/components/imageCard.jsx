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
      className="image__card" 
      style={{
        backgroundImage: `url(${photo.urls.small})`,
      }}
    >
      <div className="image__card__buttons" style={{ 

      }}>
        <img 
          src={isFavorite ? like : corazon} 
          alt="Favorite" 
          onClick={handleFavoriteClick} 
          className="image__card__buttons__favorite"
        />
        <img 
          src={download} 
          alt="Download"
          onClick={handleDownloadClick}
          className="image__card__buttons__download"
        />
      </div>
    </div>
  );
};

export default ImageCard;