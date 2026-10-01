
// variables
const nombre = "Beatriz";
const apellidos = "Cobo Garcia";

// concatenacion
const nombreC = nombre + " " + apellidos;
console.log("Nombre completo: ", nombreC);

// longitud de la cadena
console.log("Longitud: ", nombreC.length);

// extrae los caracteres de las posisiones 7 a 10
const extarccion = nombreC.substring(7, 10);
console.log("Caracteres del 7 al 10", extarccion);

// reemplaza el segundo apellido
const apellidoN = nombreC.replace("Cobo", "Garcia");
console.log(apellidoN);

// en mayusculas
console.log(nombreC.toUpperCase());

// ultimo caracter
console.log(nombreC.slice(-1));

// cadena a array
const array = (nombreC.split(" "));
console.log("Array: " + array);

// posicion del apellido
console.log("posicion del apellido", nombreC.indexOf("Cobo"));

// template
console.log(`Bienvenido/a ${nombreC}`);

// iniciales en mayusculas
let iniciales ="";

for (const i of array){
    iniciales += i.charAt(0);
}

console.log("Iniciales en mayusculas: ", iniciales.toUpperCase());