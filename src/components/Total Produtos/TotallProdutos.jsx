function Total({tabela}) {

    function valorTotal (){
      const values = Object.values(tabela).reduce(function(acc,tabela){

            return (acc + (tabela.precoAtual * tabela.quantidade))
        },0)
       return values.toFixed(2)
        
    }
   
    
    

return(
    <>
    <h1 className='fixed-bottom'>Total: {valorTotal()}</h1>

    </>
)
}


export default Total