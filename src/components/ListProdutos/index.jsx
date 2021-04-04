import React, { useState,useEffect,useRef } from 'react'
import {Button} from 'react-bootstrap'


function List(props) {

    const [btn, setBtn] = useState({name: false })
    const [val, setVal] = useState({name: false })
    const [pesquisa, setPesquisa] = useState('')
    const listFocus = useRef()
    const quantideFocus = useRef()

    useEffect(()=>{
        
       /* document.onkeydown = (e)=>{if(e.key === 'F3' && val)e.preventDefault()
        
        }*/
        if(pesquisa === '')listFocus.current.focus()        
        if(quantideFocus.current)quantideFocus.current.focus() 
        
    })

    const Limparstates = e => {
        setBtn({ name: false })
        setVal({ name: false })
        e.target.value = ''
    }
    const Valuesearch = value => {
        
        const objsearch = props.produtos.find(product => product.name === value.target.value)
        setPesquisa(value.target.value)
        if (objsearch)setBtn(objsearch)
      
    }
    const Buttons = ({btn}) => {

        return (
            <div>
                { btn?.subproduto?.map((item,index) =>
                     <Button key={index} onClick={AddVal.bind(null, item)} variant='secondary' >{item.name}</Button>)
                 }
            </div>
        )
    }
    
    function AddVal(params) {

        if (!params.button) {
            let mudarbtn = { name: 'teste', subproduto: [params] }

            setBtn(mudarbtn)
        }

        return setVal(params)

    }
    function Val(obj) {


        function Enter(event) {
            if (event.keyCode === 13 && event.target.value > 0) {
                const valordoinput = parseFloat(event.target.value)
                parseFloat(valordoinput)
                obj.val.quantidade = valordoinput
                obj.val.nameAlfa = pesquisa
                props.addTable(obj.val)
            }

        }

        return (
            <div>
                {obj?.val?.name ? (
                    <input type='number' onKeyUp={Enter.bind()} className='form-inline' ref={quantideFocus}></input>
                ) : (<div></div>)

                }
            </div>
        )
    }

    return (
        <React.Fragment>
            
            <input type='search' placeholder='Produtos e Serviços'
                id='pesquisa' list='lista' className='form-control form-control-lg'
                onChange={Valuesearch.bind()} onClick={Limparstates.bind()} ref={listFocus}
            />
            <datalist id='lista'>
                {props.produtos.map((p,index) => <option key={index}>{p.name}</option>)}

            </datalist>
            
            {<Buttons btn={btn}> </Buttons>}
            {<Val val={val}></Val>}
        </React.Fragment>
    )
}

export default List
