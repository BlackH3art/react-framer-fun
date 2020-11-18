import React from 'react';
import { NavLink } from 'react-router-dom';



import './styles/header.css';

const Header = () => {

  return ( 
    <>
      <header>
        <nav>
          <ul className="main-nav">
            <NavLink to="/first"><li>first</li></NavLink>
            <NavLink to="/second"><li>second</li></NavLink>
            <NavLink to="/third"><li>third</li></NavLink>
            <NavLink to="/fourth"><li>fourth</li></NavLink>
            <NavLink to="/fifth"><li>fifth</li></NavLink>
          </ul>
        </nav>
      </header>
    </>
  );
}
 
export default Header;