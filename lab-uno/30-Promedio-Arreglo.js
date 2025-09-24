function promedioArreglo(cantidad, arreglo) {
    let suma = 0;
    for (let i = 0; i < cantidad; i++) {
        let num = parseInt(prompt("Ingrese el número"))
        arreglo.push(num)
    }
    for (let e = 0; e < arreglo.length; e++) {
        suma += arreglo[e]
    }

    return suma/arreglo.length
}

let arregloPro = []
let cantidad = parseInt(prompt("Ingrese la cantidad de número que agregara al arreglo"))
let arregloPormediado = promedioArreglo(cantidad, arregloPro)

console.log("El promedio del arreglo es: " + arregloPormediado)