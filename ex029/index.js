// Função dentro de objeto

let pessoa = {
    nome: 'Bruno',
    sobrenome: 'Werner',
    idade: 17,
    // nomeCompleto: function() {
    //     return `${this.nome} ${this.sobrenome}`
    // }
    nomeCompleto: () => {
        return `Bla bla bla`
    }

}

// THIS se refere ao proprio objeto
console.log(pessoa.nomeCompleto())

// Para executar a funcção é OBRIGATÓRIO ter o '()' após a função que no caso seria 'nomeCompleto'.

// ARROW FUNCTION não pode ter a propridedade 'this', apenas usando uma funçõa normal.