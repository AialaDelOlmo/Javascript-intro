// Methods that DO NOT modify the original array (Immutability)

const morseCode1 = ['....', '---']; // H O
const morseCode2 = ['.-..', '.-']; // L A


// Combine with concat() · Way 1
const morseCodeMessage = morseCode1.concat(morseCode2);
console.log(morseCode1);
console.log(morseCode2);
console.log(morseCodeMessage);  // [ '....', '---', '.-..', '.-' ]

// Combine with concat() · Way 2 (<2 cadenas a juntar)
const morseCodeMessage2 = [].concat(morseCode1, morseCode2);
console.log(morseCode1);
console.log(morseCode2);
console.log(morseCodeMessage);  // [ '....', '---', '.-..', '.-' ]


// Combine with Spread Operator 

function combineMorseMessages (morseCode1, morseCode2) {
    console.log("Spread Operator: ", [...morseCode1, ...morseCode2]) // ... es para activar el spread operator
}

combineMorseMessages(morseCode1, morseCode2);

// Con strings, divide los carecteres
const numbers = [1, 2, 3];
const string = 'string';
combineMorseMessages(numbers, string);  // [1,   2,   3,   's','t', 'r', 'i', 'n','g'


// join()
// Entrelaza los elementos de un array y devuleve un solo elemento
const morseCodeMessageString = morseCodeMessage.join();
console.log("Join: ",morseCodeMessageString); // ....,---,.-..,.-

// podemos colocar caracteres para delimitar los elementos
const morseCodeMessageString2 = morseCodeMessage.join(' e ');
console.log("Join: ",morseCodeMessageString2); // ....,---,.-..,.-