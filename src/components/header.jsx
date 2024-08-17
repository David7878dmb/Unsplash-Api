import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FetchSearchImagesListThunk } from '../search/searchThunk';
import { useState } from 'react';

const Header = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const handleSearch = (e) => {
      e.preventDefault();
      if (searchTerm.trim()) {
        dispatch(FetchSearchImagesListThunk(searchTerm));
        navigate('/search');
      }
    };

  return (
    <header className="header">
      <div className="header-left">
        <Link to="/" className="home-link">Home</Link>
      </div>
      <div className="header-center">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search..."
            className="search-bar"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
      </div>
      <div className="header-right">
        <Link to="/profile" className="profile-link">
          <p>Perfil</p>
        </Link>
      </div>
    </header>
  );
};
export default Header;