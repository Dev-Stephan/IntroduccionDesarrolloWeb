
let valorIngresado = Number(prompt("Ingrese un valor entre 1 y 10:"));

if (valorIngresado < 1 || valorIngresado > 5) {
  alert("El valor ingresado no está entre 1 y 5");
} else {
  
  let esPrimo = false;
  if (valorIngresado > 1) {
    if (valorIngresado === 2 || valorIngresado === 3) {
      esPrimo = true;
    } else if (valorIngresado > 3 && valorIngresado % 2 !== 0 && valorIngresado % 3 !== 0) {
      esPrimo = true;
    }
  }

  if (esPrimo) {
    console.log(`El número ${valorIngresado} es primo`);
  } else {
    console.log(`El número ${valorIngresado} no es primo`);
  }
}



let validarParImpar = Number(prompt("Ingrese un numero:"));

if (validarParImpar % 2 === 0){
  console.log(`El numero ${validarParImpar} es par`)
} else {
  console.log(`El numero ${validarParImpar} es impar`)
}


let numeroSemana = Number(prompt("Ingrese un numero del 1 al 7"));

switch (numeroSemana){
    case 1:
      console.log(`El dia correspondiente al numero ${numeroSemana} es Lunes`);
      break;
    case 2:
      console.log(`El dia correspondiente al numero ${numeroSemana} es Martes`);
      break;
    case 3:
      console.log(`El dia correspondiente al numero ${numeroSemana} es Miercoles`);
      break;
    case 4:
      console.log(`El dia correspondiente al numero ${numeroSemana} es Jueves`);
      break;
    case 5:
      console.log(`El dia correspondiente al numero ${numeroSemana} es Viernes`);
      break;
    case 6:
      console.log(`El dia correspondiente al numero ${numeroSemana} es Sabado`);
      break;
    case 7:
      console.log(`El dia correspondiente al numero ${numeroSemana} es Domingo`);
      break;
    default:
    alert("El numero ingresado no está entre 1 y 7");
}



let numeroMes = Number(prompt("Ingrese un numero del 1 al 12"));

switch (numeroMes){
    case 1:
      console.log(`El mes correspondiente al numero ${numeroMes} es Enero`);
      break;
    case 2:
      console.log(`El mes correspondiente al numero ${numeroMes} es Febrebro`);
      break;
    case 3:
      console.log(`El mes correspondiente al numero ${numeroMes} es Marzo`);
      break;
    case 4:
      console.log(`El mes correspondiente al numero ${numeroMes} es Abril`);
      break;
    case 5:
      console.log(`El mes correspondiente al numero ${numeroMes} es Mayo`);
      break;
    case 6:
      console.log(`El mes correspondiente al numero ${numeroMes} es Junio`);
      break;
    case 7:
      console.log(`El mes correspondiente al numero ${numeroMes} es Julio`);
      break;
    case 8:
      console.log(`El mes correspondiente al numero ${numeroMes} es Agosto`);
      break;
    case 9:
      console.log(`El mes correspondiente al numero ${numeroMes} es Septiembre`);
      break;
    case 10:
      console.log(`El mes correspondiente al numero ${numeroMes} es Octubre`);
      break;
    case 11:
      console.log(`El mes correspondiente al numero ${numeroMes} es Noviembre`);
      break;
    case 12:
      console.log(`El mes correspondiente al numero ${numeroMes} es Diciembre`);
      break;
    default:
    alert("El numero ingresado no está entre 1 y 12");
}


let validarPositivoNegativo = Number(prompt("Ingrese un numero"));

if (validarPositivoNegativo >= 0){
  console.log(`El numero ${validarPositivoNegativo} es positivo`);
} else {
  console.log(`El numero ${validarPositivoNegativo} es negativo`);
}



let caracter = prompt("Ingresa uno de los caracteres a continuacion: S W");
let caracterEnMayusculas = caracter.toUpperCase();

if (caracterEnMayusculas != "S" && caracterEnMayusculas != "W"){
  alert("Solamente se permiten caracteres S y W");
} else {
  console.log(`Muy bien ingresaste el caracter ${caracterEnMayusculas}`);
}


let vocal = prompt("Ingrese una letra del abecedario");
let vocalMinuscula = vocal.toLowerCase();

switch(vocalMinuscula){
  case "a":
    console.log(`La letra ${vocalMinuscula} es una vocal`);
    break;
  case "e":
    console.log(`La letra ${vocalMinuscula} es una vocal`);
    break;
  case "i":
    console.log(`La letra ${vocalMinuscula} es una vocal`);
    break;
  case "o":
    console.log(`La letra ${vocalMinuscula} es una vocal`);
    break;
  case "u":
    console.log(`La letra ${vocalMinuscula} es una vocal`);
    break;
  default:
    console.log(`La letra ${vocalMinuscula} es una consonante`);
}
