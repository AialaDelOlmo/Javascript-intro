// Si vamos a construir más de una persona, podemos crear un constructor
// Se crea una función, con el nombre que empiece en mayúsculas

function Persona (nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

// se generan instancias de ese objeto Persona. Utilizamos "new"
const persona1 = new Persona("Juan", "Perez", 20);

console.log(persona1);  // Persona { nombre: 'Juan', apellido: 'Perez', edad: 20 }

// Agregamos una propiedad nueva al objeto
// Se crea a través de una instancia concreta, no para todas
persona1.nacionalidad = "Español";

const persona2 = new Persona("Laura", "Díaz", 30);
console.log(persona2);  // No tiene la propiedad nacionalidad. Persona { nombre: 'Laura', apellido: 'Díaz', edad: 30 }

// Si se quiere generar una nueva propiedad en la función constructora, que se vaya a comprartir en todos las instancias:
Persona.prototype.saludar = function () {
    console.log(`Hola, soy ${this.nombre} ${this.apellido}`)
}

persona1.saludar(); // Hola, soy Juan Perez
persona2.saludar(); // Hola, soy Laura Díaz
