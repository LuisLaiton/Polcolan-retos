/*
 * Semana 2
 * Crear un vector de 5 elementos string, inicialice el vector 
 * con datos leídos por el teclado. Copie los elementos del vector 
 * en otro vector, pero en orden inverso y muéstrelo por la pantalla
 */

function ejecutarReto() {
    const original = [], elementos = 5;
    let j = elementos - 1;

    for (let i = 0; i < elementos; i++) {
        original[i] = prompt(`Ingrese el elemento ${i + 1}`);
    }

    const inverso = original.slice();
    inverso.reverse();

    console.log(`Vector original:\t${original}\nVector invertido:\t${inverso}`);
    alert(`Vector original:\t${original}\nVector invertido:\t${inverso}`);

}

ejecutarReto();