import React from 'react';
import NavBarCSS from './NavBar.module.css';
import Nav from './Nav';
import logo from '../images/Logo.png';

function NavBar() {
    return (
        <header className={NavBarCSS.headerNav}>
            <img src={logo} alt="Little Lemon Logo"/>
            <Nav />
        </header>
    )
}

export default NavBar;