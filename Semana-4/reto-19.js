/*
 * Semana 4
 * 
 * En un curso se desea guardar en un arreglo los nombres de los 
 * estudiantes que asisten a clase. El programa debe preguntar por un nombre, 
 * verificar con un bucle y una condición si está en la lista, 
 * y mostrar un mensaje indicando si el estudiante asistió o no. 
 * Use funciones para encapsular la lógica de búsqueda y devolución del mensaje.
 */

function verificarAsistencia(estudiantes, nombre) {
    console.log(estudiantes, nombre)
    for (const estudiante of estudiantes) {
        console.log(estudiante == nombre);
        asiste = (estudiante == nombre) ? "Asistió a clase" : "No asistio a clase";
    }
    return asiste;
}

function ejecutarReto() {
    const estudiantes = ["Ana", "Luis", "Carlos", "María", "Jorge"];
    let nombre = "";
    
    nombre = prompt("Ingrese el nombre del estudiante a buscar\nPara salir ingrese 0");
    alert(verificarAsistencia(estudiantes, nombre));
    
}

ejecutarReto();