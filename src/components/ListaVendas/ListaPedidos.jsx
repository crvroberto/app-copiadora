import { FiEdit3 } from 'react-icons/fi'
import { Link } from 'react-router-dom';
function List ({pedidos}) {


    pedidos.sort((a,b)=>{
      
     if (a.data.substr(0,19) > b.data.substr(0,19)) return -1;
     if (a.data.substr(0,19) < b.data.substr(0,19)) return 1;
     return 0;
    })
   
   

    return(
        <div>
            <table className="table table-dark table-hover">
                <tbody>
                    <tr><td>Data:</td> <td>Hora:</td> <td>Itens:</td> 
                    <td>Total Final:</td><td>Observações:</td><td>Vendedor:</td><td>Desconto:</td> <td></td></tr> 
                                       
                    {
                    pedidos.map((item,indice)=>{
                            const values = Object.values(item.objetos).reduce(function(acc,tabela){

                                return (acc + (tabela.precoAtual * tabela.quantidade))
                            },0)

                            const date = item.data.substr(0,10)
                            const hora = parseFloat(item.data.substr(11,2)) - 3
                            
                        
                            return(                                
                                <tr key={indice}>
                                    <td>{date}</td>
                                    <td>{(hora)+item.data.substr(13,3)}</td>
                                    <td>{item.objetos[0].name}</td> 
                                    <td>{values.toFixed(2)}</td>
                                    <td>{item.obs}</td>
                                    <td>funcionário</td>
                                    <td>desconto</td>
                                    <td><Link to={{
                                        pathname: "/editPedidos", state: { item: item }
                                    }}><FiEdit3 /></Link></td>
                                </tr>
                                
                            )
                    })}

                </tbody>
            </table>
        </div>


    )
}

export default List