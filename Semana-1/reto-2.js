/*
 * Semana 1
 * Leer 10 números e imprimir la suma de los pares e impares.
 */

function ejecutarReto() {
    let num = 0, sumaPar = 0, sumaImpar = 0;
    for (let i = 0; i < 10; i++) {
        num = Number(prompt("Ingrese el valor del campo " + (i + 1)));
        if (num % 2 == 0) {
            sumaPar += num;
        } else {
            sumaImpar += num;
        }
    }

    alert("La suma PAR es: " + sumaPar + "\nLa suma IMPAR es: " + sumaImpar);
    console.log("La suma PAR es: " + sumaPar + "\nLa suma IMPAR es: " + sumaImpar);
}

ejecutarReto();