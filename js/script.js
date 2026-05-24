// Ej1

function calcularFibonacci() {

  let meses = parseInt(document.getElementById("meses-fib").value);

  if (isNaN(meses) || meses < 1) {
    alert("Por favor ingresa un número de meses válido.");
    return;
  }

  let a = 1;  
  let b = 1;  
  let c;      

  let total = 0;

  let html = "<table class='tabla-filas'>";
  html += "<tr><th>Mes</th><th>Ahorro (Bs.)</th><th>Acumulado (Bs.)</th></tr>";

  total += a;
  html += "<tr><td>1</td><td>" + a + "</td><td>" + total + "</td></tr>";

  if (meses >= 2) {
    total += b;
    html += "<tr><td>2</td><td>" + b + "</td><td>" + total + "</td></tr>";
  }

  for (let i = 3; i <= meses; i++) {
    c = a + b;   
    total += c;
    html += "<tr><td>" + i + "</td><td>" + c + "</td><td>" + total + "</td></tr>";
    a = b;       
    b = c;       
  }

  html += "</table>";

  document.getElementById("tabla-fib").innerHTML = html;
  document.getElementById("total-fib").textContent = "Total ahorrado: Bs. " + total;

  document.getElementById("resultado-fib").style.display = "block";
}


// Ej 2

function verificarPrimo() {

  let numero = parseInt(document.getElementById("numero-primo").value);

  if (isNaN(numero) || numero < 1) {
    alert("Por favor ingresa un número válido.");
    return;
  }

  let contador = 0;

  for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) {   
      contador++;
    }
  }

  let esPrimo = (contador === 2);

  let mensajeHTML = "";
  let detalle = "";

  if (esPrimo) {
    mensajeHTML = "<span class='badge-primo badge-si'>✔ " + numero + " es primo — clave segura</span>";
    detalle = "Solo tiene 2 divisores: 1 y " + numero + ". Esto lo hace difícil de factorizar.";
  } else {
    mensajeHTML = "<span class='badge-primo badge-no'>✘ " + numero + " no es primo — clave débil</span>";
    detalle = "Tiene " + contador + " divisores, por lo que puede factorizarse fácilmente.";
  }

  document.getElementById("mensaje-primo").innerHTML = mensajeHTML;
  document.getElementById("detalle-primo").textContent = detalle;

  document.getElementById("resultado-primo").style.display = "block";
}


// Ej3
function esPrimo(n) {
  if (n < 2) return false;
  let contador = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) contador++;
  }
  return contador === 2;
}

function calcularCombinado() {

  let terminos = parseInt(document.getElementById("terminos-comb").value);

  if (isNaN(terminos) || terminos < 1) {
    alert("Por favor ingresa una cantidad válida.");
    return;
  }

  let a = 1;
  let b = 1;
  let c;

  let primosFib = [];  
  let html = "<div class='burbujas'>";

  for (let i = 1; i <= terminos; i++) {

    let valor;

    if (i === 1) { valor = a; }
    else if (i === 2) { valor = b; }
    else {
      c = a + b;
      a = b;
      b = c;
      valor = c;
    }

    if (esPrimo(valor)) {
      html += "<span class='burbuja burbuja-primo'>" + valor + " ★</span>";
      primosFib.push(valor);
    } else {
      html += "<span class='burbuja burbuja-normal'>" + valor + "</span>";
    }
  }

  html += "</div>";

  document.getElementById("secuencia-comb").innerHTML = html;

  let resumen = "";
  if (primosFib.length === 0) {
    resumen = "Ningún número en esta secuencia es primo.";
  } else {
    resumen = "Fibonacci primos encontrados (" + primosFib.length + "): " + primosFib.join(", ");
  }

  document.getElementById("resumen-comb").textContent = resumen;

  // Mostramos la caja
  document.getElementById("resultado-comb").style.display = "block";
}