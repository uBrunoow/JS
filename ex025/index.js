// Operações básicas de array

let ingredientes = [
    "agua", 
    "farinha", 
    "ovo", 
    "corante", 
    "sal"
];

// COMO ADICIONAR UM ITEM DENTRO DE UM ARRAY? :
ingredientes[5] = 'cebola';

// OUTRA FORMA DE ADICIONAR ITENS:

ingredientes.push('açucar');

//A FUNÇÃO POP() REMOVE O ÚLTIMO ITERM DO ARRAY

ingredientes.pop()

// A FUNÇÃO SHIFT() REMOVE O PRIMEIRO ITEM DO ARRAY

ingredientes.shift()

console.log(`Total de ingredientes: ${ingredientes.length}`)

// LENGTH sempre retorna um número, no exemplo acima retorna a quantidade de números dentro do array 'ingredientes'


