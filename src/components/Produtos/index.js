
    const produtos =  [
        {name: 'IMPRESSÃO', subproduto: [
            {name: 'Preto *F', 
                preco: [{quantidade: [0,0.25]},{quantidade: [20,0.20]},{quantidade: [40,0.15]},{quantidade: [50,0.10]}], precoAtual: null},
            {name: 'Colorido *F',  
                preco: [{quantidade: [0,0.50]},{quantidade: [10,0.30]},{quantidade: [50,0.20]},], precoAtual: null},
        ]},            
        {name: 'BOLETO', subproduto: [
            {name: 'Fatura', 
                preco: [{quantidade: [0,2.00]}], precoAtual: null},
         ] },
        {name: 'PLASTIFICAÇÃO', subproduto: [
            {name: 'RG', 
            preco: [{quantidade: [0,2.00]}], precoAtual: null},
            {name: 'A4', 
                preco: [{quantidade: [0,3.00]}], precoAtual: null} ] },
        {name: 'ENCADERNAÇÃO', subproduto: [
            {name: 'até 25 FL.', 
                preco: [{quantidade: [0,2.00]}], precoAtual: null},
                {name: 'até 50 FL.', 
                preco: [{quantidade: [0,3.00]}], precoAtual: null},
                {name: 'até 100 FL.', 
                preco: [{quantidade: [0,4.00]}], precoAtual: null},
                {name: 'até 200 FL.', 
                preco: [{quantidade: [0,5.00]}], precoAtual: null},
                {name: 'até 300 FL.', 
                preco: [{quantidade: [0,6.00]}], precoAtual: null},
                {name: 'até 400 FL.', 
                preco: [{quantidade: [0,7.00]}], precoAtual: null},
                
            ] },

  ]


export default produtos