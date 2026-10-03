
// pedimos los numeros
let num1 = Number.parseFloat(prompt("introduce un numero"));
let num2 = Number.parseFloat(prompt("introduce otro numero"));

// miramos cual es el pequeño y cual el grande
const min = Math.min(num1, num2);
const max = Math.max(num1, num2);

// bucle para ver los que estan en medio
for(let i = min; i <= max; i++){
    console.log(i);
}
