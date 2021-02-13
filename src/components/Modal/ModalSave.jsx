import { Button,Modal } from 'react-bootstrap';
import React, {useState,useEffect} from 'react'
import Axios from 'axios'


function ModalSave (params){
console.log(params.tabela)
  
    function valorTotal (){

        const values = Object.values(params.tabela).reduce(function(acc,tabela){
  
              return (acc + (tabela.precoAtual * tabela.quantidade))
          },0)
         return values.toFixed(2)
          
      }

    const [show, setShow] = useState(false)
    const [valor, setValue] = useState(0)
    const [troco, setTroco] = useState(0)
    
    const handleClose = () => setShow(false)
    function handleShow () {setShow(true)}

    useEffect(()=>{
        document.addEventListener('keyup',(e)=>{if(e.key === 'F2'){handleShow()}})
        if(params.tabela.length > 0) {setValue(valorTotal)}

      })

      const mudartroco = params =>setTroco(params.target.value) 

      function save() {
        Axios.post('http://localhost:3030/api/vendas', {
          objetos: params.tabela,
        })
        .then(function (response) {
          console.log(response);
  })
      }

    return   (
        <>
        <Button variant="primary" onClick={handleShow}>
          Venda - F2
        </Button>
  
        <Modal show={show} onHide={handleClose}>
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
            <Button variant="secondary" onClick={save}>
              Salvar
            </Button>
            
          </Modal.Footer>
        </Modal>
      </>
    );
    

}



export default ModalSave