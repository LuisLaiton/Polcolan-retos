/*
 * Semana 4
 * 
 * En un evento comunitario se registran las edades de los asistentes para analizar 
 * la participación de diferentes grupos de edad. El programa debe solicitar 15 edades 
 * y almacenarlas en un arreglo. Luego debe:
 *  - Mostrar todas las edades registradas.
 *  - Contar cuántas personas son menores de edad.
 *  - Contar cuántas personas son mayores de edad.
 *  - Indicar cuántas personas tienen más de 60 años.
 */


function ejecutarReto() {
    const edades = new Array(15);
    let mensaje = "Las edades registradas fueron:\n", promedio = 0, edadAlta = 0;

    for (let i = 0; i < edades.length; i++) {
        edades[i] = Number(prompt(`Ingrese la edad del asistente ${i+1}: `));
        mensaje += `Asistente ${i + 1}\t\t${edades[i]} años\n`;
        promedio += edades[i];
        
        if (edades[i] > 60) edadAlta++;
    }

    promedio /= edades.length;

    mensaje += `\nEdad promedio:\t${promedio} años\nEdad mas alta:\t${Math.max(...edades)} años\nEdad mas baja:\t${Math.min(...edades)} años\n\n${edadAlta} asistentes superaron los 60 años`;

    alert(mensaje)
}

ejecutarReto();