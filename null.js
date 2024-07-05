// Null
const snoopy = null;
console.log(snoopy); // null
console.log(typeof snoopy); // object (sabemos que no es objeto, es primitivo, en un error de JS)

// Undefined
let name;
console.log(name); // undefined (JS sabe que hay algo, pero no sabe qué)

// Symbol
// sirve para deficinir valores únicos, que no queremos que cambien.
const uniqueId = Symbol('id'); // Quiero un valor Id único
// Qué pasaría si tenemos dos valores únicos iguales?
const symbol1 = Symbol(1);
const symbol2 = Symbol(1);
console.log(symbol1 === symbol2); // false. cada símbolo es único, aunque su descripción sea igual

const ID = Symbol('id');
let user = {};
user[ID] = '1234';
console.log(user);

// BigInt
const bigNumer = 1849238573274671647165376247623547652746n;
console.log(bigNumer);

const numberOfParticlesInTheUniverse = 100000000000000000000000n;