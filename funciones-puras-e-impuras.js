// Funciones puras

// Efectos secundarios: (harán que la función ya no sea pura)
//  1. Modificar variables globales
//  2. Modificar parámetros
//  3. Solicitures HTTP
//  4. Imprimir mensajes en pantalla o consola
//  5. Manipulación del DOM
//  6. Obtener la hora actual

// Ejemplos FUNCIONES PURAS
//(siempre recibe los mismos parámetros y siempre obtendremos la misma salida)
function sum (a,b) {
    return a + b;
}

function square (x) {
    return x * x;
}

function addTen (y) {
    return y * 10;
}

const number = 5;
const finalResult = addTen(square(number));
console.log(finalResult);


// EJEMPLOS FUNCIONES IMPURAS
// (4.)
function suma (a,b) {
    console.log('A: ', a);
    return a + b;
}

// (1.)
let total = 0;
function sunWithSideEffect (a) {
    total += a;
    return total;
}

