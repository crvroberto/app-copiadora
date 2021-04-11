import { Button,Modal} from 'react-bootstrap';
import React, {useState} from 'react'
import { AuthContext } from '../../providers/auth';

function ModalUsers() {
  
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    const {user,setUser} = React.useContext(AuthContext)
    const funcionarios = ["Alisson","Antônio","Brenda","Carlos","Radija"]
    

    return (
      <>
        <Button variant="secondary" onClick={handleShow}>
          {user}
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Alterar Funcionário</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {funcionarios.map((f)=>{
                return(<div><Button variant='dark' style={{minWidth: '100%'}} onClick={(e)=>{setUser(f);handleClose()}}>{f}</Button></div>)
            })}

          </Modal.Body>
          <Modal.Footer>
                       
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
 export default ModalUsers