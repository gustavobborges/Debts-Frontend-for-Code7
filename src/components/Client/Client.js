import React from 'react';
import './Client.css';

export default function Client(client) {
	return (
		<div className="client_content">
			<div className="client_header">
				<p>{client.client.name}</p>
				<p className="client_id">{client.client.id}</p>
			</div>
			<div className="client_info">
				<div>
					<p>Cidade: {client.client.address.city}</p>
				</div>
				<div>
					<p>Telefone: {client.client.phone}</p>
				</div>
				<div>
					<p>Empresa: {client.client.company.name}</p>
				</div>
			</div>
		</div>
	)
}