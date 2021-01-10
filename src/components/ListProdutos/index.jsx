import React,{useState} from 'react'

function List (props) {
   
    
const [btn, setBtn] = useState({
    name: false
})
const [val, setVal] = useState({
    name: false
})


function Valuesearch(value){
    

    const search = value.target.value
    
    props.produtos.map(function(product) { 
        if(product.name == search) {
            
            Addbuttons(product)
            
        }

    })

   
}
function Addbuttons(params) {

    
    return setBtn(params)
  
}
function AddVal(params) {

    
    return setVal(params)
  
}
function Buttons (props) {

return(
     <div>
         {props.btn.name ? (props.btn.subproduto.map(function(item) {

            return  <button onClick = {AddVal.bind(null,item)} className='btn btn-secondary'>{item.name}</button>
         })
            

         ) : (<div></div>)

         }
     </div>
    )
}



function Val (obj){
    
  
    function Enter (event) {
        if(event.keyCode === 13 && event.target.value > 0) {
           obj.val.quantidade = event.target.value
           
           props.addTable(obj.val)
        }
    
    }   

    return(
        <div>
            {obj.val.name ? (
                <input type='number' onKeyUp={Enter.bind()} className='form-inline'></input>
            ) : (<div></div>)
   
            }
        </div>
       )
}

return (
    <React.Fragment>
    <input type='search' placeholder ='Produtos e Serviços' 
    id='pesquisa' list='lista' className='form-control dark'
    onChange={Valuesearch.bind()}
    />

    <datalist id='lista'>
    {props.produtos.map(function(p){
        return (
            <option>{p.name}</option>
        )
    })
    
    }
    </datalist>
        {<Buttons btn={btn}> </Buttons>}
        {<Val val={val}></Val>}
    </React.Fragment>
)
}

export default List
