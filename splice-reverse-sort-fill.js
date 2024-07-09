// Methods that modify the original array (Mutability).
// .splice(posicion en la que empieza a eliminar, cantidad de elementos a eliminar, elementos a agregar)

const vegetables = ['carrot', 'broccoli', 'spinach', 'tomato'];
const removedVegetables = vegetables.splice(2, 1, 'cucumber', 'onion');

console.log(vegetables); // [ 'carrot', 'broccoli', 'cucumber', 'onion', 'tomato' ]
console.log(removedVegetables); // [ 'spinach' ] (estaba en la posición 2)

// reverse() -> Invierte el orden de los elementos de un array 

const numbers = [1, 2, 3, 4, 5];
const reversedNumbers = numbers.reverse();

console.log(numbers);   // [ 5, 4, 3, 2, 1 ]
console.log(reversedNumbers);   // [ 5, 4, 3, 2, 1 ]

const reversedVegetables = vegetables.reverse();
console.log(reversedVegetables); // [ 'tomato', 'onion', 'cucumber', 'broccoli', 'carrot' ]

// sort()
// ordena los elementos de un array, pero antes lo pasa a string, ordena cadenas de texto
// 4, 18, 1, 62, 34 -> 1, 18, 34, 4, 62

const unsortedNumbers1 = [4, 18, 1, 62, 34];
console.log(unsortedNumbers1);  // [ 4, 18, 1, 62, 34 ]
const unicodeSortedNumbers = unsortedNumbers1.sort();

console.log(unsortedNumbers1);  // [ 1, 18, 34, 4, 62 ] (modifica el array original)
console.log(unicodeSortedNumbers); // [ 1, 18, 34, 4, 62 ]

// Cómo podemos ordenarlo por números?
const unsortedNumbers2 = [4, 18, 1, 62, 34];
const sortedNumbers = unsortedNumbers2.sort((a, b) => a - b);
// 4 - 18 = -14 Número negativo, está bien colocado (4 es menor que 18)
// 18 - 1 = 17 positivo, el 1 no está e su sitio, lo mueve una posición
// 1 - 62 = -61
// 62 - 34 = 28
// Revisa en bucle la lista con restando los elementos en sus nuevas posiciones hasta que todas sean negativas

console.log(unsortedNumbers2);
console.log(sortedNumbers);

// sort() with strings · UTF-16 (alfabéticamente)
const cities = ['New York', 'Paris', 'Tokyo', 'London'];
const sortedCities = cities.sort();

console.log(cities);
console.log(sortedCities);

// fill()
// Llena de un valor el array, sustituyendo lo que había
const ages = [21, 35, 45, 50];
// llena con 0s desde la posición 2 hasta la 4
console.log(ages.fill(0, 2, 4));  // [ 21, 35, 0, 0 ]
// llena con 15s desde la posición 1
console.log(ages.fill(15, 1));  // [ 21, 15, 15, 15 ]
// llena todo el array con 15s
console.log(ages.fill(15));  // [ 15, 15, 15, 15 ]