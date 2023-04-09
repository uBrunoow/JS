var agora = new Date()
var diasem = agora.getHours()
var res = document.getElementById('res')


if (diasem <= 12) {
    res.innerHTML = `Agora são ${diasem} horas.`
    body.style.background = '#aac72b9f'
}
