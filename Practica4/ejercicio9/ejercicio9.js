function generarSecreto(){
    return Math.floor(Math.random() * 100 + 1);
}

function validarIntento(entrada){
    if(entrada === null) {
        return null;
    }

    if(entrada === ""){
        return "error";
    }

    let numero = Number.parseInt(entrada);

    if(!Number.isFinite(numero) || numero < 1 || numero > 100){
        return "invalido";
    }

    return numero;
}

function comparar(intento, secreto){
    if(intento === secreto){
        return "acierto";
    }else if (intento < secreto){
        return "mayor"
    } else{
        return "menor"
    }
}

function obtenerIntentos(dificulta){
    switch (dificulta){
        case "1":
            return 10;

        case "2":
            return 7;

        case "3":
            return 5;

        default:
            return 0;
    }
}

function jugarRonda(intentosMaximos) {
    let secreto = generarSecreto();
    let intentosGastados = 0;
    let puntosRonda = 0;

    while (intentosGastados < intentosMaximos) {
        let entrada = prompt(`Adivina (1-100). Llevas ${intentosGastados} de ${intentosMaximos} intentos.\nPulsa Cancelar para salir.`);

        let numero = validarIntento(entrada);

        if (numero === null) {
            alert("Has abandonado la ronda");
            return 0;
        }

        intentosGastados++;

        if (numero === "error") {
            alert("Dato invalo. pierdes un intento y 5 puntos.");
            puntosRonda -= 5;
            continue;
        }

        let resultado = comparar(numero, secreto);

        if (resultado === "acierto") {
            puntosRonda += 50;
            alert(`Correcto. El numero era ${secreto}`);
            return puntosRonda;
        } else if (resultado === "mayor") {
            alert("Fallo el secreto es mayor");
            puntosRonda -= 5;
        } else if (resultado === "menor") {
            alert("Fallo el secreto es menor");
            puntosRonda -= 5;
        }
    }
    alert(`Has agotado los ${intentosMaximos} inetntos. El secreto era ${secreto}`);
    return puntosRonda;
}

function iniciarJuego(dificultad = undefined){
    let puntuacionTotal = 0;
    let opcion = dificultad;
    do{
        if(opcion === undefined){
            opcion = prompt(`JUEGO DE ADIVINAR
            Puntuacion Total: ${puntuacionTotal}
            1. Facil (10 intentos)
            2. Medio (7 intentos)
            3. Dificil (5 intentos)
            4. Salir
            
            Elige nivel:`);
        }

        if(opcion === "4" || opcion === null){
            alert(`Saliendo del juego. Puntuacion final: ${puntuacionTotal}`);
            break;
        }

        let intentos = obtenerIntentos(opcion);

        if(intentos > 0){
            let puntosConseguidos = jugarRonda(intentos);
            puntuacionTotal += puntosConseguidos;

            alert(`Puntos obtenidos en esta ronda: ${puntosConseguidos}. Puntuacion total: ${puntuacionTotal}`);

        }else{
            alert("Opcion no valida. Escrito 1, 2, 3 o 4");
        }
        opcion = undefined;
    }while (true);
}

iniciarJuego();















