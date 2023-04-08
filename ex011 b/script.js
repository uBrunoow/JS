function verificar() {
    var pais = document.getElementById('pais')
    var res = document.getElementById('res')


    if (pais === 'Brasil') {
        res.innerHTML = `Você mora em ${pais} então você é BRASILEIRO!`
    }else {
        res.innerHTML = `Você não mora ${pais} então você É ESTRANGEIRO!`
    }
}