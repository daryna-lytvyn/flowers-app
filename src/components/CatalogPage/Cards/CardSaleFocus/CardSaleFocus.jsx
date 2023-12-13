import React from "react";
import "./CardSaleFocusStyle.css";
const iconBuy = "/img/buyButtonIcon.svg";

const CardSaleFocus = ({ title, description, price }) => {
  return (
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
  );
};

export default CardSaleFocus;
