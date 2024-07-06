
// Enlace implícito o implicit binding

const house = {
    dogName: 'Fido',
    dogGreeting: function () {
        console.log(`Hi, I'm ${this.dogName}`); // este this corresponde al objeto al cual está vinculado esta función
    }
}

house.dogGreeting();


// Enlace explícito o explicit binding

function dogGreeting () {
    console.log(`Hi, I'm ${this.dogName}`); // este this ya no está apuntando al objeto que queremos (house1)
}


/* // De esta forma nos dará error:
const house1 = {
    dogName: 'Fido',
    dogAge: 3
}

house1.dogGreeting()
*/


// Necesitamos anclar o vincular la función (dogGreeting) con el objeto que queremos (house1)
const newHouse = {
    dogName: 'Coconut',
    dogAge: 3
}
dogGreeting.call(newHouse);

function newDogGreeting (owner, address) {
    console.log(`Hi, I'm ${this.dogName} and I live with ${owner} on ${address}`); // este this ya no está apuntando al objeto que queremos (house1)
}

const owner = 'Lucy';
const address = 'Avenue 123';
newDogGreeting.call(newHouse, owner, address);