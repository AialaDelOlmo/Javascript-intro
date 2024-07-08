/*
// Función tradicional
function Rocket (name, ownMessage) {
    this.name = name;
    this.launchMessage = function () {
        console.log(ownMessage);
    }
}


// Utilizando Arrow functions
function Rocket (name, ownMessage) {
    this.name = name;
    this.launchMessage = () => ownMessage;
}
*/

// Si ownMessage fuera un cuerpo de una función más grande, no solo un mensaje, se podría sacar esa función aparte:
const personalizedMessage = () => 'Goodbye everybody'

function Rocket (name, ownMessage) {
    this.name = name;
    this.launchMessage = () => ownMessage;
}

// Con esto creamos una instancia del objeto
const falcon9Rocket = new Rocket('Falcon 9', personalizedMessage);
const falconHeavyRocket = new Rocket('Falcon Heavy', 'See you soon!');
console.log(falcon9Rocket.name);
console.log(falcon9Rocket.launchMessage());

// No se pueden crear funciones constructoras a partir de arrow functions
// Pero sí que podemos crear objetos a partir de ese tipo de funciones

const RocketWithArrowFunction = (name, ownMessage) => ({
    name: name,
    launchMessage: ownMessage
})

const personalizedMessageArrowFunction = () => 'Successful launch!';
const falcon9Rocket1 = RocketWithArrowFunction('Falcon 9', personalizedMessageArrowFunction);

console.log(falcon9Rocket1.name);
console.log(falcon9Rocket1.launchMessage());