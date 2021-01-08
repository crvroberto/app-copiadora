
import React, { useState } from "react";
import Menubar from '../../components/MenuBar/index'
import Produtos from '../../components/Produtos/index'
import List from '../../components/ListProdutos/'
import Table from '../../components/Table/Table'


function Pdv (){
 
    const [tabela, setTabela] = useState([{name: false}]);
    function addTable (params) {

        return setTabela({...params})
    }

    return(
        <React.Fragment>
        <Menubar></Menubar>
        <List produtos={Produtos} addTable={addTable} ></List>
        <Table tabela={tabela}></Table>
        </React.Fragment>
    )
}

export default Pdv