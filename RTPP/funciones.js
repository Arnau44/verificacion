function disable() {
    confirm ("Una vez guardado, no podras modificarlo en un dia")
}
function habilitar() {
    document.getElementById("horaDeEntrada").disabled = false;

    document.getElementById("horaDeMargen").disabled = false;
}

function disable(){
    var doc;
    var doc2;
    var result = confirm("¿Estas seguro?");
    if (result == true){
        doc = document.getElementById("horaDeEntrada").disabled = true;
        document.getElementById("horaDeMargen").disabled = true;
    }
}
