import { Button,Modal } from 'react-bootstrap';
import React, {useState} from 'react'

function Example({item,alteraPreco}) {
  console.log(alteraPreco)
    const [show, setShow] = useState(false);
    const [valor, setValue] = useState(0);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    function mudarValor (i) {return setValue(i.target.value)} 
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Preço: {(item.precoAtual).toFixed(2)}
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Alterar Preço</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div>Preco Atual:<h1> {(item.precoAtual).toFixed(2)}</h1></div>
          <input type= 'number' value={valor} onChange={mudarValor.bind()}></input> 
          <Button variant="primary" onClick={()=>{alteraPreco(valor)}}>
              Atualizar
            </Button>    
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Fechar
            </Button>
            
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
 export default Example