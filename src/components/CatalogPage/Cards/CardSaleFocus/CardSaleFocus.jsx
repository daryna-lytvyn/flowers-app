import React from "react";
import "./CardSaleFocusStyle.css";

import { useDispatch } from "react-redux";
import { addItem } from "../../../../store/Basket/basketSlice";

const iconBuy = "/img/buyButtonIcon.svg";

const CardSaleFocus = ({ id, title, price, img, description }) => {
  const dispatch = useDispatch();

  const buyButtonClickHendler = () => {
    console.log("Adding item to basket:", {
      id,
      title,
      price,
      img,
      description,
    });
    dispatch(addItem({ id, title, price, img, description }));
  };

  return (
    <div className="cardFocusContent">
      <div className="descriptionContainer">
        <p>{description}</p>
      </div>
      <p>{title}</p>
      <div className="priceContainer">
        <p>{price} грн.</p>
      </div>
      <button className="buyButton" onClick={buyButtonClickHendler}>
        <img src={iconBuy} alt="IconBuy" />
      </button>
    </div>
  );
};

export default CardSaleFocus;
