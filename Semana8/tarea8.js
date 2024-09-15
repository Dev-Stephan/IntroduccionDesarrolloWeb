/ Promedio
let totalNotas = 0;
let sumaNotas = 0;
let promedio = 0;
let cantidadNotas = 0;


cantidadNotas = parseInt(prompt("¿Cuántas notas quiere ingresar?"), 10);

if (isNaN(cantidadNotas) || cantidadNotas <= 0) {
    alert("Por favor, ingrese un número válido mayor que 0.");
} else {
    
    let contador = 0;
    while (contador < cantidadNotas) {
       
        let nota = parseFloat(prompt(`Ingrese la nota ${contador + 1}:`));
        
        if (isNaN(nota) || nota < 0 || nota > 100) {
            alert("Por favor, ingrese una nota válida entre 0 y 100.");
        } else {
            
            sumaNotas += nota;
            contador++;
        }
    }

    promedio = sumaNotas / cantidadNotas;

    alert(`El promedio de las notas es: ${promedio.toFixed(2)}`);
}

// contador
let contador = 1;

while (contador <= 50) {
    console.log(contador);
    contador++;
}

//Impares descendentes
let contador = 99;


while (contador >= 1) {
    console.log(contador);
    contador -= 2;
}

// contador dinamico
let limite = parseInt(prompt("Ingrese el límite del contador:"), 10);

if (isNaN(limite) || limite <= 0) {
    alert("Por favor, ingrese un número válido mayor que 0.");
} else {
    let contador = 0;
    while (contador <= limite) {
        console.log(contador);
        contador += 2;
    }
}


// Caracter A
let entrada;

while (entrada !== "A") {
    entrada = prompt("Por favor, ingrese el carácter 'A':");
    
    if (entrada === "A") {
        alert("¡Correcto! Has ingresado el carácter 'A'.");
    } else {
        alert("Carácter incorrecto. Inténtalo de nuevo.");
    }
}


// Multiplos de 8
let numero = 8;

while (numero <= 500) {
    console.log(numero);
    numero += 8;
}
