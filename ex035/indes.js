// ORDENAÇÃO DE ARRAY

// let frutas = ["maça", "uva", "laranja", "banana"];

// frutas.sort();
//ORDENA a ordem do array para ordem alfabética do A ao Z

// frutas.sort();
// frutas.reverse();
//ORDENA a ordem do array para ordem alfabética do Z ao A

// console.log(frutas);

let cars = [
    {
        marca: "fiat",
        ano: 2022,
    },
    {
        marca: "BMW",
        ano: 2018,
    },
    {
        marca: "Ferrari",
        ano: 2020,
    },
];

cars.sort((a, b) => {
    return b.ano - a.ano
});

console.log(cars)