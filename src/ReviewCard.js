import React from 'react';
import CardCSS from './ReviewCard.module.css';
import { FaStar } from 'react-icons/fa';
import avatarImg from './images/avatar.png';

function ReviewCard(props) {

    return(
        <div className={CardCSS.card}>
            <div className={CardCSS.stars}>
                {[...Array(5)].map((star, index) => {
                    const currentRate = index + 1;
                    return(
                        <FaStar key={index} size={45} color={currentRate <= 4 ? "#F4CE14" : "#D9D9D9"}/>
                    )
                })}
            </div>
            <div className={CardCSS.avatar}>
                <img src={avatarImg} alt='The avatar'/>
            </div>
            <div className={CardCSS.review}>
                <p>"{props.review}"</p>
            </div>
        </div>
    )
}

export default ReviewCard;