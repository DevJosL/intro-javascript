/**
 * ESTRUCTURA SWITCH
 * 
 * 
 */

//Costos de una fruta en la tienda

let comprar = "Mangos"

switch (comprar) {
    case "Naranjas":
        console.log("El precio de las naranjas es Q16 la mano");
        break;
    case "Platanos":
        console.log("El precio de los platanos es Q18 la docena");
        break;
    case "Manzanas":
        console.log("El precio de las manzanas por unidad es de Q5");
        break;
    //casos compratidos
    case "Mangos":
    case "Papayas":
        console.log("Losn mangos y las papayas vale Q12 la libra");
        break
    default:
        console.log(`No se encontraron con inventario para ${comprar}`);
}