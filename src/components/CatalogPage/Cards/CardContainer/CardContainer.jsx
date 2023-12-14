import React, { useEffect,useState } from "react";
import "./CardContainerStyle.css";
import Card from "../Card/Card";

import { useSelector, useDispatch } from "react-redux";
import { fetchBouquets, selectBouquets, statusBouquetsLoading } from "../../../../store/Bouquets/bouquetsSlice";

const CardContainer = () => {
  const dispatch = useDispatch();
  const bouquets = useSelector(selectBouquets);
  const status = useSelector(statusBouquetsLoading);

  useEffect(() => {
    dispatch(fetchBouquets());
  }, [dispatch]);

  return (
    <div className="СatalogPageContent">
      <div className="CardContainer">
      {status === 'loading' && (
        [...Array(9)].map((_, index) => (
          <div className="loadingСard" key={index}></div>
        ))
      )}
      { bouquets.map((bouquet) => (
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
