// TRABAJO DEL ALUMNO B
console.log("--- Gestión de Alumno B ---");

let rutasEspeciales = ["Bilbao", "Zaragoza", "Cádiz", "Barcelona", "Málaga"];

// 2. Eliminar ciudad en posición 2
rutasEspeciales.splice(2, 1);

// 3. Invertir el orden
rutasEspeciales.reverse();

// 4. Convertir palabra en arreglo
let palabra = "LOGISTICA";
let letras = palabra.split("");

// 5. Mostrar resultados
console.log(rutasEspeciales);
console.log(letras);