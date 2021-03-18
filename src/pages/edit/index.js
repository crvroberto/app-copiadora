import React, { useState, useEffect } from 'react'
import Menubar from '../../components/MenuBar/index'
import axios from '../../services/api'
import List from '../../components/ListProdutos/index'
import Table from '../../components/Table/Table'
import Produtos from "../../components/Produtos/index";
import Total from '../../components/Total Produtos/TotallProdutos'
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
            <Table tabela={tabela} remove={removeTable} setTabela={setTabela}></Table>
            <Obs obs={obs} setObs={setObs}></Obs>
            <ModalSave tabela={tabela} obs={obs} put={put} history={history}></ModalSave>
            
            <Total tabela={tabela}></Total>

        </React.Fragment>
    )
}

export default Edit