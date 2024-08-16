import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header" > 
      <div className="header-left">
        <Link to="/" className="home-link">Home</Link>
      </div>
      <div className="header-center">
        <input type="text" placeholder="Search..." className="search-bar" />
      </div>
      <div className="header-right">
        <Link to="/profile" className="profile-link">
          <p>Perfil </p>
        </Link>
      </div>
    </header>
  );
};

export default Header;