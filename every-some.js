// Methods that DO NOT modify the original array (Immutability)

const ages = [21, 25, 30, 19, 22]

// every()
// devuelve true si se cumple la condición para todos los elementos
const allAreAdults = ages.every((age) => age > 18);
console.log(ages);  // [ 21, 25, 30, 19, 22 ] el array original no ha sido mutado o cambiado
console.log(allAreAdults); // true se cumple que todos son >18

const allAreAdults2 = ages.every((age) => age > 20);
console.log(allAreAdults2); // false, no todos cumplen la condición

// some()
// devuelve 1 si al menos 1 cumple la condición
const atLeastOneIsOver30 = ages.some((age) => age > 30);
console.log(atLeastOneIsOver30); // false, no hay ninguno que cumpla la condición

const atLeastOneIsOver29 = ages.some((age) => age > 29);
console.log(atLeastOneIsOver29); // true, hay uno de 30