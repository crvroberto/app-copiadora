import React,{useState} from 'react'
import { FiEdit3, FiPrinter } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import {Table, Collapse} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import Axios from '../../services/api'

function List({ vendas, setVendas }) {

    const [open, setOpen] = useState(false)
    const [indice, setIndice] = useState(null)
    

    vendas.sort((a, b) => {

        if (a.data.substr(0, 19) > b.data.substr(0, 19)) return -1;
        if (a.data.substr(0, 19) < b.data.substr(0, 19)) return 1;
        return 0;
    })

    function Colapse(params) {

        return (
            params.indice === indice ? (

                <Collapse in={params.open}>

                    <Table bordered striped variant='dark' id={params.indice}>
                        <tbody>
                            <tr>
                                <td>
                                    
                                </td>
                                <td><Link to={{
                                    pathname: "/editPedidos", state: { item: params.item }
                                }}><Button variant='info'><FiEdit3 />Editar</Button></Link>

                                </td>
                                <td><Button variant="danger" onClick={() => {
                                    Axios.delete(`/vendas/${params.item._id}`).then((response) => {
                                        Axios.get('/vendas').then(res => { setOpen(!open); setVendas(res.data) })
                                    })
                                }}>Cancelar</Button>

                                </td>
                            </tr>

                            <tr>

                                <td>Nomes</td>
                                <td>Quantidade</td>
                                <td>Preço</td>
                            </tr>

                            {params.item.objetos.map((i, indice) => (
                                <tr key={indice}>

                                    <td>{i.nameAlfa} - {i.name}</td>
                                    <td>{i.quantidade}</td>
                                    <td>{i.precoAtual}</td>
                                </tr>

                            ))}
                        </tbody>
                    </Table>


                </Collapse>

            ) : <div></div>)
    }

    return ( 
        
            <Table bordered striped hover variant='dark'>
                <tbody>
                    <tr>
                        <td>Data:</td> 
                        <td>Hora:</td> 
                        <td>Itens:</td>
                        <td>Total Final:</td>
                        <td>Observações:</td>
                        <td>Vendedor:</td>
                        <td>Desconto:</td> 
                        <td></td>
                        </tr>
                    {vendas.map((item, indice) => {
                        const values = Object.values(item.objetos).reduce((acc, tabela) =>{
                            return (acc + (tabela.precoAtual * tabela.quantidade))
                        }, 0)
                        const date = item.data.substr(0, 10)
                        const hora = parseFloat(item.data.substr(11, 2)) - 3

                        return (<React.Fragment>

                            <tr key={indice} onClick={(e) => {
                                setIndice(indice)
                                if (e.target.localName === "td") {
                                    setOpen(!open)
                                }}}>
                                    <td>{date}</td>
                                    <td>{(hora) + item.data.substr(13, 3)}</td>
                                    <td>{item.objetos[0].name}</td>
                                    <td>{values.toFixed(2)}</td>
                                    <td>{item.obs}</td>
                                    <td>funcionário</td>
                                    <td>desconto</td>
                                    <td>
                                    <Button variant='dark'><FiPrinter /></Button>
                                    </td>
                                </tr>
                                <tr>
                                <td colSpan="8">
                                    <Colapse open={open} indice={indice} item={item}></Colapse>
                                </td>
                            </tr>
                            

                            </React.Fragment>)
                    })}

                </tbody>
            </Table>
        


    )
}

export default List