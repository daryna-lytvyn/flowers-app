import React, { useCallback, useState } from "react";
import "./CardStyle.css";
import CardSaleFocus from "../CardSaleFocus/CardSaleFocus";
import CardSale from "../CardSale/CardSale";

const Card = ({ cardId, cardTitle, cardPrice, cardImg, cardDescription }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);
  console.log(cardId);

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="Card"
    >
      
      {/* Отображение компонентов в зависимости от состояния isHovered */}
      {isHovered ? (
        <CardSaleFocus
          id={cardId}
          title={cardTitle}
          price={cardPrice}
          description={cardDescription}
        />
      ) : (
        <CardSale id={cardId} title={cardTitle} price={cardPrice} img={cardImg} />
      )}
    </div>
  );
};
export default Card;
