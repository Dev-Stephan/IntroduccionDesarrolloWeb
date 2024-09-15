let edad = Number(prompt("Ingresa tu edad:"));

if (edad < 14){
  console.log("Segun tu edad eres un niño");
} else if (edad > 14 && edad < 22){
  console.log("Segun tu edad eres un adolescente");
} else if (edad > 23 && edad < 43){
  console.log("Segun tu edad eres un joven");
} else if (edad > 44 && edad < 64){
  console.log("Segun tu edad eres un adulto joven");
} else if (edad >= 65){
  console.log("Segun tu edad eres un adulto mayor");
} 
