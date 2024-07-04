//HOLA MUNDO
console.log("Hola Mundo")

//VARIABLES
let cajaDeAndy = "Woody"
console.log(cajaDeAndy)

// Lo NO permitido (nombres no relevantes o descriptivos o desordenadas)
let cd = 'Woody';
let cda = 'Woody';
let pcAndy = 'Woody';
let d, dda
    pcAndy = 'Woody';

// Lo permitido
let primerTrasteoDeAndy = 'Woody'
let urlDelUsuario = 'https://wwww.google.com'
let idDelUsuario = '123456789'

//MUTABILIDAD
//tipo de dato primitivo - Inmutable
let numero = 23;
numero = numero + 10;
console.log(numero); //hará la suma (33). El valor original no se cambia, pero JS crea un nuevo valor para esta variable

let esVerdadero = true;
esVerdadero = false;
console.log(esVerdadero); //tampoco modifica el valor original, es un valor nuevo

//tipo de dato complejos - Mutable
let usuario = { nombre: 'Pepito', edad: 15 };
usuario.edad = 20;
console.log(usuario); //sí modifican el valor original

let frutas = ['manzana', 'pera'];
frutas[0] = 'sandia';
console.log(frutas);

function cambiarNombre (objeto) {
    objeto.nombre = 'Nuevo nombre';
}

let persona = { nombre: 'Antonio' };
//console.log(cambiarNombre(persona)); //así saldría undefined
cambiarNombre(persona);
console.log(persona); //ahora sí que está cambiando a nuevo nombre

//PASO POR VALOR VS POR REFERENCIA
let x = 1;
let y = 'Hola';
let z = null;

let a = x;
let b = y;
let c = z;

console.log(x, y, z, a, b, c); //rdo: 1 Hola null 1 Hola null

//Paso por valor (tipos de datos primitivos), se sobreescriben
a = 12;
b = 'Valor';
c = undefined;

console.log(x, y, z, a, b, c); //rdo: 1 Hola null 12 Valor undefined

//Paso por referencia (tipos de datos complejos) Con Arrays
// Se pasa la dirección de memoria donde está
let frutas2 = ['manzana'];
frutas2.push('pera'); //se agrega un valor al array en la posición de memeria donde está
console.log(frutas2);

let panes = ['🍞'];
let copiaDePanes = panes; //copia de panes no tiene el emogi, solo apunta a panes
panes.push('🥖');
console.log(panes, copiaDePanes); //tanto panes como copiaDePanes están apuntando a la misma dirección de memoria

//Paso por referencia (tipos de datos complejos) Con Objetos
//Ejemplo 1
let frutas3 = {
    naranja: '🍊'
}
let vegetales = frutas3;

vegetales.naranja = '🌽'; //sí que se modificará el valor de frutas3
console.log(frutas3); // naranja: '🌽' }
console.log(vegetales); //saldra los mismo, ya que apunta a frutas

//Ejemplo 2
let ropa= {
    blusa: '👚'
}
ropa.pantalon = '👖'; // se añade otra direccion en memoria, añadiendo este nuevo objeto 
// Gargabe Collecion:
// JavaScript, hasta ahora guardaba blusa en la dir. 1 y ahora blusa + pantalón en la 2.
// Lo que hace ahroa es eliminar esa dirección 1, quedándose solo con la 2 
console.log(ropa); // { blusa: '👚', pantalon: '👖' }
