function pedirNombre() {
    //Se inicia la variable nombre con un valor en blanco
    let nombre = "";
    //Mientras el usuario pulse el botón cancelar o introduzca la información en blanco se solicitará el nombre
    while (nombre == "" || nombre == null) {
        nombre = prompt("Indica tu nombre");
        //Botón aceptar sin haber escrito nombre
        if (nombre == "") {
            window.alert("⚠ No puedes dejar el nombre en blanco")
        }
        //Botón cancelar. Si se pulsa cancelar obtenemos un valor null
        if (nombre == null) {
            window.alert("⚠ No se permite opción de cancelar sin haber introducido el nombre")
        }
    }
    alert("Bienvenid@ al curso de javascript " + nombre);
    /*Tras dar la bienvenida al usuario se da la opción al usuario de abrir Visual Studio Code 
    en su versión web en una nueva pestaña.
    Almacenamos la información de la ventana window.confirm en una variable (window.confirm funciona de manera 
    similar a window.alert pero incluye la opción de cancelar la ventana emergente)*/
    let vscode = window.confirm("Si quieres abrir Visual Studio Code para crear tu primer proyecto pulsa aceptar")
    //Dependiendo de si el valor de la variable vscode es true o false se actua en consecuencia mediante un bucle if else
    if (vscode == true) {
        window.open("https://vscode.dev/", "_blank");
    } else {
        alert("Hasta pronto " + nombre)
    }
}

function listaNumeros() {
    alert("Vamos a crear una lista de números");
    let numValores = 0; //Iniciamos la variable numValores
    numValores = prompt("Indica el número de valores que contiene la lista");
    let lista = [];//Creamos un array vacio otra forma de declarar el array es let lista = new array()
    //Mediante un bucle for se piden valores hasta completar la lista
    for (let i = 0; i < numValores; i++) {
        let valor = prompt("Valor " + (i + 1) + ": ");
        lista.push(valor);//El bucle for va añadiendo los valores al array
    };

    //Muestra los datos por consola utilizando un bucle for para recorrer el array generado anteriormente
    console.log("Esta es la lista de numeros:");
    for (let i = 0; i < numValores; i++) {
        console.log(lista[i] + "\n");
    }
}

function factorial() {
    let x = "";
    //Se pedirá el valor mientras el usuario no introduzca datos o pulse el botón cancelar
    while (x == "" || x == null) {
        x = prompt("Indica valor para calcular factorial");
        if (x == "") {
            window.alert("⚠ No puedes dejar el valor en blanco")
        }
        //Botón cancelar. Si se pulsa cancelar obtenemos un valor null
        if (x == null) {
            window.alert("⚠ No se permite opción de cancelar sin haber introducido un valor")
        }
    }
    let valorInicial = x//Variable que guarda el valor unicia para mostrarlo por consola
    let i = x - 1; //En un factorial el siguiente factor de la multiplicación es una unidad menor del valor de partida
    //El bucle while realizará el cálculo mientras i sea mayor que 1 e ira multiplicando x por i mientras i se igual o mayor que 1
    while (i >= 1) {
        x *= i;
        i--;
    }
    console.log("El factorial de " + valorInicial + " es " + x);
}

function mensaje() {
    let edad = "";
    while (edad == "" || edad == null) {
        edad = prompt("Indica tu edad para continuar");
        if (edad == "") {
            window.alert("⚠ No puedes dejar la edad en blanco")
        }
        //Botón cancelar. Si se pulsa cancelar obtenemos un valor null
        if (edad == null) {
            window.alert("⚠ No se permite opción de cancelar sin haber introducido la edad")
        }
    }
    if (edad >= 18) {
        alert("Eres mayor de edad");
    }
    else {
        alert("No es posible el acceso al contenido al ser menor de edad");
    }
}