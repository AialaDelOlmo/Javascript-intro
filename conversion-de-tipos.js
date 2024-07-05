// Explicit Type Casting

// De string a number
const string = '42';
const integer = parseInt(string); // convierte el string a number
console.log(integer); // 42
console.log(typeof integer); // number

// JavaScript no diferencia tipos de número (float, etc.) serán todos number
const stringDecimal = '3.14';
const float = parseFloat(stringDecimal);
console.log(float); // 3.14
console.log(typeof float); // number

// De binario a decimal
const binary = '1010';
const decimal = parseInt(binary, 2); //en base 2 
console.log(decimal); // 10
console.log(typeof decimal); // number

// Implicit Type Casting

// Lo que hace es concatenar el string con el signo +
const sum = '5' + 3; // Javascript cambiará internamente el numero 3 a string
console.log(sum); // 53


const sumWithBoolean = '3' + true ;
console.log(sumWithBoolean); // concatena 3true

const sumWithNumber = 2 + true ; // Aquí no está concatenando sino sumando
console.log(sumWithNumber); // 3

const strigValue = '10'
const numberValue = 10;
const boolenaValue = true;

console.log('----------------------'); 
// Truco para saber si JavaScript sumará o concatenará
// cuando hay un string Javascript siempre concatena
// Si no hay string, suma
console.log(strigValue + strigValue); // concatena 1010
console.log(strigValue + numberValue); // concatena 1010
console.log(strigValue + boolenaValue); // concatena 10true

console.log(numberValue + strigValue); // concatena 1010
console.log(numberValue + numberValue); // sumar 20
console.log(numberValue + boolenaValue); // sumar 11 (boolean = true lo toma como 1)

console.log(boolenaValue + strigValue); // concatena true10
console.log(boolenaValue + numberValue); // suma 11
console.log(boolenaValue + boolenaValue); // suma 2