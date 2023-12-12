import React, { useState } from 'react';
import Header from './components/Heder/Heder';
import Footer from './components/Footer/Footer';
import Card from './components/Card/Card';
import BusketPage from './components/BusketPage/BusketPage';

import csImg1 from './img/for card 1.jpg'
import csImg2 from './img/for card 2.jpg'
import csImg3 from './img/for card 3.jpg'
import csImg4 from './img/for card 4.jpg'

import './styles/App.css';

function App() {
  const[value, setValue]= useState(false)
  
  return (
    <div className ="PageContent">
      <BusketPage/>
      <div className ="MainPage">
        <Header />
        <div className ='СatalogPageContent'>
          <div className ='CardContainer'>
            <Card card={{cardTitle:'Різнозбірний букет',cardPrice: 1500, cardImg: csImg1, cardDescription:'Складається із 45 ....'}}/>
            <Card card={{cardTitle:'букет Білих Ранункулюсів',cardPrice: 2500, cardImg: csImg2, cardDescription:'Складається із 345 ....'}}/>
            <Card card={{cardTitle:'букет Ранункулюсів',cardPrice: 3500, cardImg: csImg3, cardDescription:'Складається із 987 ....' }}/>
            <Card card={{cardTitle:'букет гіпсофіл',cardPrice: 850, cardImg: csImg4, cardDescription:'Складається із 6 ....' }}/>
          </div>
        </div>
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
