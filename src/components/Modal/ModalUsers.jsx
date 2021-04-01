import { Button,Modal} from 'react-bootstrap';
import React, {useState} from 'react'

function ModalUsers() {
  
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
  
    return (
      <>
        <Button variant="secondary" onClick={handleShow}>
          Funcionário
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Alterar Funcionário</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <div><Button variant='dark' style={{minWidth: '100%'}}>Alisson</Button></div>
              <div><Button variant='dark' style={{minWidth: '100%'}}>Antônio</Button></div>
              <div><Button variant='dark' style={{minWidth: '100%'}}>Brenda</Button></div>
              <div><Button variant='dark' style={{minWidth: '100%'}}>Carlos</Button></div>
              <div><Button variant='dark' style={{minWidth: '100%'}}>Radija</Button></div>
          
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
  
 export default ModalUsers