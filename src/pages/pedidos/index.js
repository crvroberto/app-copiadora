import React,{useState,useEffect} from 'react'
import Menubar from '../../components/MenuBar/index'
import axios from 'axios'
import ListPedidos from '../../components/ListaVendas/ListaPedidos'

function Pedidos (){


    const [pedidos,setPedidos] = useState([])

    useEffect(async ()=>{

        setTimeout(async function(){  
            await axios.get('http://localhost:3030/api/pedidos')
            .then(res=>{
                setPedidos(res.data )
                
            })

        }, 200);
           
               
              },[])
    
    
        return(
            <React.Fragment>
            <Menubar></Menubar>
            <ListPedidos pedidos={pedidos}></ListPedidos>
          
            
            </React.Fragment>
        )
}

export default Pedidos