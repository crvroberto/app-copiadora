import React, { useState, useEffect } from 'react'
import Menubar from '../../components/MenuBar/index'
import axios from '../../services/api'
import List from '../../components/ListProdutos/index'
import {Table} from 'react-bootstrap'
import Produtos from "../../components/Produtos/index";
import Total from '../../components/Total Produtos/TotallProdutos'
import Modal from '../../components/Modal/ModalSaveEditVendas'
import Obs from '../../components/Modal/ModalObservacao'
import ModalSave from '../../components/Modal/ModalSaveEditVendas'
import { useHistory } from 'react-router'


function Edit(props) {


    const [tabela, setTabela] = useState([])
    const [obs, setObs] = useState('')
    const put = props.location.state.item._id
    const history = useHistory()

    const addTable = params => setTabela([...tabela, { ...params }])

    const removeTable = indice => {
        tabela.splice(indice, 1); setTabela([...tabela]);
    }

    useEffect(() => {
            
        setTimeout(async function () {
            await axios.get(`/vendas/${put}`)
                .then(res => {
                    setTabela(res.data.objetos)
                    setObs(res.data.obs)
                    
                })

        }, 200)
    }, [])
useEffect(()=>{
    document.onkeydown = (e)=>{
        if(e.key === 'F1'){e.preventDefault(); history.push('/home')}
        if(e.key === 'F3'){e.preventDefault(); history.push('/pdv')}
    }
})

    return (
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
            <Obs obs={obs} setObs={setObs}></Obs>
            <ModalSave tabela={tabela} obs={obs} put={put} history={history}></ModalSave>
            
            <Total tabela={tabela}></Total>

        </React.Fragment>
    )
}

export default Edit