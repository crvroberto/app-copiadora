import moment from 'moment'


function List ({vendas}) {

   

    return(
        <div>
            <table className="table table-dark table-hover">
                <tbody>
                    <tr> <td>Data:</td> <td>Hora:</td> <td>Itens Vendidos:</td><td>Quantidade:</td> 
                    <td>Desconto:</td> <td>Total:</td><td>Funcionário:</td></tr>                    
                    {vendas.map((item,indice)=>{
                            console.log(item,'1')
                     
                            return(
                                
                                <tr key={indice}>
                                    <td>{moment().format(item.data) }</td>
                                    <td>hora</td>
                                    <td>{item.objetos[0].name}</td> 
                                    <td>{item.objetos[0].quantidade}</td>
                                    <td>desconto</td>
                                    <td>Total</td>
                                    <td>funcionário</td>
                                </tr>
                                
                            )
                            
                    })}



                </tbody>


            </table>



        </div>


    )
}

export default List