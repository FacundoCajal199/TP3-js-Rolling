/*3- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)*/

function calcularPerimetroRectangulo(a, b) {
    let perimetro = 2 * (a + b);
    return perimetro;
  }
  
  let ladoA = parseFloat(prompt("Ingrese el valor del lado A(altura) del rectángulo:"));
  let ladoB = parseFloat(prompt("Ingrese el valor del lado B(base) del rectángulo:"));
  
  let perimetro = calcularPerimetroRectangulo(ladoA, ladoB);
  
  document.write(`<h2>El perímetro del rectángulo es</h2> ${perimetro}.`);