import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFav, removeFav } from '../fav/favSlice';
import { openModal, closeModal, setComment } from '../components/description/descriptionSlice';
import corazon from '../assets/corazon.png';
import like from '../assets/like.png';
import download from '../assets/download.png';
import commentIcon from '../assets/comment.png'; 

const ImageCardWithComment = ({ photo }) => {
    const dispatch = useDispatch();
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

    return (
        <div
            className="image__card__description"
            style={{
                backgroundImage: `url(${photo.urls.small})`,
            }}
        >
            <div
                className="image__card__description__buttons"
                style={{
                    position: 'absolute',
                    bottom: '10px',
                    right: '10px',
                    display: 'flex',
                    gap: '10px',
                }}
            >
                <img
                    src={isFavorite ? like : corazon}
                    alt="Favorite"
                    onClick={handleFavoriteClick}
                    className="fimage__card__description__buttons__favorite" 
                />
                <img
                    src={download}
                    alt="Download"
                    onClick={handleDownloadClick}
                    className="image__card__description__buttons__download"
                />
                <img
                    src={commentIcon}
                    alt="Comment"
                    onClick={handleCommentClick}
                    className="image__card__description__buttons__comment"
                />
            </div>
            {comment && <div className="comment-text" style={{
            }}>
            </div>}
        </div>
    );
};

export default ImageCardWithComment;