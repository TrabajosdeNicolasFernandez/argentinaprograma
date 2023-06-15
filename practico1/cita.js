let cita = “Tres tristes tigres comen trigo en un trigal”;

let substring = “tigres comen trigo”;

let tamañoDeCita = cita.length;

let indice = cita.indexOf(substring);

let citaRevisada = cita.substring(0, indice) + substring + cita.substring(indice + substring.length);

//

A

console.log("El tamaño de la cita es:", tamañoDeCita);

B

console.log("El índice del substring es:", indice);

C

console.log("La cita revisada es:", citaRevisada);