// variable para almacenar los contactos
let contactos = [];


function cargarContactos() {
    contactos.push({
        rut: "17567895-1",
        nombre: "Juan Pérez",
        telefono: "555-1234",
        correo: "juan.perez@example.com",
        sexo: true,
        age: 20
    });

    contactos.push({
        rut: "17567895-2",
        nombre: "Maria Pérez",
        telefono: "555-1234",
        correo: "maria.perez@example.com",
        sexo: false,
        age: 25
    });
}

/**
* Agenda de contactos en JavaScript
* Este programa permite al usuario crear, listar, buscar, eliminar y actualizar contactos en una agenda.
* Cada contacto tiene un nombre, un número de teléfono y un correo electrónico.
* El programa utiliza un array para almacenar los contactos y funciones para realizar las operaciones necesarias.
*/
function menu() {
    console.log("***************************************");
    console.log("=Bienvenido a tu agenda de contactos=");
    console.log("***************************************");
    console.log("1- Crear contacto");
    console.log("2- Listar contactos");
    console.log("3- Buscar contacto");
    console.log("4- Eliminar contacto");
    console.log("5- Actualizar contacto");
    console.log("6- Salir");
    console.log("***************************************");
}

/**
 * agregar contacto: función que permite al usuario agregar un nuevo contacto a la agenda. Solicita al usuario el nombre, número de teléfono y correo electrónico del contacto y lo agrega al array de contactos.
 */
function agregarContacto() {

    contactos.push({
        rut: "17567895-1",
        nombre: "Juan Pérez",
        telefono: "555-1234",
        correo: "juan.perez@example.com",
        sexo: true,
        age: 20
    });
    console.log("Contacto agregado con éxito");
    console.log("============================");
    console.log("rut:", contactos[0].rut);
    console.log("nombre:", contactos[0].nombre);
    console.log("telefono:", contactos[0].telefono);
    console.log("correo:", contactos[0].correo);
    console.log("sexo:", contactos[0].sexo);
    console.log("age:", contactos[0].age);
}

/**
 * listar contactos: función que muestra todos los contactos almacenados en la agenda. Recorre el array de contactos y muestra el nombre, número de teléfono y correo electrónico de cada contacto.
 */
function listarContactos() {

    for (let contacto of contactos) {
        console.log("rut:", contacto.rut);
        console.log("nombre:", contacto.nombre);
        console.log("telefono:", contacto.telefono);
        console.log("correo:", contacto.correo);
        console.log("sexo:", contacto.sexo);
        console.log("age:", contacto.age);
        console.log("============================");
    }

}

/**
 * buscar contacto: función que permite al usuario buscar un contacto por su nombre. Solicita al usuario el nombre del contacto que desea buscar y muestra la información del contacto si se encuentra en la agenda.
 */
function buscarContacto() {


    let nombre = "J";

    // for para recorrer el array de contactos y buscar el contacto por su nombre
    // por lo tanta la variable let contacto se va a crear en cada iteración del for y va a tener el valor del contacto actual en cada iteración
    for (let contacto of contactos) {
        // utilizamos el método includes para buscar el contacto por su nombre, si el nombre del contacto incluye el nombre que el usuario ingresó, mostramos la información del contacto
        if (contacto.nombre.includes(nombre)) {
            console.log("Contacto encontrado:");
            console.log("rut:", contacto.rut);
            console.log("nombre:", contacto.nombre);
            console.log("telefono:", contacto.telefono);
            console.log("correo:", contacto.correo);
            console.log("sexo:", contacto.sexo);
            console.log("age:", contacto.age);
            return;
        }
    }
    // si el contacto no se encuentra en la agenda, mostramos un mensaje indicando que el contacto no fue encontrado
    console.log("Contacto no encontrado");

}

/**
 * eliminar contacto: función que permite al usuario eliminar un contacto de la agenda. Solicita al usuario el nombre del contacto que desea eliminar y lo elimina del array de contactos si se encuentra en la agenda.
 */
function eliminarContacto() {
    let rut = "17567895-1";


    // utilizamos el método findIndex para buscar el índice del contacto que se desea eliminar, si el contacto se encuentra en la agenda, eliminamos el contacto utilizando el método splice
    // findindex devuelve el índice del primer elemento que cumple con la condición, en este caso, el contacto cuyo rut es igual al rut ingresado por el usuario, si no se encuentra ningún contacto que cumpla con la condición, findIndex devuelve -1
    let index = contactos.findIndex(contacto => contacto.rut === rut);

    if (index !== -1) {
        contactos.splice(index, 1);
        console.log("Contacto eliminado con éxito");
    } else {
        console.log("Contacto no encontrado");
    }
    listarContactos();
}

/**
 * actualizar contacto: función que permite al usuario actualizar la información de un contacto en la agenda. Solicita al usuario el nombre del contacto que desea actualizar y la nueva información del contacto (nombre, número de teléfono y correo electrónico) y actualiza el contacto en el array de contactos si se encuentra en la agenda.
 */
function actualizarContacto() {
    let rut = "17567895-2";
    let nuevoNombre = "Maria Pérez";
    let nuevoTelefono = "555-5678";
    let nuevoCorreo = "maria.perez@example.com";
    let index = contactos.findIndex(contacto => contacto.rut === rut);
    if (index !== -1) {
        contactos[index].nombre = nuevoNombre;
        contactos[index].telefono = nuevoTelefono;
        contactos[index].correo = nuevoCorreo;
        console.log("Contacto actualizado con éxito");
    } else {
        console.log("Contacto no encontrado");
    }

    listarContactos();
}

/**
 * salir: función que permite al usuario salir del programa. Muestra un mensaje de despedida y termina la ejecución del programa.
 */
function salir() {
    console.log("Saliendo del programa...");
    process.exit(0);
}

/**
 * Función principal del programa, se encarga de mostrar el menú y llamar a las funciones correspondientes según la opción seleccionada por el usuario.
 */
function main() {
    cargarContactos();
    menu();
    // creamos una variable para guardar la opción seleccionada por el usuario
    let opcion = 5;

    // utilizamos un switch para llamar a la función correspondiente según la opción seleccionada por el usuario
    switch (opcion) {
        case 1:
            agregarContacto();
            break;
        case 2:
            listarContactos();
            break;
        case 3:
            buscarContacto();
            break;
        case 4:
            eliminarContacto();
            break;
        case 5:
            actualizarContacto();
            break;
        case 6:
            salir();
            break;
        default:
            console.log("Opción no válida");
    }
}

main();