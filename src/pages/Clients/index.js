import React, { useEffect, useState } from 'react'
import Menubar from '../../components/MenuBar/index'
import { Table, Button } from 'react-bootstrap'

import axios from '../../services/api'
import AddClients from '../../components/Modal/Clients/AddClients'

function Client() {


    useEffect(() => axios.get('/clientes').then(({ data }) => setClients(data)), [])

    const [clients, setClients] = useState([])
    console.log(clients)

    function Tabela() {


        return (
            <Table bordered striped hover variant='dark'>
                <thead>
                    <tr>
                        <td>{<AddClients></AddClients>}</td>
                        <td >Nome</td>
                        <td>Débito</td>
                        <td>Número</td>
                    </tr>
                </thead>
                <tbody>

                    {clients.map((c) =>
                        <tr>
                            <td></td>
                            <td>{c.nome}</td>
                            <td></td>
                            <td>{c.numero}</td>

                        </tr>)}




                </tbody>
            </Table>
        )
    }

    return (
        <React.Fragment>
            <Menubar />
            <Tabela />



        </React.Fragment>
    )
}

export default Client