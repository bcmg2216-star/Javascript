function calcular(...numeros){
    if(numeros.length === 0){
        return null;
    }

    let suma = 0;
    let min = numeros[0];
    let max = numeros[0];

    for(let i = 0;i < numeros.length; i++){
        const num = numeros[i];

        if(!Number.isFinite(num)){
            return null;
        }

        suma += num
        if(num < min) min = num;
        if(num > max) max = num;
    }

    const media = suma / numeros.length;

    return { suma, media, min, max };
}

function mostrar(resultado){
    console.log("Calculos");
    if(resultado === null){
        console.log("Error. Datos vacios o invalidos");
        return;
    }

    console.log(`Suma: ${resultado.suma}`);
    console.log(`Media: ${resultado.media.toFixed(2)}`);
    console.log(`Minimo: ${resultado.min}`);
    console.log(`Maximo: ${resultado.max}`);
}

mostrar(calcular(10,20,30,40), "Argumentos directos");

mostrar(calcular(), "Array vacio");

mostrar(calcular(42), "Un solo numero");

const array1 = [5, 5, -10, -5];
mostrar(calcular(...array1), "Valores repetidos y negativos(Spread)");

const array2 = [10, 20, "hola", 30];
mostrar(calcular(...array2), "Array con error");

/*
* Explicacion de Rest y Spread.
* Rest: Sirve para empaquetar. Cuando el usuario manda numeros sueltos separados por comas,
* JavaScript los coge todos y los agrupa automaticamente dentro de un unico array
* para que podamos recorrerlos con el bucle for.
*
* Spread: Sirve para desempaquetar y hace lo contrario. Si tenemos los numeros metidos en un array,
* Spread abre ese array y esparce los numeros uno a uno al darselos a la funcion.
* */
