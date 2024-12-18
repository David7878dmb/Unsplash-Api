import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFav, removeFav } from '../fav/favSlice'; 
import { FaRegHeart } from "react-icons/fa6";
import { FcLike } from "react-icons/fc";


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
    <div className='search__results__image'>
      <div 
        className="search__results__image__card">

        <img
            className="search__results__image__card__photo"
            src={photo.urls.regular}
            
            />
      </div>

      <div className="search__results__image__bar">
        <div className="search__results__image__bar__buttons">

          {isFavorite ? (
            <FcLike 
              onClick={handleFavoriteClick} 
              className="search__results__image__bar__buttons__favorite" 
              style={{ cursor: 'pointer', fontSize: '24px' }}
            />
          ) : (
            <FaRegHeart 
              onClick={handleFavoriteClick} 
              className="search__results__image__bar__buttons__favorite" 
              style={{ cursor: 'pointer', fontSize: '24px' }}
            />
          )}
          
         
        </div>
      </div>
    </div>
  );
};

export default ImageCard;