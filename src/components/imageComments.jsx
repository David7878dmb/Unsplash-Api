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
            className="image-card"
            style={{
                backgroundImage: `url(${photo.urls.small})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
                width: '300px',
                height: '200px',
            }}
        >
            <div
                className="image-card-buttons"
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
                    className="favorite-button"
                    style={{
                        width: '30px',
                        height: '30px',
                        cursor: 'pointer',
                    }}
                />
                <img
                    src={download}
                    alt="Download"
                    onClick={handleDownloadClick}
                    className="download-button"
                    style={{
                        width: '30px',
                        height: '30px',
                        cursor: 'pointer',
                    }}
                />
                <img
                    src={commentIcon}
                    alt="Comment"
                    onClick={handleCommentClick}
                    className="comment-button"
                    style={{
                        width: '30px',
                        height: '30px',
                        cursor: 'pointer',
                    }}
                />
            </div>
            {comment && <div className="comment-text" style={{
                position: 'absolute',
                top: '10px',
                left: '10px',
                color: 'black',
                background: 'rgba(0, 0, 0, 0.5)',
                padding: '5px',
                borderRadius: '5px',
            }}>
                {comment}
            </div>}
        </div>
    );
};

export default ImageCardWithComment;