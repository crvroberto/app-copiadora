
    const produtos =  [
        {name: 'IMPRESSÃO', subproduto: [
            {id: 'preto01',name: 'Preto *F', preco: [{quantidade: [0,0.25]},{quantidade: [20,0.20]},{quantidade: [40,0.15]},{quantidade: [50,0.10]}], precoAtual: null},
            {id: 'colorido01' , name: 'Colorido *F',  
                preco: [{quantidade: [0,0.50]},{quantidade: [10,0.30]},{quantidade: [50,0.20]},], precoAtual: null},
        ]},            
        {name: 'BOLETO', subproduto: [
            {name: 'Fatura', preco: {0: 0.50, 20: 0.20, 40:0.15, 50: 0.10}},
            {name: 'Outros', preco: {0: 0.50, 20: 0.20, 40:0.15, 50: 0.10}}, ] },
        {name: 'PLASTIFICAÇÃO', subproduto: [
            {name: 'RG', preco: {0: 0.50, 20: 0.20, 40:0.15, 50: 0.10}},
            {name: 'A4', preco: {0: 0.50, 20: 0.20, 40:0.15, 50: 0.10}}, ] },
        {name: 'ENCADERNAÇÃO', subproduto: [
            {name: 'até 25 FL.', preco: {0: 0.50, 20: 0.20, 40:0.15, 50: 0.10}},
            {name: 'até 50 FL.' , preco: {0: 0.50, 20: 0.20, 40:0.15, 50: 0.10}}, ] },

  ]


export default produtos