import React from "react";
import "./BusketPageStyle.css";

import BusketItemsСontainer from "./BusketItemsСontainer/BusketItemsСontainer";

const BusketPage = ({offBusketClick}) => {
  return (
    <div className="BusketPage">
      <div className="busketContent">
          <button className="busketExitButton" onClick={offBusketClick}>Вийти</button>
        <div className="busketTitle">
          <p>Кошик</p>
        </div>
        <BusketItemsСontainer/>
      </div>
    </div>
  );
};

export default BusketPage;
