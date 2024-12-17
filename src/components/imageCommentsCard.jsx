import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFav, removeFav } from '../fav/favSlice';
import { openModal} from '../components/description/descriptionSlice';
import InfoModal from './info/infoModal';
import { FaRegHeart } from "react-icons/fa6";
import { FcLike } from "react-icons/fc";
import { BsInfoCircle } from "react-icons/bs";
import { FaRegCommentDots } from "react-icons/fa";



const ImageCardWithComment = ({ photo }) => {
    const dispatch = useDispatch();
    const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);

    const isFavorite = useSelector(state =>
        state.favs.favs.find(fav => fav.id === photo.id)
    );
    const comment = useSelector(state => state.comments.comments[photo.id] || "");

    const handleFavoriteClick = () => {
        if (isFavorite) {
            dispatch(removeFav(photo));
        } else {
            dispatch(addFav(photo));
        }
    };

    const handleCommentClick = () => {
        dispatch(openModal(photo.id));
    };



    const handleInfoClick = () => {
        setIsInfoModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsInfoModalOpen(false);
    };

    return (


    <div className='search__results__image'>
      <div 
        className="search__results__image__card">

        <img
            className="search__results__image__card__photo"
            src={photo.urls.small}
            
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
              
      
                
            <FaRegCommentDots
                alt="Comment"
                onClick={handleCommentClick}
                className="search__results__image__bar__buttons__comment" 
                />
            <BsInfoCircle
                alt="Info"
                
                className="search__results__image__bar__buttons__info" 
                onClick={handleInfoClick}
            />
          
          {comment && <div className="comment-text" />}
          {isInfoModalOpen && <InfoModal image={photo} onClose={handleCloseModal} />}
         
        </div>
      </div>
    </div>

    );
};

export default ImageCardWithComment;