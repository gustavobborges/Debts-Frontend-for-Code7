import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Client from '../Client/Client'
import './Clients.css';

import api_clients from '../../services/apiClients';


export default function Clients() {

    const [clients, setClients] = useState([]);
  
    useEffect(()=> {
      api_clients.get()
        .then(response => {
          setClients(response.data);
        })
        .catch((error) => {
          console.log("Problema durante a consulta por clientes." + error);
        })
    }, [])

     return (
        <div className="clients_list">
            <div className="clients_header">
                <h2>Clientes</h2>
            </div>
            <div className="clients_scroll">
            {clients.map((client) => 
                <Client client={client} key={client.id}/>    
            )}
            </div>
        </div>
    )
}