import { Link } from 'react-router-dom'
import ModalUsers from '../../components/Modal/ModalUsers'
import {Button} from 'react-bootstrap'

function menu () {


return(
    <nav className="navbar navbar-dark bg-dark">
        <Link to='/home'><Button className='btn btn-secondary'> Home - F1 </Button></Link>    
        <Link to='/pdv'> <Button className='btn btn-secondary'>     Pdv - F3  </Button></Link>
        <Link to='/pedidos'> <Button className='btn btn-secondary'>    Pedidos - F8  </Button></Link>
        <Link to='/clients'> <Button className='btn btn-secondary'>    Clientes   </Button></Link>
        <ModalUsers></ModalUsers>
        


    </nav>
   

)

}

export default menu