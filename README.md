# Polcolan-retos

https://luislaiton.github.io/Polcolan-retos/

## Semana 1
1. Leer 10 números e imprimir la suma.
2. Leer 10 números e imprimir la suma de los pares e impares.
3. Ingresar 20 números y calcular el promedio de los números.

## Semana 2
4. Calcular el área de un círculo.
5. Calcular el área de un cuadrado.
6. Imprimir “Hola mundo” 500 veces
7. Adivinar un número, el programa genera un número aleatorio del 1 al 100, el usuario debe ingresar números y va validando por cada número si es mayor o menor al número que se debe adivinar, el programa debe permitir máximo 10 intentos y terminará al momento de hallar el número a adivinar con un mensaje de éxito y si se ingresan los 10 números máximos debe mostrar el número seleccionado por el sistema.
8. El programa debe pedir el número de elementos que se van a ingresar, después debe ingresar número por número y debe ir contando los números mayores a cero, números menores a cero e iguales a cero, debe mostrar cuántos números se ingresaron según las condiciones dadas.
9. Se quiere realizar un programa que lea por teclado las 5 notas obtenidas por un alumno (comprendidas entre 0 y 5). A continuación debe mostrar todas las notas y promedio.
10. Crear un vector de 5 elementos string, inicialice el vector con datos leídos por el teclado. Copie los elementos del vector en otro vector, pero en orden inverso y muéstrelo por la pantalla.
## Semana 3
11. Crear un arreglo unidimensional con un tamaño de 5, asignar los valores numéricos manualmente (los que quiera) y mostrarlos por pantalla.
12. Crear un array con 5 posiciones y crear una función que rellene el array o arreglo con los múltiplos de un número pedido por teclado, por ejemplo, elije un 3 en la función, el array contendrá 3, 6, 9, 12, 15. Mostrarlos por pantalla usando otra función distinta.
13. Un organizador de eventos culturales necesita verificar si las personas pueden entrar a un concierto. Cada asistente registra su nombre y edad. Si es mayor o igual a 18 años, se le da acceso, de lo contrario se le rechaza. Cree una función que reciba los datos, use condicionales para validar la edad y muestre un mensaje en consola indicando si la persona puede ingresar, el proceso debe realizarse constantemente de forma indefinida.
14. En una clase, un estudiante tiene varias calificaciones de 0 a 5. Se desea guardar las notas en un arreglo, recorrerlo con un bucle, calcular el promedio y mostrar si aprueba o no la materia (aprueba con nota mayor o igual a 3.0). El programa debe declarar variables para las notas, procesarlas con un bucle y usar una condición para dar el resultado final.
15. Un usuario quiere comprar productos en una tienda virtual. Cada producto tiene un nombre y un precio, que deben almacenarse en un objeto dentro de un arreglo de productos. El programa debe recorrer el carrito con un bucle, sumar los precios y mostrar el total a pagar. Como extra, si el total supera $100.000, aplique un 10% de descuento y muestre el valor final.

##Semana 5
21. Suma de números grandes: En una competencia, los jueces necesitan verificar rápidamente la suma de varios números muy grandes. Dado un número **N**, seguido de **N números enteros**, calcula la suma total. Los números pueden ser muy grandes (hasta 10¹⁵), por lo que se recomienda utilizar tipos de datos adecuados.
**Entrada**
La primera línea contiene un número entero:
N
Las siguientes **N líneas** contienen un número entero cada una.
**Salida**
Imprime la suma total de todos los números.
*Ejemplo*
**Entrada**
```
5
1000000000000
2000000000000
3000000000000
4000000000000
5000000000000
```
**Salida**
```
15000000000000
```
22. Contador de vocales: Dada una cadena de texto, determina cuántas **vocales** contiene. Se consideran vocales:
a, e, i, o, u  
A, E, I, O, U
**Entrada**
Una sola línea con una cadena de texto.
**Salida**
Imprime el número total de vocales en la cadena.
*Ejemplo*
**Entrada**
```
ProgramacionCompetitiva
```
**Salida**
```
10
```
23. Número invertido: Dado un número entero **N**, invierte el orden de sus dígitos. Si el número termina en ceros, estos no deben aparecer en el resultado.
**Entrada**
Una línea con un número entero.
**Salida**
Imprime el número con sus dígitos invertidos.
*Ejemplo 1*
**Entrada**
```
123456
```
**Salida**
```
654321
```
*Ejemplo 2*
**Entrada**
```
1200
```
**Salida**
```
21
```
24. El número más frecuente: Dada una lista de **N números enteros**, determina cuál es el número que aparece **más veces**. Si existe un empate entre varios números, imprime **el menor de ellos**.
**Entrada**
La primera línea contiene un número entero:
N
La segunda línea contiene **N números enteros** separados por espacio.
**Salida**
Imprime el número que aparece con mayor frecuencia.
*Ejemplo*
**Entrada**
```
8
1 3 2 3 4 1 3 2
```
**Salida**
```
3
```
25. FizzBuzz competitivo: Dado un número **N**, imprime los números del **1 al N** aplicando las siguientes reglas:
- Si el número es múltiplo de **3**, imprime `Fizz`
- Si el número es múltiplo de **5**, imprime `Buzz`
- Si es múltiplo de **3 y 5**, imprime `FizzBuzz`
- En cualquier otro caso, imprime el número
Cada resultado debe imprimirse en una línea diferente.
**Entrada**
Un número entero:
N
**Salida**
Imprime los valores del **1 al N** aplicando las reglas del problema.
*Ejemplo*
**Entrada**
```
15
```
**Salida**
```
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz

```