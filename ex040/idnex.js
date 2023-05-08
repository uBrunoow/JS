function clicou() {
    const teste = document.querySelector("#teste");
    const ul = teste.querySelector("ul");

    let newli = document.createElement('li')

    newli.innerText = 'item adicionado'
    ul.prepend(newli)
}
