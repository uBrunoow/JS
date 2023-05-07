// LOOP EM ARRAYS
let colors = [
    {
        nome: 'preto',
        qtd: 10,
    },
    {
        nome: 'azul',
        qtd: 5,
    },
    {
        nome:'branco',
        qtd: 15,
    }
];


for (let n = 0; n < colors.length; n++) {
    console.log(colors[n].qtd);
}

//FORMA MAIS SIMPLIFICADA DE USAR O FOR EM ARRAYS:

for ( let i in colors) {
    console.log(colors[i].nome)
}

// Outra forma de usar for:

for(let color of colors) {
    console.log(`Nome: ${color.nome} - ${color.qtd}`)
}

// Para deixar o nome das cores em maiusculas

for (let i in colors) {
    colors[i].nome = colors[i].nome.toUpperCase()
}

console.log(colors)