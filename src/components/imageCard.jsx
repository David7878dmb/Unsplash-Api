import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFav, removeFav } from '../fav/favSlice'; 
import { downloadImageThunk } from '../search/searchThunk';
import { FaRegHeart } from "react-icons/fa6";
import { IoCloudDownloadSharp } from "react-icons/io5";
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
      <div className="image__card__buttons">

        {isFavorite ? (
          <FcLike 
            onClick={handleFavoriteClick} 
            className="image__card__buttons__favorite" 
            style={{ cursor: 'pointer', fontSize: '24px' }} // Ajusta el estilo según necesites
          />
        ) : (
          <FaRegHeart 
            onClick={handleFavoriteClick} 
            className="image__card__buttons__favorite" 
            style={{ cursor: 'pointer', fontSize: '24px' }} // Ajusta el estilo según necesites
          />
        )}
        
        <IoCloudDownloadSharp 
          alt="Download"
          onClick={handleDownloadClick}
          className="image__card__buttons__download"
        />
      </div>
    </div>
  );
};

export default ImageCard;