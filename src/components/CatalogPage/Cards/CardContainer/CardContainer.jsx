import React, { useEffect,useState } from "react";
import "./CardContainerStyle.css";
import Card from "../Card/Card";

import { useSelector, useDispatch } from "react-redux";
import { updateBouquets } from "../../../../store/Bouquets/bouquetsSlice";
import jsonDatas from '../../../../store/Bouquets/bouquets.json';

const CardContainer = () => {
  const dispatch = useDispatch();
  const bouquets = useSelector((state) => state.bouquets?.jsonData || []);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(updateBouquets(jsonDatas));
        setLoading(true);

      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
  
    fetchData();
  }, [dispatch]);

  return (
    <div className="СatalogPageContent">
      <div className="CardContainer">
      {!loading
          ? [...Array(9)].map((_, index) => (
              <div className="loadingСard" key={index}></div>
            ))
          : bouquets.map((bouquet) => (
              <Card
                key={bouquet.id}
                cardId={bouquet.id}
                cardTitle={bouquet.title}
                cardPrice={bouquet.price}
                cardImg={bouquet.img}
                cardDescription={bouquet.description}
              />
              ))}
      </div>
    </div>
  );
};

export default CardContainer;
