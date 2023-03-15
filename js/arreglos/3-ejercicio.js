/*3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.*/



// Creamos un array para almacenar la cantidad de veces que aparece cada suma
const resultados = [];

// Inicializamos el array con valores de 0
for (let i = 0; i < 11; i++) {
  resultados[i] = 0;
}

// Repetimos el proceso 50 veces
for (let i = 0; i < 50; i++) {
  // Obtenemos un número aleatorio entre 1 y 6 para cada dado
  const dado1 = Math.floor(Math.random() * 6) + 1;
  const dado2 = Math.floor(Math.random() * 6) + 1;

  // Sumamos los valores obtenidos y almacenamos el resultado en el array de resultados
  const suma = dado1 + dado2;
  resultados[suma - 2]++;
}

// Creamos una tabla para mostrar los resultados
document.write("<table>");
document.write("<tr><th>Suma de dados</th><th>Cantidad de repeticiones</th></tr>");
for (let i = 0; i < resultados.length; i++) {
  const suma = i + 2;
  const repeticiones = resultados[i];
  document.write(`<tr><td>${suma}</td><td>${repeticiones}</td></tr>`);
}
document.write("</table>");