import React,{useState,useEffect} from 'react'
import Menubar from '../../components/MenuBar/index'
import axios from '../../services/api'
import ListPedidos from '../../components/ListaVendas/ListaPedidos'

function Pedidos (){


    const [pedidos,setPedidos] = useState([])

    useEffect(async ()=>{

        setTimeout(async ()=>{  
            await axios.get('/pedidos')
            .then(res=>{
                setPedidos(res.data )
                
            })

        }, 200);
           
               
              },[])
    
    
        return(
            <React.Fragment>
            <Menubar></Menubar>
            <ListPedidos pedidos={pedidos} setPedidos={setPedidos}></ListPedidos>
          
            
            </React.Fragment>
        )
}

export default Pedidos