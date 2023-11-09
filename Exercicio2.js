function fah(){
    var num = document.getElementById('F');
    var divresult = document.getElementById('Fahnh');
    divresult.innerHTML = "";
    var val = parseInt(num.value);
    var fahn = (val *(9/5) ) +32;
    divresult.innerHTML +=`<p>Sua temperatura de Celsius para Fahrenheit é de: ${fahn}°F</p>`;

}

function cel(){
    var num = document.getElementById('C');
    var divresult = document.getElementById('Celsi');
    divresult.innerHTML = "";
    var val = parseInt(num.value);
    var Celsi = (val -32) * (5/9);
    celsi = Celsi.toFixed(2)
    divresult.innerHTML +=`<p>Sua temperatura de Celsius para Fahrenheit é de: ${celsi}°C</p>`;
    
    }

