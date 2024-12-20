import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Select from 'react-select';
import ImageCardWithComment from './imageCommentsCard';
import Masonry from 'react-masonry-css';

const ImageGalleryWithSort = () => {
    const sortedOptions = {
        addDate: 'add-date',
        width: 'width',
        height: 'height',
        likes: 'likes'
    };

    const breakpointColumns = {
        default: 4, 
        1100: 3,    
        700: 2, 
        500: 1,     
        
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
        <div className='favPage'>
            <section className="filter">
                <div className="filter__order">
                    <h4 className="filter__order__tittle">Ordenar por:</h4>
                    <Select 
                        className="filter__order__select" 
                        name="order-select" 
                        id="order-select" 
                        onChange={onSortOptionChange} 
                        options={options} 
                    />
                </div>
            </section>
            <div className='random'>
                <Masonry
                    breakpointCols={breakpointColumns}
                    className="random__images"
                    columnClassName="random__images__column"
                >
                    {sortedImages.map(photo => (
                        <ImageCardWithComment key={photo.id} photo={photo} />
                    ))}
                </Masonry>
            </div>          
        </div>
    );
};



export default ImageGalleryWithSort;