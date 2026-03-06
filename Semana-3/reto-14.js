/*
 * Semana 3
 * 
 * En una clase, un estudiante tiene varias calificaciones 
 * de 0 a 5. Se desea guardar las notas en un arreglo, 
 * recorrerlo con un bucle, calcular el promedio y mostrar 
 * si aprueba o no la materia (aprueba con nota mayor o igual a 3.0). 
 * El programa debe declarar variables para las notas, procesarlas 
 * con un bucle y usar una condición para dar el resultado final.
 */

function ejecutarReto() {
    const notas = [];
    let salir = false, i = 0, promedio = 0;

    do {
        notas[i] = Number(prompt("Ingrese una nota para almacenar\n\nPara salir escriba (-1)"));

        if (notas[i] < 0) {
            notas.pop();
            salir = true;
        } else if(notas[i] <= 5 && notas[i] >= 0) {
            promedio += notas[i];
            i++;
        } else {
            alert("La nota no esta dentro de los parametros (0 - 5)");
            i--;
        }
    } while (!salir);

    promedio /= notas.length;

    console.log(`Notas:\t\t[${notas}]\nPromedio:\t${promedio}\n\n${(promedio > 3) ? "APRUEBA": "NO APRUEBA"}`);
    alert(`Notas:\t\t[${notas}]\nPromedio:\t${promedio}\n\n${(promedio > 3) ? "APRUEBA": "NO APRUEBA"}`);
}

ejecutarReto();