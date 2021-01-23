import React, { useState } from 'react'

function List(props) {


    const [btn, setBtn] = useState({
        name: false
    })
    const [val, setVal] = useState({
        name: false
    })

    function Limparstates(e) {
        setBtn({ name: false })
        setVal({ name: false })
        e.target.value = ''

    }
    function Valuesearch(value) {
        const search = value.target.value

        return (props.produtos.map(function (product) {
            if (product.name === search) {

                return Addbuttons(product)

            }

        }))


    }
    function Addbuttons(params) { return setBtn(params) }

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
                {props.btn.name ? (props.btn.subproduto.map(function (item) {

                    return <button onClick={AddVal.bind(null, item)} className='btn btn-secondary'>{item.name}</button>
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
                props.addTable(obj.val)
            }

        }

        return (
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
            <input type='search' placeholder='Produtos e Serviços'
                id='pesquisa' list='lista' className='form-control dark'
                onChange={Valuesearch.bind()} onClick={Limparstates.bind()}
            />

            <datalist id='lista'>
                {props.produtos.map(function (p) {
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
