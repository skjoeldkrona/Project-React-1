import React from 'react';
import './Nav.css';

function Nav() {
  return (
    <nav>
        <div className="container container-flex">
            <a href className="nav-logo">moja firma</a>
            <button className="hamburger"></button>
            <div className="nav-links">
                <a href="#o nas">o nas</a>
                <a href="#oferta">oferta</a>
                <a href id="contact">kontakt</a>     
            </div>
        </div>   
    </nav>
  );
}

export default Nav;