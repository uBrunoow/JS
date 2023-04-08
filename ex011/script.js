function verificar() {
    var txtvel = document.getElementById('vel')
    var res = document.getElementById('res')
    var vel = Number(txtvel.value)

    if (vel > 60) {
        res.innerHTML = `A sua velocidade foi de ${vel} e vocÊ foi <strong> MULTADO! </strong>`
    }else {
        res.innerHTML = `A sua velocidade foi de ${vel} e está tudo <strong> CERTO </strong> !`
    }
}