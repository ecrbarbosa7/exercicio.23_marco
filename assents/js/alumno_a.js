// TRABAJO DEL ALUMNO A
console.log("--- Gestión de Alumno A ---");

let flota = ["Madrid", "Valencia", "Sevilla"];

// 2. Camión nuevo al final
flota.push("Barcelona");

// 3. Camión de urgencia al inicio
flota.unshift("Bilbao");

// 4. El último camión sale
flota.pop();

// 5. Mostrar estado final
console.log(flota);