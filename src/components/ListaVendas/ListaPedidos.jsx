import React, { useRef } from 'react';
import { useState } from 'react';
import { Table, Collapse, Button } from 'react-bootstrap';
import { FiEdit3, FiPrinter } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import Axios from '../../services/api'
import { useReactToPrint } from 'react-to-print'
import Printer from '../Print/PrintPedidos'
import moment from 'moment'

function List({ pedidos, setPedidos }) {

    const [open, setOpen] = useState(false)
    const [indice, setIndice] = useState(null)
    
    const componentRef = useRef()    
    const handlePrint = useReactToPrint({content: () => componentRef.current,},[componentRef.current])

    pedidos.sort((a, b) => {

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
                                    <Button variant="success" onClick={() => {
                                        Axios.post('/vendas', {
                                            obs: params.item.obs,
                                            objetos: params.item.objetos,
                                            funcionario: params.item.funcionario
                                        }).then((response) => {
                                            Axios.delete(`/pedidos/${params.item._id}`)
                                            setTimeout(async () => {
                                                await Axios.get('/pedidos')
                                                    .then(res => {
                                                        setOpen(!open)
                                                        setPedidos(res.data)

                                                    })

                                            }, 200)

                                        })
                                    }}>Fechar Venda</Button>
                                </td>
                                <td><Link to={{
                                    pathname: "/editPedidos", state: { item: params.item }
                                }}><Button variant='info'><FiEdit3 />Editar</Button></Link>

                                </td>
                                <td><Button variant="danger" onClick={() => {
                                    Axios.delete(`/pedidos/${params.item._id}`).then((response) => {
                                        Axios.get('/pedidos').then(res => { setOpen(!open); setPedidos(res.data) })
                                    })
                                }}>Cancelar</Button>

                                </td>
                                <td><div style={{ display: 'none' }}>
                                <Printer ref={componentRef} item={params.item}></Printer>
                                </div>
                                    <Button variant='dark' onClick={handlePrint}><FiPrinter /> </Button>
                                        
                                    
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
                <tr><td>Data:</td>
                    <td>Hora:</td>
                    <td>Itens:</td>
                    <td>Total Final:</td>
                    <td>Observações:</td>
                    <td>Vendedor:</td>
                    <td>Desconto:</td>
                    <td></td></tr>

                {pedidos.map((item, indice) => {

                    const values = Object.values(item.objetos).reduce((acc, tabela) => {
                        return (acc + (tabela.precoAtual * tabela.quantidade))
                    }, 0)

                    const dateHours = moment(item.data).format()
                    const date = dateHours.substr(0, 10)
                    const hora = dateHours.substr(11, 2)
                    console.log(item.objetos)
                    return (
                        <React.Fragment>

                            <tr key={indice} onClick={(e) => {
                                setIndice(indice)
                                if (e.target.localName === "td") {
                                    setOpen(!open)
                                }}}
                                aria-controls={indice}
                                aria-expanded={open}>
                                <td>{date}</td>
                                <td>{(hora) + item.data.substr(13, 3)}</td>
                                <td>{item.objetos[0]?.name}</td>
                                <td>{values.toFixed(2)}</td>
                                <td>{item.obs}</td>
                                <td>{item.funcionario}</td>
                                <td>desconto</td>
                                <td>

                                </td>

                            </tr>

                            <tr>
                                <td colSpan="8">
                                    <Colapse open={open} indice={indice} item={item}></Colapse>
                                </td>
                            </tr>
                        </React.Fragment>
                    )
                })}

            </tbody>
        </Table>

    )
}

export default List