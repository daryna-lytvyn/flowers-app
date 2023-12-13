import React, { useState } from 'react';
import Header from './components/Heder/Heder';
import Footer from './components/Footer/Footer';

import CardContainer from './components/Cards/CardContainer/CardContainer';

import BusketPage from './components/BusketPage/BusketPage';

import './styles/App.css';

function App() {
  const[value, setValue]= useState(false)
  
  return (
    <div className ="PageContent">
      <div className ="MainPage">
        <Header />
        <CardContainer/>
        <Footer />
      </div>   
    </div>
    
  );
}

export default App;
