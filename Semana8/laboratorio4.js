let rangoInicio = prompt("Ingrese el inicio del rango:");
while (isNaN(rangoInicio) || rangoInicio === '' || rangoInicio === null) {
    rangoInicio = prompt("Por favor, ingrese un número válido para el inicio del rango:");
}
rangoInicio = parseInt(rangoInicio, 10);

let rangoFin = prompt("Ingrese el final del rango:");
while (isNaN(rangoFin) || rangoFin === '' || rangoFin === null) {
    rangoFin = prompt("Por favor, ingrese un número válido para el final del rango:");
}
rangoFin = parseInt(rangoFin, 10);
