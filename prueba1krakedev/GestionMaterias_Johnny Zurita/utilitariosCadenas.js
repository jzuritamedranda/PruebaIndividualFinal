esMayuscula=function(caracter){
    let resultado;
    var charCode = caracter.charCodeAt();
    if (charCode >= 65 && charCode <= 90) {
        resultado=true;
    }else{
        resultado=false;
    }
    return resultado;
}


esDigito=function(caracter){
    let resultado;
    var charCode = caracter.charCodeAt();
    if (charCode >= 48 && charCode <= 57) {
        resultado=true;
    }else{
        resultado=false;
    }
    return resultado;
}

esGuion=function(caracter){
    let resultado;
    var charCode = caracter.charCodeAt();
    if (charCode==95) {
        resultado=true;
    }
    if (charCode==45){
        resultado=true;
    }else{
        resultado=false;
    }
    return resultado;
}

mostrarImagen = function (idComponente, rutaImagen) {
    let componente;
    componente = document.getElementById(idComponente);
    componente.src = rutaImagen;
}
mostrarTexto = function (idComponente, mensaje) {
    let componente;
    componente = document.getElementById(idComponente);
    componente.innerText = mensaje;
}
mostrarTextoEnCaja = function (idComponente, mensaje) {
    let componente;
    componente = document.getElementById(idComponente);
    componente.value = mensaje;
}

recuperarTexto = function (idComponente) {
    let componente;
    let valorIngresado;
    componente = document.getElementById(idComponente);
    valorIngresado = componente.value;
    return valorIngresado;
}

recuperarInt = function (idComponente) {
    let valorCaja = recuperarTexto(idComponente);
    let valorEntero = parseInt(valorCaja);
    return valorEntero;
}

recuperarFloat = function (idComponente) {
    let valorCaja = recuperarTexto(idComponente);
    let valorFlotante = parseFloat(valorCaja);
    return valorFlotante;
}


