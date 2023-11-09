function mulher(){
    var Val = document.getElementById('valor')
    var val = parseFloat(Val.value)
    var altura = document.getElementById('altura')
    altura.innerHTML = ""
    var pesoidealm = document.getElementById('pesoidealm')
    pesoidealm.innerHTML = ""
    var Mulher = (62.1* val) - 44.7
    var mulher = Mulher.toFixed(2)
    altura.innerHTML = ` <p> Sua altura é de ${val} metros</p>`
    pesoidealm.innerHTML =  `<p> O peso ideal: ${mulher}</p>`

}

function homem(){
    var Val = document.getElementById('valor')
    var val = parseFloat(Val.value)
    var altura = document.getElementById('altura')
    altura.innerHTML = ""
    var pesoidealh = document.getElementById('pesoidealh')
    pesoidealh.innerHTML = ""
    var Homem = (72.7* val) - 58
    var homem = Homem.toFixed(2)
    altura.innerHTML = ` <p> Sua altura é de ${val} metros</p>`
    pesoidealh.innerHTML =  `<p>Peso ideal: ${homem}</p>`

}