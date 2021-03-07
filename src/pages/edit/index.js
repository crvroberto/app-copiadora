import React, { useState, useEffect } from 'react'
import Menubar from '../../components/MenuBar/index'
import axios from '../../services/api'
import List from '../../components/ListProdutos/index'
import Table from '../../components/Table/Table'
import Produtos from "../../components/Produtos/index";
import Total from '../../components/Total Produtos/TotallProdutos'
import Obs from '../../components/Modal/ModalObservacao'
import ModalSave from '../../components/Modal/ModalSaveEditVendas'


function Edit(props) {


    const [tabela, setTabela] = useState([])
    const [obs, setObs] = useState('')
    const put = props.location.state.item._id

    const addTable = params => setTabela([...tabela, { ...params }])

    const removeTable = indice => {
        tabela.splice(indice, 1); setTabela([...tabela]);
    }

    useEffect(() => {

        setTimeout(async function () {
            await axios.get(`/vendas/${put}`)
                .then(res => {console.log(res)
                    setTabela(res.data.objetos)
                    setObs(res.data.obs)
                    
                })

        }, 200)
    }, [])


    return (
        <React.Fragment>
            <Menubar></Menubar>
            <List produtos={Produtos} addTable={addTable} ></List>
            <Table tabela={tabela} remove={removeTable} setTabela={setTabela}></Table>
            <Obs obs={obs} setObs={setObs}></Obs>
            <ModalSave tabela={tabela} obs={obs} put={put}></ModalSave>
            
            <Total tabela={tabela}></Total>

        </React.Fragment>
    )
}

export default Edit