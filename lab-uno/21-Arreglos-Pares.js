function arregloPar(arreglo, cantidad) {
    for (let i = 0; i < cantidad; i++) {
        let num = parseInt(prompt("Ingrese el número"))
        arreglo.push(num)
    }

    let nuevoArreglo = []

    for (arr of arreglo) {
        if (arr%2 == 0) {
            nuevoArreglo.push(arr)
        }
    }
    return nuevoArreglo
}

let arregloNumeros = []

let cantidad = parseInt(prompt("Ingrese la cantidad de número que ingresara al arreglo"))

let arregloPares = arregloPar(arregloNumeros, cantidad)

console.log("El arreglo de unicamnete los números pares es ahora:")
console.log(arregloPares)