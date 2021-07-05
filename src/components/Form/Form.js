import React, { useState, useEffect } from 'react';
import { useHistory, Link, useParams } from 'react-router-dom';
import api_clients from '../../services/apiClients';
import axios from 'axios';

import './Form.css';

const initialValue = {
    idUsuario: "",
    motivo: "",
    valor: ""
}

export default function DebtForm() {

    const {id} = useParams();

    const [values, setValues] = useState(id ? id : initialValue);
    const [clients, setClients] = useState([]);
    
    const history = useHistory();

    useEffect(() => {
		if (id) {
            console.log('tem id');
            axios.get(`https://provadev.xlab.digital/api/v1/divida/${id}?uuid=317a7ff8-7454-4131-8cc7-8ed2ebc141bd`)
				.then((response) => {
					console.log(response.data.result);
					setValues(response.data.result);
				})
		}
	}, [id]);

    useEffect(() => {
        api_clients.get().then(response => setClients(response.data));
    }, [clients]);

    // const clients = api_clients.get().then(response => response.data);


    function onChange(event) {
		const {name, value} = event.target;
		setValues({...values, [name]: value});
	}


    function onSubmit(event) {
        console.log('salvou')
		event.preventDefault();
		console.log(values);
		const method = id ? 'put' : 'post';
		const url = id ? `https://provadev.xlab.digital/api/v1/divida/${id}?uuid=317a7ff8-7454-4131-8cc7-8ed2ebc141bd` : `https://provadev.xlab.digital/api/v1/divida?uuid=317a7ff8-7454-4131-8cc7-8ed2ebc141bd`;
		axios[method](url, values)
			.then((response) => {
				history.push('/');
			});
	}
    
    return(
        <div className="form_debt">
            <form onSubmit={onSubmit}>

                <label htmlFor="idUsuario">Cliente *</label><br/>
                {/* <input type="number" id="idUsuario" name="idUsuario" value={values.idUsuario} onChange={onChange}></input> */}
                <select name="idUsuario" id="idUsuario" value={values.idUsuario} className="select_input" onChange={onChange}>
                    <option selected>Selecione</option>,
                    {clients.map((client) => [
                        <option value={client.id} onChange={onChange}>{client.name}</option>    
                    ])}
                </select><br/>

                <label htmlFor="motivo">Motivo</label>
                <input as="textarea" name="motivo" id="motivo" value={values.motivo} onChange={onChange} />

                <label htmlFor="valor">Valor *</label>
                <input type="number" name="valor" id="valor" value={values.valor} onChange={onChange} required/>

                <div className="form_buttons">
                    <Link to={"/"} className="button button_back">Voltar</Link>
                    <button type="submit" className="button button_save">Salvar</button>
                </div>

            </form>
        </div>
    )
}