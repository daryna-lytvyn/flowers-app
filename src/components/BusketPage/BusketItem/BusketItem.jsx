import React from "react";
import "./BusketItemStyle.css";
const img23 = "/img/for card 1.jpg";

const BusketItem = () => {
  return (
    <div className="busketItem">
      <div className="busketTextSpase">
        <div className="busketInfo">
          <p>...</p>
          <p> грн.</p>
        </div>
        <button className="deleteBusketItemButton">Видалити</button>
      </div>
      <div className="busketImgSpase">
        <img src={img23} alt="busketImg" className="busketImg" />
      </div>
    </div>
  );
};
export default BusketItem;
