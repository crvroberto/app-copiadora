import React,{useState,useMemo} from 'react'
import Menubar from '../../components/MenuBar/index'
import axios from 'axios'


function Home (){
  
const [vendas,setVendas] = useState([])


    useMemo(async ()=>{
        const data = await axios.get('http://localhost:3030/api/vendas')
      
            setVendas(data.data )
            console.log(data)
          },[])

    


console.log(vendas)


    return(
        <React.Fragment>
        <Menubar></Menubar>
        
      
        
        </React.Fragment>
    )
}

export default Home