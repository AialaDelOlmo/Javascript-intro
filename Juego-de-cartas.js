const deck = [];
const auxDeck = [];
let itExist = false;

function añadirCartas(deck){
    for (let i = 1; i <= 40; i++){
        deck.push(i);
    }
    console.log("Baraja completa: ", deck);
}
function barajarCartas(deck){
    while (auxDeck.length < 40) {
        const carta = Math.floor(Math.random() * 40 + 1);
      
        if (!auxDeck.includes(carta)) {
                auxDeck.push(carta);
        }
        
    }
    for (let i = 0; i < 40; i++) {
        const carta = auxDeck[i];
        deck.splice(i, 1, carta);
    }
    console.log("Baraja barajada: ", deck);
}
function repartir(nroCartas){
    const reparto = deck.splice(0, nroCartas);
    return reparto;
}

añadirCartas(deck);
barajarCartas(deck);
repartir(deck);

const cartasJugador1 = repartir(5);
const cartasJugador2 = repartir(5);
const cartasJugador3 = repartir(5);
const cartasJugador4 = repartir(5);

console.log("Cartas jugador 1: ", cartasJugador1);
console.log("Cartas jugador 2: ", cartasJugador2);
console.log("Cartas jugador 3: ", cartasJugador3);
console.log("Cartas jugador 4: ", cartasJugador4);

console.log("Cartas en reserva: ", deck);