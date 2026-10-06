
// funcion de validacion
function notaValida(nota){
    return Number.isFinite(nota) && nota >= 0 && nota <= 10;
}

// funcion para clasificar la nota
function clasificar(nota){
    if(nota<5){
        return "Suspenso";
    }else if(nota<7){
        return "Aprobado";
    }else if (nota<9){
        return "Notable";
    }else {
        return "Sobresaliente";
    }
}

// funcion para la media
function CMedia(sumaTotal, cantidadNotas){
    if(cantidadNotas===0){
        return 0;
    }
    return sumaTotal /cantidadNotas;
}

// variables
let sumaTotal = 0;
let cantidadNotas = 0;
let notaMaxima = -1;
let notaMinima = 11;
let nota;

do{
    const entrada = prompt("Introduce una nota del 0 al 10 (-1 para termianar):");
    nota = Number.parseFloat(entrada);

    if(nota !== -1){
        if(notaValida(nota)){
            sumaTotal += nota;
            cantidadNotas++;

            notaMaxima = Math.max(notaMaxima, nota);
            notaMinima = Math.min(notaMinima, nota);

            alert(`Clasificacion: ${clasificar(nota)}`);
        }else {
            alert("Error. introduce un numero entre o y 10");
        }
    }
}while (nota !==- 1);


// final
if (cantidadNotas === 0){
    console.log("No se ha introducido ninguna nota valida");
}else{
    const media = CMedia(sumaTotal,cantidadNotas);
    alert(`Notas validas: ${cantidadNotas}`);
    alert(`Nota media: ${media.toFixed(2)}`);
    alert(`Nota maxima: ${notaMaxima}`);
    alert(`Nota minima: ${notaMinima}`);
}









