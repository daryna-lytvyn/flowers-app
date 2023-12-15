import React from "react";
import "./OrderPageStyle.css";
import Header from "../Heder/Heder";
import Footer from "../Footer/Footer";
import OrderForm from "./OrderForm/OrderForm";

const OrderPage = () => {

    return(
      <div className="PageContent">
      
      <div className="MainPage">
        <Header  />
        <OrderForm/>
        <Footer />
      </div>
    </div>
        

    )
};
export default OrderPage;