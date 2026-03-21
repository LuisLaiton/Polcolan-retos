/*
 * Semana 4
 * 
 * Un estudiante desea organizar su agenda de contactos en el celular. 
 * Cada contacto se debe guardar como un objeto con los atributos: 
 * nombre, número de teléfono y correo electrónico. El programa debe 
 * almacenar varios contactos en un arreglo, recorrerlos con un bucle 
 * y mostrar solo aquellos que tengan correo electrónico con dominio @gmail.com.
 */

function ejecutarReto() {
    const contactos = [];
    let menu = 0, mensaje = "Nombre\t\tTeléfono\t\tCorreo Electrónico\n";
    do {
        alert("Ingrese los datos del contacto:");
        const nombre = prompt("Nombre:");
        const telefono = prompt("Número de teléfono:");
        const correo = prompt("Correo electrónico:");
        contactos.push({ nombre, telefono, correo });

        menu = Number(prompt("¿Desea agregar otro contacto? (1: Sí, 0: No)"));
    } while (menu != 0);

    for (const element of contactos) {
        if (element.correo.includes("@gmail.com")) {
            console.log(element);
            mensaje += element.nombre + "\t\t" + element.telefono + "\t\t" + element.correo + "\n";
        }
    }

    alert(mensaje);
}

ejecutarReto();