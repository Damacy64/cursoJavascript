/* 
Metodo: son cosas que se pueden hacer con un objeto
Propiedades: son las caracteristicas del objeto
    la sintaxis es nombredel objeto.metodo o propiedad
                            cadena.metodo();
    propiedades
    lenght--> devuelve la longitud de la cadena

    todos los metodos devuelven una cadena nueva
    toUpperCase() --> Devuelve la cadena en mayuscula
    toLowerCase() --> Devuelve en minusculas la cadena
    indexOf(string) --> Devuelve la posicion del caracter, como parametro se le pasa el caracter
    replace(valor_a_buscar,valorNuevo) --> remplaza por otro caracter
    substring(inicio,fin) --> extrae un trozo de la cadena si no se le indica el fin, extarera desde
                            el inicio hasta el fin de toda la cadena
    slice(inicio,fin) -->funciona igual que el substring pero acepta valores negativos
    trim() --> elimina los espacios al inicio y al final de una cadena
    startsWith(valor,inicio) --> nos devuelve un valor booleano si empieza con ese caracter
                                el valor de inicio es opcional
    endsWith(valor,longitud) --> funciona como startsWith() longitud es opcional
    includes(valor, inicio) --> funciona igual que indexOf pero devuelve un booleano
                                el parametro inicio es opcional
    repeat(valor) --> repite el string el numero de veces que se le indique

    Template Strings
    console.log( `Hola ${nombre} ${apellido. tienes ${edad} años`)
    y no hay necesidad de salirse y concatenar de manera tradicional
*/
let cadena = "Hola mundo"

console.log(cadena.repeat(3));