const readlineSync = require('readline-sync');
const numero = readlineSync.question("Ingrese un número: ");

if (numero > 0) {

console.log("El numero es positivo");

} else if (numero < 0) {

console.log("El número es negativo");

} else {

console.log("El número es cero");

}
