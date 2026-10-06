// calcular los litros
const calcularLitros = (distancia, consumo) => (distancia * consumo) / 100;

// calcular coste
const calcularCosteTotal = (litros, precio = 1.60) => litros * precio;

//  calcular cuanto paga cada uno
const calcularCosteViajero = (costeTotal, viajeros) => viajeros === 0 ? costeTotal : costeTotal / viajeros;

function mostrarCoste(etiqueta, param1, param2, funcionCalculo){
    const resul = funcionCalculo(param1, param2);
    console.log(`${etiqueta}: ${resul.toFixed(2)} €`);
}

let distancia;
let consumo;
let precio;
let viajeros;

// bucle para la distancia
while (true) {
    distancia = Number.parseFloat(prompt("Introduce la distancia del viaje (km):"));
    if (Number.isFinite(distancia) && distancia > 0) break;
        alert("Error: la distancia debe ser un numero mayor que cero");
}

// bucle para el consumo
while (true){
    consumo = Number.parseFloat(prompt("Consumo (l/100km):"));
    if (Number.isFinite(consumo) && consumo > 0) break;
    alert("Error: introduce un numero mayor que cero.")
}

while (true){
    let entrada = prompt("Precio (€/l). Deja en blanco para usar 1.6€;");
    if(entrada === ""){
        precio = undefined;
        break;
    }
    precio = Number.parseFloat(entrada);
    if(Number.isFinite(precio) && precio > 0) break;
    alert("Error: Introduce un numero valido o deja en blanco");
}

while (true){
    viajeros = Number.parseInt(prompt("Numeros de viajeros: "));
    if(Number.isFinite(viajeros) && viajeros >=0) break;
    alert("Error: No puede haber viajeros negativos");
}

const litros = calcularLitros(distancia, consumo);
console.log(`Combustible estimado: ${litros.toFixed(2)} litros`);

mostrarCoste("Coste total", litros, precio, calcularCosteTotal);

const costeTotal = calcularCosteTotal(litros, precio);

mostrarCoste("Coste por viajero", costeTotal, viajeros, calcularCosteViajero);
