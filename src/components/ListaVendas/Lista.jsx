import { FiEdit3 } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import {Table} from 'react-bootstrap'

function List({ vendas }) {

    vendas.sort((a, b) => {

        if (a.data.substr(0, 19) > b.data.substr(0, 19)) return -1;
        if (a.data.substr(0, 19) < b.data.substr(0, 19)) return 1;
        return 0;
    })

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

                        return (

                            <tr key={indice}>
                                    <td>{date}</td>
                                    <td>{(hora) + item.data.substr(13, 3)}</td>
                                    <td>{item.objetos[0].name}</td>
                                    <td>{values.toFixed(2)}</td>
                                    <td>{item.obs}</td>
                                    <td>funcionário</td>
                                    <td>desconto</td>
                                    <td><Link to={{
                                        pathname: "/edit", state: { item: item }
                                    }}><FiEdit3 /></Link></td>
                                </tr>
                            

                        )
                    })}

                </tbody>
            </Table>
        


    )
}

export default List