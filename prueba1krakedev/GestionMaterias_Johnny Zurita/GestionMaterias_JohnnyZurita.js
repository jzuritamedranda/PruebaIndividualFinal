let materias = [];


crearMateria=function(){
    let nombreMateria = recuperarTexto('txtNombreMateria');
    let codigo = recuperarTexto('txtCodigo');
    let descripcion = recuperarTexto('txtDescripcion');
    let materia = [];
    materia.nombreMateria = nombreMateria;
    materia.codigo = codigo;
    materia.descripcion = descripcion;
    return materia;
}

agregarMateria=function(materia){
    let elementoMateria = crearMateria(materia);
    materias.push(elementoMateria);
    console.log("Codigo->"+elementoMateria.codigo);
    console.log("Nombre->"+elementoMateria.nombreMateria);
    console.log("Descripcion->"+elementoMateria.descripcion);
}

refrescarMaterias=function(){
    let cmpTabla=document.getElementById("tablaMaterias");

    let contenidoTabla="<table>"+"<tr><th>CODIGO</th><th>MATERIA</th><th>DESCRIPCION</th></tr>";
    let elementoMateria;
    for(let i=0;i<materias.length;i++){
        elementoMateria=materias[i];
        contenidoTabla+="<tr><td>"+elementoMateria.codigo+"</td><td>"+elementoMateria.nombreMateria+"</td><td>"+elementoMateria.descripcion+"</td></tr>";
    }
    
    contenidoTabla+="</table>";
    cmpTabla.innerHTML=contenidoTabla;
}

buscarMateria=function(identificador){
        let codigo = recuperarTexto(identificador);
        let elementoMateria;
        let materiaEncontrada =null;
        for(let i=0;i<materias.length;i++){
            elementoMateria=materias[i];
            if(elementoMateria.codigo==codigo){
                materiaEncontrada=elementoMateria;
                alert("Materia encontrada");
                break;
            }
        }
        if(materiaEncontrada==null){
            alert("Materia no encontrada");
        }
        return materiaEncontrada;
}