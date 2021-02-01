import { Button,Modal } from 'react-bootstrap';
import React, {useState,useRef,useEffect} from 'react'

function Modalobs() {
  
    const [show, setShow] = useState(false)
    const [valor, setValue] = useState('')
  
    const handleClose = () => setShow(false)
    function handleShow () {setShow(true)}
    const mudarValor = params => setValue(params.target.value)

    const inputRef = useRef()
  
 


    useEffect(()=>{
      
      if(show){inputRef.current.focus()}
     
    })

    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          OBS: - F4
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Observação Cliente</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div class="form-group">
    <label for="exampleFormControlTextarea1"></label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={mudarValor} ref={inputRef}>{valor}</textarea>
      
          </div>
     
            
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Salvar
            </Button>
            
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
 export default Modalobs