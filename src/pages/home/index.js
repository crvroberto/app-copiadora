import React,{useState,useEffect} from 'react'
import Menubar from '../../components/MenuBar/index'
import axios from 'axios'
import ListVendas from '../../components/ListaVendas/Lista'

function Home (){
  
const [vendas,setVendas] = useState([])

useEffect(async ()=>{
    
    setTimeout(async function(){ 
        await axios.get('http://localhost:3030/api/vendas')
            .then(res=>{
                setVendas(res.data )
                console.log(res.data)
            })

     }, 200)


        
           
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