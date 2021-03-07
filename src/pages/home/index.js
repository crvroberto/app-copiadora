import React,{useState,useEffect} from 'react'
import Menubar from '../../components/MenuBar/index'
import axios from '../../services/api'
import ListVendas from '../../components/ListaVendas/Lista'

function Home (){
  
const [vendas,setVendas] = useState([])


useEffect(async ()=>{
    
    setTimeout(async () => { 
        await axios.get('/vendas')
            .then(res=>{
                setVendas(res.data )
                
            })

     }, 200)
          },[])


    return(
        <React.Fragment>
        <Menubar></Menubar>
        <ListVendas vendas={vendas}></ListVendas>
        
      
        
        </React.Fragment>
    )
}

export default Home