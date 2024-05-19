import React from 'react';
import FooterCSS from './Footer.module.css';
import footerLogo from './images/footerlogo.png';
import Nav from "./Nav";
import './App.css';

function Footer() {
    return(
        <footer>
            <div className={FooterCSS.row}>
                <div className={FooterCSS.column}>
                    <div className={FooterCSS.logoBackground}>
                        <img src={footerLogo} alt='Little Lemon Logo' />
                    </div>
                </div>
                <div className={FooterCSS.column}>
                    <div className={FooterCSS.navigation}>
                        <h3>Navigation</h3>
                        <Nav id={FooterCSS.navFooter}/>
                    </div>
                </div>
                <div className={FooterCSS.column}>
                    <div className={FooterCSS.contact}>
                        <ul>
                            <li><h3>Contact Us</h3></li>
                            <li><a>Phone Number</a></li>
                            <li><a>Email</a></li>
                            <li><a>Address</a></li>
                        </ul>
                    </div>
                </div>
                <div className={FooterCSS.column}>
                    <div className={FooterCSS.socialMedia}>
                        <ul>
                            <li><h3>Follow Us</h3></li>
                            <li><a>Instagram</a></li>
                            <li><a>Pinterest</a></li>
                            <li><a>Yelp</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;