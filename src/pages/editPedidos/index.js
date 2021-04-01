import React, { useState, useEffect } from 'react'
import Menubar from '../../components/MenuBar/index'
import axios from '../../services/api'
import List from '../../components/ListProdutos/index'
import Modal from '../../components/Modal/Modal'
import {Table} from "react-bootstrap"
import Produtos from "../../components/Produtos/index";

function EditPedidos (props){

    
    const [tabela, setTabela] = useState([])
    const [obs, setObs] = useState('')
    
    
    const addTable = params => setTabela([...tabela, { ...params }])

    const removeTable = indice => {
        tabela.splice(indice, 1); setTabela([...tabela]);
    }

    
    useEffect(() => {

        setTimeout(async function () {
            await axios.get(`/pedidos/${props.location.state.item._id}`)
                .then(res => {console.log(res)
                    setTabela(res.data.objetos)
                    setObs(res.data.obs)
                    
                })

        }, 200)
    }, [])







 return(
        <React.Fragment>
            <Menubar></Menubar>
            <List produtos={Produtos} addTable={addTable} ></List>
            <Table variant = 'dark'>
        <tbody>
          {tabela.length > 0 ? (tabela.map((item, indice) => {

              if(tabela[indice].precoAtual === null){
             
                const returnpreco = item.preco.filter((params) => params.quantidade[0] <= item.quantidade)
                const preco = returnpreco[returnpreco.length - 1]
                tabela[indice].precoAtual = preco.quantidade[1]
                setTabela([...tabela])
                console.log(tabela)
                return tabela[indice].precoAtual
          
              }
              function alteraPreco(valor) {
                tabela[indice].precoAtual =parseFloat(valor)
                setTabela([...tabela])
               
              }
              

              return (
                <tr key={tabela.index}>
                  <td> {item.name} </td>
                  <td> Quant: {item.quantidade}</td>
                  <td><Modal item={item} alteraPreco={alteraPreco}></Modal></td>
                  <td> Total: {(item.precoAtual * item.quantidade).toFixed(2) }</td>
                  <td> <button className='btn btn-danger' onClick={removeTable.bind(null, item, indice)}>X</button> </td>
                </tr>
              )
            })) : (<tr></tr>
            )

          }
        </tbody>
      </Table>
            </React.Fragment>
 )   
}

export default EditPedidos