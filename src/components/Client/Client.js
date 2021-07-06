import React from 'react';
import './Client.css';

export default function Client(client) {
	return (
		<div className="client_content">
			<div className="client_header">
				<p>{client.client.name} | id:{client.client.id}</p>
			</div>
			<div className="client_info">
				<div className="client_info_city">
					<p>Cidade: {client.client.address.city}</p>
				</div>
				<div className="client_info_phone">
					<p>Telefone: {client.client.phone}</p>
				</div>
				<div className="client_info_company">
					<p>Empresa: {client.client.company.name}</p>
				</div>
			</div>
		</div>
	)
}