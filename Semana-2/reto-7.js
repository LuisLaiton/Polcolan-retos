/*
 * Semana 2
 * Adivinar un número, el programa genera un número aleatorio del 1 al 100, 
 * el usuario debe ingresar números y va validando por cada número si es mayor 
 * o menor al número que se debe adivinar, el programa debe permitir máximo 10 
 * intentos y terminará al momento de hallar el número a adivinar con un mensaje 
 * de éxito y si se ingresan los 10 números máximos debe mostrar el número 
 * seleccionado por el sistema.
 */

function ejecutarReto() {
    const aleatorio = Math.floor(Math.random() * (100 - 1) + 1);
    let numUsuario = 0, limite = 10, mensaje = `El numero es ${aleatorio}`;
    do {
        numUsuario = Number(prompt("Ingrese un numero entre 1 y 100"));
        if (numUsuario < aleatorio) {
            console.log("El numero ingresado es menor al objetivo");
            alert("El numero ingresado es menor al objetivo");
        } else if(numUsuario > aleatorio){
            console.log("El numero ingresado es mayor al objetivo");
            alert("El numero ingresado es mayor al objetivo");
        }
        limite--;
    } while (numUsuario != aleatorio && limite > 0);

    if (limite > 0) mensaje = "Exito!!!\n" + mensaje;
    console.log(mensaje);
    alert(mensaje);
}

ejecutarReto();