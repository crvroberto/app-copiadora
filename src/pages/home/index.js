import React,{useState,useEffect} from 'react'
import Menubar from '../../components/MenuBar/index'
import axios from 'axios'
import ListVendas from '../../components/ListaVendas/Lista'

function Home (){
  
const [vendas,setVendas] = useState([])

useEffect(async ()=>{
        await axios.get('http://localhost:3030/api/vendas')
            .then(res=>{
                setVendas(res.data )
                console.log('res')
            })
           
          },[])
console.log('teste')

    return(
        <React.Fragment>
        <Menubar></Menubar>
        <ListVendas vendas={vendas}></ListVendas>
      
        
        </React.Fragment>
    )
}

export default Home