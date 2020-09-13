import React from 'react';
import logo from './logo.svg';
import './App.css';


import NavBar from './components/NavBar';
import ThankYou from './components/ThankYou';

import ModalPop from './components/ModalPop';


function App() {
  return (
    <div className="App">
    <div className="container">
      <div className="jumbotron">
     <NavBar/>
     <ThankYou/>
     <ModalPop/>
   
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
