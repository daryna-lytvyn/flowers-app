import React, { useCallback, useState } from "react";
import CardSale from "../CardSale/CardSale";
import CardSaleFocus from "../CardSaleFocus/CardSaleFocus";

const Card = ({ id,cardTitle, cardPrice, cardImg, cardDescription }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="Card"
    >
      {/* Отображение компонентов в зависимости от состояния isHovered */}
      {isHovered ? (
        <CardSaleFocus
          cardSaleFocus={{
            title: cardTitle,
            price: cardPrice,
            description: cardDescription,
          }}
        />
      ) : (
        <CardSale
          cardSale={{ title: cardTitle, price: cardPrice, img: cardImg }}
        />
      )}
    </div>
  );
};
export default Card;
