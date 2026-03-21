/*
 * Semana 4
 * 
 * Una tienda desea analizar las ventas realizadas durante el día. 
 * El sistema debe permitir registrar el valor de 12 ventas realizadas. 
 * El programa debe almacenar los valores en un arreglo y luego:
 *  - Mostrar el valor total vendido en el día.
 *  - Mostrar el valor promedio de las ventas.
 *  - Indicar cuál fue la venta más alta.
 *  - Indicar cuál fue la temperatura más baja.
 *  - Indicar cuántas ventas fueron superiores a $50.000.
 */


function ejecutarReto() {
    const ventas = new Array(12);
    let mensaje = "Las ventas registradas fueron:\n", promedio = 0, ventaAlta = 0;

    for (let i = 0; i < ventas.length; i++) {
        ventas[i] = Number(prompt(`Ingrese el valor de la venta #${i+1}: `));
        mensaje += `Venta ${i + 1}\t\t$${ventas[i]}\n`;
        promedio += ventas[i];
        
        if (ventas[i] > 50000) ventaAlta++;
    }

    promedio /= ventas.length;
    
    mensaje += `\nValor promedio de venta:\t$${promedio}\nVenta mas alta:\t\t\t$${Math.max(...ventas)}\nVenta mas baja:\t\t\t$${Math.min(...ventas)}\n\n${ventaAlta} ventas superaron los $50.000`;

    alert(mensaje)
}

ejecutarReto();