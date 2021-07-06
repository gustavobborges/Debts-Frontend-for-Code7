import React, { useState, useEffect } from 'react';
import Client from '../Client/Client'
import './Clients.css';
import api_clients from '../../services/apiClients';

export default function Clients() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    api_clients.get()
      .then(response => {
        setClients(response.data);
      })
      .catch((error) => {
        console.log("Erro durante a consulta por clientes. Erro: " + error);
      })
  }, [])


  //TODO: ROTAS VIA react-router-dom para atualizar componentes externos
  function onClick(id) {
    window.location.href = `/client/${id}`;
  };

  function handlerListAll() {
    window.location.href = "/";
  }

  return (
    <div className="clients_list">
      <div className="clients_header">
        <h2>Clientes</h2>
      </div>
      <div className="button_list_all">
        <button onClick={() => handlerListAll()}>Listar todos as dívidas</button>
      </div>
      <div className="clients_scroll">
        {clients.map((client) =>
        <div key={client.id} onClick={() => onClick(client.id)}>
          <Client client={client} key={client.id}/>
        </div>
        )}
      </div>
    </div>
  )
}
