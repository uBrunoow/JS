// FUNÇÕES DENTRO DE FUNÇÕES

function addSquare(a, b) {
    /* function square(x) {
         return x * x;
     } USANDO FUNCTION*/
    //USANDO ARROW FUNCTION
    const square = (x) => {
        return x * x;
    };
    
    let sqrA = square(a);
    let sqrB = square(b);
    return sqrA + sqrB;
}

console.log(addSquare(3, 3));
