let num = 0, suma = 0;
for (let i = 0; i < 10; i++) {
    num = Number(prompt("Ingrese el valor del campo " + (i + 1)));
    suma += num;
}

console.log("La suma es: " + suma);
alert("La suma es: " + suma);