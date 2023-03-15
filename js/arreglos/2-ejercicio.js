/*Dificultad: 2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.*/

let ciudades = [];

// Pedir al usuario que ingrese ciudades y almacenarlas en un arreglo
let ciudad = prompt("Ingrese el nombre de una ciudad ( presione cancelar para finalizar):");
while (ciudad !== null) {
  ciudades.push(ciudad);
  ciudad = prompt("Ingrese el nombre de una ciudad ( presione cancelar para finalizar):");
}
//mostrar a paris en ultima posicion
ciudades.push('París');

// Mostrar el arreglo generado
document.write(`Las ciudades ingresadas son: ${ciudades}`);


// Mostrar la longitud del arreglo
document.write("<br>La longitud del arreglo es:", ciudades.length);

// Mostrar en el documento web los ítems de las posiciones primera, tercera y última
document.write("<p>El primer elemento es: " + ciudades[0] + "</p>");
document.write("<p>El tercer elemento es: " + ciudades[2] + "</p>");
document.write("<p>El último elemento es: " + ciudades[ciudades.length - 1] + "</p>");

// Escribir por pantalla el elemento que ocupa la segunda posición
document.write("<p>El elemento en la segunda posición es: " + ciudades[1] + "</p>");

// Sustituir el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'
ciudades[1] = "Barcelona";

// Mostrar el arreglo modificado
document.write("Elemento sustituido de la 2 posicion es:", ciudades[1]);