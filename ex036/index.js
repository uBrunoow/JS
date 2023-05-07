let frutas = ["maça", "uva", "laranja", "banana"];

let bigfrutas = frutas.filter((item) => {
    return item.length > 4
});

// FILTRAR ARRAY = FILTER() 

let lowerfrutas = frutas.every( (value) => {
    return value.length > 3
})

if(lowerfrutas) {
    console.log('todos sao maior que 3')
}else {
    console.log('Nao sao todos maior que 3')
}

// Filtrar todos = every() todos satisfazem a função

let s = frutas.some ( (value) => {
    return value.length > 3
})

if (s) {
    console.log('Alguns sao maior que 3')
}else{
    console.log('Nenhum é maior que 3')
}

// Filtrar alguns = some() alguns satisfazem a função

if (frutas.includes('uva')) {
    console.log('Tem uva')

}else {
    console.log ('nAO TEM uva')
}

console.log(bigfrutas)
console.log(lowerfrutas)