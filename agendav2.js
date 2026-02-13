const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(query) {
    return new Promise(resolve => rl.question(query, ans => resolve(ans)));
}

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
 * agregar contacto: función que permite al usuario agregar un nuevo contacto a la agenda.
 */
async function agregarContacto() {
    const rut = await askQuestion("Ingrese el RUT: ");
    const nombre = await askQuestion("Ingrese el nombre: ");
    const telefono = await askQuestion("Ingrese el teléfono: ");
    const correo = await askQuestion("Ingrese el correo: ");
    const sexo = (await askQuestion("¿Es hombre? (s/n): ")).toLowerCase() === 's';
    const age = parseInt(await askQuestion("Ingrese la edad: "));

    contactos.push({
        rut,
        nombre,
        telefono,
        correo,
        sexo,
        age
    }); 
    console.log("✓ Contacto agregado con éxito");
    console.log("============================\n");
}

/**
 * listar contactos: función que muestra todos los contactos almacenados en la agenda.
 */
function listarContactos() {
    if (contactos.length === 0) {
        console.log("No hay contactos registrados\n");
        return;
    }

    for (let contacto of contactos) {
        console.log("RUT:", contacto.rut);
        console.log("Nombre:", contacto.nombre);
        console.log("Teléfono:", contacto.telefono);
        console.log("Correo:", contacto.correo);
        console.log("Sexo:", contacto.sexo ? "Hombre" : "Mujer");
        console.log("Edad:", contacto.age);
        console.log("============================");
    }
    console.log();
}

/**
 * buscar contacto: función que permite al usuario buscar un contacto por su nombre.
 */
async function buscarContacto() {
    const nombre = await askQuestion("Ingrese el nombre a buscar: ");

    for (let contacto of contactos) {
        if (contacto.nombre.toLowerCase().includes(nombre.toLowerCase())) {
            console.log("✓ Contacto encontrado:");
            console.log("RUT:", contacto.rut);
            console.log("Nombre:", contacto.nombre);
            console.log("Teléfono:", contacto.telefono);
            console.log("Correo:", contacto.correo);
            console.log("Sexo:", contacto.sexo ? "Hombre" : "Mujer");
            console.log("Edad:", contacto.age);
            console.log("============================\n");
            return;
        }
    }
    console.log("✗ Contacto no encontrado\n");
}

/**
 * eliminar contacto: función que permite al usuario eliminar un contacto de la agenda.
 */
async function eliminarContacto() {
    const rut = await askQuestion("Ingrese el RUT del contacto a eliminar: ");

    let index = contactos.findIndex(contacto => contacto.rut === rut);

    if (index !== -1) {
        const contactoEliminado = contactos[index].nombre;
        contactos.splice(index, 1);
        console.log(`✓ Contacto "${contactoEliminado}" eliminado con éxito`);
    } else {
        console.log("✗ Contacto no encontrado");
    }
    console.log("============================\n");
}

/**
 * actualizar contacto: función que permite al usuario actualizar la información de un contacto.
 */
async function actualizarContacto() {
    const rut = await askQuestion("Ingrese el RUT del contacto a actualizar: ");
    let index = contactos.findIndex(contacto => contacto.rut === rut);

    if (index !== -1) {
        const nuevoNombre = await askQuestion("Nuevo nombre (Enter para no cambiar): ");
        const nuevoTelefono = await askQuestion("Nuevo teléfono (Enter para no cambiar): ");
        const nuevoCorreo = await askQuestion("Nuevo correo (Enter para no cambiar): ");

        if (nuevoNombre) contactos[index].nombre = nuevoNombre;
        if (nuevoTelefono) contactos[index].telefono = nuevoTelefono;
        if (nuevoCorreo) contactos[index].correo = nuevoCorreo;

        console.log("✓ Contacto actualizado con éxito");
        console.log("============================\n");
    } else {
        console.log("✗ Contacto no encontrado\n");
    }
}

/**
 * salir: función que permite al usuario salir del programa.
 */
function salir() {
    console.log("Hasta luego...");
    rl.close();
    process.exit(0);
}

/**
 * Función principal del programa con bucle continuo.
 */
async function main() {
    cargarContactos();

    let saliendo = false;

    while (!saliendo) {
        menu();
        let opcion = await askQuestion("Seleccione una opción: ");

        switch (opcion) {
            case "1":
                await agregarContacto();
                break;
            case "2":
                listarContactos();
                break;
            case "3":
                await buscarContacto();
                break;
            case "4":
                await eliminarContacto();
                break;
            case "5":
                await actualizarContacto();
                break;
            case "6":
                salir();
                saliendo = true;
                break;
            default:
                console.log("✗ Opción no válida\n");
        }
    }
}

main();