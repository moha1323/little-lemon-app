import React from 'react';
import CardCSS from './MenuCard.module.css';


function MenuCard(props) {
    return(
        <div className={CardCSS.card}>
            <div className={CardCSS.image}>
                <img src={props.image} alt={props.dishName}/>
            </div>
            <div className={CardCSS.dish}>
                <p>{props.dishName}</p>
                <p>{props.dishPrice}</p>
            </div>
            <div className={CardCSS.dishDescription}>
                <p>{props.dishDescription}</p>
            </div>
        </div>
    )
}

export default MenuCard;