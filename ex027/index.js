// OQUE SÃO OBJETOS
let nome = 'Bruno' //VAR

let nomes = [ 'Bruno ', 'Pedro'] //ARRAY

let personagem = { //OBJETO
    nome: 'Bruno',
    idade: 17,
    pais: 'Brasil',
    poderes: [ 'fogo', 'agua', 'trevas' , 'gelo'],
    caracteristicas: {
        forca: 20,
        magia: 40,
        stamina: 60
    }
}

console.log(`${personagem.nome} tem ${personagem.idade} e mora no ${personagem.pais}`)

console.log(`As caracteristicas do seu personagem são:`)

console.log(`Forca: ${personagem.caracteristicas.forca}`)

console.log(`Magia: ${personagem.caracteristicas.magia}`)

console.log(`Stamina: ${personagem.caracteristicas.stamina}`)

console.log(`Poderes do seu personagem: ${personagem.poderes} `)
//CONSEGUE acessar a propriedade com o '.' e a propriedade como no exemplo acima usei '.pais'