import React from 'react'
import Menubar from '../../components/MenuBar/index'
import { Table, Button } from 'react-bootstrap'
import {FiFilePlus} from 'react-icons/fi'

function Client() {

    function Tabela() {


        return (
            <Table bordered striped hover variant='dark'>
                <thead>
                    <tr>
                        <td>{<Button variant='success'>add<FiFilePlus></FiFilePlus></Button>}</td>
                        <td >Nome</td>
                        <td>Débito</td>
                        <td>Número</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        
                    </tr>

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