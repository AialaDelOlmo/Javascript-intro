// Las clases son un tipo de función constructora pero con una sintaxis distinta
// Es una especie de molde que nos permite instanciar objetos

class Persona {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad
    }
    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`);
    }
}

const persona1 = new Persona("Mariana", 25);
persona1.saludar();


// Herencia
class Animal {
    constructor(nombre, tipo){
        this.nombre = nombre;
        this.tipo = tipo;
    }
    emitirSonido() {
        console.log("El animal emite un sonido");
    }
}

// Al poner el extends ya podemos utilizar las propiedades de esa clase padre
class Perro extends Animal {     
    constructor(nombre, tipo, raza){
        super(nombre, tipo); //Estas dos propiedades las trae del padre
        this.raza = raza; // Esta propiedad es propia
    }
    emitirSonido() {    // En instancias perro, sacará su propio mensaje, no el genérico de Animal
        console.log("El perro ladra");
    }
    correr() {
        console.log(`${this.nombre} corre alegremente`);
    }
}

const perro1 = new Perro ("Bobby", "Perro", "Podenco");
console.log(perro1);    // Perro { nombre: 'Bobby', tipo: 'Perro', raza: 'Podenco' }
perro1.emitirSonido();  // El perro ladra
perro1.correr();        // Bobby corre alegremente

// Las clases animal y perro generan automáticamente lo que se llama un prototipo
// En él se guardan los métodos y propiedades de cada una de las clases

perro1.nuevoMetodo = function () {
    console.log("Este es un método");
}

console.log(perro1); /* En la instancia de perro1 vemos el nuevo método que hemos creado, pero no se ha creado en Perro
    Perro {
        nombre: 'Bobby',
        tipo: 'Perro',
        raza: 'Podenco',
        nuevoMetodo: [Function (anonymous)]
    } */

// Si se necesita crear el nuevo método en la misma clase, pero ya tenemos muchas instancias de ella y no queremos que haya errores, 
// podemos usar prototype (igual que con funciones constructoras) en la clase constructora

Perro.prototype.segundoMetodo = function () {
    console.log("Este es otro método");
}

perro1.segundoMetodo(); // Este es otro método (vemos que se ha creado)

// Cadena de prototipado
console.log("-------------");
let currentPrototype = Object.getPrototypeOf(perro1);
//console.log(currentPrototype);

  for (;currentPrototype !== null; currentPrototype = Object.getPrototypeOf(currentPrototype)) {
    console.log(currentPrototype);
  }


  // la palabra reservada "this" hace referencia a la clase u objeto en el que estamos trabajando
  // El nombre y edad del objeto Persona será = a la que se le pase en los argumentos al crear la instancia
  class Persona1 {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad
    }
  }

  const persona2 = new Persona1("Alice", 25);
  // En este caso, this.nombre hace referencia al nombre de nuestra instancia (persona1)
  persona2.nuevoMetodo = function () { 
    console.log(`Mi nombre es ${this.nombre}`)
  }

  persona2.nuevoMetodo();   // Mi nombre es Alice
  