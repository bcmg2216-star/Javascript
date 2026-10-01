
// variable de hoy
const hoy = new Date();

// dia del mes
console.log("Dia del mes: ", hoy.getDate());

// mes
console.log("Mes: ", hoy.getMonth() + 1);

// año
console.log("Año: ", hoy.getFullYear());

// fecha completa
console.log("Fecha completa: ", new Intl.DateTimeFormat('es-ES', {dateStyle: "full"}).format(hoy));