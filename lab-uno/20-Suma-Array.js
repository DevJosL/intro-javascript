function sumaArreglo(cantidad, arreglo) {
    let suma = 0;
    for (let i = 0; i < cantidad; i++) {
        let num = parseInt(prompt("Ingrese el número"))
        arreglo.push(num)
    }
    for (let e = 0; e < arreglo.length; e++) {
        suma += arreglo[e]
    }
    return suma;
}

let arregloNum = []

let cantidad = parseInt(prompt("Ingrese la cantidad de números que ingresara"))

let sumaArr = sumaArreglo(cantidad, arregloNum)

console.log("La suma del arreglo es: "+sumaArr)