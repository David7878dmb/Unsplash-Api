import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
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
            default:asd
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