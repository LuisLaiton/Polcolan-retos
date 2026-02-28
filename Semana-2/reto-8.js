/*
 * Semana 2
 * El programa debe pedir el número de elementos que se van a ingresar, 
 * después debe ingresar número por número y debe ir contando los números 
 * mayores a cero, números menores a cero e iguales a cero, debe mostrar 
 * cuántos números se ingresaron según las condiciones dadas.
 */

function ejecutarReto() {
    const cantidad = Number(prompt("Ingrese la cantidad de elementos"));
    let numUsuario = 0, mayores = 0, menores = 0, iguales = 0;

    for (let i = 0; i < cantidad; i++) {
        numUsuario = Number(prompt("Ingrese un numero"));
        if (numUsuario > 0) {
            mayores++;
        } else if(numUsuario < 0){
            menores++;
        } else {
            iguales++;
        }
    }

    console.log(`Mayores a cero:\t${mayores}\nMenores a cero:\t${menores}\nIguales a cero:\t${iguales}`);
    alert(`Mayores a cero:\t${mayores}\nMenores a cero:\t${menores}\nIguales a cero:\t${iguales}`);
}

ejecutarReto();