
import React, { useEffect, useState } from "react";
import Menubar from '../../components/MenuBar/index'
import Produtos from '../../components/Produtos/index'
import List from '../../components/ListProdutos/'
import Modal from '../../components/Modal/Modal'
import {Table} from 'react-bootstrap'
import Total from '../../components/Total Produtos/TotallProdutos'
import Obs from '../../components/Modal/ModalObservacao'
import ModalSave from '../../components/Modal/ModalSave'
import { useHistory } from "react-router";


function Pdv (){
    const [tabela, setTabela] = useState([])
    
    const [obs, setObs] = useState('')
    const history = useHistory()

    useEffect(()=>{
       

        document.onkeydown = (e)=>{
            if(e.key === 'F1'){ e.preventDefault(); history.push('/home') }
            
        }
    })
    const addTable = params => setTabela([...tabela, {...params}])
    
    const removeTable = indice => {
        tabela.splice(indice,1)
        setTabela([...tabela])}


    return(<div >
        <React.Fragment >
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
        <Total tabela={tabela}></Total>
        <Obs obs={obs} setObs={setObs}></Obs>
        <ModalSave tabela={tabela} obs={obs} history={history}></ModalSave>
       
        </React.Fragment>
        </div>
    )
}

export default Pdv