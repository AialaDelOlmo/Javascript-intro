// Methods that iterate over an array
// Methods that DO NOT modify the original array (Immutability)

// map()
const numbers = [1,2,3,4,5];
const squaredNumbers = numbers.map(num => num * num);

console.log(numbers); // [ 1, 2, 3, 4, 5 ]
console.log(squaredNumbers); // [ 1, 4, 9, 16, 25 ]

// forEach()
const colors = ['red', 'pink', 'blue'];
const interatedColors = colors.forEach(color => console.log(color));    // red
                                                                        // pink
                                                                        // blue

console.log(colors); // [ 'red', 'pink', 'blue' ]
console.log(interatedColors); // undefined


// Excercise 1: Fahrenheit to Celsius conversion
const temperaturesFahrenheit = [32, 68, 95, 104, 212];
const temperaturesCelsius = temperaturesFahrenheit.map(fahrenheit => (5/9) * (fahrenheit -32));

// Usamos map()
console.log(temperaturesFahrenheit); // [ 32, 68, 95, 104, 212 ]
console.log(temperaturesCelsius); // [ 0, 20, 35, 40, 100 ]

// Excercise 2: Sum of Elements in an Array
const newNumbers = [1, 2, 3, 4, 5];
let sum = 0;

// Usamos forEach()
newNumbers.forEach(number => {
    sum += number;
})

console.log('Array of Numbers: ', newNumbers); // [ 1, 2, 3, 4, 5 ]
console.log('Sum of Numbers: ', sum); //  15