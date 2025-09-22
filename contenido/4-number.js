/**
 * Tipo de dato `number`
 */

// 1. entero y decimal
const entero = 42
const decimal = 3.14

// 2. notacion cientifica
const notacionCientifica = 5e3

//3. Infinitos y NaN (not a number)
const infinito = Infinity
const noEsNumero = NaN

// Operaciones Aritmeticas
// 1. suma, resta, multiplicacion y division
const suma = 5+6
const resta = 4-6
const multiplicacion = 3*7
const division = 10/2

// 2. modulo y exponente
const modulo = 10 % 3
const exponente = 2 ** 3

// PRECISION, javascript tiene problemas de calculo

const resultado = 0.1 + 0.2
//console.log(resultado)

//console.log(resultado.toFixed(1))

//console.log(resultado == 0.3)

//console.log(resultado.toFixed(1) == 0.3)

//Operaciones Avanzadas
const raizCuadrada = Math.sqrt(16)
const valorAbsoluto = Math.abs(-5)
const aleatorio = Math.random()

let numero = aleatorio * 10 + 20

//console.log(raizCuadrada)
//console.log(valorAbsoluto)
console.log(Math.trunc(numero))

//ejemplo
const numero2 = 2
const booleano = true
console.log(numero2 + booleano)