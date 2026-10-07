
function contar(lista, palabra){
    let contador = 0;
    for(let i = 0; i<lista.length; i++){
        if(lista[i] === palabra){
            contador++;
        }
    }
    return contador;
}

function arrayN(lista) {
    let listaN = [];
    for (let i = 0; i < lista.length; i++) {
        if(lista[i].length > 4 ){
            listaN.push(lista[i]);
        }
    }
    return listaN;
}

function buscar(lista, palabra){
    for(let i = 0; i<lista.length; i++) {
        if (lista[i] === palabra) {
            return i;
        }
    }
    return -1;
}


const lista = ["sol", "montaña", "río", "bosque", "mariposa", "luz", "montaña"];

const listaVacia = [];

console.log("Lista ejemplo y palabra que si esta");
console.log(`Veces que aparece "montaña": `, contar(lista, "montaña"));
console.log(`Array con las palabras que tienen mas de 4 caracteres: `, arrayN(lista));
console.log(`La posicion de la palabra río: `, buscar(lista, "río"));
console.log(`La posicion de la palabra nube: `, buscar(lista, "nube"));


console.log("Lista vacia y palabra que no esta");
console.log(`Contador de cuantas veces aparece la palabra montaña: `, contar(listaVacia, "montaña"));
console.log(`Array con las palabras que tienen mas de 4 caracteres: `, arrayN(listaVacia));
console.log(`La posicion de la palabra montaña`, buscar(listaVacia, "montaña"));
