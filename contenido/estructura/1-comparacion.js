/**
 *      OPERADORES DE COMPARACIÓN
 */

// ==  : igualdad
// === : para comparar igualdad en valor y en tipo de datos
// !=  : desigualdad, a true o false
// !== : es diferente en valor y en tipo de dato

// <  : menor que
// <= : menor o igual que
// >  : mayor que
// >= : mayor o igual que

const a = 10;
const b = 5;
const c = "10";

console.log(a == b);  // false
console.log(a === c); // false
console.log(a == c);  // true
console.log(a != c);  // false -> si se interpreta como iguales
console.log(a !== c); // true
console.log(a < b);   // false
console.log(a <= b);  // false
console.log(a > b);   // true
console.log(a >= b);  // true
