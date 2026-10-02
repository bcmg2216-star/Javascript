/*
f. Comprueba que la edad y la nota sean números válidos, que la nota esté entre 0 y 10
y que no se intente dividir entre cero.**/

// pedir al usuario
let edad = Number.parseInt(prompt("¿Que edad tienes?"));
const nota = Number.parseFloat(prompt("¿Cual es tu nota media del expediente (con tres decimales)?"));

if(Number.isFinite(edad) && Number.isFinite(nota) && nota >= 0 && nota<=10 && nota !== 0){
    // nota con dos decimales
    console.log("Nota con dos decimales: ", nota.toFixed(2));

    // suma, resta, multiplicación y division
    console.log("Suma: ", edad + nota);
    console.log("Resta: ", edad-nota);
    console.log("Multiplicacion: ", edad*nota);
    console.log("Division: ", edad/nota);

    // resultado de la división a string
    console.log("Division en String: ", String(edad/nota));

    // variable booleana
    const boo = true;

    // usa typeof
    console.log("Tipo de variables utilizadas: edad:", typeof edad, ", nota media:", typeof nota, "y variable booleana:", typeof boo);
}else {
    console.log("Datos no validos, nota fuera de rango o intento de dividir entre 0")
}







