/*
Estructura de datos

key / value
objeto {
    propiedad: valor, 
    propiedad: valor, 
    propiedad: valor
    métodos
}

*/

const persona = {
    nombre: "Aiala",
    edad: 30,
    direccion: {
        calle: "Falsa 123",
        ciudad: "Springfield", 
    },
    saludar() {
        console.log(`hola, mi nombre es ${persona.nombre}`);

    }
    
};

console.log(persona);   /*{
    nombre: 'Aiala',
    edad: 30,
    direccion: { calle: 'Falsa 123', ciudad: 'Springfield' },
    saludar: [Function: saludar]
  }*/
console.log(persona.nombre);    // Aiala
console.log(persona.saludar()); // hesto nos dará undefined, ya que el mismo método ya tienen un console.log
persona.saludar(); // hola, mi nombre es Aiala

// Si queremos agregar una propiedad y no podemos hacerlo en el mismo objeto (p.s. si es muy grande) lo hacemos así:
persona.telefono = "555-555-5555";
console.log(persona);   /*{
    nombre: 'Aiala',
    edad: 30,
    direccion: { calle: 'Falsa 123', ciudad: 'Springfield' },
    saludar: [Function: saludar]
    telefono: '555-555-5555'
  }*/

// Si queremos agregar un nuevo método
persona.despedir = () => {
    console.log("Adios");
}
console.log(persona.despedir());    // Adios

// Ir a una propiedad concreta
console.log(persona.direccion.calle);   // Falsa 123

// Borrar una propiedad
delete persona.telefono;
console.log(persona);   // ya no existe teléfono

// Borrar un método: no se pueden borrar.
delete persona.despedir;
console.log(persona);   // ya no existe teléfono