import React from 'react';
import MainCSS from './Main.module.css';
import heroImg from './images/restauranfood.jpg';
import MenuCard from './MenuCard';
import ReviewCard from './ReviewCard'
import saladImg from './images/greeksalad.jpg';
import bruchettaImg from './images/bruchetta.png';
import lemonImg from './images/lemon-dessert.jpg';
import aboutOne from './images/about-a.jpg';
import aboutTwo from './images/about-b.jpg';
import { useNavigate } from "react-router-dom";

function Main(){
    const navigate = useNavigate();
    
    return(
        <main>
            <div className={MainCSS.hero}>
                <div className={MainCSS.row}>
                    <div className={MainCSS.column}>
                        <div className={MainCSS.left}>
                            <h1 className={MainCSS.restaurant}>Little Lemon</h1>
                            <h3 className={MainCSS.location}>Minneapolis</h3>
                            <p className={MainCSS.description}>We are a Mediterranean restaurant, focused on traditional recipes served with a modern twist!</p>
                            <button type='buttton' className={MainCSS.button} onClick={() => {
                                navigate("/reservations");
                            }}>Reserve a table</button>
                        </div>
                    </div>
                    <div className={MainCSS.column}>
                        <div className={MainCSS.right}>
                            <img src={heroImg} alt='restaurant food'/>
                        </div>
                    </div>
               </div>
            </div>
            <div className={MainCSS.highlights}>
                <div className={MainCSS.row}>
                    <div className={MainCSS.column}>
                        <h1>This week's specials</h1>
                    </div>
                    <div className={MainCSS.column}>
                        <button type='buttton' className={MainCSS.button} onClick={() => {
                            navigate("/menu");
                        }}>Online Menu</button>
                    </div>
                </div>
                <div className={MainCSS.row}>
                    <div className={MainCSS.column}>
                        <MenuCard image={saladImg} dishName="Greek Salad" dishPrice="$12.99" dishDescription="The famous greek salad of crispy lettuce, pepers, olives and our chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."/>
                    </div>
                    <div className={MainCSS.column}>
                        <MenuCard image={bruchettaImg} dishName="Bruschetta" dishPrice="$5.99" dishDescription="Our bruschetta is made from homemade grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Topped with fresh vegetables."/>
                    </div>
                    <div className={MainCSS.column}>
                        <MenuCard image={lemonImg} dishName="Lemon Cake" dishPrice="$5.00" dishDescription="This comes straight from grandmas recipe book, every last ingredient has been sourced and is as authentic as can be imagined."/>
                    </div>
                </div>
            </div>
            <div className={MainCSS.testimonials}>
                <div className={MainCSS.row}>
                    <h1>Testimonials</h1>
                </div>
                <div className={MainCSS.row}>
                    <div className={MainCSS.column}>
                        <ReviewCard review="The greek salad was fantastic."/>
                    </div>
                    <div className={MainCSS.column}>
                        <ReviewCard review="The grilled fish was so tender."/>
                    </div>
                    <div className={MainCSS.column}>
                        <ReviewCard review="I am addicted to the lemon cake."/>
                    </div>
                    <div className={MainCSS.column}>
                        <ReviewCard review="I am a pasta fanatic now because of their pasta."/>
                    </div>
                </div>
            </div>
            <div id="about" className={MainCSS.about}>
                <div className={MainCSS.row}>
                    <div className={MainCSS.column}>
                        <h1 className={MainCSS.restaurant}>Little Lemon</h1>
                        <h3 className={MainCSS.location}>Minneapolis</h3>
                        <p className={MainCSS.description}>Little Lemon is a charming neighborhood bistro that serves the food we all constanly crave. We have a lively but causal environment. Our restaurant features a locally sourced menu with daily specials.</p>
                    </div>
                    <div className={MainCSS.column}>
                        <div class={MainCSS.grid}>
                            <img class={MainCSS.layerTwo} src={aboutTwo} alt='Chefs happy about new dish'/>
                            <img class={MainCSS.layerOne} src={aboutOne} alt='Chefs working in kitchen'/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main;