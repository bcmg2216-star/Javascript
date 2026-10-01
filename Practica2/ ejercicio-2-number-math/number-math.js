
// creamos las variables
const r = 3.5;
const pi = Number.parseFloat(Math.PI.toFixed(5));

// comprobamos que sea finito y positivo
if (Number.isFinite(r) && r>0){
    // calculamos el area
    const area = pi*(r**2);

    // mostramos el area
    console.log("Area: ", area);

    // convertimos el resultado a string
    console.log("Area como String: ", String(area));

    // string con tres decimales
    console.log("Area con 3 decimales: ", area.toFixed(3));

    // convertimos el area en un entero
    console.log("Area como entero: ", Number.parseInt(area));

    // redondera el area al entero mas cercano
    console.log("Area redondeada: ", Math.round(area));

    // multipica el area por un numero aleatorio entre 1 y 20
    const random = Math.floor(Math.random() * 20) + 1;
    console.log(`Area multiplicada por un aleatorio (${random}):`, area * random);
} else {
    console.log("El radio no es valido");
}


