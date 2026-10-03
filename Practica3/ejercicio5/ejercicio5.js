
let suma = 0;
let contador = 0;

// bucle
while (true){
    // pedimos numero
    let numero = Number.parseFloat(prompt("Escribe un numero (si es negativo termina)"));

    // negativo termina
    if(numero < 0){
        break;
    }

    // si no es negativo sumamos
    suma += numero;
    contador++
}

// media
if(contador > 0){
    const media = suma / contador;
    alert(`La suma es: ${suma} y la media es: ${media}`);
}else {
    alert("no has introducido ningun numero valido")
}