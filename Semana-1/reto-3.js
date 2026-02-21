let num = 0, suma = 0, promedio = 0, limite = 5;
for (let i = 0; i < limite; i++) {
    num = Number(prompt("Ingrese el valor del campo " + (i + 1)));
    suma += num;
}
promedio = suma / limite;

alert("El promedio es: " + promedio);
console.log("El promedio es: " + promedio);