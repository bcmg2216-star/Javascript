
let random = Math.ceil(Math.random() * 10);
let intento = 0;

while (intento !== random) {
    intento = Number.parseInt(prompt("Adivina el número secreto (entre 1 y 10)"));

    if (intento < random) {
        alert("El numero secreto es mayor. Intentalo otra vez");
    } else if (intento > random) {
        alert("el numero secreto es menor. Intentalo otra vez");
    }
}

alert(`Has acertado el numero secreto era ${random}`);