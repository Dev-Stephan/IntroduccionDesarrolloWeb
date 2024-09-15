let nota = 95; 

if (nota < 0 || nota > 100) {
    console.log("Nota inválida. Debe estar entre 0 y 100.");
} else {
    if (nota >= 95) {
        console.log("SOBRESALIENTE");
    } else if (nota >= 90) {
        console.log("EXCELENTE");
    } else if (nota >= 85) {
        console.log("MUY BUENO");
    } else if (nota >= 80) {
        console.log("BUENO");
    } else if (nota < 60) {
        console.log("REPROBADO");
    } else {
        console.log("APROBADO");
    }
}
