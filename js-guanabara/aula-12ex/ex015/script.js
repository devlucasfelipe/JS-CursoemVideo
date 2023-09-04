function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector("div#res")
    if (fAno.value.lenght == 0 || fAno.value > ano) {
        alert("[ERRO] Verifique os dados e tente novamente!")
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ""
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            genero = "Homem"
            if(idade >=0 && idade < 10) {
                //Crianca
                img.setAttribute('src', 'bebehomem.jpg')
            } else if (idade < 21) {
                //Jovem 
                img.setAttribute('src', 'jovemhomem.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'adultohomem.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'idosohomem.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if(idade >=0 && idade < 10) {
                //Crianca
                img.setAttribute('src', 'bebemulher.jpg')
            } else if (idade < 21) {
                //Jovem 
                img.setAttribute('src', 'jovemmulher.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'adultomulher.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'idosomulher.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = 'Detectamos '+genero+' com '+idade+" anos."
        res.appendChild(img)
    }
}





