import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FetchSearchImagesListThunk } from '../search/searchThunk';
import { useState } from 'react';
import { PiFinnTheHumanBold } from "react-icons/pi";
import { ImHome } from "react-icons/im";
import { FaSearch } from "react-icons/fa";


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
      <div className="header__left">
        <Link to="/" className="header__left__link">
        <ImHome className="header__left__link__img"/>
        </Link>
      </div>
      <div className="header__center">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search Images"
            className="header__center__search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

        </form>
      </div>
      <div className="header__right"   
      >
        <Link to="/profile" className="header__right__link">
        <PiFinnTheHumanBold className="header__right__link__img"/>
        </Link>
        
      </div>
    </header>
  );
};
export default Header;