import React, { useState } from 'react';
import Header from './components/Heder/Heder';
import Footer from './components/Footer/Footer';

import CardContainer from './components/CardContainer/CardContainer';

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
        {/* import Flower from './components/Flower'; <Flower flow={{flowerType: 'Rose', variety: 'Avelanch'}}/>
              <Flower flow={{flowerType: 'Tulip', variety: 'NorthPink'}}/>
              <Flower flow={{flowerType: 'Rose', variety: 'BlackMagic'}}/>
              <Flower flow={{flowerType: 'Rose', variety: 'Djumilia'}}/>
          */}
      </div>
      
    </div>
    
  );
}

export default App;
