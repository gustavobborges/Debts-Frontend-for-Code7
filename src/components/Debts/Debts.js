import React, { useState, useEffect } from 'react';
import { BsSearch, BsFillTrashFill } from 'react-icons/bs';
import { Link, useParams } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import './Debts.css';
import axios from 'axios';
import api_debts from '../../services/apiDebts';

export default function Debts() {
	const {idClient} = useParams();
	const [debts, setDebts] = useState([]);

	useEffect(() => {
		api_debts.get()
			.then(response => {
				idClient
				? setDebts(response.data.result.filter(debt => debt.idUsuario == idClient)) 
				: setDebts(response.data.result);
			})
			.catch((error) => {
				console.log("Problema durante a consulta por dívidas." + error);
			})
	}, [idClient]);

	async function DeleteDebt(id) {
		await axios.delete(`https://provadev.xlab.digital/api/v1/divida/${id}?uuid=317a7ff8-7454-4131-8cc7-8ed2ebc141bd`)
			.then((response) => {
				const currentDebts = debts.filter(debt => debt._id !== id);
				setDebts(currentDebts);
			})
			.catch((error) => {
				console.log("Problema durante a exclusão por dívidas." + error);
			})
	}

	const columns = [
		{
			name: "Cliente",
			selector: (row) => row['idUsuario'],
			sortable: true,
		},
		{
			name: "Motivo",
			selector: (row) => row['motivo'],
			sortable: true,
		},
		{
			name: "Valor",
			selector: (row) => row['valor'],
			sortable: true,
		},
		{
			name: "Ações",
			cell: (row) => [
				<div className="col_action" key={row._id} data={row}>
					<Link to={`/edit/${row._id}`} className="button_table button_edit"><BsSearch /></Link>
					<Link to="/" onClick={() => DeleteDebt(row._id)} className="button_table button_delete"><BsFillTrashFill /></Link>
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
				{
					idClient
					? (<h2>Dívidas do Cliente {idClient}</h2>)
					: (<h2>Todas as Dívidas</h2>)
				}
			</div>
			<div className="debts_content">
				<DataTable
					title="Tabela de Dívidas"
					columns={columns}
					data={debts}
					defaultSortField="_id"
					pagination
				>
				</DataTable>
			</div>
			<div className="debts_foot">
				<Link to="/create" className="button_table button_create">Adicionar</Link>
			</div>
		</div>
	)
}