function quilometro(){
    var divKm = document.getElementById('Km');
    var Val = document.getElementById('val')
    var val = parseInt(Val.value)
    divKm.innerHTML = ""
    var litro = val/8 ;
    
    divKm.innerHTML = `<p> O gasto do veículo está em ${val}/${litro} (Quilômetro/Litro).</p>`
    
}