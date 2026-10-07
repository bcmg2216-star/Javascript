function celsiusAF(celsius){
    return (celsius *9/5) + 32;
}

function fahrenheitAC(fahrenheit){
    return (fahrenheit - 32) * 5/9;
}

function kmAMillas(km){
    return km * 0.621374;
}

function millasAKm(millas){
    return millas / 0.621374;
}

function eurosADolares(euros, tasa = 1.01){
    return euros * tasa;
}

function dolaresAEuros(dolares, tasa = 1.01){
    return dolares / tasa;
}

function mostrar(valor, unidadO, unidadD, funcion, tasa){
    const resultado = funcion(valor, tasa);
    alert(`${valor} ${unidadO} equivalen a ${resultado.toFixed(2)} ${unidadD}`);
}

function pedirNumero(mensaje){
    let numero;
    while (true){
        const entrada = prompt(mensaje);
        if (entrada === null){
            return null;
        }
        numero = Number.parseFloat(entrada);
        if(Number.isFinite(numero)){
            break;
        }
        alert("Error. introduce una opcion");
    }
    return numero
}

let opcion;

do{
    opcion = prompt(`
        Elige una opción (1-7):
        1. Celsius a Fahrenheit
        2. Fahrenheit a Celsius
        3. Kilómetros a Millas
        4. Millas a Kilómetros
        5. Euros a Dólares
        6. Dólares a Euros
        7. Salir`);

    let valor;
    if (opcion >= "1" && opcion <= "6") {
        valor = pedirNumero("Introduce el valor a convertir:");
        if (valor === null) continue;
    }

    switch (opcion){
        case "1":
            mostrar(valor, "ºC", "ºF", celsiusAF);
            break;
        case "2":
            mostrar(valor, "ºF", "ºC", fahrenheitAC);
            break;
        case "3":
            mostrar(valor, "km", "millas", kmAMillas);
            break;
        case "4":
            mostrar(valor, "millas", "km", millasAKm);
            break;
        case "5":
            let tasaE = prompt("Tasa. deja en blanco para usar 1.01");
            let valorTE = tasaE === "" ? undefined : Number.parseFloat(tasaE);
            mostrar(valor, "€", "$", eurosADolares, valorTE);
            break;
        case "6":
            let tasaD = prompt("Tasa. deja en blanco para usar 1.01");
            let valorTD = tasaD === "" ? undefined : Number.parseFloat(tasaD);
            mostrar(valor, "$", "€", dolaresAEuros, valorTD);
            break;
        case "7":
            alert("Saliendo del programa...");
            break;
    }

}while (opcion !== "7" );