function carregar() {
    var msg = document.getElementById('msg')
    var imagem = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        imagem.src = 'bom-dia.jpeg'
        document.body.style.background = 'rgba(255, 255, 0, 0.432)'
    }else if (hora >=12 && hora <= 18){
        imagem.src = 'boa-tarde.jpg'
        document.body.style.background = 'orange'
    }else {
        imagem.src = 'boa-noite.jpg'
        document.body.style.background = 'gray'
    }
}

