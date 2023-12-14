import React from "react";
import "./BusketItemStyle.css";

const BusketItem = ({id, quantity, title, price, img, description  }) => {
  return (
    <div className="busketItem">
      <div className="busketTextSpase">
        <div className="busketInfo">
          <p>{title}</p>
          <p>{price} грн.</p>
          <p>кількість позицій: {quantity}</p>
        </div>
        <button className="deleteBusketItemButton">Видалити</button>
      </div>
      <div className="busketImgSpase">
        <img src={img} alt="busketImg" className="busketImg" />
      </div>
    </div>
  );
};
export default BusketItem;
