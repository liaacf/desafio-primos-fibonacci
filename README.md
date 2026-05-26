# Matemáticas que resuelven problemas: Fibonacci y Números Primos en la vida real

Proyecto web interactivo desarrollado con HTML, CSS y JavaScript que aplica la serie de Fibonacci y los números primos a tres problemas reales del cine, los videojuegos y el arte digital.

---

## Descripción del proyecto

La página permite al usuario ingresar datos mediante formularios y obtener resultados visuales en pantalla para tres ejercicios:

1. **Montaje Cinematográfico (Fibonacci)** — Dado un fragmento de video de N segundos, genera la secuencia de duraciones de planos en orden descendente usando Fibonacci, creando una aceleración de tensión matemáticamente perfecta.
2. **Spawn de Enemigos (Números Primos)** — Simula el paso del tiempo en un videojuego segundo a segundo. En cada segundo primo aparece un enemigo, creando un ritmo impredecible para el jugador pero controlado por código.
3. **Texturizado Orgánico (Fibonacci + Primos)** — Recorre N secciones de un lienzo de bloques. Calcula el ancho de cada sección con Fibonacci y coloca un bloque con textura especial si ese ancho también es primo, imitando el desgaste natural de materiales.

---

## Tecnologías utilizadas

| Tecnología | Uso |
|---|---|
| HTML | Estructura de la página |
| CSS | Diseño visual y responsivo |
| JavaScript | Lógica de Fibonacci, números primos y manejo de formularios |
| Git / GitHub | Control de versiones y repositorio |
| GitHub Pages | Publicación del sitio web |

---

## Estructura del proyecto

```
desafio-fibonacci-primos/
│
├── index.html
├── css/
│   └── estilos.css
├── js/
│   └── script.js
└── README.md
```

---

## Algoritmos implementados

### Verificación de número primo

Se cuentan los divisores del número con un bucle. Si tiene exactamente 2, es primo:

```javascript
function esPrimo(n) {
    if (n < 2) return false;
    let divisores = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i == 0) divisores++;
    }
    return divisores == 2;
}
```

### Serie de Fibonacci

Se usan solo tres variables para calcular el N-ésimo término:

```javascript
function fibonacci(n) {
    if (n == 1 || n == 2) return 1;
    let a = 1, b = 1, c;
    for (let i = 3; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return b;
}
```

---

## Restricciones cumplidas

- Toda interacción con el HTML se realiza mediante `document.getElementById()`
- Los datos se ingresan mediante formularios con `<label>` e `<input>`
- Los resultados se muestran directamente en la página con `innerHTML`, no en consola
- El diseño es responsivo para computadora, tablet y celular (`@media`)
- Los botones usan `type="button"` con `onclick` para evitar recarga de página
- Los algoritmos no usan arrays — solo variables simples y bucles `for` / `while`

---

## Enlaces

- **Repositorio Git:** `https://github.com/liaacf/desafio-primos-fibonacci`
- **Página publicada:** `https://liaacf.github.io/desafio-primos-fibonacci/`
