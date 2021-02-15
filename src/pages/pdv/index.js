
import React, { useState } from "react";
import Menubar from '../../components/MenuBar/index'
import Produtos from '../../components/Produtos/index'
import List from '../../components/ListProdutos/'
import Table from '../../components/Table/Table'
import Total from '../../components/Total Produtos/TotallProdutos'
import Obs from '../../components/Modal/ModalObservacao'
import ModalSave from '../../components/Modal/ModalSave'

function Pdv (){
   /* document.body.onkeydown = function(e) {
        
        if (e.code === "F2" || e.code === 'F3') {
          e.preventDefault();
        }
    }*/
    const [tabela, setTabela] = useState([]);
    const [obs, setObs] = useState('')

    function addTable (params) {    
        
        return setTabela([...tabela, {...params}])
    }
    function removeTable(params,indice) {
       
        tabela.splice(indice,1)
        setTabela([...tabela])
        
    }
    return(<div>
        <React.Fragment >
        <Menubar  onKeyUp = {function(i){console.log(i)}}></Menubar>
        <List produtos={Produtos} addTable={addTable} ></List>
        <Table tabela={tabela} remove={removeTable} setTabela={setTabela}></Table>
        <Total tabela={tabela}></Total>
        <Obs obs={obs} setObs={setObs}></Obs>
        <ModalSave tabela={tabela} obs={obs}></ModalSave>
       
        </React.Fragment>
        </div>
    )
}

export default Pdv