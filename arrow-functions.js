// Función tradicional

const greeting = function (name) {
    return `Hi, ${name}`;
}

// Arrow function - Explicit return
// sin la palabra clave function
// se coloca una flecha => tras los parámetros
const newGreeting = (name) => {
    return `Hi, ${name}`;
}

// Arrow function - Impicit return
// Se quita también la palabra return, y los corchetes {}, y se coloca todo el una línea
// Si solo se le pasa un parámetro, se pueden quitar también los paréntesis (name)
const newGreetingImplicit = name => `Hi, ${name}`;

// Si hay más de un parámetro, hay que poner los paréntesis
const newGreetingImplicitTwoParameters = (name, lastName) => `Hi, ${name} ${lastName}`;

// Lexical Binding

const finctionalCharacter = {
    name: 'Uncle Ben',
    messageWithTraditionaFunction: function (message) {
        console.log(`${this.name} says: ${message}`)
    },
    messageWithArrowFunction: (message) => {
        console.log(`${this.name} says: ${message}`)
    }
}

finctionalCharacter.messageWithTraditionaFunction('With rgeat power comes great responsability.');
// Uncle Ben says: With great power comes great responsability.


finctionalCharacter.messageWithArrowFunction('Beware of Doctor Octopus.');
// undefined says: Beware of Doctor Octopus.
// Los arrow functions NO detectan el this, es como si no existiera o no fuera este objeto