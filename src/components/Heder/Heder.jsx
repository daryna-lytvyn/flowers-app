import React from "react";
import "./HederStyle.css";

const Header = ({ onBusketClick }) => {
  return (
    <header className="header">
      <div className="hederContent">
        <p className="hederContentText">
          Висловіть свої почуття, подаруйте радість вашим близьким. Швидко
          зберемо та доставимо ваш ідеальний букет зі свіжих квітів. Обирай
          свого красунчика прямо зараз.
        </p>
      </div>

      <div className="headerMainInfo">
        <div className="logoHeder">
          <h1 className="logoHederText">LY ROSE</h1>
        </div>

        <div className="navigation">
          <nav>
            <ul className="navOptions">
              <li className="navTextItem">
                <a href="#">Головна</a>
              </li>
              <li className="navTextItem">
                <a href="#">Каталог</a>
              </li>
              <li className="navTextItem">
                <a href="#">Instagram</a>
              </li>
            </ul>
          </nav>

          <div className="busket">
            <button className="busketButton" onClick={onBusketClick}>
              Кошик
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
