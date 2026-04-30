import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img 
          src="https://freepnglogo.com/images/all_img/1707659567disney-logo-white.png" 
          alt="Disney Logo" 
          className="nav-logo" 
        />
        <ul className="nav-links">
          <li>DISNEY+</li>
          <li>MOVIES</li>
          <li>SERIES</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;