/*
 * Semana 2
 * Se quiere realizar un programa que lea por teclado las 5 notas 
 * obtenidas por un alumno (comprendidas entre 0 y 5). A continuación 
 * debe mostrar todas las notas y promedio.
 */

function ejecutarReto() {
    let notas = [], promedio = 0;

    for (let i = 0; i < 5; i++) {
        notas[i] = Number(prompt(`Ingrese la nota ${i + 1}`));
        if (notas[i] <= 5 && notas[i] >= 0) {
            promedio += notas[i];
        } else {
            console.log("La nota no esta dentro de los parametros (0 - 5)");
            alert("La nota no esta dentro de los parametros (0 - 5)");
            i--;
        }
    }
    promedio /= 5;
    
    console.log(`Las notas son:\t${notas}\nPromedio:\t\t${promedio}`);
    alert(`Las notas son:\t${notas}\nPromedio:\t\t${promedio}`);
}

ejecutarReto();