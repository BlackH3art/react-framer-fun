import React from 'react';
import { NavLink } from 'react-router-dom';



import './styles/header.css';

const Header = () => {

  return ( 
    <>
      <header>
        <nav>
          <ul className="main-nav">
            <NavLink to="/first" activeClassName="li-active"><li>first</li></NavLink>
            <NavLink to="/second" activeClassName="li-active"><li>second</li></NavLink>
            <NavLink to="/third" activeClassName="li-active"><li>third</li></NavLink>
            <NavLink to="/fourth" activeClassName="li-active"><li>fourth</li></NavLink>
            <NavLink to="/fifth" activeClassName="li-active"><li>fifth</li></NavLink>
          </ul>
        </nav>
      </header>
    </>
  );
}
 
export default Header;