import React from 'react';
import { useSelector } from 'react-redux';
import ImageCardWithComment from '../components/imageComments';
import CommentModal from './commentModal';

const Profile = () => {

  const favorites = useSelector((state) => state.favs.favs);


  return (
    <div className="favorites-list">
      {favorites.length > 0 ? (
        favorites.map((photo) => (
          <ImageCardWithComment key={photo.id} photo={photo} />
        ))
      ) : (
        <p>No favorites added yet.</p>
      )}
       <CommentModal />
    </div>
  );
};

export default Profile;