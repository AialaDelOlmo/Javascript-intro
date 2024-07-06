
const owner = 'Lucy';
const address = 'Avenue 123';

function dogGreeting (owner, address) {
    console.log(`Hi, I'm ${this.dogName} and I live with ${owner} on ${address}`);
}

const newHouse = {
    dogName: 'Coconut'
}

dogGreeting.call(newHouse, owner, address);

// Si hay muchos parámetros que pasarle al call, se pueden poner en un array y usarlo con apply:
// La diferencia entre call y apply es solo la forma en el que le pasamos los parámetros a la función dogGreeting
const necessaryValues = [owner, address];
dogGreeting.apply(newHouse, necessaryValues);

// Otra forma es con bind, tiene la misma función pero nos devolverá otra función
const bindingWithBind = dogGreeting.bind(newHouse, owner, address);
console.log(bindingWithBind); // Aquí vemos que nos devuelve una función [Function: bound dogGreeting]
bindingWithBind(); //Podemos ejecutarlo de esta forma (Hi, I'm Coconut and I live with Lucy on Avenue 123)
