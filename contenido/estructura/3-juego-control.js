const numeroSecreto = Math.floor(Math.random() * 10) + 1;

const numeroJugador = parseInt(prompt("Adivina el número secreto (entre 1 y 10):"));

if (numeroJugador === numeroSecreto) {
    console.log("¡Felicidades! Encotraste el numero secreto.");
} else if (numeroJugador < numeroSecreto) {
    console.log("El número es muy pequeño, inténtalo de nuevo.");
} else {
    console.log("El número es muy grande, inténtalo de nuevo.");
} 