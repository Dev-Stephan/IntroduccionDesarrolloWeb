// Convertir Celsius a Farenheit
let celcius;
let farenheit;

celcius = Number(prompt("Ingrese la temperatura de su ciuidad en Celcius:"));
farenheit = ((9/5)*celcius)+32;
console.log(`La temperatura de su ciudad en farenheit es: ${farenheit}ºF`);

// Calcular el área de un circulo
let radioCirculo;
let areaCirculo;
const pi = 3.14159265;

radioCirculo = Number(prompt("Ingrese el valor del radio de su circulo"));
areaCirculo = pi*(radioCirculo*radioCirculo);
console.log(`El área del circulo es: ${areaCirculo}Km2`);

//Baleadas
let cantidadBaleadas;
let totalAPagar;
const precioBaleadasUnidad = 25;

cantidadBaleadas = Number(prompt("¿Cuántas baleadas desea ordenar?")); 
totalAPagar = cantidadBaleadas*precioBaleadasUnidad;
console.log(`Su total a pagar por su consumo de ${cantidadBaleadas} baleadas es de: L.${totalAPagar}`);

//Residuo
let primerValor = Number(prompt("Ingrese el primer valor para calcuar el residuo:"));
let segundoValor= Number(prompt("Ingrese el segundo valor para calcular el residuo:"));
let rediuo = primerValor % segundoValor;
console.log(`El residuo resultante entre el valor ${primerValor} y el valor ${segundoValor} es de: ${rediuo}`);

//3 numeros ingresados por usuario
let primerNumero = Number(prompt("Ingrese el primer valor:"));
let segundoNumero = Number(prompt("Ingrese el segundo valor:"));
let tercerNumero = Number(prompt("Ingrese el tercer valor:"));
let resultado = (primerNumero+segundoNumero)*tercerNumero;
console.log(`El resultado de la operacion (${primerNumero} + ${segundoNumero})(${tercerNumero}) es: ${resultado}`);