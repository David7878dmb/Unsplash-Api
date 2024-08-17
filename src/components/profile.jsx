import React from 'react';
import { useSelector } from 'react-redux';
import ImageCard from './imageCard';

const Profile = () => {

  const favorites = useSelector((state) => state.favs.favs);


  return (
    <div className="favorites-list">
      {favorites.length > 0 ? (
        favorites.map((photo) => (
          <ImageCard key={photo.id} photo={photo} />
        ))
      ) : (
        <p>No favorites added yet.</p>
      )}
    </div>
  );
};

export default Profile;