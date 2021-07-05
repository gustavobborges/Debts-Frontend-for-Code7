import React from 'react'

import './App.css';

import Debts from './components/Debts/Debts';
import Clients from './components/Clients/Clients';

function App() {
  return (
    <div className="main">
        <div className="container client_container">
        <Clients/>
        </div>
        <div className="container debit_container"><Debts/></div>
    </div>
  );
}

export default App;
