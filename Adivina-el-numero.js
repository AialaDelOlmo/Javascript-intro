const numeroSecreto = Math.floor(Math.random() * 10 + 1); // Genera un número del 1 al 10
const numeroJugador = parseInt(
    prompt("Adivina el número secreto entre el 1 y 10")
);

console.log(`Èste es el número con el que juegas ${numeroSecreto}`);

if(numeroJugador === numeroSecreto){
    console.log("¡Felicidades!, adivinaste el número secreto");
} else if (numeroJugador < numeroSecreto) {
    console.log ("El número es demasiado bajo");

} else {
    console.log ("El número es demasiado alto");
}