function clicou() {
    const teste = document.querySelector("#teste");
    const ul = teste.querySelector("ul");

    // const NewButton = document.createElement('Button')
    // NewButton.innerHTML = 'Botao'

    // ul.after(NewButton)
    // ul.before('Outro texto')

    let newUl = document.createElement("ul");

    for (let i = 0; i < 5; i++) {
        let newLi = document.createElement("li");
        newLi.innerHTML = "Item add" + 1;
        newUl.append(newLi)
    }

    ul.after(newUl)
}
