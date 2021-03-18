import { Link } from 'react-router-dom'
function menu () {

return(
    <nav className="navbar navbar-dark bg-dark">
        <Link to='/home'><button className='btn btn-secondary'> Home - F1 </button></Link>    
        <Link to='/pdv'> <button className='btn btn-secondary'>     Pdv - F3  </button></Link>
        <Link to='/pedidos'> <button className='btn btn-secondary'>    Pedidos   </button></Link>
        <Link to='/clients'> <button className='btn btn-secondary'>    Clientes   </button></Link>


    </nav>
   

)

}

export default menu