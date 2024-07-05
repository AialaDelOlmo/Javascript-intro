// Empezar con is o has para que parezca una pregunta de sí o no

const isActive = true;
const hasPermission = false;

// Conversión implícita (lo hace JavaScript por debajo)
const result = 5 > 3; // El resultado lo dará en booleano
console.log(result); // true

const name = 'Aiala';
// Operador doble negación (!!): da el valor booleano normal de un valor. Es como si usásemos el objeto Boolean().
console.log(!!name); // true (mira si name tiene un valor)
const name2 = '';
console.log(!!name2); // false (no tiene valor)

// Conversión explícita (la hacemos los desarrolladores)
// Javascript toma el 0 como falso y el resto de números como verdaderos
const value = 0;
const explicitBoolean = Boolean(value);
console.log(explicitBoolean); // false

const otherValue = 24; // con -24 también saldría true
const explicitBoolean2 = Boolean(otherValue);
console.log(explicitBoolean2); // true