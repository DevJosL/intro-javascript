function factorialNum(num) {
    let numFinal = 1;
    for (let i = 1; i <= num; i++) {
        numFinal *= i
    }
    
    return numFinal
}

let numero = parseInt(prompt("Ingrese el número que desea conocer su factorial"))

let numFinal = factorialNum(numero)

console.log("El factorial de: " + numero + ", es " + numFinal )