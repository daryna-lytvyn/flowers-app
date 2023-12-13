import React from "react";
import "./CardSaleStyle.css";

const CardSale = ({ id, title, price, img }) => {
  return (
    <div className="cardContent">
      <div className="imgContainer">
        <img src={img} alt="cardSaleImg" className="cardSaleImg" />
      </div>
      <div className="cardInfo">
        <p>{title}</p>
        <p>{price} грн.</p>
      </div>
    </div>
  );
};
export default CardSale;
