import React from 'react';
import logo from './logo.svg';
import './App.css';
// import {Cart} from 'react-shopping-cart';
import ShoppingCart from './components/ShoppingCart';



import ModalPop from './components/ModalPop';
import ThankYou from './components/ThankYou';



function App() {
  return (
    <div className="App">
    <div className="container">
      <div className="jumbotron">
      <ShoppingCart/>
    
     
     <ModalPop/>
     <ThankYou/>
   
     <div>
        <span>
         
        </span>
      </div>
    </div>
    </div>
    </div>
  );
}

export default App;
