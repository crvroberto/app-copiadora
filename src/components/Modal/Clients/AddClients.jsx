import { Button,Modal,Form } from 'react-bootstrap';
import React, {useState} from 'react'
import {FiFilePlus} from 'react-icons/fi'
import axios from '../../../services/api'

function Example() {
  
    const [show, setShow] = useState(false);
    const [name, setName] = useState('')
    const [telefone, setTelefone] = useState((81))
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const save = () => {axios.post('/clientes',{
      nome: name,
      numero: telefone,
            }).then(()=>handleClose())
      
          }
    
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          
        add<FiFilePlus></FiFilePlus>
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Adicionar Cliente</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <Form.Control type="text" onChange={((e)=>setName(e.target.value))} value={name} placeholder="Nome" className='mb-3' ></Form.Control>
            
            <Form.Control type="text" onChange={((e)=>setTelefone(e.target.value))} value={telefone} placeholder="Telefone" ></Form.Control>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={save}>
              Adicionar
            </Button>
            
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
 export default Example