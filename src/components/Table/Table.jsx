import Modal from '../../components/Modal/Modal'

function Table({ tabela, remove, setTabela }) {

  console.log(tabela)

  


  return (
    <div>
      <table className='table table-dark'>
        <tbody>
          {tabela.length > 0 ? (
            tabela.map(function (item, indice) {

              if(tabela[indice].precoAtual === null){
             
                const returnpreco = item.preco.filter((params) => params.quantidade[0] <= item.quantidade)
                const preco = returnpreco[returnpreco.length - 1]
                tabela[indice].precoAtual = preco.quantidade[1]
                setTabela([...tabela])
                return tabela[indice].precoAtual
          
              }
              function alteraPreco(valor) {
                tabela[indice].precoAtual =parseFloat(valor)
                 setTabela([...tabela])
               
              }
              

              return (
                <tr key={tabela.index}>
                  <td> {item.name} </td>
                  <td> Quant: {item.quantidade}</td>
                  <td><Modal item={item} alteraPreco={alteraPreco}></Modal></td>
                  <td> Total: {(item.precoAtual * item.quantidade).toFixed(2) }</td>
                  <td> <button className='btn btn-danger' onClick={remove.bind(null, item, indice)}>X</button> </td>
                </tr>
              )
            })) : (<div></div>
            )

          }
        </tbody>
      </table>
    </div>
  );
}
export default Table;
