/*
 * Semana 4
 * 
 * Una estación meteorológica desea analizar las temperaturas registradas durante varios días. 
 * El sistema debe permitir ingresar 14 temperaturas correspondientes a dos semanas de registro. 
 * El programa debe almacenar las temperaturas en un arreglo y luego:
 *  - Mostrar todas las temperaturas registradas.
 *  - Calcular la temperatura promedio.
 *  - Indicar cuál fue la temperatura más alta.
 *  - Indicar cuál fue la temperatura más baja.
 *  - Mostrar cuántos días la temperatura fue mayor a 30 grados.
 */


function ejecutarReto() {
    const temperaturas = new Array(14);
    let mensaje = "Las temperaturas registradas fueron:\n", promedio = 0, tempAlta = 0;

    for (let i = 0; i < temperaturas.length; i++) {
        temperaturas[i] = Number(prompt(`Ingrese la temperatura de la semana ${i+1} (°C): `));
        mensaje += `Día ${i + 1}\t\t${temperaturas[i]}°C\n`;
        promedio += temperaturas[i];
        
        if (temperaturas[i] > 30) tempAlta++;
    }

    promedio /= temperaturas.length;

    mensaje += `\nTemperatura promedio:\t${promedio}°C\nTemperatura mas alta:\t${Math.max(...temperaturas)}°C\nTemperatura mas baja:\t${Math.min(...temperaturas)}°C\n\n${tempAlta} días se superaron los 30°C`;

    alert(mensaje)
}

ejecutarReto();