/*
 * Semana 3
 * 
 * Un organizador de eventos culturales necesita verificar 
 * si las personas pueden entrar a un concierto. 
 * Cada asistente registra su nombre y edad. Si es 
 * mayor o igual a 18 años, se le da acceso, de lo contrario 
 * se le rechaza. Cree una función que reciba los datos, use 
 * condicionales para validar la edad y muestre un mensaje en 
 * consola indicando si la persona puede ingresar, el proceso 
 * debe realizarse constantemente de forma indefinida.
 */

function ejecutarReto() {
    let salir = false, nombre = "", edad = 0;

    while (!salir) {
        nombre = prompt("Ingrese su nombre\nPara salir ingrese 0");

        if (nombre != '0') {
            edad = Number(prompt("Ingrese su edad"));
            if (edad >= 18) {
                console.log("Acceso concedido");
                alert("Acceso concedido");
            } else {
                console.log("Acceso denegado");
                alert("Acceso denegado");
            }
        } else {
            salir = true;
        }
    }
}

ejecutarReto();