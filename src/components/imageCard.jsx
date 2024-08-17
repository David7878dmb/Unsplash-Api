import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFav, removeFav } from '../fav/favSlice'; 
import corazon from '../assets/corazon.png';
import like from '../assets/like.png';

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

  return (
    <div className="image-card">
      <img src={photo.urls.small} alt={photo.alt_description} />
      <div className="image-card-buttons">
        <img 
          src={isFavorite ? like : corazon} 
          alt="Favorite" 
          onClick={handleFavoriteClick} 
          className="favorite-button"
        />
        <img 
          src="../assets/download.png" 
          alt="Download"
          onClick={() => window.open(photo.links.download, '_blank')}
          className="download-button"
        />
      </div>
    </div>
  );
};

export default ImageCard;