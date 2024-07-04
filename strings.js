//STRINGS
const primeraOpcion = 'comillas simples';
const segundaOpcion = "comillas simples";
const terceraOpcion = `comillas simples`;

//COCATENACIÓN DE STRINGS
//1. Concatenación: Opción +
const direccion = 'Calle falsa 123';
const ciudad = 'Sprinfield';
const direccionCompleta = 'Mi dirección completa es' + direccion + ciudad;
console.log(direccionCompleta); // Mi dirección completa esCalle falsa 123Sprinfield

// Tener en cuenta los espacios con este tipo de concatenación
const direccionCompletaConEspacio = 'Mi dirección completa es ' + direccion + ' ' + ciudad;
console.log(direccionCompletaConEspacio); // Mi dirección completa es Calle falsa 123 Sprinfield

//2. Concatenación: Template Literals
const nombre = 'Aiala';
const pais = '🇪🇸';
const presentacion = `Hola, soy ${nombre} de ${pais}`;
console.log(presentacion); // Hola, soy Aiala de 🇪🇸

//3. Concatenación: join()
const primeraParte = 'Me encanta ';
const segundaParte = 'comer ';
const terceraParte = '🌮 ';
const pensamiento = [primeraParte, segundaParte, terceraParte];
console.log(pensamiento.join('😋 ')); // Me encanta 😋 comer 😋 🌮 

//4. Concatenación: concat()
const hobbie1 = 'yoga';
const hobbie2 = 'dibujar';
const hobbie3 = 'patinar';
const hobbies = 'Mis hobbies son: '.concat(hobbie1, ', ', hobbie2, ', ', hobbie3, '.');
console.log(hobbies); // Mis hobbies son: yoga, dibujar, patinar.

// Caracteres de escape
// NO podríamos usar comillas simples dentro de comillas simples
//const whatDoIDo = 'I'm Software Engineer';
// Veremos 3 formas de arreglarlo:

// 1. Escape alternativo (usar comilla doble)
const escapeAlternativo = "I'm Software Engineer";

// 2. Barra invertida (usar barra invertida para anular la función de texto entrecomillado)
const escapeBarraInvertida = 'I\'m Software Engineer';

// 3. Template literals  (usar comilla invertida)
const escapeComillaInvertida = `I'm Software Engineer`;

// Escritura de Strings Largos
/*
    Las rosas son rojas,
    Las violetas son azules,
    Caracter inesperado,
    En la línea 86
*/

const poema = 'Las rosas son rojas,\n' + 
            'Las violetas son azules,\n' + 
            'Caracter inesperado,\n' + 
            'En la línea 86.';

console.log(poema);

//De esta forma también repera los espacios internos (márgenes)
const poema2 = 'Las rosas son rojas,\n\
            Las violetas son azules,\n\
            Caracter inesperado,\n\
            En la línea 86.';

console.log(poema2);

//La comilla invertida funciona igual que el anterior.
const poema3 = `Las rosas son rojas,
            Las violetas son azules,
            Caracter inesperado,
            En la línea 86.`;

console.log(poema3);


// MANIPULACIÓN DE STRINGS

// typeof: para ver de qué tipo es el string
const stringPrimitivo = 'Soy un string primitivo';
console.log(typeof stringPrimitivo); // string

const stringPrimitivoTambien = String('Soy un string primitivo también');
console.log(typeof stringPrimitivoTambien); // string

// String objeto
const stringObjeto = new String('Soy un string objeto');
console.log(typeof stringObjeto); // object

// Acceder a caracteres
// Los string tienen índices, cada caracter está numerada del 0 al x
const saludo = 'Hola. ¿Cómo estás?';

// Accediendo al índice x
console.log(saludo[2]); // l 

// Accediendo mediante el método charAt(x)
console.log(saludo.charAt(2)); // l

//Para obtener el valor del ´índice de una letra concreta, se usa indexof('letra')
console.log(saludo.indexOf('o')); // 1 (encuentra la primera o)

//Lo mismo pero para una palabra
console.log(saludo.indexOf('Cómo')); // 7 (cuando encuentra el primer caractere de la palabra)

//Cuando buscamos una palabra que no existe, indicará -1
console.log(saludo.indexOf('como')); // -1

//Cuando buscamos una letra pero queremos su última posición
console.log(saludo.lastIndexOf('o')); // 10

//Cuando queremos conocer las letras entre X e Y índices
console.log(saludo.slice(3, 5)); // a.

//Cuando queremos conocer la longitud de nuestro string
//length es una propiedad de un string. son atributos de un objeto que almacenan información, no funciones, por tanto, no lleva '()'
console.log(saludo.length); // 18

//Para poner todo el texto en mayúsculas
console.log(saludo.toUpperCase()); // HOLA. ¿CÓMO ESTÁS?

//Para poner todo el texto en minúsculas
console.log(saludo.toLowerCase()); // hola. ¿cómo estás?

//Dividir un string a partir de un caractere (p.e espacios ' ')
const saludoDividido = saludo.split(' ');
console.log(saludoDividido); // [ 'Hola.', '¿Cómo', 'estás?' ]
console.log(saludoDividido[1]); // ¿Cómo

//Quitar los espacios de inicio y final del string
const saludoConEspacios = ' Hola Mundo ';
const saludoSinEspacios = saludoConEspacios.trim();
console.log(saludoSinEspacios);

const saludoOriginal = 'Hola Mundo';
const saludoNuevo = saludoOriginal.replace('Mundo', '💙');
console.log(saludoNuevo); // Hola 💙

