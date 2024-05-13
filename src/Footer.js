import React from 'react';
import FooterCSS from './Footer.module.css';
import footerLogo from './images/footerlogo.png';
import Nav from "./Nav";
import './App.css';

function Footer() {
    return(
        <footer>
            <div className={FooterCSS.logoBackground}>
                <img src={footerLogo} alt='Little Lemon Logo' />
            </div>
            <Nav className="footerNav"/>
            <div className="contact"><h1>Contact Us</h1></div>
            <div className="socialMedia"><h1>Follow Us</h1></div>
        </footer>
    )
}

export default Footer;