import React, { useState } from "react";
import "./CatalogPageStyle.css";

import Header from "../Heder/Heder";
import Footer from "../Footer/Footer";
import CardContainer from "./Cards/CardContainer/CardContainer"; 
import BusketPage from "../BusketPage/BusketPage";

const CatalogPage = () => {

  const [showBusket, setShowBusket] = useState(false);
  const toggleBusket = () => {
    setShowBusket(!showBusket);
  };

  return (
    <div className="PageContent">
      {showBusket && <BusketPage offBusketClick={toggleBusket} />}
      <div className="MainPage">
        <Header onBusketClick={toggleBusket} />
        <CardContainer />
        <Footer />
      </div>
    </div>
  )
};
export default CatalogPage;
