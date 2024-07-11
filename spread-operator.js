// 1. Coping an Array

// útil para duplicar un array y así no modificar el array original
const originalArray = [1, 2, 3, 4, 5];
const copyOfAnArray = [...originalArray];

console.log(originalArray); // [ 1, 2, 3, 4, 5 ]
console.log(copyOfAnArray); // [ 1, 2, 3, 4, 5 ]


// 2. Combining Arrays

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const combinedArray = [...array1, ...array2];

console.log(array1);    // [ 1, 2, 3 ]
console.log(array2);    // [ 4, 5, 6 ]
console.log(combinedArray);     //[ 1, 2, 3, 4, 5, 6 ]


// 3. Creatings Arrays with Additional Elements

const baseArray = [1, 2, 3];
const arrayWithAdditionalElements = [...baseArray, 4, 5, 6];
console.log(baseArray);
console.log(arrayWithAdditionalElements);

// 4. Pass elements to functions
function sum (a, b, c){
    return a + b + c;
}
const numbers = [1, 2, 3];
// En vez de pasarle 1, 2, 3, se le puede pasar cada valor por separado con ...numbers, cada uno será un argumento de la función
const result = sum(...numbers);
console.log(result);    // 6