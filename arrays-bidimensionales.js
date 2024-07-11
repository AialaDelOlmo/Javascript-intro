let array1D = [1, 2, 3]; // unidimensional
let array2D = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]; // Bidimensional

// para que visualmente se vea más claro, podemos escribirlo en forma de matriz
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Podemos referirnos un elemento concreto de la matrizindicando la fila y columna (empiezan en 0)
matrix[1][2] = 10;  // cambiamos el 6 por el 10
console.log(matrix);    //[ [ 1, 2, 3 ], [ 4, 5, 10 ], [ 7, 8, 9 ] ]

// ver qué tenemos en una posición concreta
let value = matrix[0][1];
console.log(value);    // 2

// Operations
// Para recorrer una matriz, necesitamos recorrer cada fila, y dentro de cada fila recorrer cada columna.
// Usamos doble for

for (let i = 0; i < matrix.length; i++) {   // itera entre las filas 
    for (let j = 0; j < matrix[i].length; j++){  // itera entre las columnas. Necesitamos saber cuántos elementos hay en esa fila, para recorrerlos
        console.log(matrix[i][j]);
    }
}

function findElement (matrix, element) {
    for (let i = 0; i < matrix.length; i++){
        for (let j = 0; j < matrix[i].length; j++){
            if (matrix[i][j] === element){
                return true;
            }
        }
    }
    return false;
}

console.log(findElement(matrix, 5));    // true, sí que existe en la matrix

// Duplicar los valores de la matriz
function duplicateMatrix (matrix) {
    let newMatrix = [];
    for (let i = 0; i < matrix.length; i++){
        newMatrix[i] = [...matrix[i]]; // en la fila i de la nueva matriz, duplica la fila i de la matriz original
    }
    return newMatrix;
}

console.log(duplicateMatrix(matrix));  // [ [ 1, 2, 3 ], [ 4, 5, 10 ], [ 7, 8, 9 ] ]