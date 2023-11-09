function funcao(){
    var val = document.getElementById('Esc');
    var num = parseInt(val.value);
    var divsoma = document.getElementById('soma');
    divsoma.innerHTML = "";
    var cont = 0;
    for(var i = 0; i < num; i++ ){
        divsoma.innerHTML += ` <p>Contando em dois em dois: ${cont}</p>`
        cont = cont + 2;
        }
    
}
