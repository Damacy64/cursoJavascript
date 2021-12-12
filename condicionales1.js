/* 
Flujo de un programa, va de arriba hacia abajo
se puede romper con un condicional o con un bucle
condicionales:
    simples
        if(condicion){
            condiciones
        }
    compuestos
        if(condicion){
            condiciones
        } else{
            codigo a ejecutar en caso contrario
        }
    multiples
    if(condicion){
        condiciones
    } else if(otra condicion){
        condiciones
    } else{
        codigo a ejecutar en caso contrario
    }
*/
let num1=0;
let num2=5;

if(num1 > 0 && num2 > 0){
    console.log(num1 + ' y ' + num2 + ' son mayores que 0');
}

if (num1 > 0 || num2 > 0) {
    console.log(num1 + ' o ' + num2 + ' son mayores que 0');
}