let profesores = [];


crearProfesor=function(){
    let nombre = recuperarTexto('txtNombre');
    let edad = recuperarTexto('txtEdad');
    let email = recuperarTexto('txtEmail');
    let profesor = [];
    profesor.nombre = nombre;
    profesor.edad = edad;
    profesor.email = email;
    return profesor;
}

agregarProfesor=function(profesor){
    let elementoProfesor = crearProfesor(profesor);
    profesores.push(elementoProfesor);
    console.log("Nombre->"+elementoProfesor.nombre);
    console.log("Edad->"+elementoProfesor.edad);
    console.log("Email->"+elementoProfesor.email);
}

refrescarProfesor=function(){
    let cmpTabla=document.getElementById("tablaProfesores");

    let contenidoTabla="<table>"+"<tr><th>NOMBRE</th><th>EDAD</th><th>EMAIL</th></tr>";
    let elementoProfesor;
    for(let i=0;i<profesores.length;i++){
        elementoProfesor=profesores[i];
        contenidoTabla+="<tr><td>"+elementoProfesor.nombre+"</td><td>"+elementoProfesor.edad+"</td><td>"+elementoProfesor.email+"</td></tr>";
    }
    
    contenidoTabla+="</table>";
    cmpTabla.innerHTML=contenidoTabla;
}

buscarProfesor=function(identificador){
    let nombre = recuperarTexto(identificador);
    let elementoProfesor;
    let profesorEncontrado =null;
    for(let i=0;i<profesores.length;i++){
        elementoProfesor=profesores[i];
        if(elementoProfesor.nombre==nombre){
            profesorEncontrado=elementoProfesor;
            alert("Profesor encontrado");
            break;
        }
    }
    if(profesorEncontrado==null){
        alert("Profesor no encontrado");
    }
    return profesorEncontrado;
}