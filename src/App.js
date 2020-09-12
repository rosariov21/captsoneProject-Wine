import React from 'react';
import logo from './logo.svg';
import './App.css';


import NavBar from './components/NavBar';
import ThankYou from './components/ThankYou';

function App() {
  return (
    <div className="App">
      <header className="App-header">
     <NavBar/>
     <ThankYou/>
      </header>
    </div>
  );
}

export default App;
