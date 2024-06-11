import React from 'react';
import MenuCSS from './Menu.module.css';
import NavBar from '../NavBar';
import Footer from '../Footer';
import MenuCard from '../MenuCard';
import saladImg from '../../images/greeksalad.jpg';
import bruchettaImg from '../../images/bruchetta.png';
import fishImg from '../../images/grilledfish.jpg';
import pastaImg from '../../images/pasta.jpg';
import lemonImg from '../../images/lemon-dessert.jpg';

function Menu() {
    return (
        <>
            <NavBar />
            <main>
                <div className={MenuCSS.row}>
                    <div className={MenuCSS.column}>
                        <h1>Our Menu</h1>
                    </div>
                </div>
                <div className={MenuCSS.row}>
                    <div className={MenuCSS.column}>
                        <MenuCard
                            image={saladImg}
                            dishName="Greek Salad"
                            dishPrice="$12.99"
                            dishDescription="The famous greek salad of crispy lettuce, pepers, olives and our chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
                        />
                    </div>
                    <div className={MenuCSS.column}>
                        <MenuCard
                        image={bruchettaImg}
                        dishName="Bruschetta"
                        dishPrice="$5.99"
                        dishDescription="Our bruschetta is made from homemade grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Topped with fresh vegetables."
                        />
                    </div>
                    <div className={MenuCSS.column}>
                        <MenuCard
                        image={fishImg}
                        dishName="Grilled Lemon-Pepper Trout"
                        dishPrice="$20.00"
                        dishDescription="A fresh water trout is marinated in our signature lemon pepper blend and grilled over a charcoal grill."
                        />
                    </div>
                </div>
                <div className={MenuCSS.row}>
                    <div className={MenuCSS.column}>
                        <MenuCard
                            image={pastaImg}
                            dishName="Penne Rosa"
                            dishPrice="$18.99"
                            dishDescription="Our Penne noodles are mixed with a spicy tomato cream sauce, sautéed veggies, a blend of Roma tomato, spinach and mushrooms then topped with shredded parmesan. "
                        />
                    </div>
                    <div className={MenuCSS.column}>
                        <MenuCard
                        image={lemonImg}
                        dishName="Lemon Cake"
                        dishPrice="$5.00"
                        dishDescription="This comes straight from grandmas recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
                        />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Menu;