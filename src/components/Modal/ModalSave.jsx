import { Button, Modal } from 'react-bootstrap';
import React, { useState, useEffect } from 'react'
import Axios from '../../services/api'


function ModalSave(params) {


  const [showSave, setShowSave] = useState(false)
  const [valor, setValue] = useState(0)
  const [troco, setTroco] = useState(0)


  const handleClose = () => setShowSave(false)
  const handleShow = () => setShowSave(true)
console.log(showSave)
  useEffect(() => {
    document.onkeyup = (e)=>{
      if(e.key === 'F2'){
      if (showSave === false) {setShowSave(true)};
      if (showSave === true && params.tabela.length > 0){save()}
    }
      if(e.key === 'F3' && params.tabela.lenght > 0){
        savePedido()}
  }
    if (params.tabela.length > 0) { setValue(valorTotal) };

  })

  const mudartroco = params => setTroco(params.target.value)
  

  function save() {

    Axios.post('/vendas', {
      obs: params.obs,
      objetos: params.tabela,
    })
      .then(function (response) {

        params.history.push("/home")

      })
  }
  function savePedido() {

    Axios.post('/pedidos', {
      obs: params.obs,
      objetos: params.tabela,
    })
      .then(function (response) {

        params.history.push("/pedidos")

      })

  }
  function valorTotal() {

    const values = Object.values(params.tabela).reduce((acc, tabela) => {

      return (acc + (tabela.precoAtual * tabela.quantidade))
    }, 0)
    return values.toFixed(2)

  }


  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Venda - F2
        </Button>

      <Modal show={showSave} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Total a Pagar</Modal.Title>
        </Modal.Header>
        <Modal.Body>


          <div class="list-group"></div>
          <button type="button" class="list-group-item list-group-item-action">
            Soma: <input type="number" value={valor}></input><br></br>
            <br></br>
            <strong>Desconto: </strong><input type="nymber" value={troco} onChange={mudartroco} />

          </button>


        </Modal.Body>
        <Modal.Footer>

          <Button onClick={save} variant="secondary">
            Salvar Venda - F2
            </Button>

            <Button variant="secondary" onClick={savePedido}>
              Salvar Pedido - F3
            </Button>

        </Modal.Footer>
      </Modal>
    </>
  );


}



export default ModalSave