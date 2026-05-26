// FUNCIONES 

// Verificar primo
function esPrimo(n) {

    if (n < 2) {
        return false;
    }

    let divisores = 0;

    for (let i = 1; i <= n; i++) {

        if (n % i == 0) {
            divisores++;
        }

    }

    return divisores == 2;
}


// Fibonacci N
function fibonacci(n) {

    if (n == 1 || n == 2) {
        return 1;
    }

    let a = 1;
    let b = 1;
    let c;

    for (let i = 3; i <= n; i++) {

        c = a + b;
        a = b;
        b = c;

    }

    return b;
}



// EJERCICIO 1

function calcularMontaje() {

    let N = parseInt(document.getElementById("segundos-cine").value);

    if (isNaN(N) || N <= 0) {
        alert("Ingrese un número válido");
        return;
    }

    let suma = 0;
    let i = 1;

    // Buscar hasta superar N
    while (suma < N) {

        let fib = fibonacci(i);

        if (suma + fib > N) {
            break;
        }

        suma += fib;
        i++;

    }

    // Mostrar descendente como barras visuales
    let htmlBarras = "";
    let maxFib = fibonacci(i - 1); // el mayor para calcular % de barra

    for (let j = i - 1; j >= 1; j--) {

        let fib = fibonacci(j);
        let plano = (i - 1) - j + 1;
        let pct = Math.max(6, Math.round((fib / maxFib) * 100));
        // Oscurece progresivamente: plano 1 (largo) claro, último (1s) oscuro/intenso
        let prog = plano / (i - 1);
        let lum = Math.round(45 - prog * 12);

        htmlBarras += "<div style='display:flex;align-items:center;gap:12px;margin-bottom:8px;'>";
        htmlBarras += "<span style='font-family:var(--ff-mono);font-size:0.72rem;color:#888;width:54px;text-align:right;'>Plano " + plano + "</span>";
        htmlBarras += "<div style='flex:1;background:rgba(255,255,255,0.05);border-radius:4px;overflow:hidden;height:26px;'>";
        htmlBarras += "<div style='width:" + pct + "%;height:100%;background:hsl(16,68%," + lum + "%);display:flex;align-items:center;padding:0 10px;'>";
        htmlBarras += "<span style='font-family:var(--ff-mono);font-size:0.7rem;color:white;font-weight:500;white-space:nowrap;'>" + fib + "s</span>";
        htmlBarras += "</div></div>";
        htmlBarras += "<span style='font-family:var(--ff-mono);font-size:0.7rem;color:#666;width:30px;'>" + fib + "s</span>";
        htmlBarras += "</div>";

    }

    document.getElementById("resultado-cine").style.display = "block";
    document.getElementById("resultado-cine").innerHTML =
        "<div style='margin-bottom:14px;'>" +
        "<span style='font-family:var(--ff-mono);font-size:0.72rem;letter-spacing:2px;text-transform:uppercase;color:var(--dorado);'>Secuencia de montaje · " + (i - 1) + " planos · " + suma + "s total</span>" +
        "</div>" +
        htmlBarras +
        "<div style='margin-top:16px;padding:14px 18px;background:rgba(201,168,76,0.06);border-left:3px solid var(--terracota);border-radius:6px;font-size:0.85rem;color:#b0a898;line-height:1.6;'>" +
        "<strong style='color:var(--papel);'>Interpretación:</strong> Los planos van de más largo a más corto siguiendo Fibonacci. " +
        "El último plano dura " + fibonacci(1) + "s — el momento de máximo impacto. " +
        "Tu fragmento de " + N + "s tiene una aceleración matemáticamente perfecta." +
        "</div>";
}



// EJERCICIO 2

function calcularSpawn() {

    let duracion = parseInt(document.getElementById("segundos-juego").value);

    if (isNaN(duracion) || duracion <= 0) {
        alert("Ingrese un número válido");
        return;
    }

    let totalEnemigos = 0;
    let htmlLinea = "";

    for (let segundo = 1; segundo <= duracion; segundo++) {

        if (esPrimo(segundo)) {

            totalEnemigos++;
            htmlLinea +=
                "<div style='display:flex;align-items:center;gap:10px;margin-bottom:6px;'>" +
                "<span style='font-family:var(--ff-mono);font-size:0.7rem;color:#888;width:48px;text-align:right;'>seg. " + segundo + "</span>" +
                "<div style='flex:1;background:rgba(30,45,64,0.5);border:1px solid rgba(91,158,201,0.3);border-radius:4px;padding:6px 12px;display:flex;align-items:center;gap:8px;'>" +
                "<span style='font-size:1rem;'>👾</span>" +
                "<span style='font-family:var(--ff-mono);font-size:0.78rem;color:#a8c8e8;font-weight:500;'>¡ENEMIGO!</span>" +
                "</div>" +
                "</div>";

        } else {

            htmlLinea +=
                "<div style='display:flex;align-items:center;gap:10px;margin-bottom:6px;'>" +
                "<span style='font-family:var(--ff-mono);font-size:0.7rem;color:#555;width:48px;text-align:right;'>seg. " + segundo + "</span>" +
                "<div style='flex:1;background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.05);border-radius:4px;padding:6px 12px;'>" +
                "<span style='font-family:var(--ff-mono);font-size:0.72rem;color:#444;'>— calma</span>" +
                "</div>" +
                "</div>";

        }

    }

    document.getElementById("resultado-juego").style.display = "block";
    document.getElementById("resultado-juego").innerHTML =
        "<div style='margin-bottom:14px;'>" +
        "<span style='font-family:var(--ff-mono);font-size:0.72rem;letter-spacing:2px;text-transform:uppercase;color:var(--dorado);'>" +
        totalEnemigos + " enemigos en " + duracion + " segundos</span>" +
        "</div>" +
        htmlLinea +
        "<div style='margin-top:16px;padding:14px 18px;background:rgba(201,168,76,0.06);border-left:3px solid var(--azul-noche);border-radius:6px;font-size:0.85rem;color:#b0a898;line-height:1.6;'>" +
        "<strong style='color:var(--papel);'>Interpretación:</strong> En " + duracion + " segundos aparecen " + totalEnemigos + " enemigos, " +
        "siempre en segundos primos. El jugador no puede predecir el patrón, pero el código lo controla exactamente." +
        "</div>";
}


// EJERCICIO 3


function calcularPixelArt() {

    let secciones = parseInt(document.getElementById("secciones-arte").value);

    if (isNaN(secciones) || secciones <= 0) {
        alert("Ingrese un número válido");
        return;
    }

    let especiales = 0;
    let htmlBloques = "<div style='display:flex;flex-wrap:wrap;gap:6px;padding:20px;background:#111;border-radius:10px;margin-bottom:16px;'>";
    let htmlTexto = "";

    for (let i = 1; i <= secciones; i++) {

        let anchoBloque = fibonacci(i);

        if (esPrimo(anchoBloque)) {

            especiales++;
            htmlBloques +=
                "<div style='display:flex;flex-direction:column;align-items:center;gap:3px;" +
                "padding:10px 14px;background:var(--verde-sage);color:white;" +
                "border-radius:6px;min-width:54px;text-align:center;font-family:var(--ff-mono);'>" +
                "<span style='font-size:0.6rem;opacity:0.7;'>s." + i + "</span>" +
                "<span style='font-size:1rem;font-weight:600;'>" + anchoBloque + "</span>" +
                "<span style='font-size:0.75rem;'>🧱</span>" +
                "</div>";

            htmlTexto += "Sección " + i + " (ancho: " + anchoBloque + " bloques): ESPECIAL 🧱<br>";

        } else {

            htmlBloques +=
                "<div style='display:flex;flex-direction:column;align-items:center;gap:3px;" +
                "padding:10px 14px;background:#2a2a2a;color:#555;border:1px solid #333;" +
                "border-radius:6px;min-width:54px;text-align:center;font-family:var(--ff-mono);'>" +
                "<span style='font-size:0.6rem;'>s." + i + "</span>" +
                "<span style='font-size:1rem;font-weight:600;'>" + anchoBloque + "</span>" +
                "<span style='font-size:0.75rem;'>🟦</span>" +
                "</div>";

            htmlTexto += "Sección " + i + " (ancho: " + anchoBloque + " bloques): liso 🟦<br>";

        }

    }

    htmlBloques += "</div>";

    document.getElementById("resultado-arte").style.display = "block";
    document.getElementById("resultado-arte").innerHTML =
        "<div style='margin-bottom:14px;'>" +
        "<span style='font-family:var(--ff-mono);font-size:0.72rem;letter-spacing:2px;text-transform:uppercase;color:var(--dorado);'>" +
        especiales + " bloques especiales · " + (secciones - especiales) + " lisos</span>" +
        "</div>" +
        htmlBloques +
        "<div style='font-family:var(--ff-mono);font-size:0.78rem;color:#888;line-height:2;margin-bottom:16px;'>" + htmlTexto + "</div>" +
        "<div style='padding:14px 18px;background:rgba(201,168,76,0.06);border-left:3px solid var(--verde-sage);border-radius:6px;font-size:0.85rem;color:#b0a898;line-height:1.6;'>" +
        "<strong style='color:var(--papel);'>Interpretación:</strong> Los bloques especiales (🧱) aparecen donde el ancho Fibonacci también es primo. " +
        "Su distribución es esporádica e impredecible, imitando el desgaste natural de la piedra o madera." +
        "</div>";
}