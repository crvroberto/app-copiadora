import React,{useState,useEffect} from 'react'
import Menubar from '../../components/MenuBar/index'
import axios from 'axios'
import ListVendas from '../../components/ListaVendas/Lista'

function Home (){
  
const [vendas,setVendas] = useState([])


useEffect(
    
        async ()=>{
        const data = await axios.get('http://10.0.0.107:3030/api/vendas')
      
            setVendas(data.data )
            console.log(data)
          },[])

          
    


console.log(vendas)


    return(
        <React.Fragment>
        <Menubar></Menubar>
        <ListVendas vendas={vendas}></ListVendas>
      
        
        </React.Fragment>
    )
}

export default Home