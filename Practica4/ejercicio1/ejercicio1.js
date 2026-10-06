// funcion para convertir
function convertir(euros, valorDolar = 1.01){
    return euros / valorDolar;
}

// pedimos al usuario
const euros = Number(prompt("Introduce la cantidad en euros a convertir: "));

// comprobamos que no sea negativo y q sea finito
if(Number.isFinite(euros) && euros>=0){
    //usamos el valor por defecto
    const dolaresDefecto = convertir(euros);
    alert(`Con la tasa por defecto: ${euros} € son ${dolaresDefecto.toFixed(2)} $`);

    // precio distinto
    const dolaresN = convertir(euros, 0.9);
    alert(`Con la nueva tasa de 0.9: ${euros} € son ${dolaresN.toFixed(2)} $`);
}else{
    alert("Cantidad invalida");
}