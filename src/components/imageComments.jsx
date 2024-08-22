/*import React from 'react';
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
import Select from 'react-select';
import { useEffect } from 'react';

const ImageCardWithComment = ({ photo }) => {
    const dispatch = useDispatch();
    const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);

    const sortedOptions = {
        addDate: 'add-date',
        width: 'width',
        height: 'height',
        likes: 'likes'
    };

    const [sortOption, setSortOption] = useState(sortedOptions.addDate);

    const options = [
        { value: sortedOptions.addDate, label: 'Añadido' },
        { value: sortedOptions.width, label: 'Ancho' },
        { value: sortedOptions.height, label: 'Alto' },
        { value: sortedOptions.likes, label: 'Likes' },
    ];

    useEffect(() => {
        // Aquí podrías añadir lógica para ordenar imágenes si fuera necesario
    }, [sortOption]);

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

    

    const onSortOptionChange = ({ value }) => setSortOption(value);

    return (
        <>
            <div className="gallery__order">
                <h4 className="gallery__order__label">Sort by: </h4>
                <Select 
                    className="gallery__order-select" 
                    name="order-select" 
                    id="order-select" 
                    onChange={onSortOptionChange} 
                    options={options} 
                />
                </div>
        
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
        </>
    );
};

export default ImageCardWithComment;*/

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import ImageCardWithComment from './imageCommentsCard';

const ImageGalleryWithSort = () => {
    const sortedOptions = {
        addDate: 'add-date',
        width: 'width',
        height: 'height',
        likes: 'likes'
    };

    const options = [
        { value: sortedOptions.addDate, label: 'Añadido' },
        { value: sortedOptions.width, label: 'Ancho' },
        { value: sortedOptions.height, label: 'Alto' },
        { value: sortedOptions.likes, label: 'Likes' },
    ];

    const allImages = useSelector(state => state.favs.favs);
    const [sortedImages, setSortedImages] = useState(allImages);
    const [sortOption, setSortOption] = useState(sortedOptions.addDate);

    useEffect(() => {
        let sorted = [...allImages];
        switch (sortOption) {
            case sortedOptions.addDate:
                sorted.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
                break;
            case sortedOptions.width:
                sorted.sort((a, b) => b.width - a.width);
                break;
            case sortedOptions.height:
                sorted.sort((a, b) => b.height - a.height);
                break;
            case sortedOptions.likes:
                sorted.sort((a, b) => b.likes - a.likes);
                break;
            default:
                return 0;
        }
        setSortedImages(sorted);
    }, [allImages, sortOption]);

    const onSortOptionChange = ({ value }) => setSortOption(value);

    return (
        <div>
            <section className="gallery">
                <div className="gallery__order">
                    <h4 className="gallery__order__label">Ordenar por:</h4>
                    <Select 
                        className="gallery__order-select" 
                        name="order-select" 
                        id="order-select" 
                        onChange={onSortOptionChange} 
                        options={options} 
                    />
                </div>
            </section>
            <section className="image">
                {sortedImages.map(photo => (
                    <ImageCardWithComment key={photo.id} photo={photo} />
                ))}
            </section>
        </div>
    );
};



export default ImageGalleryWithSort;