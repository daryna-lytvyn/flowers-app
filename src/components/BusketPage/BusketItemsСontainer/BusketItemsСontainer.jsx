import React from "react";
import "./BusketItemsСontainerStyle.css";

import BusketItem from "../BusketItem/BusketItem";

const BusketItemsСontainer = () => {
  return (
    <div className="selectedItems">
      <BusketItem/>
      <div className="totalPrise"> разом: грн.</div>
      <div className="buttonOrderContainer">
        <button className="orderButton">Оформити замовлення</button>
      </div>
    </div>
  );
};
export default BusketItemsСontainer;
