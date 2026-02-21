let num = 0, suma = 0, promedio = 0;
for (let i = 0; i < 10; i++) {
    num = Number(prompt("Ingrese el valor del campo " + (i + 1)));
    suma += num;
}
promedio = suma / 10;

alert("El promedio es: " + promedio);