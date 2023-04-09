// switch () {
//     case valor1: 

//     break

//     case valor2: 

//     break

//     case valor3: 

//     break

//     default:

//     break
// }

var agora = new Date()
var diasem = agora.getDay()

switch (diasem) {
    case 1: 
        console.log('Domingo')
        break

    case 2: 
        console.log('Segunda')
        break

    case 3: 
        console.log('Terça')
        break

    case 4: 
        console.log('Quarta')
        break

    case 5: 
        console.log('Quinta')
        break

    case 6: 
        console.log('Sexta')
        break
    
    case 7:
        console.log ('Sábado')
        break

    default: 
        console.log('dIA INvalido')
        break
}