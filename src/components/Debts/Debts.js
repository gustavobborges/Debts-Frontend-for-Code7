import React, { useState, useEffect } from 'react';
import { BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import DataTable from 'react-data-table-component';
import './Debts.css';

import api_debts from '../../services/apiDebts';
import api_clients from '../../services/apiDebts';


export default function Debts() {

	const [debts, setDebts] = useState([]);
	const [clients, setClients] = useState([]);

	useEffect(() => {
		api_debts.get()
			.then(response => {
				console.log(response.data);
				setDebts(response.data);
			})
			.catch((error) => {
				console.log("Problema durante a consulta por dívidas." + error);
			})
	}, []);

	useEffect(() => {
        api_clients.get().then(response => setClients(response.data));
    }, [clients]);

	const columns = [
		{
			name: "Cliente",
			selector: "idUsuario",
			sortable: true,
		},
		{
			name: "Motivo",
			selector: "motivo",
			sortable: true,
		},
		{
			name: "Valor",
			selector: "valor",
			sortable: true,
		},
		{
			name: "Ações",
			cell: (row) => [
				<div className="col_action" key={row._id} data={row}>
					<Link to={`/edit/${row._id}`}><BsSearch /></Link>
				</div>
			],
			ignoreRowClick: true,
			allowOverflow: true,
			button: true,
		}
	]

	return (
		<div className="debts_list">
			<div className="debts_header">
				<h2>Débitos</h2>
			</div>
			<div className="debts_content">
				<DataTable
					title="Tabela de Débitos"
					columns={columns}
					data={debts.result}
					defaultSortField="_id"
					pagination
				>
				</DataTable>
			</div>
			<div className="debts_foot">
				<Link to="/create" className="button button_create">Adicionar</Link>
			</div>
		</div>
	)
}