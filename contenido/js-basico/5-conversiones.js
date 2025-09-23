/**CONVERSIONES - Explict Type Casting */

const string = "54";
const integer = parseInt(string);

console.log(string)
console.log(integer)

const flotante = parseFloat("3.14159")
console.log(typeof flotante)

const binario = 1010
const decimal = parseInt(binario, 2)
console.log(decimal)

const hexa = "CAFE"
const decimalh = parseInt(hexa, 16)
console.log(decimalh)

//Implicit type casting
const resultado = "5" + 3
console.log(resultado)
console.log(typeof resultado)

const sumaBooleana = "3"+true
console.log(sumaBooleana)

const sumaConNumero = true +2
console.log(sumaConNumero)

const valorString = "29"
const valorNumber = 11
const valorBoolean = true
console.log("----------------------------")
console.log(valorString + valorString) //Concatenar
console.log(valorString + valorNumber) //Concatenar
console.log(valorString + valorBoolean) //Concatenar

console.log(valorNumber + valorNumber) //Suma
console.log(valorNumber + valorString) //Concatenar
console.log(valorNumber + valorBoolean) //Suma

console.log(valorBoolean + valorBoolean) //Suma
console.log(valorBoolean + valorNumber) //Suma
console.log(valorBoolean + valorString) //Concatenar