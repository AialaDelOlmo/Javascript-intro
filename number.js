// 1. Tipo Entero y decimal
const entero = 42;
const decimal = 3.14;
console.log(typeof entero, typeof decimal); //number number

// 2. Notación científica
const cientifico = 5e3; //5 potencia de 3

// 3. Infinitos y NaN (not a number)
const infinito = Infinity;
const noEsUnNumero = NaN

// Operaciones aritméticas
// 1. Suma, Resta, Multiplicación y División
const suma = 3 + 4;
const resta = 4 - 4;
const multiplicacion = 4 * 7;
const division = 16 / 2;

// 2. Módulo y Exponenciación
const modulo = 15 % 8 //para saber si un número es múltiplo de otro
const exponenciacion = 2 ** 3; //potencia

// Precisión
const resultado = 0.1 + 0.2;
console.log(resultado); //0.30000000000000004
console.log(resultado.toFixed(1)); // solo un decimal, nos mostraría: 0.3
console.log(resultado === 0.3); // Compara el resultado con el 0.3, dará false
console.log(resultado.toFixed(1) === 0.3); // También da false (Javascript no es muy preciso con este tipo de operaciones)

// Operaciones Avanzadas
const raizCuadrada = Math.sqrt(16); // raíz cuadrada de 16
const valorAbsoluto = Math.abs(-7); // valor absoluto de -7 (se pasa a positivo)
const aleatorio = Math.random(); // saca un valor random

console.log(raizCuadrada); // 4
console.log(valorAbsoluto); // 7
console.log(aleatorio); // 0.07265825174669116