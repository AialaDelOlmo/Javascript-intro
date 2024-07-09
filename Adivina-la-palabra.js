
let palabraSecreta = 'gato';
let pista1 = 'es un animal';
let intentos = 3;


function verificarSuposicion(suposicion, palabraSecreata){
    if(suposicion.toLowerCase() === palabraSecreta){
        return true;
    }
        return false;
}

function jugarAdivinaLaPalabra() {
    alert("Bienvenido a jugar a adivina la palabra oculta");
    alert("Tienes 3 intentos para adivinar la palabra");
    alert(`La palabra oculta ${pista1}`);
    
    while (intentos > 0) {
        let suposion = prompt("Adivina la palabra");
        if(verificarSuposicion(suposion, palabraSecreta)){
            alert("¡Muy bien, has adivinado la palabra!");
            break;
        }else{
            intentos--;
            if (intentos > 0){
                alert(`No es correcto, te quedan ${intentos} intentos`);
            } else{
                alert(`Agotaste tus intentos, la palabra oculta era ${palabraSecreta}`);
            }
           
        }
    
    }
}


jugarAdivinaLaPalabra();