var vetores = []


function valorv(){
    
    var Vet = document.getElementById('vet')
    var vet = parseInt(Vet.value)
    vetores.push(vet)
    document.getElementById('vet').value =""
    document.getElementById('vet').focus()
    
    
   
   


}

function mostrar(){
    var max = Math.max(...vetores)
    var vetor = document.getElementById('vetor')
    vetor.innerHTML = ""
    var maior = document.getElementById('maior')
    maior.innerHTML = ""
    for( var i = 0; i < vetores.length; i++){
        vetor.innerHTML += vetores[i] + "_"
        maior.innerHTML = `Maior valor: ${max}`
    }
    

    document.getElementById('vet').focus()

}
