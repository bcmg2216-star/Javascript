// 8. Pide al usuario una palabra y calcula cuántas vocales contiene.

let palabra = prompt("introduce una palabra");

const vocales = "aeiouáéíóú";
let contador = 0;

for(const letra of palabra){
    if(vocales.includes(letra)){
        contador++;
    }
}

console.log(`la palabra tiene ${contador} vocales`);