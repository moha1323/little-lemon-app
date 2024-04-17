import React from 'react';
import MainCSS from './Main.module.css';
import heroImg from './images/restauranfood.jpg';
import './App.css';

function Main(){
    return(
        <main>
            <div className={MainCSS.hero}>
                <div className={MainCSS.row}>
                    <div className={MainCSS.column}>
                        <div className={MainCSS.left}>
                            <h1 className={MainCSS.restaurant}>Little Lemon</h1>
                            <h3 className={MainCSS.location}>Minneapolis</h3>
                            <p className={MainCSS.description}>We are a Mediterranean restaurant, focused on traditional recipes served with a modern twist!</p>
                            <button type='buttton' className={MainCSS.button}>Reserve a table</button>
                        </div>
                    </div>
                    <div className={MainCSS.column}>
                        <div className={MainCSS.right}>
                            <img src={heroImg} alt='restaurant food'/>
                        </div>
                    </div>
               </div>
            </div>
            <div className="highlights"><h1>Highlights</h1></div>
            <div className="testimonials"><h1>Testimonials</h1></div>
            <div className="about"><h1>About</h1></div>
        </main>
    )
}

export default Main;