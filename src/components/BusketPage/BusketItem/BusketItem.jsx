import React from "react";
import "./BusketItemStyle.css";

import { useDispatch } from "react-redux";
import { removeItem } from "../../../store/Basket/basketSlice";

const BusketItem = ({ id, quantity, title, price, img, description }) => {
  const dispatch = useDispatch();

  const deleteBusketItemButtonClickHendler = () => {
    console.log("Remove item from basket:", {
      id,
      quantity,
      title,
      price,
      img,
      description,
    });
    dispatch(removeItem({ id, quantity, title, price, img, description }));
  };

  return (
    <div className="busketItem">
      <div className="busketTextSpase">
        <div className="busketInfo">
          <p>{title}</p>
          <p>{price} грн.</p>
          <p>кількість позицій: {quantity}</p>
        </div>
        <button
          className="deleteBusketItemButton"
          onClick={deleteBusketItemButtonClickHendler}
        >
          Видалити
        </button>
      </div>
      <div className="busketImgSpase">
        <img src={img} alt="busketImg" className="busketImg" />
      </div>
    </div>
  );
};
export default BusketItem;
