function Table({ tabela }) {
  
console.log(tabela)



  return (
    <div>
      <table className='table table-dark'>
        <tbody>
          {tabela.name ? (
            <div>sem tabela</div>
          ) : (
            tabela.map(function (item) {
              return (
                <tr key={tabela.index}>
                  <td> {item.name} </td>
                  <td> {item.preco} </td>
                  <td> {item.quantidade} </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}
export default Table;
