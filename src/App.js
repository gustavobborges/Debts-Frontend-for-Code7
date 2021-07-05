import React from 'react'
import Clients from './components/Clients/Clients';
import Root from './pages/Root';
import './App.css';


function App() {
  return (
    <div className="main">
        <div className="container client_container"><Clients/></div>
        <div className="container debit_container"><Root/></div>
    </div>
  );
}

export default App;
