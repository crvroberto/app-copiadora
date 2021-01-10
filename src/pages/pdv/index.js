
import React, { useState } from "react";
import Menubar from '../../components/MenuBar/index'
import Produtos from '../../components/Produtos/index'
import List from '../../components/ListProdutos/'
import Table from '../../components/Table/Table'


function Pdv (){
 
    const [tabela, setTabela] = useState([]);
   
    function addTable (params) {    
        
        return setTabela([...tabela, {...params}])
    }
    function removeTable(params,indice) {
       
        tabela.splice(indice,1)
        setTabela([...tabela])
        console.log(tabela)
    }
    return(
        <React.Fragment>
        <Menubar></Menubar>
        <List produtos={Produtos} addTable={addTable} ></List>
        <Table tabela={tabela} remove={removeTable}></Table>
        </React.Fragment>
    )
}

export default Pdv