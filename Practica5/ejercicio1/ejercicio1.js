const palabras = ["sol", "montaña", "río", "bosque", "mariposa", "luz", "montaña"];
const listaVacia = [];

function contar(lista, palabraBuscada) {
    let contador = 0;

    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === palabraBuscada) {
            contador++;
        }
    }

    return contador;
}

function buscar(lista) {
    let resultado = [];

    for (let i = 0; i < lista.length; i++) {
        if (lista[i].length > 4) {
            resultado.push(lista[i]);
        }
    }

    return resultado;
}

function buscarPosicion(lista, palabraBuscada) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === palabraBuscada) {
            return i;
        }
    }

    return -1;
}
console.log(`Veces que aparece "montaña":`, contar(palabras, "montaña"));
console.log(`Palabras con más de 4 letras:`, buscar(palabras));
console.log(`Posición de la primera "montaña":`, buscarPosicion(palabras, "montaña"));

console.log(`Contar en lista vacía:`, contar(listaVacia, "sol"));
console.log(`Palabras largas en lista vacía:`, buscar(listaVacia));
console.log(`Posición en lista vacía:`, buscarPosicion(listaVacia, "sol"));