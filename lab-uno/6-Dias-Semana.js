
function diasSemana (numDia) {
    let dia
    if (numDia == 1) {
        dia = "Domingo"
    } else if (numDia == 2) {
        dia = "Lunes"
    } else if (numDia == 3) {
        dia = "Martes"
    } else if (numDia == 4) {
        dia = "Miercoles"
    } else if (numDia == 5) {
        dia = "Jueves"
    } else if (numDia == 6) {
        dia = "Viernes"
    } else if (numDia == 7) {
        dia = "Sabado"
    } else {
        dia = "INCORRECTO"
    }
    return dia
}

let numDia = parseInt(prompt("Inserte el número (del 1 al 7) y se retornara el día a que pertenece"))
let diaSemana = diasSemana(numDia)

console.log("El numero de día: " + numDia + ", es: " + diaSemana)