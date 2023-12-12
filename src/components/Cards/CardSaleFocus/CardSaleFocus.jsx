import React from "react";
import './CardSaleFocusStyle.css';
import iconBuy from 'C:/Учеба/simple_flowers/Flowers/flowers-app/src/img/buyButtonIcon.svg';


const CardSaleFocus = ({ cardSaleFocus:  {title, description, price} }) =>{
    return(
        <div className="cardFocusContent">
            <div className="descriptionContainer">
                <p>{description}</p>
            </div>
            <p>{title}</p>
            <div className="priceContainer">
                <p>{price} грн.</p>
            </div>
            <button className="buyButton">
                    <img src={iconBuy} alt="IconBuy" />
            </button>
        </div>

    )
};

export default CardSaleFocus;