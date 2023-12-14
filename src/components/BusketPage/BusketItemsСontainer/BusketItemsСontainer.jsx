import React, { useEffect } from "react";
import "./BusketItemsСontainerStyle.css";
import BusketItem from "../BusketItem/BusketItem";

import { useSelector} from "react-redux";
import {  selectBasketItems,selectBasketTotalPrice } from "../../../store/Basket/basketSlice";

const BusketItemsСontainer = () => {
  const basket = useSelector(selectBasketItems);
  const totalPrice = useSelector(selectBasketTotalPrice);

  return (
    <div className="selectedItems">
      {basket.map((item) => (
        <BusketItem
          key={item.id}
          quantity={item.quantity}
          id={item.id}
          title={item.title}
          price={item.price}
          img={item.img}
        />
      ))}
      <div className="totalPrice"> разом: {totalPrice} грн.</div>
      <div className="buttonOrderContainer">
        <button className="orderButton">Оформити замовлення</button>
      </div>
    </div>
  );
};
export default BusketItemsСontainer;
