// slice() muestra una sección de un array, sin modificar el array original

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals);

//desde la posición 2 (camello) hasta el final
console.log("desde la pos. 2: ", animals.slice(2));

//desde la posición 2 (camello) hasta la posición 4 (sin mostrarla)
console.log("de la 2 a la 4 (sin contarla): ", animals.slice(2, 4));

//desde la posición 1 (bison) hasta la posición 6
console.log("de la 2 a la 6: ", animals.slice(1, 6));

// Para contar de atrás para adelante, se usan números negativos

//elephant sería -1, duck sería -2. Muestra desde la posición 
console.log("desde la pos. -2: ", animals.slice(-2));

//desde la posición 2 (camello) hasta la posición -1 (hasta el último sin contarlo)
console.log("desde la pos. -1 (sin contarlo): ", animals.slice(2, -1));

// slice solo devolvería el array original
console.log(animals.slice());