/*
 * Semana 3
 * 
 * Crear un array con 5 posiciones y crear una función 
 * que rellene el array o arreglo con los múltiplos de 
 * un número pedido por teclado, por ejemplo, elije un 3 
 * en la función, el array contendrá 3, 6, 9, 12, 15. 
 * Mostrarlos por pantalla usando otra función distinta.
 */

function ejecutarReto() {
    const array = new Array(5);
    let multiplo = Number(prompt("Ingrese el numero base"));

    for (let i = 0; i < array.length; i++) {
        array[i] = multiplo * (i + 1);
    }

    console.log(`[${array}]`);
    alert(`[${array}]`);
}

ejecutarReto();