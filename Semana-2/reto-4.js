/*
 * Semana 2
 * Calcular el área de un círculo.
 */

let area = 0, r = 0;
const pi = Math.PI;

r = Number(prompt("Ingrese el radio del circulo"));

area = pi * Math.pow(r, 2);

alert("El area es " + area);
console.log("El area es " + area);