import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav(){

    return(
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><a href="#about">About</a></li>
                <li><NavLink to="/menu">Menu</NavLink></li>
                <li><NavLink to="/reservations">Reservations</NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav;