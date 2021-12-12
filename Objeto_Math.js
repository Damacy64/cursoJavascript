/* 
el objeto Math ya viene predefinido en el lenguaje
utiliza la nomenclatura del punto
es un objeto estatico
quiere decir que tenemos que usar su nombre para usarlo
ya tiene dos constantes
Math.E Math.pi

Metodos
Math.abs(x) Devuelve el elvalor absoluto de x
Math.ceil(x) Devuelve el entero mas grande mayor o igual que un numero
Math.floor(x) Devuelve el entero mas pequeño menor o igual que un numero
Math.pow(x,y) Devuelve la potencia de x elevado a y
Math.random() Genera un numero pseudoariatorio entre 0 y 1
Math.round(x) Devuelve el valor de un numero redondeado al entero mas cercano
Math.sign(x) Devulve el signo de x, que indica si x es positivo, negativo o cero
Math.sqrt(x) Devuelve la raiz cuadrada de x
*/

console.log(Math.E);
console.log(Math.PI);

let num = 5;

console.log(Math.abs(num));
console.log(Math.ceil(num));
console.log(Math.floor(num));
console.log(Math.pow(num,3));
console.log(Math.random());
console.log(Math.round(num));
console.log(Math.sign(num)); //regresa -1 | 0 | 1
console.log(Math.sqrt(2));
