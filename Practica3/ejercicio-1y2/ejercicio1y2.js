// pedimos los dos numeros
let num1 = prompt("Escribe un numero");
let num2 = prompt("Escribe otro numero");

// comprobamos
if(Number.isFinite(num1) && Number.isFinite(num2) && num1 !== 0 && num2 !== 0) {
    if (num1 === num2) {
        alert("Los números son iguales");
    } else if (num1 > num2) {
        alert("El primer numero es mayor que el segundo");
    } else {
        alert("El segundo numero es mayor que el primero");
    }
}else {
    alert("Error, los numeros no son validos o son cero")
}

