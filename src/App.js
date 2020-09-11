import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import ThankYou from './components/ThankYou';
import EditOrder from './components/EditOrder';
import WebContact from './components/WebContact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <ThankYou/>
      <EditOrder/>
      <WebContact/>
      </header>
    </div>
  );
}

export default App;
