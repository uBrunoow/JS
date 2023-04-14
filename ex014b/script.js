function verificar() {
    var date = new Date()
    var ano = date.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value >ano){

    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade < 10){
                img.setAttribute('src','bebeh.jpg')
            }else if (idade < 21){
                img.setAttribute('src','jobemh.jpg')

            }else if (idade < 50){
                img.setAttribute('src','adultoh.jpg')

            }else{
                img.setAttribute('src','idoso.jpg')
            }
        }else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade < 10){
                img.setAttribute('src','bebef.jpg')
            }else if (idade < 21){
                img.setAttribute('src','jovemf.jpg')

            }else if (idade < 50){
                img.setAttribute('src','adultof.jpg')

            }else{
                img.setAttribute('src','idosa.jpg')
            }
        }
        res.style.textAlign='center'
        res.innerHTML = `Detectamos um(a) ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}
