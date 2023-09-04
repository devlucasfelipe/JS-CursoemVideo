function carregar() {
    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = 'Agora são '+hora+' horas.'
    if (hora >= 0 && hora <12) {
        // BOM DIA!
        img.src = "fotomanha.jpg"
        document.body.style.background = "#C6BDBE"
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE!
        img.src = "fototarde.jpg"
        document.body.style.background = "#EE9246"
    } else {
        // BOA NOITE!
        img.src = "fotonoite.jpg"
        document.body.style.background = "#392F48"
    }   
}