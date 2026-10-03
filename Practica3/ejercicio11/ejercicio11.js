let opcion = 0

while (opcion !== 4) {

    opcion = Number.parseFloat(prompt(`Elige una opcion:
    1. Usuario principiante
    2. Usuario intermedio
    3. Usuario avanzado
    4. Salir`));

    switch (opcion) {
        case 1:
            alert("principiante");
            break

        case 2:
            alert("intermedio");
            break
        case 3:
            alert("avanzado");
            break
        case 4:
            alert("Saliendo");
            break
        default:
            alert("introduce una opcion valida");
            break;
    }
}
