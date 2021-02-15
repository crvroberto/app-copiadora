import { Button,Modal } from 'react-bootstrap';
import React, {useState,useRef,useEffect} from 'react'

function Modalobs({obs,setObs}) {
  
  
    const [show, setShow] = useState(false)
    
  
    const handleClose = () => setShow(false)
    function handleShow () {setShow(true)}
    const mudarValor = params => setObs(params.target.value)

    const inputRef = useRef()
    
    
    useEffect(()=>{
      document.addEventListener('keyup',(e)=>{if(e.key === 'F4'){handleShow()}})
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
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={mudarValor} ref={inputRef}>{obs}</textarea>
      
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