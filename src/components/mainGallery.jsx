import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImages } from '../search/searchThunk';


const HomePage = () => {
    const dispatch = useDispatch();
    const images = useSelector((state) => state.search.images);
    const status = useSelector((state) => state.search.status);
  
    useEffect(() => {
      dispatch(fetchImages(''));
    }, [dispatch]);
  
    return (
        <div>
        <SearchBar />
        {status === 'loading' && <div>Loading...</div>}
        {status === 'rejected' && <div>Error loading images.</div>}
        {status === 'fulfilled' && (
        <div className="image-grid">
          {images.map((image) => (
            <div key={image.id} className="image-item">
              <img src={image.urls} alt={image.description || 'Image'} />
            </div>
          ))}
        </div>
        )}
    </div>
    );
};
  
export default HomePage;