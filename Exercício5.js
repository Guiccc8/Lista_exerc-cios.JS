function m(){
    var M2 = document.getElementById('M')
    var m2 = parseFloat(M2.value)
    var val = document.getElementById('valor')
    val.innerHTML = ""
    var reais = m2 * 36.00
    val.innerHTML = `<p> O valor total por metros quarados é de R$${reais}.</p>`

}