
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
            {name: 'Detran', 
                preco: [{quantidade: [0,3.00]}], precoAtual: null},
            {name: 'Detran com multa', 
                preco: [{quantidade: [0,4.00]}], precoAtual: null},
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
            {name: 'ARTE', subproduto: [
                {name: 'Arte R$ 2,00', 
                    preco: [{quantidade: [0,2.00]}], precoAtual: null},
                {name: 'Arte R$ 5,00', 
                    preco: [{quantidade: [0,5.00]}], precoAtual: null},
                {name: 'Arte R$ 10,00', 
                    preco: [{quantidade: [0,10.00]}], precoAtual: null},
             ] },
            {name: 'CARTÃO DE VISITA', subproduto: [
                {name: '100 frente', 
                preco: [{quantidade: [0,15.00]}], precoAtual: null},
                {name: '100 frente e verso', 
                preco: [{quantidade: [0,25.00]}], precoAtual: null},
                {name: '200 frente', 
                preco: [{quantidade: [0,25.00]}], precoAtual: null},
                {name: '200 frente e verso', 
                preco: [{quantidade: [0,40.00]}], precoAtual: null},
                {name: '500 frente', 
                preco: [{quantidade: [0,50.00]}], precoAtual: null},
                {name: '500 frente e verso', 
                preco: [{quantidade: [0,75.00]}], precoAtual: null},
                {name: '1000 frente', 
                preco: [{quantidade: [0,70.00]}], precoAtual: null},
                {name: '1000 frente e verso', 
                preco: [{quantidade: [0,90.00]}], precoAtual: null},
            ]},

                {name: 'CHAVEIRO 3X4', subproduto: [
                    {name: 'Chaveiro 3x4 Acrilico', 
                        preco: [{quantidade: [0,1.00]},{quantidade: [30,0.80]} ], precoAtual: null},
                    
                    ]}
        ]


export default produtos