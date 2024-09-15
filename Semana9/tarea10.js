// Ejercicio 1

let resultado = "";

for (let i = 10; i >= 1; i--) {
  resultado += i;
  if (i > 1) {
    resultado += "--";
  }
}

console.log(resultado);


//ejercicio 2

for (let i = 70; i >= 1; i--) {
  
  if (i % 5 === 0) {
    console.log(i);
  }
}


// Ejercicio 3

let puntos = 0;
const intentos = 10;
const abecedario = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

for (let i = 0; i < intentos; i++) {
  let entradaValida = false;
  let entrada;

  while (!entradaValida) {
    entrada = prompt("Ingrese un carácter de A-Z:");
    entrada = entrada.toUpperCase();
    if (entrada && entrada.length === 1 && abecedario.includes(entrada)) {
      entradaValida = true;
      if (['A', 'E', 'I', 'O', 'U'].includes(entrada)) {
        puntos += 10;
      } else {
        puntos -= 2;
      }
    } else {
      alert("Entrada inválida. Asegúrese de ingresar un solo carácter de A-Z.");
    }
  }
}
alert("Total de puntos obtenidos: " + puntos);


//Ejercicio 4

let numeros = [];
for (let i = 0; i < 10; i++) {
  let numeroValido = false;
  let numero;

  while (!numeroValido) {
    numero = prompt("Ingrese el número " + (i + 1));
    numero = parseInt(numero, 10);
    if (!isNaN(numero)) {
      numeroValido = true; 
      numeros.push(numero);
    } else {
      alert("Entrada inválida. Asegúrese de ingresar solamente numeros.");
    }
  }
}

let cuadrados = numeros.map(num => num * num);
console.log("Números ingresados: " + numeros.join(", "));
console.log("Cuadrados de los números: " + cuadrados.join(", "));

