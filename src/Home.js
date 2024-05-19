import React from 'react';
import HomeCSS from './Home.module.css';
import Nav from "./Nav";
import Main from "./Main";
import Footer from "./Footer";
import logo from "./images/Logo.png";

function Home(){
    return(
        <>
            <header className={HomeCSS.headerNav}>
                <img src={logo} alt="Little Lemon Logo"/>
                <Nav />
            </header>
            <Main />
            <Footer />
        </>
    )
}

export default Home;