import React from "react";
import "./OrderFormStyle.css";

const OrderForm = () => {
  return (
    <div className="OrderFormContainer">
      <form className="OrderForm">
        <div className="fild">
          <label htmlFor="name">Ім'я</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div className="fild">
          <label htmlFor="surname">Прізвище</label>
          <input type="text" id="surname" name="surname" required />
        </div>

        <div className="fild">
          <label htmlFor="tel">Телефон</label>
          <input type="tel" id="tel" name="tel" required />
        </div>

        <div className="fild">
          <label htmlFor="email">Електронна пошта</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="fild">
          <label htmlFor="city">Місто</label>
          <input type="text" id="city" name="city" required />
        </div>

        <div className="fild">
          <label htmlFor="street">Вулиця</label>
          <input type="text" id="street" name="street" required />
        </div>

        <div className="fild">
          <label htmlFor="homeNumber">Номер будинку</label>
          <input type="text" id="homeNumber" name="homeNumber" required />
        </div>

        <div className="fild">
          <label htmlFor="flatNumber">Номер квартири</label>
          <input type="text" id="flatNumber" name="flatNumber" />
        </div>
        
        <div className="makeOrderButtonContainer">
          <button type="submit" className="makeOrderButton">
            Замовити
          </button>
        </div>
      </form>
    </div>
  );
};
export default OrderForm;
