import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFav, removeFav } from '../fav/favSlice';
import { openModal, closeModal, setComment } from '../components/description/descriptionSlice';
import commentIcon from '../assets/comment.png';
import InfoModal from './info/infoModal';
import { useState } from 'react';
import { FaRegHeart } from "react-icons/fa6";
import { IoCloudDownloadSharp } from "react-icons/io5";
import { FcLike } from "react-icons/fc";
import { BsInfoCircle } from "react-icons/bs";


const ImageCardWithComment = ({ photo }) => {
    const dispatch = useDispatch();
    const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);

    const isFavorite = useSelector((state) =>
      state.favs.favs.find((fav) => fav.id === photo.id)
    );
    const comment = useSelector((state) => state.comments.comments[photo.id] || "");

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

    const handleDownloadClick = () => {
        dispatch(downloadImageThunk(photo.id));
    };

    const handleInfoClick = () => {
        setIsInfoModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsInfoModalOpen(false);
    };

    return (
        
        <div
            className="image__card__description"
            style={{
                backgroundImage: `url(${photo.urls.small})`,
            }}
        >
            <div
                className="image__card__description__buttons">
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
                <img
                    src={commentIcon}
                    alt="Comment"
                    onClick={handleCommentClick}
                    className="image__card__description__buttons__comment"
                />
                <BsInfoCircle
                    alt="Info"
                    className="image__card__description__buttons__info"
                    onClick={handleInfoClick}
                />
            </div>
            {comment && <div className="comment-text" style={{
            }}>
            </div>}
             {isInfoModalOpen && <InfoModal image={photo} onClose={handleCloseModal} />}
        </div>
    );
};

export default ImageCardWithComment;