// ARROW FUNCTIONS

// Maneiras de usar arrow functions
//1)

/* const sobrenome = sob => 'Bruno ' + sob; */
//2)

/* const sobrenome = (sob) => 'Bruno ' + sob; */
//3)

/* const sobrenome = (sob) => {
    return 'Bruno ' + sob;
} */

//4)
const sobrenome = (sob) => {
    let Nomecompleto = 'Bruno ' + sob;
    return Nomecompleto
}
console.log(sobrenome('Werner'))
