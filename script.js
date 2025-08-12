function verificarSigno() {
    var dataInput = document.getElementById('data_nasc').value;
    var resultado = document.querySelector('div#res')
    if (dataInput === "") {
        alert('[ERRO] Por favor digite uma data de nascimento')
        return;
    } else {
        var dataNascimento = new Date(dataInput);
        var dia = dataNascimento.getDate()+1
        var mes = dataNascimento.getMonth()+1
        var img = document.createElement('img')
        var signo = ''
        img.setAttribute('src', 'foto')
        if (dia >= 21 && mes == 3 || dia <= 19 && mes == 4) {
            img.setAttribute('src', 'img/aries.png')
            signo = 'Aries'
        } else if (dia > 20 && mes == 4 || dia < 20 && mes == 5) {
            signo = 'Touro'
            img.setAttribute('src', 'img/touro.png')
        } else if (dia > 21 && mes == 5 || dia < 20 && mes == 6) {
            signo = 'Gêmeos'
            img.setAttribute('src', 'img/gemeos.png')
        } else if (dia > 21 && mes == 6 || dia < 22 && mes == 7) {
            signo = 'Cãncer'
            img.setAttribute('src', 'img/cancer.png')
        } else if (dia > 23 && mes == 7 || dia < 22 && mes == 8) {
            signo = 'Leão'
            img.setAttribute('src', 'img/leao.png')
        } else if (dia > 23 && mes == 8 || dia < 22 && mes == 9) {
            signo = 'Virgem'
            img.setAttribute('src', 'img/virgem.png')
        } else if (dia > 23 && mes == 9 || dia < 22 && mes == 10) {
            signo = 'Libra'
            img.setAttribute('src', 'img/libra.png')
        } else if (dia > 23 && mes == 10 || dia < 21 && mes == 11) {
            signo = 'Escorpião'
            img.setAttribute('src', 'img/escorpiao.png')
        } else if (dia > 22 && mes == 11 || dia < 21 && mes == 12) {
            signo = 'Sagitário'
            img.setAttribute('src', 'img/sagitario.png')
        } else if (dia > 22 && mes == 12 || dia < 19 && mes == 1) {
            signo = 'Capricórnio'
            img.setAttribute('src', 'img/capricornio.png')
        } else if (dia > 20 && mes == 1 || dia < 18 && mes == 2) {
            signo = 'Aquario'
            img.setAttribute('src', 'img/aquario.png')
        } else if (dia > 19 && mes == 2 || dia < 20 && mes == 3) {
            signo = 'Peixes'
            img.setAttribute('src', 'img/peixes.png')
        }
        resultado.style.textAlign = 'center'
        resultado.innerHTML = (`Seu signo é ${signo}`)
        resultado.appendChild(img)
    }
}