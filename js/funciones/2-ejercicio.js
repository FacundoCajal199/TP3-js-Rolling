/*2- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.
*/
function mostrarInformacion(cadena) {
    if (cadena === cadena.toUpperCase()) {
      document.write("<h2>La cadena está formada solo por mayúsculas</h2>.");
    } else if (cadena === cadena.toLowerCase()) {
      document.write("<h2>La cadena está formada solo por minúsculas</h2>");
    } else {
      document.write("<h2>La cadena está formada por una mezcla de mayúsculas y minúsculas.</h2>");
    }
  }
  
  let cadena = prompt("Introduce una cadena de texto:");
  mostrarInformacion(cadena);

  //usamos una variable con texto
  // usamos esa variable y la comparamos con letras mayusculas si es exactammente igual lanza un mensaje
  //hacemos lo mismo abajo
  // y de lo contrario es una mescla
   