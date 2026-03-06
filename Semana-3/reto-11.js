/*
 * Semana 3
 * 
 * Crear un arreglo unidimensional con un tamaño de 5, asignar 
 * los valores numéricos manualmente (los que quiera) y mostrarlos 
 * por pantalla.
 */

function ejecutarReto() {
    const array = new Array(5);

    for (let i = 0; i < array.length; i++) {
        array[i] = Number(prompt("Ingrese un numero"));
    }

    console.log(`[${array}]`);
    alert(`[${array}]`);
}

ejecutarReto();