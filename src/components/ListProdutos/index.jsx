import React, { useState,useEffect,useRef } from 'react'


function List(props) {

    const [btn, setBtn] = useState({name: false })
    const [val, setVal] = useState({name: false })
    const [pesquisa, setPesquisa] = useState('')
    const listFocus = useRef()
    const quantideFocus = useRef()
 

    useEffect(()=>{
     document.onkeydown = (e)=>{if(e.key === 'F3' && val){e.preventDefault();
        
        }}
     //   document.addEventListener('keyup', (e)=>{if(e.key === 'F2'){console.log(e)}})
        if(pesquisa === ''){listFocus.current.focus()    }        
        if(quantideFocus.current)quantideFocus.current.focus() 
        
    })

    function Limparstates(e) {
        setBtn({ name: false })
        setVal({ name: false })
        e.target.value = ''

    }
    function Valuesearch(value) {
        
        const objsearch = props.produtos.find(product => product.name === value.target.value)
        setPesquisa(value.target.value)
        objsearch === undefined ? console.log('Valuesearch') : setBtn(objsearch)
      
    }
    function AddVal(params) {

        if (params.button === undefined) {
            let mudarbtn = { name: 'teste', subproduto: [params] }

            setBtn(mudarbtn)
        }

        return setVal(params)

    }
    function Buttons(props) {

        return (
            <div>
                {props.btn.name ? (props.btn.subproduto.map(function (item,index) {

                    return <button key={index} onClick={AddVal.bind(null, item)} className='btn btn-secondary' >{item.name}</button>
                })


                ) : (<div></div>)

                }
            </div>
        )
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
                {obj.val.name ? (
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
                onChange={Valuesearch.bind()} onClick={Limparstates.bind()} ref={listFocus} onKeyUp={(e)=>{if(e.key === 'Enter'){console.log(e.target)}}}
            />

            <datalist id='lista'>
                {props.produtos.map(function (p,index) {
                    return (
                        <option key={index}>{p.name}</option>
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
