/*
Requerimientos del reto:

1. El usuario debe poder ingresar su usuario y contraseña.
2. El sistema debe ser capaz de validar si el usuario y 
contraseña son correctos.
3. Si el usuario y la contraseña son correctos, el sistema
debe mostrar un mensaje de bienvenida y mostrar el timeline
del usuario.
4. Si el usuario o la contraseña son incorrectos, el sistema
debe mostrar un mensaje de error y no mostrar ningun timeline.
*/



const usersDatabase = [
    {
        username: "andres",
        password: "123",
    },
    {
        username: "caro",
        password: "456",
    },
    {
        username: "mariana",
        password: "789",
    },
];


const usersTimeline = [
    {
        username: "Estefany",
        timeline: "Me encanta Javascript!"
    },
    {
        username: "Oscar",
        timeline: "Bebeloper es lo mejor!"
    },
    {
        username: "Mariana",
        timeline: "A mi me gusta más el café que el té"
    },
    {
        username: "Andres",
        timeline: "Yo hoy no quiero trabajar"
    }
];

function comprobarContraseña(name, password) {
    let isCorrect = false;
    usersDatabase.forEach(user => { 
        if(user.username == name && user.password == password) {
            isCorrect = true;
        } 
    });

    return isCorrect;
}

function mostrarMensajeBienvenida(user) {
    console.log(`Bienvienid@ ${user}`);
}

function mostrarTimeline() {
    console.log(usersTimeline);
}

//const username = prompt("Introduce tu usuario: ");
//const password = prompt("Introduce tu contraseña: ");

const name = "mariana";
const password = "789";
//console.log(comprobarContraseña(name, password));
if(comprobarContraseña(name, password)) {
    mostrarMensajeBienvenida(name);
    mostrarTimeline();
} else {
    console.log(`Usuario o contraseña incorrectos.`);
}