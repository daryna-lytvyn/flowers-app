import React, { useEffect, useState } from "react";
import './CardContainerStyle.css';
import Card from "../Card/Card";


const csImg1 = "/img/for card 1.jpg"; 
const csImg2 = "/img/for card 2.jpg";
const csImg3 = "/img/for card 3.jpg";
const csImg4 = "/img/for card 4.jpg";

const cardsExtendal = [
  {
    id: 1,
    cardTitle: "Різнозбірний букет",
    cardPrice: 1500,
    cardImg: csImg1,
    cardDescription: "Складається із 45 ....",
  },
  {
    id: 2,
    cardTitle: "букет Білих Ранункулюсів",
    cardPrice: 2500,
    cardImg: csImg2,
    cardDescription: "Складається із 345 ....",
  },
  {
    id: 3,
    cardTitle: "букет Ранункулюсів",
    cardPrice: 3500,
    cardImg: csImg3,
    cardDescription: "Складається із 987 ....",
  },
  {
    id: 4,
    cardTitle: "букет гіпсофіл",
    cardPrice: 850,
    cardImg: csImg4,
    cardDescription: "Складається із 6 ....",
  },
];

const CardContainer = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    const timer = setTimeout(() => setCards(cardsExtendal), 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="СatalogPageContent">
      <div className="CardContainer">
        {cards.map((card) => (
          <Card {...card} key={card.cardId} />
        ))}
      </div>
    </div>
  );
};
export default CardContainer;
