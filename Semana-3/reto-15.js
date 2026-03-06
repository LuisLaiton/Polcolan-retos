/*
 * Semana 3
 * 
 * Un usuario quiere comprar productos en una tienda virtual. 
 * Cada producto tiene un nombre y un precio, que deben almacenarse 
 * en un objeto dentro de un arreglo de productos. El programa debe 
 * recorrer el carrito con un bucle, sumar los precios y mostrar el 
 * total a pagar. Como extra, si el total supera $100.000, aplique 
 * un 10% de descuento y muestre el valor final.
 * */

function ejecutarReto() {
    const carrito = [];
    let menu = 0, cantidad = 0;

    do {
        menu = Number(prompt("1- Registar proucto\n0- Salir"));
        if (menu != 0) {
            carrito[cantidad].nombre = prompt("Nombre del proucto");
            carrito[cantidad].precio = Number(prompt("Precio del producto"));
        }
    } while (menu != 0);
}

ejecutarReto();