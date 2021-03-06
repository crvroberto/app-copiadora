import { Link, useHistory } from 'react-router-dom'
import ModalUsers from '../../components/Modal/ModalUsers'
import {Button, Nav} from 'react-bootstrap'
import React, { useEffect } from 'react'
import { AuthContext } from '../../providers/auth'

function Menu () {
    const {user} = React.useContext(AuthContext)
    const history = useHistory()

    if(user=== "Funcionário")history.push('/funcionarios')
useEffect(()=>{
    document.onkeydown = e =>{
        const tecla = e.key
    if(tecla === "F1"){e.preventDefault(); history.push('/home')}
    if(tecla === "F3"){e.preventDefault(); history.push('/pdv')}
    if(tecla === "F8"){history.push('/pedidos')}

}
})

return(
    <Nav className="navbar-dark bg-dark" variant='tabs' justify >
        
        <Nav.Item><Link to='/home'><Button className='btn btn-secondary'> Home - F1 </Button></Link></Nav.Item>    
        <Nav.Item><Link to='/pdv'> <Button className='btn btn-secondary'>     Pdv - F3  </Button></Link></Nav.Item>
        <Nav.Item><Link to='/pedidos'> <Button className='btn btn-secondary'>    Pedidos - F8  </Button></Link></Nav.Item>
        <Nav.Item><Link to='/clients'> <Button className='btn btn-secondary'>    Clientes   </Button></Link></Nav.Item>
        <Nav.Item><ModalUsers></ModalUsers></Nav.Item>
        


    </Nav>
   

)

}

export default Menu