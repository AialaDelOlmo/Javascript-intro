// Capacidades que tienen las funciones al igual que otros objetos

// 1. Pasar funciones como argumentos -> callback
function a () {}
function b (s) {}
b(a);

// 2. Retornar funciones
function a1 () {
    function b (s) {}
    return b
}

// 3. Asignar funciones a variables -> Expresión de función
const d = function() {} // en este caso no le ponemos nombre a la función

// 4. Tener propiedades y métodos
function a2 () {}
const obj = {}
a2.call(obj);

// 5. Anidar funciones -> Nested functions
function a3 () {
    function b () {
        function c () {
        
        }
        c();
    }
    b();
}
a3();

// 6. Es posible almacenar funciones en objetos -> Métodos
const rocket = {
    name: 'Falcon 9',
    launchMessage: function launchMessage () {
        console.log('🔥');
    }
}
rocket.launchMessage();