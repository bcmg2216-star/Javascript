let pasillo = ["S", ".", "#", ".", ".", "."];
const ordenes = ["derecha", "derecha", "izquierda", "izquierda"];

let posicionRobot = 0;
let rechazos = [];

function calcularDestino(posicionActual, orden){
    if(orden === "derecha"){
        return posicionActual + 1;
    }else if(orden === "izquierda"){
        return posicionActual -1 ;
    }
}

for(let i = 0; i < ordenes.length; i++){
    let ordenActual = ordenes[i];
    let destino = calcularDestino(posicionRobot, ordenActual);

    // comprueba que el indice de destino no quede fuera de los limites
    if(destino<0 || destino>=pasillo.length){
        console.log(`${ordenActual} rechazado. Se sale del pasillo`);
        rechazos.push(ordenActual);
    }
    // hay un obstaculo #
    else if(pasillo[destino] === "#"){
        console.log(`${ordenActual} rechazado. Hay un obstaculo`);
        rechazos.push(ordenActual);
    }else{
        posicionRobot = destino;
        console.log(`${ordenActual} acertado. Posicion ${posicionRobot}`);
    }
}

console.log(`Ordenes rechazadas:`, rechazos);

pasillo[posicionRobot] = "R";

console.log(`Final: `, pasillo);
