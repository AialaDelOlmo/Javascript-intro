// How to create an Array?

// 1. new Array() or Array()

const fruits = Array('apple', 'banana', 'orange');
console.log(fruits); // [ 'apple', 'banana', 'orange' ]

const justOneNumber = Array(12);
console.log(justOneNumber); // [ <12 empty items> ]

const number = Array(1, 2, 3, 4, 5);
console.log(number); // [ 1, 2, 3, 4, 5 ]

// 2. Array literal syntax

const oneNumber = [4]; // array con un solo valor
console.log(oneNumber); // [ 4 ]

// Array vacío
const emptyArray = []; 
console.log(emptyArray); // []

// Array de strings
const sports = Array('soccer', 'tennis', 'rugby');
console.log(sports); // [ 'soccer', 'tennis', 'rugby' ]

// Array mixtos
const recipeIngredientes = [
    'Flour',
    true,
    2,
    {
        ingrediens: 'Milk', quantity: '1 cup'
    },
    false
]
console.log(recipeIngredientes); // [ 'Flour', true, 2, { ingrediens: 'Milk', quantity: '1 cup' }, false ]

// Accesing array elements
const firstFruit = fruits[0];
console.log(firstFruit);  // apple

// length property
const numberOfFruits = fruits.length;
console.log(numberOfFruits);    // 3

// Mutability (agregar un elemento al array)
fruits.push('watermelon');
console.log(fruits);    // [ 'apple', 'banana', 'orange', 'watermelon' ]

// Inmutability (concatenar arrays)
const newFruits = fruits.concat(['grape','kiwi']); 
console.log(fruits);
console.log(newFruits); // [ 'apple', 'banana', 'orange', 'watermelon', 'grape', 'kiwi' ]

// Checking arrays with Array.isArray()

const isArray = Array.isArray(fruits);
console.log(isArray);  // true

// Practical exercise: sum all elements of an array,

const numbersArray = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < numbersArray.length; i++){
    sum += numbersArray[i];
}
console.log(sum);  // 15

// Methods that modify the original array (Mutability)

// push() (añade elementos al array, al final)
const countries = ['USA', 'Canada', 'UK'];
const newCountries = countries.push('Germany', 'Australia');

// Al array countries se le han añadido 2 paises
console.log(countries); // [ 'USA', 'Canada', 'UK', 'Germany', 'Australia' ]

// Nos muestra el número de elementos
console.log(newCountries); // 5

// pop() (elimina elementos del array, el último)
const removesCountry = countries.pop();
console.log(countries);     // [ 'USA', 'Canada', 'UK', 'Germany' ]
console.log(removesCountry);    // Australia