import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>KAPTURED</h1>
    <div className="links">
      <NavLink to="/" className="link">
        Home
      </NavLink>
      <NavLink to="/gallery" className="link">
        Gallery
      </NavLink>
      <NavLink to="/about" className="link">
        About
      </NavLink>
    </div>
  </header>
);

export default Header;