function Table({ tabela,remove }) {


  console.log(tabela)

  return (
    <div>
      <table className='table table-dark'>
        <tbody>
          {tabela.length > 0 ? (
            tabela.map(function (item,indice) {
              return (
                <tr key={tabela.index}>
                  <td> {item.name} </td>
                  <td> Quant:  <input  type='number' value={item.quantidade} className='form-group col-md-2'></input> </td>
                  <td> Preço:<input type='number' value={item.preco} className='form-group col-md-2'></input></td>
                  <td> Total:</td>
                  <td> <button className = 'btn btn-danger' onClick={remove.bind(null,item,indice)}>X</button> </td>
                </tr>
             )})) : (     <div></div>
          ) 
            
          }
        </tbody>
      </table>
    </div>
  );
}
export default Table;
