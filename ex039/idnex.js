function clicou() {
    const teste = document.querySelector('#teste')
    const ul = teste.querySelector('ul')

    ul.children[0].innerHTML = 'ITEM <strong>ALTERADO</strong>'

    ul.outerHTML = '<strong>ALTER </strong>'
}