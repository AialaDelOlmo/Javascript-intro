/**
 * Operadores Lógicos
 * 
 * && // Si A y B se cumplen
 * || Si A o B se cumple 
 * != Si no se cumple
 * !() Podemos usarlo para convertir true en false y viceversa
 */


const a = 10;
const b = 20;
const c = "10";

console.log("a = " , a, " b = ", b, " c = '", c ,"'");

console.log("¿ a == b && a === c ?",  a == b && a === c);    // false
console.log("¿ a ! b || a === c ?", a != b || a === c);    // true
console.log("¿ !(a === c) ? ", !(a === c));    // True