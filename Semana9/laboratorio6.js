let numeros = [];
for (let i = 0; i < 7; i++) {
    let numero = parseInt(prompt("Ingrese un número entero:"));
    if (isNaN(numero)) {
        alert("Por favor, ingrese un número entero válido.");
        i--; 
    } else {
        numeros.push(numero);
    }
}
let menor = numeros[0];
let mayor = numeros[0];