import React,{useState,useEffect} from 'react'
import Menubar from '../../components/MenuBar/index'
import axios from '../../services/api'
import ListVendas from '../../components/ListaVendas/Lista'
import { useHistory } from 'react-router-dom'

function Home (){
  
const [vendas,setVendas] = useState([])
const history = useHistory()


useEffect(async ()=>{
    
    setTimeout(async () => { 
        await axios.get('/vendas')
            .then(res=>{
                setVendas(res.data )
                
            })

     }, 200)
          },[])

useEffect(()=>{

    document.onkeydown = (e)=>{
       /* if(e.key === 'F3'){e.preventDefault(); history.push('/pdv') }
        if(e.key ==='F1')e.preventDefault()*/
        if(e.key ==='F8'){history.push('/pedidos')}
    }
    
            
},[])
    return(
        <React.Fragment>
        <Menubar></Menubar>
            <ListVendas vendas={vendas} setVendas={setVendas}></ListVendas>
        
      
        
        </React.Fragment>
    )
}

export default Home