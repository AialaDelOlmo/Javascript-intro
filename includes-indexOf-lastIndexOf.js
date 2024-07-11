

// includes() with numbers
// devuelve true si el array incluye un elemento determinado

const numbers = [1, 2, 3, 4, 5];

const result1 = numbers.includes(3);
console.log(result1);   // true, si que está el 3

const result2 = numbers.includes(8);
console.log(result2); // False, no está el 8

// indexOf()
// Devuelve el PRIMER índice en el que se encuentra el elemento deternimado

const fruits = ['apple', 'cherry', 'grape', 'mango'];

const index1 = fruits.indexOf('grape');
console.log(index1);    // 2 (posición 2, contando el 0)

const index2 = fruits.indexOf('blueberry');
console.log(index2);    // -1, significa que 'blueberry' no está en el array

// lastIndexOf()
// Devuelve el ÚLTIMO índice en el que se encuentra el elemento deternimado

const numbersAgain = [2, 4, 6, 8, 10, 6];

const lastIndex1 = numbersAgain.lastIndexOf(6);
console.log(lastIndex1);    // 5, el último 6 se encuentra en la posición 5

const lastIndex2 = numbersAgain.lastIndexOf(3);
console.log(lastIndex2);   // -1, significa que '3' no está en el array


// Exercise · Finding substring Indices

const stringArray = ['apple', 'banana', 'orange', 'grape', 'banana', 'kiwi'];
const target = 'banana';

function findStringIndicesInArray(stringArray, target) {
    // podemos devolver un objeto que tenga todo lo que necesitamos. Lo inicializamos como si el elemento no existiera en el array
    const result = {
        includesTargetString: false,
        firstOccurrenceIndex: -1,
        lastOccurrenceIndex: -1
    }
    
    //stringArray.forEach((element) => {
        if(stringArray.includes(target)){
            result.includesTargetString = true;
            result.firstOccurrenceIndex = stringArray.indexOf(target);
            result.lastOccurrenceIndex = stringArray.lastIndexOf(target);
        }

       // })
    return result;

}

const result = findStringIndicesInArray(stringArray, target);
console.log(result);