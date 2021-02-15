
function List ({vendas}) {

   

    return(
        <div>
            <table className="table table-dark table-hover">
                <tbody>
                    <tr><td>Data:</td> <td>Hora:</td> <td>Itens Vendidos:</td><td>Quantidade:</td> 
                    <td>Desconto:</td> <td>Total:</td><td>Funcionário:</td></tr>                    
                    {vendas.map((item,indice)=>{
                            const values = Object.values(item).reduce(function(acc,tabela){

                                return (acc + (tabela.precoAtual * tabela.quantidade))
                            },0)
                        
                            return(                                
                                <tr key={indice}>
                                    <td>{item.data}</td>
                                    <td>hora</td>
                                    <td>{item.objetos[0].name}</td> 
                                    <td>{item.objetos[0].quantidade}</td>
                                    <td>desconto</td>
                                    <td>{values}</td>
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