// Condición IF
    let nombre = "Aiala";
    //let nombre = "Marta";
    //let nombre = "María";

    if (nombre === "Aiala"){
        console.log("Hola Aiala");
    }else if (nombre === "Marta") {
        console.log("Hola Marta");
    }else {
        console.log("Nombre no encontrado");
    }

    let mensaje;
    const edad = 20;
    if (edad >= 18){
        mensaje = "Es mayor de edad, puede pasar";
    } else {
        mensaje = "No es mayor de edad, no puede pasar";
    }

    console.log(mensaje);

// Condición TERNARIA
    // Se puede escribir lo mismo en una sola sentencia.
    // Estructura: condicion ? true : false

    const edad2 = 17;
    const mensaje2 = edad2 >= 18 ? "Es mayor de edad, puede pasar" : "No es mayor de edad, no puede pasar";

    console.log(mensaje2);

//SWITCH
    // Solo mira si se cumple la expresión a validar. Si no, se ejecutará un default
    /*
    // Estructura:
    switch(expresion) {
        case valor1:
            // código a ejecutar
            break; // rompe el ciclo para que no entre a evaluar el siguiente case
        case valor2:
            // código a ejecutar
            break; // rompe el ciclo
        case valor3:
            // código a ejecutar
            break; // rompe el ciclo
        case valor4:
            // código a ejecutar
            break; // rompe el ciclo
        default: // ninguno de los casos anteiores fue verdad, se ejecutará lo siguiente
            // código a ejecutar
    }
    */

    let expr = "Papayas"; // se utiliza la comparación === (tipo y valor)
    switch(expr) {
        case "Tomates":
            console.log("Los tomates cuestan 0.95€ el kilo");
            break; 
        case "Naranjas":
            console.log("Las naranjas cuestan 1.65€ el kilo");
            break; 
        case "plátanos":
            console.log("El platano cuestan 2.95€ el kilo");
            break; 
        case "Mangos": 
        case "Papayas":
            console.log("Los mangos y las papayas cuestan 3.15€ el kilo");
            break; 
        default: 
            console.log(`No se ha encontrado el producto ${expr}`);
    }

// LOOP: FOR
    // Estructura:
    /*
    for (variable; condición; incremento) {
        // Código a ejecutar
    }
    */

    let list = ["eat", "sleep", "code", "repeat"];
    for (let i = 0; i < list.length; i++) {
        console.log(list[i]);
    }
    console.log("longitud de la lista: ", list.length);

// LOOP: ForEach
    // Estructura:
    /*
    Recorre el elemento hasta que acabe. Se puede hacer con arrow functions:
    array.forEach((item) => {
        codigo a ejecutar
    })

    */

    let list2 = ["eat", "sleep", "code", "repeat"];
    list2.forEach((item) => {
        console.log(item);
    }
    )

// LOOP: for of
    // por cada elemento de cierta cosa, haremos x código e iteraremos
    // Solo funciona con elementos iterables como arrays o listas, cadenas de texto (strings), etc.)
    /** iterable[]
     * 
     * for (variable of objeto) {
     *      código a ejecutar
     * }
     */
    console.log("----------------- for of");
    let canasta = ["manzana", "pera", "naranja", "uva"];
    for (fruta of canasta) {
        console.log(fruta);
    }

// LOOP: for in --> objetos
    // Para tipos de datos complejos (Objetos), donde la info se guarda en forma de propiedad: valor
    /* objeto {}
    for variable in objeto) {
        codigo
    }

    */
    console.log("----------------- for in");
    const listaDeCompras = {
        manzana: 5,
        pera: 3,
        naranja: 2,
        uva: 1
    }

    // Imprime las propiedades de mi objeto
    for (fruta in listaDeCompras) {
        console.log(fruta);
    }
    // Si yo ahora quiero imprimir el valor de cada una de estas propiedades, haría:
    for (fruta in listaDeCompras) {
        console.log(`${fruta} : ${listaDeCompras[fruta]}`);
    }

    // un for of nos dará un error en este caso, ya que listaDeCompras es un objeto en vez de un elemento iterable
    /*for (fruta of listaDeCompras) {
        console.log(fruta);
    }
    */

   // WHILE
    /* Estructura
    while(condicion) {
        codigo
    }
    */

    let contador = 0;
    while (contador < 10) {
        console.log(contador);
        contador++;
    }

// DO WHILE
/**
 * Estructura
 * do {
 *  código
 * } while (condición)
 */

    let contador1 = 0;

    do {
        console.log(contador1);
        contador1++;
    } while (contador1 < 10)