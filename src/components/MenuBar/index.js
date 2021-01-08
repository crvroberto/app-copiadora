import { Link } from 'react-router-dom'
function menu () {

return(
    <nav className="navbar navbar-dark bg-dark">
        <Link to='/home'><button className='btn btn-secondary'> Home  </button></Link>    
        <Link to='/pdv'> <button className='btn btn-secondary'>     Pdv   </button></Link>
        <Link to='/pedidos'> <button className='btn btn-secondary'>    Pedidos   </button></Link>


    </nav>
   

)

}

export default menu