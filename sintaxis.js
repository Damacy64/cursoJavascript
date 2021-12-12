/* para declarar una variable se usa let,
 no se recomienda usar var para declarar una variable
 las variables se pueden, declarar,inicializar y modificar

 una constantente es un espacio en memoria para almacenar un dato
 que no queremos que cambie en la ejecucion
 y se utiliza const para declarar una constante
 */

 /* 
 Declarar una variable es
 let numero;
 inicializar una variable es darle un valor
 numero = 5;
 Se puede declarar e inicializar en una sola linea
 let numero = 5;
 para modificar el valor de una variable existente
 numero = 3
 Las constantes solo admiten la declaracion e inicializacion en la misma linea
 const pi = 3-14;
 */

 /* 
 Primitivos:
 numeros --> let numero = 5; no importa si es decimal o entero
 Strings (cadenas) --> let palabra = "hola";
    o let palabra = 'hola'; debe ser solo una de las dos
Boolean --> let respuesta = true;
    let respues = false;
Undefined
Null
Symbol
 */

let numero = -4;
let palabra = "hola mundo";
let respuesta = false;

const PI = 3.14;

numero = 54;

console.log(numero);
console.log(palabra);
console.log(respuesta);
console.log(PI);