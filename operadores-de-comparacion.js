// OPERADORES DE COMPARACIÓN

/*
==// true si la igualdad es en el valor
=== // true si la igualdad es en el valor y además también en el tipo de dato
!= // true Si ambos valores son diferentes
!== // true si ambos valores son diferentes, tanto en el valor como en el tipo de dato
> // true si el primero es MAYOR que el segundo
< // True si el primero es MENOR que el segundo
>= // true si el primero es MAYOR O IGUAL que el segundo
<= // True si el primero es MENOR O IGUAL que el segundo
*/

const a = 10;
const b = 20;
const c = "10";

console.log("a = " , a, " b = ", b, " c = '", c ,"'");

console.log("¿ a == b ?", a==b);    // false
console.log("¿ a === c ?", a===c);    // false
console.log("¿ a != b ? ", a!=b);    // true
console.log("¿ a !== c ?", a!==c);    // false
console.log("¿ a > b ?", a>b);    // true
console.log("¿ a <= b ?", a<=b);    // true
console.log("¿ a > c ?", a>c);    // false
