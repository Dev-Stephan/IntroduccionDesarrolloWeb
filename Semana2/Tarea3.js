/Escribe un programa que guarde un número entero, y que muestre en consola el mensaje: “Haz introducido el numero (x), gracias”. 
let nmbr = Number(prompt("Ingresa un número entero")); 
console.log("Haz introducido el numero " + (nmbr) + ", " + "gracias");

// Escribe un programa que guarde la edad del, y que muestre en consola el mensaje: “Ahora sé que tienes (x) años, gracias”.
let age = Number(prompt("Ingresa tu edad"));
console.log("Ahora sé que tienes " + (age) + " años, gracias");

//Escribe un programa que guarde la hora, y que muestre en consola el mensaje: “Hora introducida ok. Son las 18:30:00 (por ejemplo)”. 
let hour = prompt("Ingresa la hora en formato HH:MM");
console.log(`Hora introducida ok. Son las ${hour}`);

//Escribe un programa que guarde las iniciales de su nombre y que muestre en consola el mensaje: “Sus iniciales son: A.J.R. (por ejemplo)”
let capitalName = String(prompt("Ingresa la inicial de tu nombre"));
let capitalLastName = String(prompt("Ingresa la inical de tu apellido"));
console.log(`Tus iniciales son: ${capitalName}.${capitalLastName}.`);

// Escribe un programa que guarde su altura aproximada, sus iniciales y que muestre en consola el mensaje: “Sus iniciales son: A.J.R. y su altura 1.34 (por ejemplo)”. 
let capitalName2 = String(prompt("Ingresa la inicial de tu nombre"));
let capitalLastName2 = String(prompt("Ingresa la inical de tu apellido"));
let height = Number(prompt("Ingresa tu altura aproximada en metros"));
console.log(`Tus iniciales son: ${capitalName2}.${capitalLastName2}. Y tu altura ${height}`);