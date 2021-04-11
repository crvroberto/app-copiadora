import React, { useState } from 'react'
import { FiEdit3, FiPrinter } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { Table, Collapse } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import Axios from '../../services/api'

function List({ vendas, setVendas }) {

    const [open, setOpen] = useState(false)
    const [indice, setIndice] = useState(null)


    const vendasSort = vendas.sort((a, b) => {

        if (a.data.substr(0, 19) > b.data.substr(0, 19)) return -1;
        if (a.data.substr(0, 19) < b.data.substr(0, 19)) return 1;
        return 0;
    })

    function Colapse(params) {

        return (
            params.indice === indice ? (

                <Collapse in={params.open}>

                    <Table style={{color:"white"}}id={params.indice}>
                        <tbody>
                            <tr key={params.item._id+3}>
                                <td></td>

                                <td><Link to={{
                                    pathname: "/editPedidos", state: { item: params.item }
                                }}><Button variant='info'><FiEdit3 />Editar</Button></Link>
                                </td>

                                <td>
                                    <Button variant="danger" onClick={() => {
                                        Axios.delete(`/vendas/${params.item._id}`)
                                            .then((response) => {
                                                Axios.get('/vendas')
                                                    .then(res => { setOpen(!open); setVendas(res.data) })
                                            })
                                    }}>Cancelar
                                </Button>

                                </td>
                            </tr>

                            <tr key={params.item._id+4}>

                                <td>Nomes</td>
                                <td>Quantidade</td>
                                <td>Preço</td>
                            </tr>

                            {params.item?.objetos?.map((i,indice) => (
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
    const tow = ["Data", "Hora", "Itens", "Total Final", "Observações", "Vendedor", "Desconto", ""]

    return (

        <Table bordered striped hover variant='dark'>
            <tbody>
                <tr key={"001"}>
                    {tow.map((i, indice) => { return (<td key={indice}>{i}</td>) })}
                </tr>
                {vendasSort?.map((item, indice) => {
                    const values = Object.values(item.objetos).reduce((acc, tabela) => {
                        return (acc + (tabela.precoAtual * tabela.quantidade))
                    }, 0)
                    const date = item.data.substr(0, 10)
                    const hora = parseFloat(item.data.substr(11, 2)) - 3
                    const itensTd = [date, (hora) + item.data.substr(13, 3), item.objetos[0].name,
                        values.toFixed(2), item.obs, item.funcionario, "desconto", <Button variant='dark'>
                            <FiPrinter /></Button>]
                            
                    return (
                        <React.Fragment>

                            <tr key={item._id} onClick={(e) => {
                                setIndice(indice)
                                if (e.target.localName === "td") {
                                    setOpen(!open)
                                }
                            }}>
                                {itensTd?.map((i, indice) => {
                                    return (<td key={indice}>{i}</td>)
                                })}
                            </tr>
                            <tr key={item._id +2}>
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