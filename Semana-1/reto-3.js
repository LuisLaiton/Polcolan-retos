let num = 0, suma = 0, promedio = 0;
for (let i = 0; i < 20; i++) {
    num = Number(prompt("Ingrese el valor del campo " + (i + 1)));
    suma += num;
}
promedio = suma / 20;

alert("el promedio es: ", promedio);