// Methods that iterate over an array
// Methods that DO NOT modify the original array (Immutability)

// filter()

const numbers = [1,2,3,4,5,6,7,8,9,10];
const evenNumbers = numbers.filter(number => number % 2 === 0);  // con resto 0

console.log(numbers); // [
    // 1, 2, 3, 4,  5,
    // 6, 7, 8, 9, 10
    // ]
console.log(evenNumbers); // [ 2, 4, 6, 8, 10 ]


// Case 1 · suma de elementos del array
// reduce(variable que acumulará la suma, cada valor del array, valor inicial por el que empezará a contar)
const numbersReduce = [1,2,3,4,5];
const sum = numbersReduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0 );

console.log(numbersReduce); // [ 1, 2, 3, 4, 5 ]
console.log(sum); // 15

// Case 2 · repetición de palabra en array
const words = ['apple', 'banana', 'hello', 'bye', 'banana', 'bye', 'bye'];
const wordFrecuency = words.reduce((accumulator, currentValue) => {
    if(accumulator[currentValue]) {
        accumulator[currentValue]++;
    } else {
        accumulator[currentValue] = 1;
    }
    return accumulator;
}, {});

console.log(wordFrecuency); // { apple: 1, banana: 2, hello: 1, bye: 3 }


// Excersice: Passing Grace Average

const grades = [85, 92, 60, 78, 95, 66, 88, 50, 94];

// Filtramos los aprovados (>=70)
const passingGrades = grades.filter(grade => grade >= 70);
console.log("Passing grades: ", passingGrades);

// Calculamos el promedio de estas notas
const AverageGrades = passingGrades.reduce((sum, grade) => sum + grade, 0) /passingGrades.length;
console.log("Average passing grades: ", AverageGrades); //88.66666666666667