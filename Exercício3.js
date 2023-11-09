function preço(){

    var Val = document.getElementById('valor')
    var val = parseFloat(Val.value)

    var Val1 = document.getElementById('valor1')
    var val1 = parseFloat(Val1.value)

    var Val2 = document.getElementById('valor2')
    var val2 = parseFloat(Val2.value)

    var Quant = document.getElementById('quantidade')
    var quant = parseInt(Quant.value)

    var Quant1 = document.getElementById('quantidade1')
    var quant1 = parseInt(Quant1.value)

    var Quant2 = document.getElementById('quantidade2')
    var quant2 = parseInt(Quant2.value)

    var tot = val * quant
    var tot1 = val1 * quant1
    var tot2 = val2 * quant2
    var tottotal = tot + tot1 + tot2
    var resultado = document.getElementById('Resultado')
    resultado.innerHTML = `Seu resultado em reais da compra foi de: R$ ${tottotal}`




    
}