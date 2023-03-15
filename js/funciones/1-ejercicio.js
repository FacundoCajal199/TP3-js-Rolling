/*1- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.
*/
function esPar(numero){
    if (numero % 2===0){
        return "<h2>El numero es par</h2>";
    }else{
        return "<h2>El numero es impar</h2>"
    }
}

let numero = parseInt(prompt ("Ingresa un numero entero:"));
if (numero){
    document.write(esPar(numero))
}
//puse un if para que al "cancelar" no se escriba nada por pantalla